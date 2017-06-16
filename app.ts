
import * as http from 'request';
import FinancialReport from './financialReport';


class Main {

    public static start() {
        var options = {
            method: 'GET',
            url: 'https://annualreport-api-prod.jls-sto2.elastx.net/report-ws/api/v1/reports/53/balancesheet',
            headers: {
                'uuid': 'f6071a80-4435-4bd3-9bd4-6ffbd7495b1f'
            }
        };
        http(options, (error, res, body) => {
            let fr = new FinancialReport(body);            
            fr.printRows();
        });
    }
}
Main.start();


