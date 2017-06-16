declare namespace FinancialReportModel {

    export interface IFinancialYear {
        endDate: string;
        startDate: string;
        year: number;
    }

    export interface IAccountList {
        accountId: number;
        formattedBalance: string;
        name: string;
        number: number;
        sru: number;
        year: number;
    }

    export interface IAmount {
        value: string;
        year: number;
    }

    export interface IReportRowListItem {
        accountList: IAccountList[];
        amounts: IAmount[];
        id: number;
        key: string;
        label: string;
        lineNumber: number;
        type: string;
    }

    export interface IFinancialReport {
        balanceSheetId: number;
        financialYears: IFinancialYear[];
        reportRowList: IReportRowListItem[];
        status: string;
    }

}

