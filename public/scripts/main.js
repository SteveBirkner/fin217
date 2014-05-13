var map;

var chart;
var chartData = {};


chartData["US-AL"] = [
    { source: "Murder", energy: 374},
    { source: "Rape", energy: 1563},
    { source: "Burglary", energy: 43000},
    { source: "Robbery", energy: 6100},
    { source: "Aggravated Assault", energy: 11240}];

chartData["US-AK"] = [
    { source: "Murder", energy: 32},
    { source: "Rape", energy: 583},
    { source: "Burglary", energy: 4130},
    { source: "Robbery", energy: 537},
    { source: "Aggravated Assault", energy: 3800}];

chartData["US-AZ"] = [
    { source: "Murder", energy: 445},
    { source: "Rape", energy: 2006},
    { source: "Burglary", energy: 56004},
    { source: "Robbery", energy: 8579},
    { source: "Aggravated Assault", energy: 19444}];

chartData["US-AR"] = [
    { source: "Murder", energy: 186},
    { source: "Rape", energy: 1593},
    { source: "Burglary", energy: 30456},
    { source: "Robbery", energy: 2504},
    { source: "Aggravated Assault", energy: 10749}];

chartData["US-CA"] = [
    { source: "Murder", energy: 2578},
    { source: "Rape", energy: 9593},
    { source: "Burglary", energy: 250456},
    { source: "Robbery", energy: 63604},
    { source: "Aggravated Assault", energy: 117049}];

chartData["US-CO"] = [
    { source: "Murder", energy: 176},
    { source: "Rape", energy: 2026},
    { source: "Burglary", energy: 34756},
    { source: "Robbery", energy: 3989},
    { source: "Aggravated Assault", energy: 12849}];

chartData["US-CT"] = [
    { source: "Murder", energy: 102},
    { source: "Rape", energy: 702},
    { source: "Burglary", energy: 15343},
    { source: "Robbery", energy: 3966},
    { source: "Aggravated Assault", energy: 4868}];

chartData["US-DE"] = [
    { source: "Murder", energy: 37},
    { source: "Rape", energy: 377},
    { source: "Burglary", energy: 5811},
    { source: "Robbery", energy: 1306},
    { source: "Aggravated Assault", energy: 3612}];

chartData["US-FL"] = [
    { source: "Murder", energy: 883},
    { source: "Rape", energy: 6592},
    { source: "Burglary", energy: 164556},
    { source: "Robbery", energy: 30141},
    { source: "Aggravated Assault", energy: 88349}];

chartData["US-GA"] = [
    { source: "Murder", energy: 564},
    { source: "Rape", energy: 2143},
    { source: "Burglary", energy: 84456},
    { source: "Robbery", energy: 14041},
    { source: "Aggravated Assault", energy: 23977}];

chartData["US-HI"] = [
    { source: "Murder", energy: 24},
    { source: "Rape", energy: 343},
    { source: "Burglary", energy: 9792},
    { source: "Robbery", energy: 1001},
    { source: "Aggravated Assault", energy: 1855}];

chartData["US-ID"] = [
    { source: "Murder", energy: 35},
    { source: "Rape", energy: 577},
    { source: "Burglary", energy: 8066},
    { source: "Robbery", energy: 266},
    { source: "Aggravated Assault", energy: 2749}];

chartData["US-IL"] = [
    { source: "Murder", energy: 766},
    { source: "Rape", energy: 4293},
    { source: "Burglary", energy: 77456},
    { source: "Robbery", energy: 23187},
    { source: "Aggravated Assault", energy: 42149}];

chartData["US-IN"] = [
    { source: "Murder", energy: 356},
    { source: "Rape", energy: 1893},
    { source: "Burglary", energy: 43756},
    { source: "Robbery", energy: 6804},
    { source: "Aggravated Assault", energy: 11279}];

chartData["US-IA"] = [
    { source: "Murder", energy: 38},
    { source: "Rape", energy: 827},
    { source: "Burglary", energy: 17987},
    { source: "Robbery", energy: 1154},
    { source: "Aggravated Assault", energy: 6632}];

chartData["US-KS"] = [
    { source: "Murder", energy: 102},
    { source: "Rape", energy: 1055},
    { source: "Burglary", energy: 18976},
    { source: "Robbery", energy: 1793},
    { source: "Aggravated Assault", energy: 7643}];

chartData["US-KY"] = [
    { source: "Murder", energy: 190},
    { source: "Rape", energy: 1421},
    { source: "Burglary", energy: 26456},
    { source: "Robbery", energy: 3604},
    { source: "Aggravated Assault", energy: 5803}];

chartData["US-LA"] = [
    { source: "Murder", energy: 450},
    { source: "Rape", energy: 1421},
    { source: "Burglary", energy: 39856},
    { source: "Robbery", energy: 5337},
    { source: "Aggravated Assault", energy: 19681}];

chartData["US-ME"] = [
    { source: "Murder", energy: 19},
    { source: "Rape", energy: 326},
    { source: "Burglary", energy: 6323},
    { source: "Robbery", energy: 323},
    { source: "Aggravated Assault", energy: 815}];

chartData["US-MD"] = [
    { source: "Murder", energy: 556},
    { source: "Rape", energy: 1266},
    { source: "Burglary", energy: 35922},
    { source: "Robbery", energy: 14378},
    { source: "Aggravated Assault", energy: 23179}];

chartData["US-MA"] = [
    { source: "Murder", energy: 175},
    { source: "Rape", energy: 1793},
    { source: "Burglary", energy: 34624},
    { source: "Robbery", energy: 7633},
    { source: "Aggravated Assault", energy: 19715}];

chartData["US-MI"] = [
    { source: "Murder", energy: 616},
    { source: "Rape", energy: 5193},
    { source: "Burglary", energy: 70519},
    { source: "Robbery", energy: 13342},
    { source: "Aggravated Assault", energy: 36726}];

chartData["US-MN"] = [
    { source: "Murder", energy: 115},
    { source: "Rape", energy: 2258},
    { source: "Burglary", energy: 29756},
    { source: "Robbery", energy: 4704},
    { source: "Aggravated Assault", energy: 8146}];

chartData["US-MS"] = [
    { source: "Murder", energy: 214},
    { source: "Rape", energy: 1147},
    { source: "Burglary", energy: 26866},
    { source: "Robbery", energy: 2404},
    { source: "Aggravated Assault", energy: 4365}];

chartData["US-MO"] = [
    { source: "Murder", energy: 18},
    { source: "Rape", energy: 301},
    { source: "Burglary", energy: 3642},
    { source: "Robbery", energy: 177},
    { source: "Aggravated Assault", energy: 2138}];

chartData["US-MT"] = [
    { source: "Murder", energy: 56},
    { source: "Rape", energy: 593},
    { source: "Burglary", energy: 1756},
    { source: "Robbery", energy: 104},
    { source: "Aggravated Assault", energy: 2079}];

chartData["US-NE"] = [
    { source: "Murder", energy: 44},
    { source: "Rape", energy: 578},
    { source: "Burglary", energy: 9363},
    { source: "Robbery", energy: 1404},
    { source: "Aggravated Assault", energy: 3385}];

chartData["US-NV"] = [
    { source: "Murder", energy: 206},
    { source: "Rape", energy: 1061},
    { source: "Burglary", energy: 23481},
    { source: "Robbery", energy: 4702},
    { source: "Aggravated Assault", energy: 8734}];

chartData["US-NH"] = [
    { source: "Murder", energy: 18},
    { source: "Rape", energy: 405},
    { source: "Burglary", energy: 4153},
    { source: "Robbery", energy: 359},
    { source: "Aggravated Assault", energy: 947}];

chartData["US-NJ"] = [
    { source: "Murder", energy: 417},
    { source: "Rape", energy: 1253},
    { source: "Burglary", energy: 38980},
    { source: "Robbery", energy: 13215},
    { source: "Aggravated Assault", energy: 16079}];

chartData["US-NM"] = [
    { source: "Murder", energy: 1044},
    { source: "Rape", energy: 1903},
    { source: "Burglary", energy: 21095},
    { source: "Robbery", energy: 1904},
    { source: "Aggravated Assault", energy: 10450}];

chartData["US-NY"] = [
    { source: "Murder", energy: 874},
    { source: "Rape", energy: 3636},
    { source: "Burglary", energy: 69034},
    { source: "Robbery", energy: 35179},
    { source: "Aggravated Assault", energy: 46150}];

chartData["US-NC"] = [
    { source: "Murder", energy: 585},
    { source: "Rape", energy: 2303},
    { source: "Burglary", energy: 104298},
    { source: "Robbery", energy: 12365},
    { source: "Aggravated Assault", energy: 25128}];

chartData["US-ND"] = [
    { source: "Murder", energy: 7},
    { source: "Rape", energy: 154},
    { source: "Burglary", energy: 1986},
    { source: "Robbery", energy: 47},
    { source: "Aggravated Assault", energy: 417}];

chartData["US-OH"] = [
    { source: "Murder", energy: 585},
    { source: "Rape", energy: 4557},
    { source: "Burglary", energy: 100063},
    { source: "Robbery", energy: 18696},
    { source: "Aggravated Assault", energy: 16435}];

chartData["US-OK"] = [
    { source: "Murder", energy: 187},
    { source: "Rape", energy: 1481},
    { source: "Burglary", energy: 35623},
    { source: "Robbery", energy: 3203},
    { source: "Aggravated Assault", energy: 13146}];

chartData["US-OR"] = [
    { source: "Murder", energy: 80},
    { source: "Rape", energy: 1266},
    { source: "Burglary", energy: 27656},
    { source: "Robbery", energy: 2478},
    { source: "Aggravated Assault", energy: 6620}];

chartData["US-PA"] = [
    { source: "Murder", energy: 756},
    { source: "Rape", energy: 3053},
    { source: "Burglary", energy: 56278},
    { source: "Robbery", energy: 19120},
    { source: "Aggravated Assault", energy: 29420}];

chartData["US-RI"] = [
    { source: "Murder", energy: 35},
    { source: "Rape", energy: 393},
    { source: "Burglary", energy: 5356},
    { source: "Robbery", energy: 764},
    { source: "Aggravated Assault", energy: 1579}];

chartData["US-SC"] = [
    { source: "Murder", energy: 315},
    { source: "Rape", energy: 1893},
    { source: "Burglary", energy: 43356},
    { source: "Robbery", energy: 5604},
    { source: "Aggravated Assault", energy: 24679}];

chartData["US-SD"] = [
    { source: "Murder", energy: 18},
    { source: "Rape", energy: 362},
    { source: "Burglary", energy: 2517},
    { source: "Robbery", energy: 144},
    { source: "Aggravated Assault", energy: 839}];

chartData["US-TN"] = [
    { source: "Murder", energy: 432},
    { source: "Rape", energy: 2171},
    { source: "Burglary", energy: 63233},
    { source: "Robbery", energy: 9907},
    { source: "Aggravated Assault", energy: 32314}];

chartData["US-TE"] = [
    { source: "Murder", energy: 1407},
    { source: "Rape", energy: 8511},
    { source: "Burglary", energy: 219828},
    { source: "Robbery", energy: 35707},
    { source: "Aggravated Assault", energy: 75383}];

chartData["US-UT"] = [
    { source: "Murder", energy: 56},
    { source: "Rape", energy: 903},
    { source: "Burglary", energy: 14971},
    { source: "Robbery", energy: 1004},
    { source: "Aggravated Assault", energy: 3541}];

chartData["US-VT"] = [
    { source: "Murder", energy: 8},
    { source: "Rape", energy: 145},
    { source: "Burglary", energy: 3064},
    { source: "Robbery", energy: 73},
    { source: "Aggravated Assault", energy: 520}];

chartData["US-VA"] = [
    { source: "Murder", energy: 456},
    { source: "Rape", energy: 1793},
    { source: "Burglary", energy: 29671},
    { source: "Robbery", energy: 7504},
    { source: "Aggravated Assault", energy: 11779}];

chartData["US-WA"] = [
    { source: "Murder", energy: 205},
    { source: "Rape", energy: 2893},
    { source: "Burglary", energy: 60356},
    { source: "Robbery", energy: 5704},
    { source: "Aggravated Assault", energy: 12979}];

chartData["US-WV"] = [
    { source: "Murder", energy: 80},
    { source: "Rape", energy: 321},
    { source: "Burglary", energy: 11056},
    { source: "Robbery", energy: 804},
    { source: "Aggravated Assault", energy: 3279}];

chartData["US-WI"] = [
    { source: "Murder", energy: 194},
    { source: "Rape", energy: 1143},
    { source: "Burglary", energy: 24406},
    { source: "Robbery", energy: 4556},
    { source: "Aggravated Assault", energy: 7485}];

chartData["US-WY"] = [
    { source: "Murder", energy: 14},
    { source: "Rape", energy: 122},
    { source: "Burglary", energy: 2435},
    { source: "Robbery", energy: 78},
    { source: "Aggravated Assault", energy: 958}];


AmCharts.ready(function() {

    chart = new AmCharts.AmPieChart();

    // title of the chart
    chart.addLabel("0", "!20", "Crime Break Down", "center", 16);

    chart.backgroundAlpha = 0.4;
    chart.backgroundColor = "#000000";
    chart.dataProvider = chartData.usaHigh;
    chart.titleField = "source";
    chart.valueField = "energy";
    chart.sequencedAnimation = true;
    chart.startEffect = "elastic";
    chart.labelsEnabled = false;
    chart.labelText = "[[title]]";
    chart.startDuration = 2;
    chart.labelRadius = 10;

    // WRITE                                 
    chart.write("chartdiv");
        // create AmMap object
        var map = new AmCharts.AmMap();
        // set path to images
        map.pathToImages = "ammap/ammap/images/";

        var dataProvider = {
            map: "usaHigh",
            mapVar: AmCharts.maps.uasHigh,
            getAreasFromMap:true,
            areas: [{
            id: "US-AL",
            value: 4447100
        }, {
            id: "US-AK",
            value: 626932
        }, {
            id: "US-AZ",
            value: 5130632
        }, {
            id: "US-AR",
            name: "Arizona",
            value: 2673400
        }, {
            id: "US-CA",
            value: 33871648
        }, {
            id: "US-CO",
            value: 4301261
        }, {
            id: "US-CT",
            value: 3405565
        }, {
            id: "US-DE",
            value: 783600
        }, {
            id: "US-FL",
            value: 15982378
        }, {
            id: "US-GA",
            value: 8186453
        }, {
            id: "US-HI",
            value: 1211537
        }, {
            id: "US-ID",
            value: 1293953
        }, {
            id: "US-IL",
            value: 12419293
        }, {
            id: "US-IN",
            value: 6080485
        }, {
            id: "US-IA",
            value: 2926324
        }, {
            id: "US-KS",
            value: 2688418
        }, {
            id: "US-KY",
            value: 4041769
        }, {
            id: "US-LA",
            value: 4468976
        }, {
            id: "US-ME",
            value: 1274923
        }, {
            id: "US-MD",
            value: 5296486
        }, {
            id: "US-MA",
            value: 6349097
        }, {
            id: "US-MI",
            value: 9938444
        }, {
            id: "US-MN",
            value: 4919479
        }, {
            id: "US-MS",
            value: 2844658
        }, {
            id: "US-MO",
            value: 5595211
        }, {
            id: "US-MT",
            value: 902195
        }, {
            id: "US-NE",
            value: 1711263
        }, {
            id: "US-NV",
            value: 1998257
        }, {
            id: "US-NH",
            value: 1235786
        }, {
            id: "US-NJ",
            value: 8414350
        }, {
            id: "US-NM",
            value: 1819046
        }, {
            id: "US-NY",
            value: 18976457
        }, {
            id: "US-NC",
            value: 8049313
        }, {
            id: "US-ND",
            value: 642200
        }, {
            id: "US-OH",
            value: 11353140
        }, {
            id: "US-OK",
            value: 3450654
        }, {
            id: "US-OR",
            value: 3421399
        }, {
            id: "US-PA",
            value: 12281054
        }, {
            id: "US-RI",
            value: 1048319
        }, {
            id: "US-SC",
            value: 4012012
        }, {
            id: "US-SD",
            value: 754844
        }, {
            id: "US-TN",
            value: 5689283
        }, {
            id: "US-TX",
            value: 20851820
        }, {
            id: "US-UT",
            value: 2233169
        }, {
            id: "US-VT",
            value: 608827
        }, {
            id: "US-VA",
            value: 7078515
        }, {
            id: "US-WA",
            value: 5894121
        }, {
            id: "US-WV",
            value: 1808344
        }, {
            id: "US-WI",
            value: 5363675
        }, {
            id: "US-WY",
            value: 493782
        }]


        }; 
        // pass data provider to the map object
        dataProvider.areas = [
            { title: "New Jersey", id: "US-NJ", selectable: true }
        ];
        map.dataProvider = dataProvider;

        /* create areas settings
         * autoZoom set to true means that the map will zoom-in when clicked on the area
         * selectedColor indicates color of the clicked area.
         */
        map.areasSettings = {
            autoZoom: true,
            selectedColor: "#BC0130"
        };

        // let's say we want a small map to be displayed, so let's create it
        map.smallMap = new AmCharts.SmallMap();

        // write the map to container div
        map.write("mapdiv");

        map.addListener("clickMapObject", function (event) {
        
           chart.dataProvider = chartData[event.mapObject.id];
           chart.clearLabels();
           chart.addLabel("0", "!20", event.mapObject.title + " Crime Stats", "center", 16);
           chart.validateData();
           
         
       
        });
    });

