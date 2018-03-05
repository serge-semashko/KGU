//amchart
var chart2 = {};
var chart3 = {};
var chart2_1 = {};
var chart3_1 = {};
var chart2_2 = {};
var chart3_2 = {};
var newDatam2 = {};
var newDatam3 = {};
var newDatam2_1 = {};
var newDatam3_1 = {};
var newDatam2_2 = {};
var newDatam3_2 = {};
var chartData2 = [];
var chartData3 = [];
var chartData2_1 = [];
var chartData3_1 = [];
var chartData2_2 = [];
var chartData3_2 = [];

var graphs2 = [
    //select 0 пусковой
    [
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k1t181",
            "fillAlphas": 0,
		"hidden": true
		
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k1t182",
            "fillAlphas": 0,
		"hidden": true ,
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k1t191",
            "fillAlphas": 0,
		"hidden": true

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k1t192",
            "fillAlphas": 0,
		"hidden": true

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k1t201",
		"hidden": true ,
            "fillAlphas": 0

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k1t202",
		"hidden": true ,
            "fillAlphas": 0
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k1t211",
		"hidden": true ,
            "fillAlphas": 0
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k1t212",
		"hidden": true ,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k1t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#250acb",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T11",
            "valueField": "k1t11",
            "fillAlphas": 0
        },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T12",
            "valueField": "k1t12",
            "fillAlphas": 0
        },
        {
            "lineColor": "#FF3300",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T13",
            "valueField": "k1t13",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [
            {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k1t181",
            "fillAlphas": 0,
		"hidden": true
		
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k1t182",
            "fillAlphas": 0,
		"hidden": true ,
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k1t191",
            "fillAlphas": 0,
		"hidden": true

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k1t192",
            "fillAlphas": 0,
		"hidden": true

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k1t201",
		"hidden": true ,
            "fillAlphas": 0

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k1t202",
		"hidden": true ,
            "fillAlphas": 0
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k1t211",
		"hidden": true ,
            "fillAlphas": 0
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k1t212",
		"hidden": true ,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k1t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#250acb",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T7",
            "valueField": "k1t7",
            "fillAlphas": 0
        },
    ],

    //select 2 уровни

    [{
        "lineColor": "#29A2CC",
        "bullet": "round", "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник",
        "valueField": "k1sbr",
        "fillAlphas": 0
    },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Ванна",
            "valueField": "k1vanna",
            "fillAlphas": 0
        }, {
        "lineColor": "#FF3300",
        "bullet": "round", "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "k1bo1",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round", "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "k1bo2",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }],
//select 3 уровни КГУ-1 КГУ-2 

    [{
        "lineColor": "#29A2CC",
        "bullet": "round", "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ1",
        "valueField": "k1sbr",
        "fillAlphas": 0
    },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник КГУ2",
            "valueField": "k2sbr",
            "fillAlphas": 0
        },],
];
var graphs2_1 = [
    //select 0 пусковой
    [
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k1t181",
            "fillAlphas": 0,
		"hidden": true
		
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k1t182",
            "fillAlphas": 0,
		"hidden": true ,
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k1t191",
            "fillAlphas": 0,
		"hidden": true

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k1t192",
            "fillAlphas": 0,
		"hidden": true

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k1t201",
		"hidden": true ,
            "fillAlphas": 0

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k1t202",
		"hidden": true ,
            "fillAlphas": 0
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k1t211",
		"hidden": true ,
            "fillAlphas": 0
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k1t212",
		"hidden": true ,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k1t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#250acb",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T11",
            "valueField": "k1t11",
            "fillAlphas": 0
        },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T12",
            "valueField": "k1t12",
            "fillAlphas": 0
        },
        {
            "lineColor": "#FF3300",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T13",
            "valueField": "k1t13",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [
            {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k1t181",
            "fillAlphas": 0,
		"hidden": true
		
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k1t182",
            "fillAlphas": 0,
		"hidden": true ,
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k1t191",
            "fillAlphas": 0,
		"hidden": true

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k1t192",
            "fillAlphas": 0,
		"hidden": true

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k1t201",
		"hidden": true ,
            "fillAlphas": 0

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k1t202",
		"hidden": true ,
            "fillAlphas": 0
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k1t211",
		"hidden": true ,
            "fillAlphas": 0
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k1t212",
		"hidden": true ,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k1t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#250acb",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T7",
            "valueField": "k1t7",
            "fillAlphas": 0
        },
    ],

    //select 2 уровни

    [{
        "lineColor": "#29A2CC",
        "bullet": "round", "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник",
        "valueField": "k1sbr",
        "fillAlphas": 0
    },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Ванна",
            "valueField": "k1vanna",
            "fillAlphas": 0
        }, {
        "lineColor": "#FF3300",
        "bullet": "round", "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "k1bo1",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round", "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "k1bo2",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }],
//select 3 уровни КГУ-1 КГУ-2 

    [{
        "lineColor": "#29A2CC",
        "bullet": "round", "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ1",
        "valueField": "k1sbr",
        "fillAlphas": 0
    },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник КГУ2",
            "valueField": "k2sbr",
            "fillAlphas": 0
        },],
];
var graphs2_2 =  [
    //select 0 пусковой
    [
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k1t181",
            "fillAlphas": 0,
		"hidden": true
		
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k1t182",
            "fillAlphas": 0,
		"hidden": true ,
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k1t191",
            "fillAlphas": 0,
		"hidden": true

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k1t192",
            "fillAlphas": 0,
		"hidden": true

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k1t201",
		"hidden": true ,
            "fillAlphas": 0

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k1t202",
		"hidden": true ,
            "fillAlphas": 0
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k1t211",
		"hidden": true ,
            "fillAlphas": 0
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k1t212",
		"hidden": true ,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k1t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#250acb",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T11",
            "valueField": "k1t11",
            "fillAlphas": 0
        },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T12",
            "valueField": "k1t12",
            "fillAlphas": 0
        },
        {
            "lineColor": "#FF3300",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T13",
            "valueField": "k1t13",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [
            {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k1t181",
            "fillAlphas": 0,
		"hidden": true
		
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k1t182",
            "fillAlphas": 0,
		"hidden": true ,
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k1t191",
            "fillAlphas": 0,
		"hidden": true

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k1t192",
            "fillAlphas": 0,
		"hidden": true

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k1t201",
		"hidden": true ,
            "fillAlphas": 0

        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k1t202",
		"hidden": true ,
            "fillAlphas": 0
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k1t211",
		"hidden": true ,
            "fillAlphas": 0
        },
        {
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k1t212",
		"hidden": true ,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k1t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#250acb",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T7",
            "valueField": "k1t7",
            "fillAlphas": 0
        },
    ],

    //select 2 уровни

    [{
        "lineColor": "#29A2CC",
        "bullet": "round", "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник",
        "valueField": "k1sbr",
        "fillAlphas": 0
    },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Ванна",
            "valueField": "k1vanna",
            "fillAlphas": 0
        }, {
        "lineColor": "#FF3300",
        "bullet": "round", "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "k1bo1",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round", "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "k1bo2",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }],
//select 3 уровни КГУ-1 КГУ-2 

    [{
        "lineColor": "#29A2CC",
        "bullet": "round", "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ1",
        "valueField": "k1sbr",
        "fillAlphas": 0
    },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник КГУ2",
            "valueField": "k2sbr",
            "fillAlphas": 0
        },],
];



var graphs3 = [
    //select 0 пусковой
    [
        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#250acb",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T11",
            "valueField": "k2t11",
            "fillAlphas": 0
        },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T12",
            "valueField": "k2t12",
            "fillAlphas": 0
        },
        {
            "lineColor": "#FF3300",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T13",
            "valueField": "k2t13",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }],
    //select 1 рабочий
    [
        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#250acb",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T7",
            "valueField": "k2t7",
            "fillAlphas": 0
        },

        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "dT5-6",
            "valueField": "k2dt5t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#FF3300",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "dT3-4",
            "valueField": "k2dt3t4",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }],
    //select 2 уровни

    [
        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник",
            "valueField": "k2sbr",
            "fillAlphas": 0
        },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Ванна",
            "valueField": "k2vanna",
            "fillAlphas": 0
        },
        {
            "lineColor": "#FF3300",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "БО1",
            "valueField": "k2bo1",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        },
        {
            "lineColor": "#000000",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "БО2",
            "valueField": "k2bo2",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }],
//select 3 уровни КГУ-1 КГУ-2 

    [
        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник КГУ1",
            "valueField": "k1sbr",
            "fillAlphas": 0
        },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник КГУ2",
            "valueField": "k2sbr",
            "fillAlphas": 0
        },],

];

var graphs3_1 = [
    //select 0 пусковой
    [
        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#250acb",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T11",
            "valueField": "k2t11",
            "fillAlphas": 0
        },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T12",
            "valueField": "k2t12",
            "fillAlphas": 0
        },
        {
            "lineColor": "#FF3300",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T13",
            "valueField": "k2t13",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }],
    //select 1 рабочий
    [
        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#250acb",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T7",
            "valueField": "k2t7",
            "fillAlphas": 0
        },

        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "dT5-6",
            "valueField": "k2dt5t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#FF3300",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "dT3-4",
            "valueField": "k2dt3t4",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }],
    //select 2 уровни

    [
        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник",
            "valueField": "k2sbr",
            "fillAlphas": 0
        },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Ванна",
            "valueField": "k2vanna",
            "fillAlphas": 0
        },
        {
            "lineColor": "#FF3300",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "БО1",
            "valueField": "k2bo1",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        },
        {
            "lineColor": "#000000",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "БО2",
            "valueField": "k2bo2",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }],
//select 3 уровни КГУ-1 КГУ-2 

    [
        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник КГУ1",
            "valueField": "k1sbr",
            "fillAlphas": 0
        },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник КГУ2",
            "valueField": "k2sbr",
            "fillAlphas": 0
        },],

];
var graphs3_2 = [
    //select 0 пусковой
    [
        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#250acb",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T11",
            "valueField": "k2t11",
            "fillAlphas": 0
        },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T12",
            "valueField": "k2t12",
            "fillAlphas": 0
        },
        {
            "lineColor": "#FF3300",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T13",
            "valueField": "k2t13",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }],
    //select 1 рабочий
    [
        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#250acb",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T7",
            "valueField": "k2t7",
            "fillAlphas": 0
        },

        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "dT5-6",
            "valueField": "k2dt5t6",
            "fillAlphas": 0
        },
        {
            "lineColor": "#FF3300",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "dT3-4",
            "valueField": "k2dt3t4",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }],
    //select 2 уровни

    [
        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник",
            "valueField": "k2sbr",
            "fillAlphas": 0
        },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Ванна",
            "valueField": "k2vanna",
            "fillAlphas": 0
        },
        {
            "lineColor": "#FF3300",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "БО1",
            "valueField": "k2bo1",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        },
        {
            "lineColor": "#000000",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "БО2",
            "valueField": "k2bo2",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }],
//select 3 уровни КГУ-1 КГУ-2 

    [
        {
            "lineColor": "#29A2CC",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник КГУ1",
            "valueField": "k1sbr",
            "fillAlphas": 0
        },
        {
            "lineColor": "#66CC00",
            "bullet": "round", "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник КГУ2",
            "valueField": "k2sbr",
            "fillAlphas": 0
        },],

];


var firstDate = new Date();
// var k1t6;
// var k1t12;
// var k1t13;
// var k2t6;
// var k2t12;
// var k2t13;

//amchart/
//canvasjs
var k1dps1 = []; // dataPoints
var k1dps2 = []; // dataPoints
var k1dps3 = []; // dataPoints
var k2dps4 = []; // dataPoints
var k2dps1 = []; // dataPoints
var k2dps2 = []; // dataPoints
var k2dps3 = []; // dataPoints
var k2dps4 = []; // dataPoints

var chartk1js = {};
var chartk2js = {};

var xVal = 0;
var yVal1 = 100;
var yVal2 = 220;
var yVal3 = 10;
var updateInterval = 1;
var dataLength = 60; // number of dataPoints visible at any point

//canvasjs/
var zconf2 = {
    legend: {
        layout: "1x3",
        x: "12%",
        y: "3%"
    },
    type: "line",
    "background-color": "#F2F8FE",
    utc: 0,
    plotarea: {
        "background-color": "#F2F8FE"
    },
    "scale-x": {
        "max-items": 6,
        shadow: 3,
        "line-color": "#111",
        tick: {
            "line-color": "#111"
        },
        guide: {
            visible: true, //set to false by default on some chart types
            lineColor: "#ccc",
            "line-style": "solid",
            lineWidth: 1
        },
        item: {
            "font-color": "#111"
        },
        transform: {
            type: "date",
            all: "%H:%i:%s",
            guide: {
                visible: 1
            },
            item: {
                visible: !1
            }
        },
        label: {
            visible: !1
        },
        "tick": {
            "line-color": "#111",
            "line-width": 1,
            "line-style": "solid",
            //            "size": 10,
            "placement": "outer"
        },
        "minor-ticks": 4,
        "minor-tick": {
            //            "line-color": "red",
            "line-width": 1,
            "line-style": "solid",
            "size": 4,
            "placement": "outer"
        }
    },
    "scale-y": {
        "max-items": 6,
        "line-color": "#111",
        shadow: 0,
        tick: {
            "line-color": "#111"
        },
        guide: {
            "line-color": "#ccc",
            "line-style": "solid"
        },
        item: {
            "font-color": "#111"
        },
        label: {
            text: "",
            "font-color": "#111"
        },
        "minor-ticks": 4,
        "thousands-separator": ","
    },
    "crosshair-x": {
        "line-color": "#111",
        "plot-label": {
            multiple: !0,
            padding: "5px"
        },
        "scale-label": {
            "font-color": "#00baf0",
            "background-color": "#111",
            "border-radius": "5px"
        }
    },
    tooltip: {
        visible: 1
    },
    plot: {
        "tooltip-text": "%t views: %v<br>%k",
        shadow: 0,
        "line-width": "3px",
        marker: {
            type: "circle",
            size: 3
        },
        "hover-marker": {
            type: "circle",
            size: 4,
            "border-width": "1px"
        }
    }
};
var series_0 = [{
    values: [],
    text: "T6",
    "line-color": "#29A2CC",
    "legend-marker": {
        type: "circle",
        size: 5,
        "background-color": "#29A2CC",
        "border-width": 1,
        shadow: 0,
        "border-color": "#69dbf1"
    },
    marker: {
        visible: false,
        "background-color": "#29A2CC",
        "border-width": 1,
        shadow: 0,
        "border-color": "#69dbf1"
    },
    "guide-label": {
        text: "%t %v",
        "background-color": "#29A2CC",
        color: "#fff",
        "font-weight": "bold",
        "font-size": "14px",
        "border-width": 0
    }
}, {
    values: [],
    text: "T12",
    "line-color": "#66CC00",
    "legend-marker": {
        type: "circle",
        size: 5,
        "background-color": "#66CC00",
        "border-width": 1,
        shadow: 0,
        "border-color": "#66CC00"
    },
    marker: {
        visible: false,
        "background-color": "#66CC00",
        "border-width": 1,
        shadow: 0,
        "border-color": "#66CC00"
    },
    "guide-label": {
        text: "%t %v",
        "background-color": "#66CC00",
        color: "#fff",
        "font-weight": "bold",
        "font-size": "14px",
        "border-width": 0
    }
}, {
    values: [],
    text: "T13",
    "line-color": "#FF3300",
    "legend-marker": {
        type: "circle",
        size: 5,
        "background-color": "#FF3300",
        "border-width": 1,
        shadow: 0,
        "border-color": "#FF3300"
    },
    marker: {
        "visible": false,
        "background-color": "#FF3300",
        "border-width": 1,
        shadow: 0,
        "border-color": "#FF3300"
    },
    "guide-label": {
        text: "%t %v",
        "background-color": "#FF3300",
        color: "#fff",
        "font-weight": "bold",
        "font-size": "14px",
        "border-width": 0
    }
}];

var zconf2_0 = {
    legend: {
        layout: "1x3",
        x: "12%",
        y: "3%"
    },
    type: "line",
    "background-color": "#F2F8FE",
    utc: 0,
    plotarea: {
        "background-color": "#F2F8FE"
    },
    "scale-x": {
        "max-items": 6,
        shadow: 3,
        "line-color": "#111",
        tick: {
            "line-color": "#111"
        },
        guide: {
            visible: true, //set to false by default on some chart types
            lineColor: "#ccc",
            "line-style": "solid",
            lineWidth: 1
        },
        item: {
            "font-color": "#111"
        },
        transform: {
            type: "date",
            all: "%H:%i:%s",
            guide: {
                visible: 1
            },
            item: {
                visible: !1
            }
        },
        label: {
            visible: !1
        },
        "tick": {
            "line-color": "#111",
            "line-width": 1,
            "line-style": "solid",
            //            "size": 10,
            "placement": "outer"
        },
        "minor-ticks": 4,
        "minor-tick": {
            //            "line-color": "red",
            "line-width": 1,
            "line-style": "solid",
            "size": 4,
            "placement": "outer"
        }
    },
    "scale-y": {
        "max-items": 6,
        "line-color": "#111",
        shadow: 0,
        tick: {
            "line-color": "#111"
        },
        guide: {
            "line-color": "#ccc",
            "line-style": "solid"
        },
        item: {
            "font-color": "#111"
        },
        label: {
            text: "",
            "font-color": "#111"
        },
        "minor-ticks": 4,
        "thousands-separator": ","
    },
    "crosshair-x": {
        "line-color": "#111",
        "plot-label": {
            multiple: !0,
            padding: "5px"
        },
        "scale-label": {
            "font-color": "#00baf0",
            "background-color": "#111",
            "border-radius": "5px"
        }
    },
    tooltip: {
        visible: 1
    },
    plot: {
        "tooltip-text": "%t views: %v<br>%k",
        shadow: 0,
        "line-width": "3px",
        marker: {
            type: "circle",
            size: 3
        },
        "hover-marker": {
            type: "circle",
            size: 4,
            "border-width": "1px"
        }
    },
    series: [{
        values: [],
        text: "T6",
        "line-color": "#29A2CC",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        marker: {
            visible: false,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#29A2CC",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "T12",
        "line-color": "#66CC00",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        marker: {
            visible: false,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#66CC00",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "T13",
        "line-color": "#FF3300",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#FF3300",
            "border-width": 1,
            shadow: 0,
            "border-color": "#FF3300"
        },
        marker: {
            "visible": false,
            "background-color": "#FF3300",
            "border-width": 1,
            shadow: 0,
            "border-color": "#FF3300"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#FF3300",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }]
};
var zconf2_1 = {
    legend: {
        layout: "1x3",
        x: "12%",
        y: "3%"
    },
    type: "line",
    "background-color": "#F2F8FE",
    utc: 0,
    plotarea: {
        "background-color": "#F2F8FE"
    },
    "scale-x": {
        "max-items": 6,
        shadow: 3,
        "line-color": "#111",
        tick: {
            "line-color": "#111"
        },
        guide: {
            visible: true, //set to false by default on some chart types
            lineColor: "#ccc",
            "line-style": "solid",
            lineWidth: 1
        },
        item: {
            "font-color": "#111"
        },
        transform: {
            type: "date",
            all: "%H:%i:%s",
            guide: {
                visible: 1
            },
            item: {
                visible: !1
            }
        },
        label: {
            visible: !1
        },
        "tick": {
            "line-color": "#111",
            "line-width": 1,
            "line-style": "solid",
            //            "size": 10,
            "placement": "outer"
        },
        "minor-ticks": 4,
        "minor-tick": {
            //            "line-color": "red",
            "line-width": 1,
            "line-style": "solid",
            "size": 4,
            "placement": "outer"
        }
    },
    "scale-y": {
        "max-items": 6,
        "line-color": "#111",
        shadow: 0,
        tick: {
            "line-color": "#111"
        },
        guide: {
            "line-color": "#ccc",
            "line-style": "solid"
        },
        item: {
            "font-color": "#111"
        },
        label: {
            text: "",
            "font-color": "#111"
        },
        "minor-ticks": 4,
        "thousands-separator": ","
    },
    "crosshair-x": {
        "line-color": "#111",
        "plot-label": {
            multiple: !0,
            padding: "5px"
        },
        "scale-label": {
            "font-color": "#00baf0",
            "background-color": "#111",
            "border-radius": "25px"
        }
    },
    tooltip: {
        visible: 1
    },
    plot: {
        "tooltip-text": "%t views: %v<br>%k",
        shadow: 0,
        "line-width": "3px",
        marker: {
            type: "circle",
            size: 3
        },
        "hover-marker": {
            type: "circle",
            size: 4,
            "border-width": "1px"
        }
    },
    series: [{
        values: [],
        text: "T6",
        "line-color": "#29A2CC",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        marker: {
            visible: false,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#29A2CC",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "T5-6",
        "line-color": "#66CC00",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        marker: {
            visible: false,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#66CC00",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "dT3-4",
        "line-color": "#FF3300",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#FF3300",
            "border-width": 1,
            shadow: 0,
            "border-color": "#FF3300"
        },
        marker: {
            "visible": false,
            "background-color": "#FF3300",
            "border-width": 1,
            shadow: 0,
            "border-color": "#FF3300"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#FF3300",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }]
};
var zconf2_2 = {
    legend: {
        layout: "1x4",
        x: "1%",
        y: "3%"
    },
    type: "line",
    "background-color": "#F2F8FE",
    utc: 0,
    plotarea: {
        "background-color": "#F2F8FE"
    },
    "scale-x": {
        "max-items": 6,
        shadow: 3,
        "line-color": "#111",
        tick: {
            "line-color": "#111"
        },
        guide: {
            visible: true, //set to false by default on some chart types
            lineColor: "#ccc",
            lineWidth: 1
        },
        item: {
            "font-color": "#111"
        },
        transform: {
            type: "date",
            all: "%H:%i:%s",
            guide: {
                visible: 1
            },
            item: {
                visible: !1
            }
        },
        label: {
            visible: !1
        },
        "tick": {
            "line-color": "#111",
            "line-width": 1,
            "line-style": "solid",
            //            "size": 10,
            "placement": "outer"
        },
        "minor-ticks": 4,
        "minor-tick": {
            //            "line-color": "red",
            "line-width": 1,
            "line-style": "solid",
            "size": 4,
            "placement": "outer"
        }
    },
    "scale-y": {
        "max-items": 6,
        "line-color": "#111",
        shadow: 0,
        tick: {
            "line-color": "#111"
        },
        guide: {
            "line-color": "#ccc",
            "line-style": "solid"
        },
        item: {
            "font-color": "#111"
        },
        label: {
            text: "",
            "font-color": "#111"
        },
        "minor-ticks": 4,
        "thousands-separator": ","
    },
    "crosshair-x": {
        "line-color": "#111",
        "plot-label": {
            multiple: !0,
            padding: "5px"
        },
        "scale-label": {
            "font-color": "#00baf0",
            "background-color": "#111",
            "border-radius": "5px"
        }
    },
    tooltip: {
        visible: !1
    },
    plot: {
        "tooltip-text": "%t views: %v<br>%k",
        shadow: 0,
        "line-width": "3px",
        marker: {
            type: "circle",
            size: 3
        },
        "hover-marker": {
            type: "circle",
            size: 4,
            "border-width": "1px"
        }
    },
    series: [{
        values: [],
        text: "Сборник",
        "line-color": "#29A2CC",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        marker: {
            visible: false,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#29A2CC",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "Ванна",
        "line-color": "#66CC00",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        marker: {
            visible: false,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#66CC00",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    },
        {
            values: [],
            text: "БО1",
            "line-color": "#FF3300",
            "legend-marker": {
                type: "circle",
                size: 5,
                "background-color": "#FF3300",
                "border-width": 1,
                shadow: 0,
                "border-color": "#FF3300"
            },
            marker: {
                "visible": false,
                "background-color": "#FF3300",
                "border-width": 1,
                shadow: 0,
                "border-color": "#FF3300"
            },
            "guide-label": {
                text: "%t %v",
                "background-color": "#FF3300",
                color: "#fff",
                "font-weight": "bold",
                "font-size": "14px",
                "border-width": 0
            }
        },
        {
            values: [],
            text: "БО2",
            "line-color": "#000000",
            "legend-marker": {
                type: "circle",
                size: 5,
                "background-color": "#000000",
                "border-width": 1,
                shadow: 0,
                "border-color": "#000000"
            },
            marker: {
                "visible": false,
                "background-color": "#FF3300",
                "border-width": 1,
                shadow: 0,
                "border-color": "#FF3300"
            },
            "guide-label": {
                text: "%t %v",
                "background-color": "#FF3300",
                color: "#fff",
                "font-weight": "bold",
                "font-size": "14px",
                "border-width": 0
            }
        }

    ]
};
var zconf2_3 = {
    legend: {
        layout: "1x3",
        x: "12%",
        y: "3%"
    },
    type: "line",
    "background-color": "#F2F8FE",
    utc: 0,
    plotarea: {
        "background-color": "#F2F8FE"
    },
    "scale-x": {
        "max-items": 6,
        shadow: 3,
        "line-color": "#111",
        tick: {
            "line-color": "#111"
        },
        guide: {
            visible: true, //set to false by default on some chart types
            lineColor: "#ccc",
            "line-style": "solid",
            lineWidth: 1
        },
        item: {
            "font-color": "#111"
        },
        transform: {
            type: "date",
            all: "%H:%i:%s",
            guide: {
                visible: 1
            },
            item: {
                visible: !1
            }
        },
        label: {
            visible: !1
        },
        "tick": {
            "line-color": "#111",
            "line-width": 1,
            "line-style": "solid",
            //            "size": 10,
            "placement": "outer"
        },
        "minor-ticks": 4,
        "minor-tick": {
            //            "line-color": "red",
            "line-width": 1,
            "line-style": "solid",
            "size": 4,
            "placement": "outer"
        }
    },
    "scale-y": {
        "max-items": 6,
        "line-color": "#111",
        shadow: 0,
        tick: {
            "line-color": "#111"
        },
        guide: {
            "line-color": "#ccc",
            "line-style": "solid"
        },
        item: {
            "font-color": "#111"
        },
        label: {
            text: "",
            "font-color": "#111"
        },
        "minor-ticks": 4,
        "thousands-separator": ","
    },
    "crosshair-x": {
        "line-color": "#111",
        "plot-label": {
            multiple: !0,
            padding: "5px"
        },
        "scale-label": {
            "font-color": "#00baf0",
            "background-color": "#111",
            "border-radius": "5px"
        }
    },
    tooltip: {
        visible: !1
    },
    plot: {
        "tooltip-text": "%t views: %v<br>%k",
        shadow: 0,
        "line-width": "3px",
        marker: {
            type: "circle",
            size: 3
        },
        "hover-marker": {
            type: "circle",
            size: 4,
            "border-width": "1px"
        }
    },
    series: [{
        values: [],
        text: "Сборник КГУ1",
        "line-color": "#29A2CC",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        marker: {
            visible: false,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#29A2CC",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "Сборник КГУ2",
        "line-color": "#66CC00",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        marker: {
            visible: false,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#66CC00",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }]
};
var zconf3_0 = {
    legend: {
        layout: "1x3",
        x: "12%",
        y: "3%"
    },
    type: "line",
    "background-color": "#F2F8FE",
    utc: 0,
    plotarea: {
        "background-color": "#F2F8FE"
    },
    "scale-x": {
        "max-items": 6,
        shadow: 3,
        "line-color": "#111",
        tick: {
            "line-color": "#111"
        },
        guide: {
            visible: true, //set to false by default on some chart types
            lineColor: "#ccc",
            "line-style": "solid",
            lineWidth: 1
        },
        item: {
            "font-color": "#111"
        },
        transform: {
            type: "date",
            all: "%H:%i:%s",
            guide: {
                visible: 1
            },
            item: {
                visible: !1
            }
        },
        label: {
            visible: !1
        },
        "tick": {
            "line-color": "#111",
            "line-width": 1,
            "line-style": "solid",
            //            "size": 10,
            "placement": "outer"
        },
        "minor-ticks": 4,
        "minor-tick": {
            //            "line-color": "red",
            "line-width": 1,
            "line-style": "solid",
            "size": 4,
            "placement": "outer"
        }
    },
    "scale-y": {
        "max-items": 6,
        "line-color": "#111",
        shadow: 0,
        tick: {
            "line-color": "#111"
        },
        guide: {
            "line-color": "#ccc",
            "line-style": "solid"
        },
        item: {
            "font-color": "#111"
        },
        label: {
            text: "",
            "font-color": "#111"
        },
        "minor-ticks": 4,
        "thousands-separator": ","
    },
    "crosshair-x": {
        "line-color": "#111",
        "plot-label": {
            multiple: !0,
            padding: "5px"
        },
        "scale-label": {
            "font-color": "#00baf0",
            "background-color": "#111",
            "border-radius": "5px"
        }
    },
    tooltip: {
        visible: !1
    },
    plot: {
        "tooltip-text": "%t views: %v<br>%k",
        shadow: 0,
        "line-width": "3px",
        marker: {
            type: "circle",
            size: 3
        },
        "hover-marker": {
            type: "circle",
            size: 4,
            "border-width": "1px"
        }
    },
    series: [{
        values: [],
        text: "T6",
        "line-color": "#29A2CC",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        marker: {
            visible: false,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#29A2CC",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "T12",
        "line-color": "#66CC00",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        marker: {
            visible: false,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#66CC00",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "T13",
        "line-color": "#FF3300",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#FF3300",
            "border-width": 1,
            shadow: 0,
            "border-color": "#FF3300"
        },
        marker: {
            "visible": false,
            "background-color": "#FF3300",
            "border-width": 1,
            shadow: 0,
            "border-color": "#FF3300"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#FF3300",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }]
};
var zconf3_1 = {
    legend: {
        layout: "1x3",
        x: "12%",
        y: "3%"
    },
    type: "line",
    "background-color": "#F2F8FE",
    utc: 0,
    plotarea: {
        "background-color": "#F2F8FE"
    },
    "scale-x": {
        "max-items": 6,
        shadow: 3,
        "line-color": "#111",
        tick: {
            "line-color": "#111"
        },
        guide: {
            visible: true, //set to false by default on some chart types
            lineColor: "#ccc",
            "line-style": "solid",
            lineWidth: 1
        },
        item: {
            "font-color": "#111"
        },
        transform: {
            type: "date",
            all: "%H:%i:%s",
            guide: {
                visible: 1
            },
            item: {
                visible: !1
            }
        },
        label: {
            visible: !1
        },
        "tick": {
            "line-color": "#111",
            "line-width": 1,
            "line-style": "solid",
            //            "size": 10,
            "placement": "outer"
        },
        "minor-ticks": 4,
        "minor-tick": {
            //            "line-color": "red",
            "line-width": 1,
            "line-style": "solid",
            "size": 4,
            "placement": "outer"
        }
    },
    "scale-y": {
        "max-items": 6,
        "line-color": "#111",
        shadow: 0,
        tick: {
            "line-color": "#111"
        },
        guide: {
            "line-color": "#ccc",
            "line-style": "solid"
        },
        item: {
            "font-color": "#111"
        },
        label: {
            text: "",
            "font-color": "#111"
        },
        "minor-ticks": 4,
        "thousands-separator": ","
    },
    "crosshair-x": {
        "line-color": "#111",
        "plot-label": {
            multiple: !0,
            padding: "5px"
        },
        "scale-label": {
            "font-color": "#00baf0",
            "background-color": "#111",
            "border-radius": "5px"
        }
    },
    tooltip: {
        visible: !1
    },
    plot: {
        "tooltip-text": "%t views: %v<br>%k",
        shadow: 0,
        "line-width": "3px",
        marker: {
            type: "circle",
            size: 3
        },
        "hover-marker": {
            type: "circle",
            size: 4,
            "border-width": "1px"
        }
    },
    series: [{
        values: [],
        text: "T6",
        "line-color": "#29A2CC",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        marker: {
            visible: false,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#29A2CC",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "dT5-6",
        "line-color": "#66CC00",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        marker: {
            visible: false,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#66CC00",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "dT3-4",
        "line-color": "#FF3300",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#FF3300",
            "border-width": 1,
            shadow: 0,
            "border-color": "#FF3300"
        },
        marker: {
            "visible": false,
            "background-color": "#FF3300",
            "border-width": 1,
            shadow: 0,
            "border-color": "#FF3300"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#FF3300",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }]
};
var zconf3_2 = {
    legend: {
        layout: "1x4",
        x: "1%",
        y: "3%"
    },
    type: "line",
    "background-color": "#F2F8FE",
    utc: 0,
    plotarea: {
        "background-color": "#F2F8FE"
    },
    "scale-x": {
        "max-items": 6,
        shadow: 3,
        "line-color": "#111",
        tick: {
            "line-color": "#111"
        },
        guide: {
            visible: true, //set to false by default on some chart types
            lineColor: "#ccc",
            "line-style": "solid",
            lineWidth: 1
        },
        item: {
            "font-color": "#111"
        },
        transform: {
            type: "date",
            all: "%H:%i:%s",
            guide: {
                visible: 1
            },
            item: {
                visible: !1
            }
        },
        label: {
            visible: !1
        },
        "tick": {
            "line-color": "#111",
            "line-width": 1,
            "line-style": "solid",
            //            "size": 10,
            "placement": "outer"
        },
        "minor-ticks": 4,
        "minor-tick": {
            //            "line-color": "red",
            "line-width": 1,
            "line-style": "solid",
            "size": 4,
            "placement": "outer"
        }
    },
    "scale-y": {
        "max-items": 6,
        "line-color": "#111",
        shadow: 0,
        tick: {
            "line-color": "#111"
        },
        guide: {
            "line-color": "#ccc",
            "line-style": "solid"
        },
        item: {
            "font-color": "#111"
        },
        label: {
            text: "",
            "font-color": "#111"
        },
        "minor-ticks": 4,
        "thousands-separator": ","
    },
    "crosshair-x": {
        "line-color": "#111",
        "plot-label": {
            multiple: !0,
            padding: "5px"
        },
        "scale-label": {
            "font-color": "#00baf0",
            "background-color": "#111",
            "border-radius": "5px"
        }
    },
    tooltip: {
        visible: !1
    },
    plot: {
        "tooltip-text": "%t views: %v<br>%k",
        shadow: 0,
        "line-width": "3px",
        marker: {
            type: "circle",
            size: 3
        },
        "hover-marker": {
            type: "circle",
            size: 4,
            "border-width": "1px"
        }
    },
    series: [{
        values: [],
        text: "Сборник",
        "line-color": "#29A2CC",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        marker: {
            visible: false,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#29A2CC",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "Ванна",
        "line-color": "#66CC00",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        marker: {
            visible: false,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#66CC00",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    },
        {
            values: [],
            text: "БО1",
            "line-color": "#FF3300",
            "legend-marker": {
                type: "circle",
                size: 5,
                "background-color": "#FF3300",
                "border-width": 1,
                shadow: 0,
                "border-color": "#FF3300"
            },
            marker: {
                "visible": false,
                "background-color": "#FF3300",
                "border-width": 1,
                shadow: 0,
                "border-color": "#FF3300"
            },
            "guide-label": {
                text: "%t %v",
                "background-color": "#FF3300",
                color: "#fff",
                "font-weight": "bold",
                "font-size": "14px",
                "border-width": 0
            }
        },
        {
            values: [],
            text: "БО2",
            "line-color": "#000000",
            "legend-marker": {
                type: "circle",
                size: 5,
                "background-color": "#000000",
                "border-width": 1,
                shadow: 0,
                "border-color": "#000000"
            },
            marker: {
                "visible": false,
                "background-color": "#FF3300",
                "border-width": 1,
                shadow: 0,
                "border-color": "#FF3300"
            },
            "guide-label": {
                text: "%t %v",
                "background-color": "#FF3300",
                color: "#fff",
                "font-weight": "bold",
                "font-size": "14px",
                "border-width": 0
            }
        }

    ]
};
var zconf3_3 = {
    legend: {
        layout: "1x3",
        x: "12%",
        y: "3%"
    },
    type: "line",
    "background-color": "#F2F8FE",
    utc: 0,
    plotarea: {
        "background-color": "#F2F8FE"
    },
    "scale-x": {
        "max-items": 6,
        shadow: 3,
        "line-color": "#111",
        tick: {
            "line-color": "#111"
        },
        guide: {
            visible: true, //set to false by default on some chart types
            lineColor: "#ccc",
            "line-style": "solid",
            lineWidth: 1
        },
        item: {
            "font-color": "#111"
        },
        transform: {
            type: "date",
            all: "%H:%i:%s",
            guide: {
                visible: 1
            },
            item: {
                visible: !1
            }
        },
        label: {
            visible: !1
        },
        "tick": {
            "line-color": "#111",
            "line-width": 1,
            "line-style": "solid",
            //            "size": 10,
            "placement": "outer"
        },
        "minor-ticks": 4,
        "minor-tick": {
            //            "line-color": "red",
            "line-width": 1,
            "line-style": "solid",
            "size": 4,
            "placement": "outer"
        }
    },
    "scale-y": {
        "max-items": 6,
        "line-color": "#111",
        shadow: 0,
        tick: {
            "line-color": "#111"
        },
        guide: {
            "line-color": "#ccc",
            "line-style": "solid"
        },
        item: {
            "font-color": "#111"
        },
        label: {
            text: "",
            "font-color": "#111"
        },
        "minor-ticks": 4,
        "thousands-separator": ","
    },
    "crosshair-x": {
        "line-color": "#111",
        "plot-label": {
            multiple: !0,
            padding: "5px"
        },
        "scale-label": {
            "font-color": "#00baf0",
            "background-color": "#111",
            "border-radius": "5px"
        }
    },
    tooltip: {
        visible: !1
    },
    plot: {
        "tooltip-text": "%t views: %v<br>%k",
        shadow: 0,
        "line-width": "3px",
        marker: {
            type: "circle",
            size: 3
        },
        "hover-marker": {
            type: "circle",
            size: 4,
            "border-width": "1px"
        }
    },
    series: [{
        values: [],
        text: "Сборник КГУ1",
        "line-color": "#29A2CC",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        marker: {
            visible: false,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#29A2CC",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "Сборник КГУ2",
        "line-color": "#66CC00",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        marker: {
            visible: false,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#66CC00",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }]
};

var zconf1 = {
    legend: {
        layout: "1x3",
        x: "12%",
        y: "3%"
    },
    type: "line",
    "background-color": "#F2F8FE",
    utc: 0,
    plotarea: {
        "background-color": "#F2F8FE"
    },
    "scale-x": {
        shadow: 0,
        "line-color": "#111",
        tick: {
            "line-color": "#111"
        },
        guide: {
            "line-color": "#111"
        },
        item: {
            "font-color": "#111"
        },
        transform: {
            type: "date",
            all: "%H:%i:%s",
            guide: {
                visible: !1
            },
            item: {
                visible: !1
            }
        },
        label: {
            visible: !1
        },
        "minor-ticks": 0
    },
    "scale-y": {
        values: "0:180:10",
        "line-color": "#111",
        shadow: 0,
        tick: {
            "line-color": "#111"
        },
        guide: {
            "line-color": "#ccc",
            "line-style": "solid"
        },
        item: {
            "font-color": "#111"
        },
        label: {
            text: "",
            "font-color": "#111"
        },
        "minor-ticks": 0,
        "thousands-separator": ","
    },
    "crosshair-x": {
        "line-color": "#111",
        "plot-label": {
            multiple: !0,
            padding: "5px"
        },
        "scale-label": {
            "font-color": "#00baf0",
            "background-color": "#111",
            "border-radius": "5px"
        }
    },
    tooltip: {
        visible: !1
    },
    plot: {
        "tooltip-text": "%t views: %v<br>%k",
        shadow: 0,
        "line-width": "3px",
        marker: {
            type: "circle",
            size: 3
        },
        "hover-marker": {
            type: "circle",
            size: 4,
            "border-width": "1px"
        }
    },
    series: [{
        values: [],
        text: "Param1",
        "line-color": "#29A2CC",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        marker: {
            visible: false,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#29A2CC",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "Param2",
        "line-color": "#66CC00",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        marker: {
            visible: false,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#66CC00",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "Param3",
        "line-color": "#FF3300",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#FF3300",
            "border-width": 1,
            shadow: 0,
            "border-color": "#FF3300"
        },
        marker: {
            visible: false,
            "background-color": "#FF3300",
            "border-width": 1,
            shadow: 0,
            "border-color": "#FF3300"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#FF3300",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }]
};
var zconf4 = {
    legend: {
        layout: "1x3",
        x: "12%",
        y: "3%"
    },
    type: "line",
    "background-color": "#F2F8FE",
    utc: 0,
    plotarea: {
        "background-color": "#F2F8FE"
    },
    "scale-x": {
        shadow: 0,
        "line-color": "#111",
        tick: {
            "line-color": "#111"
        },
        guide: {
            "line-color": "#111"
        },
        item: {
            "font-color": "#111"
        },
        transform: {
            type: "date",
            all: "%H:%i:%s",
            guide: {
                visible: !1
            },
            item: {
                visible: !1
            }
        },
        label: {
            visible: !1
        },
        "minor-ticks": 0
    },
    "scale-y": {
        values: "0:180:10",
        "line-color": "#111",
        shadow: 0,
        tick: {
            "line-color": "#111"
        },
        guide: {
            "line-color": "#ccc",
            "line-style": "solid"
        },
        item: {
            "font-color": "#111"
        },
        label: {
            text: "",
            "font-color": "#111"
        },
        "minor-ticks": 0,
        "thousands-separator": ","
    },
    "crosshair-x": {
        "line-color": "#111",
        "plot-label": {
            multiple: !0,
            padding: "5px"
        },
        "scale-label": {
            "font-color": "#00baf0",
            "background-color": "#111",
            "border-radius": "5px"
        }
    },
    tooltip: {
        visible: !1
    },
    plot: {
        "tooltip-text": "%t views: %v<br>%k",
        shadow: 0,
        "line-width": "3px",
        marker: {
            type: "circle",
            size: 3
        },
        "hover-marker": {
            type: "circle",
            size: 4,
            "border-width": "1px"
        }
    },
    series: [{
        values: [],
        text: "Param1",
        "line-color": "#29A2CC",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        marker: {
            visible: false,
            "background-color": "#29A2CC",
            "border-width": 1,
            shadow: 0,
            "border-color": "#69dbf1"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#29A2CC",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "Param2",
        "line-color": "#66CC00",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        marker: {
            visible: false,
            "background-color": "#66CC00",
            "border-width": 1,
            shadow: 0,
            "border-color": "#66CC00"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#66CC00",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        values: [],
        text: "Param3",
        "line-color": "#FF3300",
        "legend-marker": {
            type: "circle",
            size: 5,
            "background-color": "#FF3300",
            "border-width": 1,
            shadow: 0,
            "border-color": "#FF3300"
        },
        marker: {
            visible: false,
            "background-color": "#FF3300",
            "border-width": 1,
            shadow: 0,
            "border-color": "#FF3300"
        },
        "guide-label": {
            text: "%t %v",
            "background-color": "#FF3300",
            color: "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }]
};
