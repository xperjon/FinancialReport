
import * as http from 'request';
require('console.table');
import FinancialReport from './financialReport';

class Main {

    public static start() {        
        var options = {
            method: 'GET',
            url: 'https://annualreport-api-prod.jls-sto2.elastx.net/report-ws/api/v1/reports/53/incomestatement',
            headers: {
                'uuid': '2d03bf48-5459-4fe1-a88c-ec4022b5136d'
            }
        };
        http(options, (error, res, body) => {
            let fr = new FinancialReport(body); 
            console.table(fr.getReportTableRows());
        });
    }
}
Main.start();


