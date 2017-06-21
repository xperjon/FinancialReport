import FinancialReport from './financialReport';
import IReportTableRow from './financialReport';
import { expect } from 'chai';
require('console.table');



describe('Balancesheet', () => {
    let f: FinancialReport = new FinancialReport(getBalanceSheetTestData());
    console.log('BALANCESHEET');
    console.table(f.getReportTableRows());
    it('should NOT contain row RB1', () => {
        expect(f.getReportTableRows().filter(r => r.type == 'RB1').length).to.equal(0);
    });
    it('should contain at least one row RB2', () => {
        expect(f.getReportTableRows().filter(r => r.type == 'RB2').length).above(0);
    });
    it('should conatin 2 financial years',()=>{
        expect(f.getNumberOfYears()).to.equal(2);
    });
    it('should contain correct financial years', () => {
        let year0 = f.getYear(0);
        expect(year0.year).to.equal(2016);
        expect(year0.startDate).to.equal('2015-07-01');
        expect(year0.endDate).to.equal('2016-06-30');
        let year1 = f.getYear(1);
        expect(year1.year).to.equal(2015);
        expect(year1.startDate).to.equal('2014-07-01');
        expect(year1.endDate).to.equal('2015-06-30');
    });    
});
describe('Incomestatement', () => {
    let f: FinancialReport = new FinancialReport(getIncomeStatementTestData());
    console.log('INCOMESTATEMENT');
    console.table(f.getReportTableRows());
    it('should NOT contain row RR1', () => {
        expect(f.getReportTableRows().filter(r => r.type == 'RR1').length).to.equal(0);
    });
    it('should NOT contain row Finansiella poster (key=R08)',()=>{
        expect(f.getReportTableRows().filter(r => r.key == 'R08').length).to.equal(0);
    });
    it('should NOT contain row Summa finansiella poster (key=R10)',()=>{
        expect(f.getReportTableRows().filter(r => r.key == 'R10').length).to.equal(0);
    });
    it('should conatin 2 financial years',()=>{
        expect(f.getNumberOfYears()).to.equal(2);
    });
    it('should contain correct financial years', () => {
        let year0 = f.getYear(0);
        expect(year0.year).to.equal(2016);
        expect(year0.startDate).to.equal('2015-07-01');
        expect(year0.endDate).to.equal('2016-06-30');
        let year1 = f.getYear(1);
        expect(year1.year).to.equal(2015);
        expect(year1.startDate).to.equal('2014-07-01');
        expect(year1.endDate).to.equal('2015-06-30');
    });
});

//Test data copy-pasted from Postman GET call
function getIncomeStatementTestData(): string {
    return JSON.stringify({
        "financialYears": [{
            "endDate": "2016-06-30",
            "startDate": "2015-07-01",
            "year": 2016
        },
        {
            "endDate": "2015-06-30",
            "startDate": "2014-07-01",
            "year": 2015
        }],
        "incomeStatementId": 57,
        "reportRowList": [{
            "accountList": [],
            "amounts": [],
            "id": 2689,
            "key": "R00",
            "label": "Resultaträkning",
            "lineNumber": 0,
            "type": "RR1"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2690,
            "key": "R01",
            "label": "Rörelseintäkter, lagerförändringar m.m.",
            "lineNumber": 1,
            "type": "RR3"
        },
        {
            "accountList": [{
                "accountId": 5837,
                "formattedBalance": "315 738,95",
                "name": "Försäljning inom Sverige, 25 % moms",
                "number": 3001,
                "sru": 7410,
                "year": 2016
            },
            {
                "accountId": 5838,
                "formattedBalance": "2 756,75",
                "name": "Försäljning My Lady",
                "number": 3010,
                "year": 2016
            },
            {
                "accountId": 5839,
                "formattedBalance": "1 692 971,69",
                "name": "Försäljning tillverkade produkter 25% moms",
                "number": 3011,
                "sru": 7410,
                "year": 2016
            },
            {
                "accountId": 5840,
                "name": "Försäljn varor 25% sv",
                "number": 3051,
                "sru": 400,
                "year": 2016
            },
            {
                "accountId": 5841,
                "formattedBalance": "8 695",
                "name": "Fakturerade frakter",
                "number": 3520,
                "sru": 7410,
                "year": 2016
            },
            {
                "accountId": 5842,
                "name": "Faktureringsavgifter",
                "number": 3540,
                "sru": 7410,
                "year": 2016
            },
            {
                "accountId": 5843,
                "name": "Lämnade kassarabatter",
                "number": 3731,
                "sru": 7410,
                "year": 2016
            },
            {
                "accountId": 5844,
                "formattedBalance": "14,82",
                "name": "Öres- och kronutjämning",
                "number": 3740,
                "sru": 7410,
                "year": 2016
            },
            {
                "accountId": 5947,
                "formattedBalance": "162 995,75",
                "name": "Försäljning inom Sverige, 25 % moms",
                "number": 3001,
                "sru": 7410,
                "year": 2015
            },
            {
                "accountId": 5948,
                "formattedBalance": "1 076 658,71",
                "name": "Försäljning My Lady",
                "number": 3010,
                "year": 2015
            },
            {
                "accountId": 5949,
                "formattedBalance": "645 050,04",
                "name": "Försäljning tillverkade produkter 25% moms",
                "number": 3011,
                "sru": 7410,
                "year": 2015
            },
            {
                "accountId": 5950,
                "formattedBalance": "189 991,49",
                "name": "Försäljn varor 25% sv",
                "number": 3051,
                "sru": 400,
                "year": 2015
            },
            {
                "accountId": 5951,
                "formattedBalance": "7 949",
                "name": "Fakturerade frakter",
                "number": 3520,
                "sru": 7410,
                "year": 2015
            },
            {
                "accountId": 5952,
                "formattedBalance": "71",
                "name": "Faktureringsavgifter",
                "number": 3540,
                "sru": 7410,
                "year": 2015
            },
            {
                "accountId": 5953,
                "formattedBalance": "-5 286,5",
                "name": "Lämnade kassarabatter",
                "number": 3731,
                "sru": 7410,
                "year": 2015
            },
            {
                "accountId": 5954,
                "formattedBalance": "-30,35",
                "name": "Öres- och kronutjämning",
                "number": 3740,
                "sru": 7410,
                "year": 2015
            }],
            "amounts": [{
                "value": "2 020 177",
                "year": 2016
            },
            {
                "value": "2 077 399",
                "year": 2015
            }],
            "id": 2691,
            "key": "R02-01",
            "label": "Nettoomsättning",
            "lineNumber": 2,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5856,
                "formattedBalance": "-134 063,84",
                "name": "Förändring av lager och pågående arbeten (ofördelad)",
                "number": 4990,
                "sru": 7411,
                "year": 2016
            },
            {
                "accountId": 5966,
                "formattedBalance": "-188 454",
                "name": "Förändring av lager och pågående arbeten (ofördelad)",
                "number": 4990,
                "sru": 7411,
                "year": 2015
            }],
            "amounts": [{
                "value": "-134 064",
                "year": 2016
            },
            {
                "value": "-188 454",
                "year": 2015
            }],
            "id": 2692,
            "key": "R02-02",
            "label": "Förändring av lager av produkter i arbete, färdiga varor och\n\t\t\tpågående arbete för annans räkning",
            "lineNumber": 3,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5845,
                "name": "Aktiverat arbete (material)",
                "number": 3840,
                "sru": 7412,
                "year": 2016
            },
            {
                "accountId": 5955,
                "formattedBalance": "-0,25",
                "name": "Aktiverat arbete (material)",
                "number": 3840,
                "sru": 7412,
                "year": 2015
            }],
            "amounts": [{
                "year": 2016
            },
            {
                "value": "0",
                "year": 2015
            }],
            "id": 2693,
            "key": "R02-03",
            "label": "Aktiverat arbete för egen räkning",
            "lineNumber": 4,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5846,
                "formattedBalance": "10 000",
                "name": "Frivilligt momspliktiga hyresintäkter",
                "number": 3913,
                "sru": 7413,
                "year": 2016
            },
            {
                "accountId": 5847,
                "formattedBalance": "491 905,33",
                "name": "Erhållna kommunala bidrag",
                "number": 3987,
                "sru": 7413,
                "year": 2016
            },
            {
                "accountId": 5848,
                "name": "Övriga ersättningar och intäkter",
                "number": 3990,
                "sru": 7413,
                "year": 2016
            },
            {
                "accountId": 5956,
                "name": "Frivilligt momspliktiga hyresintäkter",
                "number": 3913,
                "sru": 7413,
                "year": 2015
            },
            {
                "accountId": 5957,
                "formattedBalance": "380 639,01",
                "name": "Erhållna kommunala bidrag",
                "number": 3987,
                "sru": 7413,
                "year": 2015
            },
            {
                "accountId": 5958,
                "formattedBalance": "11 821,27",
                "name": "Övriga ersättningar och intäkter",
                "number": 3990,
                "sru": 7413,
                "year": 2015
            }],
            "amounts": [{
                "value": "501 905",
                "year": 2016
            },
            {
                "value": "392 460",
                "year": 2015
            }],
            "id": 2694,
            "key": "R02-04",
            "label": "Övriga rörelseintäkter",
            "lineNumber": 5,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [{
                "value": "2 388 018",
                "year": 2016
            },
            {
                "value": "2 281 405",
                "year": 2015
            }],
            "id": 2695,
            "key": "R03",
            "label": "Summa rörelseintäkter, lagerförändringar m.m.",
            "lineNumber": 6,
            "type": "SR3"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2696,
            "key": "R",
            "label": "MISSING_KEY",
            "lineNumber": 7,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2697,
            "key": "R04",
            "label": "Rörelsekostnader",
            "lineNumber": 8,
            "type": "RR3"
        },
        {
            "accountList": [{
                "accountId": 5849,
                "formattedBalance": "-671 142,65",
                "name": "Inköp av varor",
                "number": 4011,
                "sru": 7511,
                "year": 2016
            },
            {
                "accountId": 5850,
                "formattedBalance": "-56 734,2",
                "name": "Utgifter Krok.mac",
                "number": 4016,
                "year": 2016
            },
            {
                "accountId": 5851,
                "formattedBalance": "-21 498,4",
                "name": "Inköp VMB varor",
                "number": 4020,
                "sru": 500,
                "year": 2016
            },
            {
                "accountId": 5852,
                "formattedBalance": "-100 371,12",
                "name": "Inköp varor 25% EU",
                "number": 4056,
                "sru": 500,
                "year": 2016
            },
            {
                "accountId": 5853,
                "formattedBalance": "-82 936,72",
                "name": "Inköp av varor inom Eu My Lady",
                "number": 4059,
                "sru": 7511,
                "year": 2016
            },
            {
                "accountId": 5854,
                "formattedBalance": "-309 785,33",
                "name": "Inköp från annat EU-land",
                "number": 4500,
                "sru": 7511,
                "year": 2016
            },
            {
                "accountId": 5855,
                "formattedBalance": "-361,6",
                "name": "Fraktkostnad",
                "number": 4610,
                "year": 2016
            },
            {
                "accountId": 5959,
                "formattedBalance": "-365 017,72",
                "name": "Inköp av varor",
                "number": 4011,
                "sru": 7511,
                "year": 2015
            },
            {
                "accountId": 5960,
                "formattedBalance": "-35 919,94",
                "name": "Utgifter Krok.mac",
                "number": 4016,
                "year": 2015
            },
            {
                "accountId": 5961,
                "formattedBalance": "-360 538,73",
                "name": "Inköp VMB varor",
                "number": 4020,
                "sru": 500,
                "year": 2015
            },
            {
                "accountId": 5962,
                "formattedBalance": "-112 048,64",
                "name": "Inköp varor 25% EU",
                "number": 4056,
                "sru": 500,
                "year": 2015
            },
            {
                "accountId": 5963,
                "formattedBalance": "-202 417,6",
                "name": "Inköp av varor inom Eu My Lady",
                "number": 4059,
                "sru": 7511,
                "year": 2015
            },
            {
                "accountId": 5964,
                "formattedBalance": "-94 957,53",
                "name": "Inköp från annat EU-land",
                "number": 4500,
                "sru": 7511,
                "year": 2015
            },
            {
                "accountId": 5965,
                "formattedBalance": "-2 056,64",
                "name": "Fraktkostnad",
                "number": 4610,
                "year": 2015
            }],
            "amounts": [{
                "value": "-1 242 830",
                "year": 2016
            },
            {
                "value": "-1 172 957",
                "year": 2015
            }],
            "id": 2698,
            "key": "R05-01",
            "label": "Råvaror och förnödenheter",
            "lineNumber": 9,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2699,
            "key": "R05-02",
            "label": "Handelsvaror",
            "lineNumber": 10,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5857,
                "formattedBalance": "-169 346,4",
                "name": "Lokalhyra",
                "number": 5010,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5858,
                "formattedBalance": "-9 745,69",
                "name": "El för belysning",
                "number": 5020,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5859,
                "formattedBalance": "-1 768,8",
                "name": "Städning och renhållning",
                "number": 5060,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5860,
                "name": "Reparation och underhåll av lokaler",
                "number": 5070,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5861,
                "name": "Städning och renhållning",
                "number": 5160,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5862,
                "formattedBalance": "-2 648",
                "name": "Sophämtning",
                "number": 5162,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5863,
                "formattedBalance": "-13 207,28",
                "name": "Förbrukningsinventarier",
                "number": 5410,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5864,
                "formattedBalance": "-4 566,4",
                "name": "Programvaror",
                "number": 5420,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5865,
                "formattedBalance": "-1 367,38",
                "name": "Förbrukningsmaterial",
                "number": 5460,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5866,
                "formattedBalance": "-4 207",
                "name": "Reparation och underhåll (gruppkonto)",
                "number": 5500,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5867,
                "name": "Frakter och transporter (gruppkonto)",
                "number": 5700,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5868,
                "formattedBalance": "-29 568,74",
                "name": "Frakter, transporter och försäkringar vid varudistribution",
                "number": 5710,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5869,
                "formattedBalance": "-948,28",
                "name": "Resekostnader (gruppkonto)",
                "number": 5800,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5870,
                "formattedBalance": "-1 596",
                "name": "Reklam och PR (gruppkonto)",
                "number": 5900,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5871,
                "formattedBalance": "-17 462,4",
                "name": "Annonsering",
                "number": 5910,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5872,
                "name": "Webshop",
                "number": 5915,
                "year": 2016
            },
            {
                "accountId": 5873,
                "name": "Försäljningsprovisioner",
                "number": 6050,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5874,
                "formattedBalance": "-264,82",
                "name": "Representation, avdragsgill",
                "number": 6071,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5875,
                "formattedBalance": "-84,29",
                "name": "Representation, ej avdragsgill",
                "number": 6072,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5876,
                "formattedBalance": "-7 378,12",
                "name": "Övriga försäljningskostnader",
                "number": 6090,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5877,
                "formattedBalance": "-5 292,16",
                "name": "Kontorsmateriel",
                "number": 6110,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5878,
                "formattedBalance": "-13 874,4",
                "name": "Telekommunikation",
                "number": 6210,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5879,
                "formattedBalance": "-2 117,6",
                "name": "Fast telefoni",
                "number": 6211,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5880,
                "name": "Mobiltelefon",
                "number": 6212,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5881,
                "name": "Datakommunikation",
                "number": 6230,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5882,
                "name": "Postbefordran",
                "number": 6250,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5883,
                "formattedBalance": "-3 863,2",
                "name": "Företagsförsäkringar",
                "number": 6310,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5884,
                "formattedBalance": "-3 766,4",
                "name": "Kostnader för bevakning och larm",
                "number": 6370,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5885,
                "formattedBalance": "-4 966,52",
                "name": "IT-tjänster",
                "number": 6540,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5886,
                "name": "Konsultarvoden",
                "number": 6550,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5887,
                "formattedBalance": "-14 220,13",
                "name": "Bankkostnader",
                "number": 6570,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5888,
                "formattedBalance": "-5 300",
                "name": "Övriga externa tjänster",
                "number": 6590,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5889,
                "formattedBalance": "-50",
                "name": "Föreningsavgifter",
                "number": 6980,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5890,
                "formattedBalance": "-4 500",
                "name": "Föreningsavg avdr gill",
                "number": 6981,
                "sru": 530,
                "year": 2016
            },
            {
                "accountId": 5891,
                "formattedBalance": "-100",
                "name": "Föreningsavg ej avdr gill",
                "number": 6982,
                "sru": 530,
                "year": 2016
            },
            {
                "accountId": 5892,
                "name": "Övriga externa kostnader",
                "number": 6990,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5893,
                "formattedBalance": "-700",
                "name": "Övriga externa kostnader, avdragsgilla",
                "number": 6991,
                "sru": 7513,
                "year": 2016
            },
            {
                "accountId": 5967,
                "formattedBalance": "-182 011,2",
                "name": "Lokalhyra",
                "number": 5010,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5968,
                "formattedBalance": "-10 492,31",
                "name": "El för belysning",
                "number": 5020,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5969,
                "formattedBalance": "-1 022,8",
                "name": "Städning och renhållning",
                "number": 5060,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5970,
                "formattedBalance": "-13 402,4",
                "name": "Reparation och underhåll av lokaler",
                "number": 5070,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5971,
                "formattedBalance": "-509,68",
                "name": "Städning och renhållning",
                "number": 5160,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5972,
                "formattedBalance": "-2 490,73",
                "name": "Sophämtning",
                "number": 5162,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5973,
                "formattedBalance": "-11 992,6",
                "name": "Förbrukningsinventarier",
                "number": 5410,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5974,
                "formattedBalance": "-2 330,46",
                "name": "Programvaror",
                "number": 5420,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5975,
                "formattedBalance": "-8 767,94",
                "name": "Förbrukningsmaterial",
                "number": 5460,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5976,
                "formattedBalance": "-860",
                "name": "Reparation och underhåll (gruppkonto)",
                "number": 5500,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5977,
                "formattedBalance": "-56",
                "name": "Frakter och transporter (gruppkonto)",
                "number": 5700,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5978,
                "formattedBalance": "-32 263,49",
                "name": "Frakter, transporter och försäkringar vid varudistribution",
                "number": 5710,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5979,
                "formattedBalance": "-4 382,93",
                "name": "Resekostnader (gruppkonto)",
                "number": 5800,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5980,
                "name": "Reklam och PR (gruppkonto)",
                "number": 5900,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5981,
                "formattedBalance": "-23 067,83",
                "name": "Annonsering",
                "number": 5910,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5982,
                "formattedBalance": "-4 424,75",
                "name": "Webshop",
                "number": 5915,
                "year": 2015
            },
            {
                "accountId": 5983,
                "formattedBalance": "-2 015",
                "name": "Försäljningsprovisioner",
                "number": 6050,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5984,
                "formattedBalance": "-4 340,18",
                "name": "Representation, avdragsgill",
                "number": 6071,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5985,
                "formattedBalance": "-2 587,04",
                "name": "Representation, ej avdragsgill",
                "number": 6072,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5986,
                "formattedBalance": "-4 589,23",
                "name": "Övriga försäljningskostnader",
                "number": 6090,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5987,
                "formattedBalance": "-6 402,32",
                "name": "Kontorsmateriel",
                "number": 6110,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5988,
                "formattedBalance": "-6 292,88",
                "name": "Telekommunikation",
                "number": 6210,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5989,
                "formattedBalance": "-3 169,46",
                "name": "Fast telefoni",
                "number": 6211,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5990,
                "formattedBalance": "-3 344,67",
                "name": "Mobiltelefon",
                "number": 6212,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5991,
                "formattedBalance": "-238,2",
                "name": "Datakommunikation",
                "number": 6230,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5992,
                "formattedBalance": "-1 512,8",
                "name": "Postbefordran",
                "number": 6250,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5993,
                "formattedBalance": "-4 754",
                "name": "Företagsförsäkringar",
                "number": 6310,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5994,
                "formattedBalance": "-5 990,93",
                "name": "Kostnader för bevakning och larm",
                "number": 6370,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5995,
                "formattedBalance": "-4 543",
                "name": "IT-tjänster",
                "number": 6540,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5996,
                "formattedBalance": "-34 690,5",
                "name": "Konsultarvoden",
                "number": 6550,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5997,
                "formattedBalance": "-19 155,03",
                "name": "Bankkostnader",
                "number": 6570,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5998,
                "name": "Övriga externa tjänster",
                "number": 6590,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 5999,
                "name": "Föreningsavgifter",
                "number": 6980,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 6000,
                "formattedBalance": "-7 200",
                "name": "Föreningsavg avdr gill",
                "number": 6981,
                "sru": 530,
                "year": 2015
            },
            {
                "accountId": 6001,
                "formattedBalance": "-100",
                "name": "Föreningsavg ej avdr gill",
                "number": 6982,
                "sru": 530,
                "year": 2015
            },
            {
                "accountId": 6002,
                "formattedBalance": "-1 800",
                "name": "Övriga externa kostnader",
                "number": 6990,
                "sru": 7513,
                "year": 2015
            },
            {
                "accountId": 6003,
                "formattedBalance": "-700",
                "name": "Övriga externa kostnader, avdragsgilla",
                "number": 6991,
                "sru": 7513,
                "year": 2015
            }],
            "amounts": [{
                "value": "-322 910",
                "year": 2016
            },
            {
                "value": "-411 500",
                "year": 2015
            }],
            "id": 2700,
            "key": "R05-03",
            "label": "Övriga externa kostnader",
            "lineNumber": 11,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5894,
                "formattedBalance": "-432 503",
                "name": "Löner till kollektivanställda",
                "number": 7010,
                "sru": 7514,
                "year": 2016
            },
            {
                "accountId": 5895,
                "formattedBalance": "-51 565",
                "name": "Semesterlöner till kollektivanställda",
                "number": 7082,
                "sru": 7514,
                "year": 2016
            },
            {
                "accountId": 5896,
                "formattedBalance": "-4 059",
                "name": "Skattefria traktamenten, Sverige",
                "number": 7321,
                "sru": 7514,
                "year": 2016
            },
            {
                "accountId": 5897,
                "formattedBalance": "-19 634",
                "name": "Skattefria bilersättningar",
                "number": 7331,
                "sru": 7514,
                "year": 2016
            },
            {
                "accountId": 5898,
                "name": "Skattepliktiga bilersättningar",
                "number": 7332,
                "sru": 7514,
                "year": 2016
            },
            {
                "accountId": 5899,
                "formattedBalance": "-134 670",
                "name": "Lagstadgade sociala avgifter",
                "number": 7510,
                "sru": 7514,
                "year": 2016
            },
            {
                "accountId": 5900,
                "formattedBalance": "-2 984,75",
                "name": "Övriga personalkostnader (gruppkonto)",
                "number": 7600,
                "sru": 7514,
                "year": 2016
            },
            {
                "accountId": 5901,
                "name": "Sjuk- och hälsovård",
                "number": 7620,
                "sru": 7514,
                "year": 2016
            },
            {
                "accountId": 5902,
                "formattedBalance": "-2 760,65",
                "name": "Sjuk- och hälsovård, avdragsgill",
                "number": 7621,
                "sru": 7514,
                "year": 2016
            },
            {
                "accountId": 5903,
                "formattedBalance": "-180",
                "name": "Personalrepresentation, avdragsgill",
                "number": 7631,
                "sru": 7514,
                "year": 2016
            },
            {
                "accountId": 5904,
                "formattedBalance": "-328",
                "name": "Personalrepresentation, ej avdragsgill",
                "number": 7632,
                "sru": 7514,
                "year": 2016
            },
            {
                "accountId": 5905,
                "formattedBalance": "-7 280,57",
                "name": "Övriga personalkostnader",
                "number": 7690,
                "sru": 7514,
                "year": 2016
            },
            {
                "accountId": 5906,
                "name": "Övriga personalkostnader",
                "number": 7699,
                "sru": 7514,
                "year": 2016
            },
            {
                "accountId": 6004,
                "formattedBalance": "-390 251",
                "name": "Löner till kollektivanställda",
                "number": 7010,
                "sru": 7514,
                "year": 2015
            },
            {
                "accountId": 6005,
                "formattedBalance": "-32 245",
                "name": "Semesterlöner till kollektivanställda",
                "number": 7082,
                "sru": 7514,
                "year": 2015
            },
            {
                "accountId": 6006,
                "formattedBalance": "-3 806",
                "name": "Skattefria traktamenten, Sverige",
                "number": 7321,
                "sru": 7514,
                "year": 2015
            },
            {
                "accountId": 6007,
                "formattedBalance": "-6 743",
                "name": "Skattefria bilersättningar",
                "number": 7331,
                "sru": 7514,
                "year": 2015
            },
            {
                "accountId": 6008,
                "formattedBalance": "-1 833",
                "name": "Skattepliktiga bilersättningar",
                "number": 7332,
                "sru": 7514,
                "year": 2015
            },
            {
                "accountId": 6009,
                "formattedBalance": "-105 818",
                "name": "Lagstadgade sociala avgifter",
                "number": 7510,
                "sru": 7514,
                "year": 2015
            },
            {
                "accountId": 6010,
                "formattedBalance": "-97,89",
                "name": "Övriga personalkostnader (gruppkonto)",
                "number": 7600,
                "sru": 7514,
                "year": 2015
            },
            {
                "accountId": 6011,
                "formattedBalance": "-2 103,54",
                "name": "Sjuk- och hälsovård",
                "number": 7620,
                "sru": 7514,
                "year": 2015
            },
            {
                "accountId": 6012,
                "name": "Sjuk- och hälsovård, avdragsgill",
                "number": 7621,
                "sru": 7514,
                "year": 2015
            },
            {
                "accountId": 6013,
                "formattedBalance": "-250,9",
                "name": "Personalrepresentation, avdragsgill",
                "number": 7631,
                "sru": 7514,
                "year": 2015
            },
            {
                "accountId": 6014,
                "formattedBalance": "-407,12",
                "name": "Personalrepresentation, ej avdragsgill",
                "number": 7632,
                "sru": 7514,
                "year": 2015
            },
            {
                "accountId": 6015,
                "formattedBalance": "-8 672,1",
                "name": "Övriga personalkostnader",
                "number": 7690,
                "sru": 7514,
                "year": 2015
            },
            {
                "accountId": 6016,
                "formattedBalance": "-1 666,26",
                "name": "Övriga personalkostnader",
                "number": 7699,
                "sru": 7514,
                "year": 2015
            }],
            "amounts": [{
                "value": "-655 965",
                "year": 2016
            },
            {
                "value": "-553 894",
                "year": 2015
            }],
            "id": 2701,
            "key": "R05-04",
            "label": "Personalkostnader",
            "lineNumber": 12,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5907,
                "formattedBalance": "-50 000",
                "name": "Avskrivningar på goodwill",
                "number": 7817,
                "sru": 7515,
                "year": 2016
            },
            {
                "accountId": 5908,
                "formattedBalance": "-89,29",
                "name": "Avskrivningar på maskiner och andra tekniska anläggningar",
                "number": 7831,
                "sru": 7515,
                "year": 2016
            },
            {
                "accountId": 5909,
                "formattedBalance": "-64 800",
                "name": "Avskrivningar på inventarier och verktyg",
                "number": 7832,
                "sru": 7515,
                "year": 2016
            },
            {
                "accountId": 6017,
                "formattedBalance": "-50 000",
                "name": "Avskrivningar på goodwill",
                "number": 7817,
                "sru": 7515,
                "year": 2015
            },
            {
                "accountId": 6018,
                "name": "Avskrivningar på maskiner och andra tekniska anläggningar",
                "number": 7831,
                "sru": 7515,
                "year": 2015
            },
            {
                "accountId": 6019,
                "formattedBalance": "-64 800",
                "name": "Avskrivningar på inventarier och verktyg",
                "number": 7832,
                "sru": 7515,
                "year": 2015
            }],
            "amounts": [{
                "value": "-114 889",
                "year": 2016
            },
            {
                "value": "-114 800",
                "year": 2015
            }],
            "id": 2702,
            "key": "R05-05",
            "label": "Av- och nedskrivningar av materiella och immateriella\n\t\t\tanläggningstillgångar",
            "lineNumber": 13,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2703,
            "key": "R05-07",
            "label": "Nedskrivningar av omsättningstillgångar utöver normala\n\t\t\tnedskrivningar",
            "lineNumber": 14,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2704,
            "key": "R05-09",
            "label": "Övriga rörelsekostnader",
            "lineNumber": 15,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [{
                "value": "-2 336 594",
                "year": 2016
            },
            {
                "value": "-2 253 151",
                "year": 2015
            }],
            "id": 2705,
            "key": "R06",
            "label": "Summa rörelsekostnader",
            "lineNumber": 16,
            "type": "SR3"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2706,
            "key": "R",
            "label": "MISSING_KEY",
            "lineNumber": 17,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [{
                "value": "51 424",
                "year": 2016
            },
            {
                "value": "28 254",
                "year": 2015
            }],
            "id": 2707,
            "key": "R07",
            "label": "Rörelseresultat",
            "lineNumber": 18,
            "type": "SR2"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2708,
            "key": "R",
            "label": "MISSING_KEY",
            "lineNumber": 19,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2709,
            "key": "R08",
            "label": "Finansiella poster",
            "lineNumber": 20,
            "type": "RR3"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2710,
            "key": "R09-01",
            "label": "Resultat från andelar i koncernföretag",
            "lineNumber": 21,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2711,
            "key": "R09-02",
            "label": "Resultat från andelar i intresseföretag och gemensamt styrda\n\t\t\tföretag",
            "lineNumber": 22,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2712,
            "key": "R09-07",
            "label": "Resultat från övriga företag som det finns ett ägarintresse i\n\t\t",
            "lineNumber": 23,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2713,
            "key": "R09-03",
            "label": "Resultat från övriga finansiella anläggningstillgångar",
            "lineNumber": 24,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [{
                "year": 2016
            },
            {
                "year": 2015
            }],
            "id": 2714,
            "key": "R09-04",
            "label": "Övriga ränteintäkter och liknande resultatposter",
            "lineNumber": 25,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [{
                "year": 2016
            },
            {
                "year": 2015
            }],
            "id": 2715,
            "key": "R09-06",
            "label": "Nedskrivningar av finansiella anläggningstillgångar och\n\t\t\tkortfristiga placeringar",
            "lineNumber": 26,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [{
                "year": 2016
            },
            {
                "year": 2015
            }],
            "id": 2716,
            "key": "R09-05",
            "label": "Räntekostnader och liknande resultatposter",
            "lineNumber": 27,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [{
                "year": 2016
            },
            {
                "year": 2015
            }],
            "id": 2717,
            "key": "R10",
            "label": "Summa finansiella poster",
            "lineNumber": 28,
            "type": "SR3"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2718,
            "key": "R",
            "label": "MISSING_KEY",
            "lineNumber": 29,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [{
                "value": "16 290",
                "year": 2016
            },
            {
                "value": "-11 398",
                "year": 2015
            }],
            "id": 2719,
            "key": "R26",
            "label": "Resultat efter finansiella poster",
            "lineNumber": 30,
            "type": "SR2"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2720,
            "key": "R",
            "label": "MISSING_KEY",
            "lineNumber": 31,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2721,
            "key": "R15",
            "label": "Bokslutsdispositioner",
            "lineNumber": 32,
            "type": "RR3"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2722,
            "key": "R16-01",
            "label": "Erhållna koncernbidrag",
            "lineNumber": 33,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2723,
            "key": "R16-02",
            "label": "Lämnade koncernbidrag",
            "lineNumber": 34,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2724,
            "key": "R16-03",
            "label": "Förändring av periodiseringsfonder",
            "lineNumber": 35,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2725,
            "key": "R16-04",
            "label": "Förändring av överavskrivningar",
            "lineNumber": 36,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2726,
            "key": "R16-05",
            "label": "Övriga bokslutsdispositioner",
            "lineNumber": 37,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2727,
            "key": "R17",
            "label": "Summa bokslutsdispositioner",
            "lineNumber": 38,
            "type": "SR3"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2728,
            "key": "R",
            "label": "MISSING_KEY",
            "lineNumber": 39,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [{
                "value": "16 290",
                "year": 2016
            },
            {
                "value": "-11 398",
                "year": 2015
            }],
            "id": 2729,
            "key": "R18",
            "label": "Resultat före skatt",
            "lineNumber": 40,
            "type": "SR2"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2730,
            "key": "R",
            "label": "MISSING_KEY",
            "lineNumber": 41,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2731,
            "key": "R19",
            "label": "Skatter",
            "lineNumber": 42,
            "type": "RR3"
        },
        {
            "accountList": [{
                "accountId": 5918,
                "formattedBalance": "-1 381",
                "name": "Årets skattekostnad",
                "number": 8910,
                "sru": 598,
                "year": 2016
            },
            {
                "accountId": 6028,
                "name": "Årets skattekostnad",
                "number": 8910,
                "sru": 598,
                "year": 2015
            }],
            "amounts": [{
                "value": "-1 381",
                "year": 2016
            },
            {
                "year": 2015
            }],
            "id": 2732,
            "key": "R20-01",
            "label": "Skatt på årets resultat",
            "lineNumber": 43,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2733,
            "key": "R20-02",
            "label": "Övriga skatter",
            "lineNumber": 44,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2734,
            "key": "R",
            "label": "MISSING_KEY",
            "lineNumber": 45,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [{
                "value": "14 909",
                "year": 2016
            },
            {
                "value": "-11 398",
                "year": 2015
            }],
            "id": 2735,
            "key": "R25",
            "label": "Årets resultat",
            "lineNumber": 46,
            "type": "SR1"
        }],
        "status": "approved"
    });
}
function getBalanceSheetTestData(): string {
    return JSON.stringify({
        "balanceSheetId": 58,
        "financialYears": [{
            "endDate": "2016-06-30",
            "startDate": "2015-07-01",
            "year": 2016
        },
        {
            "endDate": "2015-06-30",
            "startDate": "2014-07-01",
            "year": 2015
        }],
        "reportRowList": [{
            "accountList": [],
            "amounts": [],
            "id": 2736,
            "key": "B00",
            "label": "Balansräkning",
            "lineNumber": 0,
            "type": "RB1"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2737,
            "key": "B01",
            "label": "TILLGÅNGAR",
            "lineNumber": 1,
            "type": "RB2"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2738,
            "key": "B",
            "label": "MISSING_KEY",
            "lineNumber": 2,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2739,
            "key": "B03-01",
            "label": "Tecknat men ej inbetalt kapital",
            "lineNumber": 3,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2740,
            "key": "B",
            "label": "MISSING_KEY",
            "lineNumber": 4,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2741,
            "key": "B05",
            "label": "Anläggningstillgångar",
            "lineNumber": 5,
            "type": "RB3"
        },
        {
            "accountList": [{
                "accountId": 5810,
                "formattedBalance": "250 000",
                "name": "Goodwill",
                "number": 1070,
                "sru": 7201,
                "year": 2016
            },
            {
                "accountId": 5811,
                "formattedBalance": "-200 000",
                "name": "Ackumulerade avskrivningar på goodwill",
                "number": 1079,
                "sru": 7201,
                "year": 2016
            },
            {
                "accountId": 5920,
                "formattedBalance": "250 000",
                "name": "Goodwill",
                "number": 1070,
                "sru": 7201,
                "year": 2015
            },
            {
                "accountId": 5921,
                "formattedBalance": "-150 000",
                "name": "Ackumulerade avskrivningar på goodwill",
                "number": 1079,
                "sru": 7201,
                "year": 2015
            }],
            "amounts": [{
                "value": "50 000",
                "year": 2016
            },
            {
                "value": "100 000",
                "year": 2015
            }],
            "id": 2742,
            "key": "B06-01",
            "label": "Immateriella anläggningstillgångar",
            "lineNumber": 6,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5812,
                "formattedBalance": "364 164",
                "name": "Inventarier och verktyg",
                "number": 1220,
                "sru": 7215,
                "year": 2016
            },
            {
                "accountId": 5813,
                "formattedBalance": "-304 164",
                "name": "Ackumulerade avskrivningar på inventarier och verktyg",
                "number": 1229,
                "sru": 7215,
                "year": 2016
            },
            {
                "accountId": 5922,
                "formattedBalance": "364 164",
                "name": "Inventarier och verktyg",
                "number": 1220,
                "sru": 7215,
                "year": 2015
            },
            {
                "accountId": 5923,
                "formattedBalance": "-239 364",
                "name": "Ackumulerade avskrivningar på inventarier och verktyg",
                "number": 1229,
                "sru": 7215,
                "year": 2015
            }],
            "amounts": [{
                "value": "60 000",
                "year": 2016
            },
            {
                "value": "124 800",
                "year": 2015
            }],
            "id": 2743,
            "key": "B06-02",
            "label": "Materiella anläggningstillgångar",
            "lineNumber": 7,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5814,
                "formattedBalance": "41 000",
                "name": "Andelar i svenska dotterföretag",
                "number": 1311,
                "sru": 7230,
                "year": 2016
            },
            {
                "accountId": 5924,
                "formattedBalance": "25 000",
                "name": "Andelar i svenska dotterföretag",
                "number": 1311,
                "sru": 7230,
                "year": 2015
            }],
            "amounts": [{
                "value": "41 000",
                "year": 2016
            },
            {
                "value": "25 000",
                "year": 2015
            }],
            "id": 2744,
            "key": "B06-03",
            "label": "Finansiella anläggningstillgångar",
            "lineNumber": 8,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2745,
            "key": "B",
            "label": "MISSING_KEY",
            "lineNumber": 9,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [{
                "value": "151 000",
                "year": 2016
            },
            {
                "value": "249 800",
                "year": 2015
            }],
            "id": 2746,
            "key": "B07",
            "label": "Summa anläggningstillgångar",
            "lineNumber": 10,
            "type": "SB3"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2747,
            "key": "B",
            "label": "MISSING_KEY",
            "lineNumber": 11,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2748,
            "key": "B08",
            "label": "Omsättningstillgångar",
            "lineNumber": 12,
            "type": "RB3"
        },
        {
            "accountList": [{
                "accountId": 5815,
                "formattedBalance": "51 841",
                "name": "Lager",
                "number": 1400,
                "sru": 219,
                "year": 2016
            },
            {
                "accountId": 5816,
                "formattedBalance": "594 337",
                "name": "Lager av tillsatsmaterial och förnödenheter",
                "number": 1420,
                "sru": 7241,
                "year": 2016
            },
            {
                "accountId": 5925,
                "formattedBalance": "93 269,84",
                "name": "Lager",
                "number": 1400,
                "sru": 219,
                "year": 2015
            },
            {
                "accountId": 5926,
                "formattedBalance": "686 972",
                "name": "Lager av tillsatsmaterial och förnödenheter",
                "number": 1420,
                "sru": 7241,
                "year": 2015
            }],
            "amounts": [{
                "value": "646 178",
                "year": 2016
            },
            {
                "value": "780 242",
                "year": 2015
            }],
            "id": 2749,
            "key": "B09-01",
            "label": "Varulager m.m.",
            "lineNumber": 13,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5817,
                "formattedBalance": "32 119",
                "name": "Kundfordringar",
                "number": 1510,
                "sru": 7251,
                "year": 2016
            },
            {
                "accountId": 5818,
                "formattedBalance": "89",
                "name": "Avräkning för skatter och avgifter (skattekonto)",
                "number": 1630,
                "sru": 7261,
                "year": 2016
            },
            {
                "accountId": 5819,
                "name": "Momsfordran",
                "number": 1650,
                "sru": 7261,
                "year": 2016
            },
            {
                "accountId": 5927,
                "formattedBalance": "43 499",
                "name": "Kundfordringar",
                "number": 1510,
                "sru": 7251,
                "year": 2015
            },
            {
                "accountId": 5928,
                "formattedBalance": "8 446",
                "name": "Avräkning för skatter och avgifter (skattekonto)",
                "number": 1630,
                "sru": 7261,
                "year": 2015
            },
            {
                "accountId": 5929,
                "formattedBalance": "3 661,78",
                "name": "Momsfordran",
                "number": 1650,
                "sru": 7261,
                "year": 2015
            }],
            "amounts": [{
                "value": "32 208",
                "year": 2016
            },
            {
                "value": "55 607",
                "year": 2015
            }],
            "id": 2750,
            "key": "B09-02",
            "label": "Kortfristiga fordringar",
            "lineNumber": 14,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2751,
            "key": "B09-03",
            "label": "Kortfristiga placeringar",
            "lineNumber": 15,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5820,
                "formattedBalance": "13 400",
                "name": "Kassa",
                "number": 1910,
                "sru": 7281,
                "year": 2016
            },
            {
                "accountId": 5821,
                "formattedBalance": "45 349,97",
                "name": "Företagskonto / checkkonto / affärskonto",
                "number": 1930,
                "sru": 7281,
                "year": 2016
            },
            {
                "accountId": 5930,
                "formattedBalance": "7 177",
                "name": "Kassa",
                "number": 1910,
                "sru": 7281,
                "year": 2015
            },
            {
                "accountId": 5931,
                "formattedBalance": "-1 789,17",
                "name": "Företagskonto / checkkonto / affärskonto",
                "number": 1930,
                "sru": 7281,
                "year": 2015
            }],
            "amounts": [{
                "value": "58 750",
                "year": 2016
            },
            {
                "value": "5 388",
                "year": 2015
            }],
            "id": 2752,
            "key": "B09-04",
            "label": "Kassa och bank",
            "lineNumber": 16,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2753,
            "key": "B09-05",
            "label": "Redovisningsmedel",
            "lineNumber": 17,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2754,
            "key": "B",
            "label": "MISSING_KEY",
            "lineNumber": 18,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [{
                "value": "737 136",
                "year": 2016
            },
            {
                "value": "841 237",
                "year": 2015
            }],
            "id": 2755,
            "key": "B10",
            "label": "Summa omsättningstillgångar",
            "lineNumber": 19,
            "type": "SB3"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2756,
            "key": "B",
            "label": "MISSING_KEY",
            "lineNumber": 20,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [{
                "value": "888 136",
                "year": 2016
            },
            {
                "value": "1 091 037",
                "year": 2015
            }],
            "id": 2757,
            "key": "B11",
            "label": "SUMMA TILLGÅNGAR",
            "lineNumber": 21,
            "type": "SB2"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2758,
            "key": "B",
            "label": "MISSING_KEY",
            "lineNumber": 22,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2759,
            "key": "B12",
            "label": "EGET KAPITAL OCH SKULDER",
            "lineNumber": 23,
            "type": "RB2"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2760,
            "key": "B",
            "label": "MISSING_KEY",
            "lineNumber": 24,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2761,
            "key": "B13",
            "label": "Eget kapital",
            "lineNumber": 25,
            "type": "RB3"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2762,
            "key": "B14",
            "label": "Bundet eget kapital",
            "lineNumber": 26,
            "type": "RB4"
        },
        {
            "accountList": [{
                "accountId": 5822,
                "formattedBalance": "100 000",
                "name": "Aktiekapital",
                "number": 2081,
                "sru": 7301,
                "year": 2016
            },
            {
                "accountId": 5932,
                "formattedBalance": "100 000",
                "name": "Aktiekapital",
                "number": 2081,
                "sru": 7301,
                "year": 2015
            }],
            "amounts": [{
                "value": "100 000",
                "year": 2016
            },
            {
                "value": "100 000",
                "year": 2015
            }],
            "id": 2763,
            "key": "B15-01",
            "label": "Aktiekapital",
            "lineNumber": 27,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2764,
            "key": "B15-02",
            "label": "Ej registrerat aktiekapital",
            "lineNumber": 28,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2765,
            "key": "B15-03",
            "label": "Uppskrivningsfond",
            "lineNumber": 29,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5823,
                "formattedBalance": "8 354",
                "name": "Reservfond",
                "number": 2086,
                "sru": 7301,
                "year": 2016
            },
            {
                "accountId": 5933,
                "formattedBalance": "8 354",
                "name": "Reservfond",
                "number": 2086,
                "sru": 7301,
                "year": 2015
            }],
            "amounts": [{
                "value": "8 354",
                "year": 2016
            },
            {
                "value": "8 354",
                "year": 2015
            }],
            "id": 2766,
            "key": "B15-04",
            "label": "Reservfond",
            "lineNumber": 30,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [{
                "value": "108 354",
                "year": 2016
            },
            {
                "value": "108 354",
                "year": 2015
            }],
            "id": 2767,
            "key": "B16",
            "label": "Summa bundet eget kapital",
            "lineNumber": 31,
            "type": "SB4"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2768,
            "key": "B",
            "label": "MISSING_KEY",
            "lineNumber": 32,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2769,
            "key": "B17",
            "label": "Fritt eget kapital",
            "lineNumber": 33,
            "type": "RB4"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2770,
            "key": "B18-01",
            "label": "Överkursfond",
            "lineNumber": 34,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5824,
                "formattedBalance": "80 786,35",
                "name": "Balanserad vinst eller förlust",
                "number": 2091,
                "sru": 7302,
                "year": 2016
            },
            {
                "accountId": 5934,
                "formattedBalance": "92 184,55",
                "name": "Balanserad vinst eller förlust",
                "number": 2091,
                "sru": 7302,
                "year": 2015
            }],
            "amounts": [{
                "value": "80 786",
                "year": 2016
            },
            {
                "value": "92 185",
                "year": 2015
            }],
            "id": 2771,
            "key": "B18-02",
            "label": "Balanserat resultat",
            "lineNumber": 35,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5825,
                "formattedBalance": "14 909,41",
                "name": "Årets resultat",
                "number": 2099,
                "sru": 7302,
                "year": 2016
            },
            {
                "accountId": 5935,
                "formattedBalance": "-11 398,2",
                "name": "Årets resultat",
                "number": 2099,
                "sru": 7302,
                "year": 2015
            }],
            "amounts": [{
                "value": "14 909",
                "year": 2016
            },
            {
                "value": "-11 398",
                "year": 2015
            }],
            "id": 2772,
            "key": "B18-03",
            "label": "Årets resultat",
            "lineNumber": 36,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [{
                "value": "95 695",
                "year": 2016
            },
            {
                "value": "80 787",
                "year": 2015
            }],
            "id": 2773,
            "key": "B19",
            "label": "Summa fritt eget kapital",
            "lineNumber": 37,
            "type": "SB4"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2774,
            "key": "B",
            "label": "MISSING_KEY",
            "lineNumber": 38,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [{
                "value": "204 049",
                "year": 2016
            },
            {
                "value": "189 141",
                "year": 2015
            }],
            "id": 2775,
            "key": "B20",
            "label": "Summa eget kapital",
            "lineNumber": 39,
            "type": "SB3"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2776,
            "key": "B",
            "label": "MISSING_KEY",
            "lineNumber": 40,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2777,
            "key": "B21-01",
            "label": "Obeskattade reserver",
            "lineNumber": 41,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2778,
            "key": "B21-02",
            "label": "Avsättningar",
            "lineNumber": 42,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2779,
            "key": "B21-03",
            "label": "Avsättningar för pensioner och liknande förpliktelser enligt lagen (1967:531) om tryggande av pensionsutfästelse m.m.",
            "lineNumber": 43,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5826,
                "formattedBalance": "74 266,03",
                "name": "Lån från närstående personer, långfristig del",
                "number": 2393,
                "sru": 7354,
                "year": 2016
            },
            {
                "accountId": 5827,
                "formattedBalance": "293 000",
                "name": "Övriga långfristiga skulder",
                "number": 2399,
                "sru": 7354,
                "year": 2016
            },
            {
                "accountId": 5936,
                "formattedBalance": "159 392,03",
                "name": "Lån från närstående personer, långfristig del",
                "number": 2393,
                "sru": 7354,
                "year": 2015
            },
            {
                "accountId": 5937,
                "formattedBalance": "425 000",
                "name": "Övriga långfristiga skulder",
                "number": 2399,
                "sru": 7354,
                "year": 2015
            }],
            "amounts": [{
                "value": "367 266",
                "year": 2016
            },
            {
                "value": "584 392",
                "year": 2015
            }],
            "id": 2780,
            "key": "B21-04",
            "label": "Långfristiga skulder",
            "lineNumber": 44,
            "type": "D"
        },
        {
            "accountList": [{
                "accountId": 5828,
                "formattedBalance": "98 893,06",
                "name": "Leverantörsskulder",
                "number": 2440,
                "sru": 7365,
                "year": 2016
            },
            {
                "accountId": 5829,
                "formattedBalance": "1 381",
                "name": "Skatteskulder",
                "number": 2510,
                "sru": 7368,
                "year": 2016
            },
            {
                "accountId": 5830,
                "formattedBalance": "-7 733",
                "name": "Betald F-skatt",
                "number": 2518,
                "sru": 7368,
                "year": 2016
            },
            {
                "accountId": 5831,
                "formattedBalance": "-3 024,88",
                "name": "Debiterad ingående moms",
                "number": 2641,
                "sru": 7369,
                "year": 2016
            },
            {
                "accountId": 5832,
                "formattedBalance": "70 677",
                "name": "Redovisningskonto för moms",
                "number": 2650,
                "sru": 7369,
                "year": 2016
            },
            {
                "accountId": 5833,
                "formattedBalance": "8 732",
                "name": "Personalskatt",
                "number": 2710,
                "sru": 7369,
                "year": 2016
            },
            {
                "accountId": 5834,
                "formattedBalance": "10 895",
                "name": "Avräkning lagstadgade sociala avgifter",
                "number": 2731,
                "sru": 7369,
                "year": 2016
            },
            {
                "accountId": 5835,
                "formattedBalance": "132 000",
                "name": "Kortfristiga låneskulder",
                "number": 2840,
                "sru": 7369,
                "year": 2016
            },
            {
                "accountId": 5836,
                "formattedBalance": "5 000",
                "name": "Övr interimsskulder",
                "number": 2990,
                "sru": 305,
                "year": 2016
            },
            {
                "accountId": 5938,
                "formattedBalance": "119 204,37",
                "name": "Leverantörsskulder",
                "number": 2440,
                "sru": 7365,
                "year": 2015
            },
            {
                "accountId": 5939,
                "formattedBalance": "-7 733",
                "name": "Skatteskulder",
                "number": 2510,
                "sru": 7368,
                "year": 2015
            },
            {
                "accountId": 5940,
                "name": "Betald F-skatt",
                "number": 2518,
                "sru": 7368,
                "year": 2015
            },
            {
                "accountId": 5941,
                "formattedBalance": "-3 662,08",
                "name": "Debiterad ingående moms",
                "number": 2641,
                "sru": 7369,
                "year": 2015
            },
            {
                "accountId": 5942,
                "formattedBalance": "59 440,78",
                "name": "Redovisningskonto för moms",
                "number": 2650,
                "sru": 7369,
                "year": 2015
            },
            {
                "accountId": 5943,
                "formattedBalance": "8 164",
                "name": "Personalskatt",
                "number": 2710,
                "sru": 7369,
                "year": 2015
            },
            {
                "accountId": 5944,
                "formattedBalance": "10 090",
                "name": "Avräkning lagstadgade sociala avgifter",
                "number": 2731,
                "sru": 7369,
                "year": 2015
            },
            {
                "accountId": 5945,
                "formattedBalance": "132 000",
                "name": "Kortfristiga låneskulder",
                "number": 2840,
                "sru": 7369,
                "year": 2015
            },
            {
                "accountId": 5946,
                "name": "Övr interimsskulder",
                "number": 2990,
                "sru": 305,
                "year": 2015
            }],
            "amounts": [{
                "value": "316 821",
                "year": 2016
            },
            {
                "value": "317 504",
                "year": 2015
            }],
            "id": 2781,
            "key": "B21-05",
            "label": "Kortfristiga skulder",
            "lineNumber": 45,
            "type": "D"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2782,
            "key": "B",
            "label": "MISSING_KEY",
            "lineNumber": 46,
            "type": "BLANK"
        },
        {
            "accountList": [],
            "amounts": [{
                "value": "888 136",
                "year": 2016
            },
            {
                "value": "1 091 037",
                "year": 2015
            }],
            "id": 2783,
            "key": "B22",
            "label": "SUMMA EGET KAPITAL OCH SKULDER",
            "lineNumber": 47,
            "type": "SB2"
        },
        {
            "accountList": [],
            "amounts": [],
            "id": 2784,
            "key": "B",
            "label": "MISSING_KEY",
            "lineNumber": 48,
            "type": "BLANK"
        }],
        "status": "approved"
    });
}