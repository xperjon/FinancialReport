
/// <reference path="financialReportModel.ts" />;
import IAmount = FinancialReportModel.IAmount;
import IFinancialReport = FinancialReportModel.IFinancialReport;
import IReportRowListItem = FinancialReportModel.IReportRowListItem;
import IFinancialYear = FinancialReportModel.IFinancialYear;

export default class FinancialReport {


    private report: IFinancialReport;
    private washedReportRows: IReportRowListItem[];

    constructor(modelStr: string) {
        this.report = JSON.parse(modelStr);
    }

    private shouldShowRow(row: IReportRowListItem): boolean {
        if (row.type == 'D') {
            return this.rowHasAmountOnAtLeastOneYear(row);
        }
        if (row.type.charAt(0) == 'S') {
            return this.getRowLevel(row) < 3 || this.rowHasAmountOnAtLeastOneYear(row);
        }
        if (row.type.charAt(0) == 'R') {
            //TODO here we need to check if the matching summary row is hidden,
            //then the header row (R) should also be hidden.
            if (row.type == 'RR1' || row.type == 'RB1') {
                return false;
            }
            return true;
        }
        //Hide all other rows
        return false;
    }
    private rowHasAmountOnAtLeastOneYear(row: IReportRowListItem): boolean {
        let years: number = row.amounts.length;
        if (years > 0) {
            let sum: number = row.amounts
                .map(a => {
                    //Fix for zero amount                
                    let amountOrZero: string = a.value == '0' ? '1' : a.value || '0';
                    //remove whitespaces
                    amountOrZero = amountOrZero.replace(/\s/g, '');
                    //convert to number
                    let amount: number = +amountOrZero;
                    //take abs
                    amount = Math.abs(amount);
                    return amount;
                })
                .reduce((a1, a2) => a1 + a2);
            return sum > 0;
        }
        return false;
    }
    /**
    * i == 0  => current year
    * i == 1 => previous year
    * and so on...
    */
    private getYearAmount(i: number, amounts: IAmount[]): IAmount {
        if (i > this.getNumberOfYears()) {
            return <IAmount>{};
        }
        let financialYear: IFinancialYear = this.getYear(i);
        let amount: IAmount[] = amounts.filter(amount => amount.year == financialYear.year);
        if (amount.length == 1) {
            return amount[0];
        }
        return <IAmount>{};
    }

    private getNumberOfYears(): number {
        return this.report.financialYears.length;
    }

    private getRowLevel(row: IReportRowListItem): number {
        if (row.type == 'D') {
            throw new TypeError('Rows of type D has same level as parent header row');
        }
        return +row.type.slice(2);
    }

    /**
     * i == 0  => current year
     * i == 1 => previous year
     * and so on...
     */
    private getYear(i: number): IFinancialYear {
        let years: IFinancialYear[] = this.report.financialYears;
        let sortedYears: IFinancialYear[] = years.sort((y1, y2) => y2.year - y1.year);
        return sortedYears[i];
    }

    private getAmounts(row: IReportRowListItem):string[] {
        let result:string[] = [];
        for(let i = 0; i < this.getNumberOfYears(); i++) {
            result.push(this.getYearAmount(i, row.amounts).value || '-');
        }
        return result;
    }

    public getReportTableRows(): IReportTableRow[] {
        return this.report.reportRowList.filter(r => this.shouldShowRow(r))
            .map((r: IReportRowListItem) => {
                if (r.type == 'D' || r.type.charAt(0) == 'S') {
                    return <IReportTableRow>{ id: '' + r.id, type: r.type, label: r.label, amounts: this.getAmounts(r) };
                } else {
                    return <IReportTableRow>{ id: '' + r.id, type: r.type, label: r.label, amounts: [] };
                }
            });
    }

}

/*
    Interface for displaying purposes
*/

export interface IReportTableRow {
    id: string,
    type: string,
    label: string,
    amounts: string[];
}
