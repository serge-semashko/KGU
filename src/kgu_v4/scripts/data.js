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
    [{
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k2t181",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k2t182",
            "fillAlphas": 0,
            "hidden": true,
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k2t191",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k2t192",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k2t201",
            "hidden": true,
            "fillAlphas": 0

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k2t202",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k2t211",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k2t212",
            "hidden": true,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
            "lineColor": "#250acb",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T11",
            "valueField": "k2t11",
            "fillAlphas": 0
        }, {
            "lineColor": "#66CC00",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T12",
            "valueField": "k2t12",
            "fillAlphas": 0
        }, {
            "lineColor": "#FF3300",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T13",
            "valueField": "k2t13",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [{
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k2t181",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k2t182",
            "fillAlphas": 0,
            "hidden": true,
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k2t191",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k2t192",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k2t201",
            "hidden": true,
            "fillAlphas": 0

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k2t202",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k2t211",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k2t212",
            "hidden": true,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
            "lineColor": "#250acb",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T7",
            "valueField": "k2t7",
            "fillAlphas": 0
        },
    ],

    //select 2 уровни

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Ванна",
        "valueField": "k2vanna",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "k2bo1",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "k2bo2",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }],
    //select 3 уровни КГУ-1 КГУ-2 

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ1",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ2",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, ],
];
var graphs2_1 = [
    //select 0 пусковой
    [{
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k2t181",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k2t182",
            "fillAlphas": 0,
            "hidden": true,
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k2t191",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k2t192",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k2t201",
            "hidden": true,
            "fillAlphas": 0

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k2t202",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k2t211",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k2t212",
            "hidden": true,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
            "lineColor": "#250acb",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T11",
            "valueField": "k2t11",
            "fillAlphas": 0
        }, {
            "lineColor": "#66CC00",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T12",
            "valueField": "k2t12",
            "fillAlphas": 0
        }, {
            "lineColor": "#FF3300",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T13",
            "valueField": "k2t13",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [{
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k2t181",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k2t182",
            "fillAlphas": 0,
            "hidden": true,
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k2t191",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k2t192",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k2t201",
            "hidden": true,
            "fillAlphas": 0

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k2t202",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k2t211",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k2t212",
            "hidden": true,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
            "lineColor": "#250acb",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T7",
            "valueField": "k2t7",
            "fillAlphas": 0
        },
    ],

    //select 2 уровни

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Ванна",
        "valueField": "k2vanna",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "k2bo1",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "k2bo2",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }],
    //select 3 уровни КГУ-1 КГУ-2 

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ1",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ2",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, ],
];
var graphs2_2 = [
    //select 0 пусковой
    [{
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k2t181",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k2t182",
            "fillAlphas": 0,
            "hidden": true,
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k2t191",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k2t192",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k2t201",
            "hidden": true,
            "fillAlphas": 0

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k2t202",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k2t211",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k2t212",
            "hidden": true,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
            "lineColor": "#250acb",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T11",
            "valueField": "k2t11",
            "fillAlphas": 0
        }, {
            "lineColor": "#66CC00",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T12",
            "valueField": "k2t12",
            "fillAlphas": 0
        }, {
            "lineColor": "#FF3300",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T13",
            "valueField": "k2t13",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [{
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k2t181",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k2t182",
            "fillAlphas": 0,
            "hidden": true,
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k2t191",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k2t192",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k2t201",
            "hidden": true,
            "fillAlphas": 0

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k2t202",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k2t211",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k2t212",
            "hidden": true,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
            "lineColor": "#250acb",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T7",
            "valueField": "k2t7",
            "fillAlphas": 0
        },
    ],

    //select 2 уровни

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Ванна",
        "valueField": "k2vanna",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "k2bo1",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "k2bo2",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }],
    //select 3 уровни КГУ-1 КГУ-2 

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ1",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ2",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, ],
];
//=================================KGU-2
var graphs3 = [
    //select 0 пусковой
    [
    {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k2t181",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k2t182",
            "fillAlphas": 0,
            "hidden": true,
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k2t191",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k2t192",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k2t201",
            "hidden": true,
            "fillAlphas": 0

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k2t202",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k2t211",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k2t212",
            "hidden": true,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
            "lineColor": "#250acb",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T11",
            "valueField": "k2t11",
            "fillAlphas": 0
        }, {
            "lineColor": "#66CC00",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T12",
            "valueField": "k2t12",
            "fillAlphas": 0
        }, {
            "lineColor": "#FF3300",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T13",
            "valueField": "k2t13",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [{
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k2t181",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k2t182",
            "fillAlphas": 0,
            "hidden": true,
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k2t191",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k2t192",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k2t201",
            "hidden": true,
            "fillAlphas": 0

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k2t202",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k2t211",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k2t212",
            "hidden": true,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
            "lineColor": "#250acb",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T7",
            "valueField": "k2t7",
            "fillAlphas": 0
        },
    ],

    //select 2 уровни

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Ванна",
        "valueField": "k2vanna",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "k2bo1",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "k2bo2",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }],
    //select 3 уровни КГУ-1 КГУ-2 

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ1",
        "valueField": "k1sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ2",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, ],
];
var graphs3_1 = [
    //select 0 пусковой
    [{
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k2t181",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k2t182",
            "fillAlphas": 0,
            "hidden": true,
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k2t191",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k2t192",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k2t201",
            "hidden": true,
            "fillAlphas": 0

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k2t202",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k2t211",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k2t212",
            "hidden": true,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
            "lineColor": "#250acb",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T11",
            "valueField": "k2t11",
            "fillAlphas": 0
        }, {
            "lineColor": "#66CC00",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T12",
            "valueField": "k2t12",
            "fillAlphas": 0
        }, {
            "lineColor": "#FF3300",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T13",
            "valueField": "k2t13",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [{
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k2t181",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k2t182",
            "fillAlphas": 0,
            "hidden": true,
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k2t191",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k2t192",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k2t201",
            "hidden": true,
            "fillAlphas": 0

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k2t202",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k2t211",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k2t212",
            "hidden": true,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
            "lineColor": "#250acb",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T7",
            "valueField": "k2t7",
            "fillAlphas": 0
        },
    ],

    //select 2 уровни

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Ванна",
        "valueField": "k2vanna",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "k2bo1",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "k2bo2",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }],
    //select 3 уровни КГУ-1 КГУ-2 

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ1",
        "valueField": "k1sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ2",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, ],
];
var graphs3_2 = [
    //select 0 пусковой
    [{
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k2t181",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k2t182",
            "fillAlphas": 0,
            "hidden": true,
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k2t191",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k2t192",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k2t201",
            "hidden": true,
            "fillAlphas": 0

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k2t202",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k2t211",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k2t212",
            "hidden": true,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
            "lineColor": "#250acb",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T11",
            "valueField": "k2t11",
            "fillAlphas": 0
        }, {
            "lineColor": "#66CC00",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T12",
            "valueField": "k2t12",
            "fillAlphas": 0
        }, {
            "lineColor": "#FF3300",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T13",
            "valueField": "k2t13",
            disableed: true,
            visible: false,
            "fillAlphas": 0
        }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [{
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k2t181",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T182",
            "valueField": "k2t182",
            "fillAlphas": 0,
            "hidden": true,
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T191",
            "valueField": "k2t191",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T192",
            "valueField": "k2t192",
            "fillAlphas": 0,
            "hidden": true

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T201",
            "valueField": "k2t201",
            "hidden": true,
            "fillAlphas": 0

        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T202",
            "valueField": "k2t202",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T211",
            "valueField": "k2t211",
            "hidden": true,
            "fillAlphas": 0
        }, {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T212",
            "valueField": "k2t212",
            "hidden": true,
            "fillAlphas": 0
        },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
            "lineColor": "#250acb",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T7",
            "valueField": "k2t7",
            "fillAlphas": 0
        },
    ],

    //select 2 уровни

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Ванна",
        "valueField": "k2vanna",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "k2bo1",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "k2bo2",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }],
    //select 3 уровни КГУ-1 КГУ-2 

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ1",
        "valueField": "k1sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ2",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, ],
];

// var graphs3 = [
//     //select 0 пусковой
//     [{
//         "lineColor": "#29A2CC",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "T6",
//         "valueField": "k2t6",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#250acb",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "T11",
//         "valueField": "k2t11",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#66CC00",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "T12",
//         "valueField": "k2t12",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#FF3300",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "T13",
//         "valueField": "k2t13",
//         disableed: true,
//         visible: false,
//         "fillAlphas": 0
//     }],
//     //select 1 рабочий
//     [{
//             "lineColor": "#29A2CC",
//             "bullet": "round",
//             "lineThickness": 3,
//             "bulletBorderThickness": 1,
//             "hideBulletsCount": 1,
//             "title": "T6",
//             "valueField": "k2t6",
//             "fillAlphas": 0
//         }, {
//             "lineColor": "#250acb",
//             "bullet": "round",
//             "lineThickness": 3,
//             "bulletBorderThickness": 1,
//             "hideBulletsCount": 1,
//             "title": "T7",
//             "valueField": "k2t7",
//             "fillAlphas": 0
//         },

//         {
//             "lineColor": "#66CC00",
//             "bullet": "round",
//             "lineThickness": 3,
//             "bulletBorderThickness": 1,
//             "hideBulletsCount": 1,
//             "title": "dT5-6",
//             "valueField": "k2dt5t6",
//             "fillAlphas": 0
//         }, {
//             "lineColor": "#FF3300",
//             "bullet": "round",
//             "lineThickness": 3,
//             "bulletBorderThickness": 1,
//             "hideBulletsCount": 1,
//             "title": "dT3-4",
//             "valueField": "k2dt3t4",
//             disableed: true,
//             visible: false,
//             "fillAlphas": 0
//         }
//     ],
//     //select 2 уровни

//     [{
//         "lineColor": "#29A2CC",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "Сборник",
//         "valueField": "k2sbr",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#66CC00",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "Ванна",
//         "valueField": "k2vanna",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#FF3300",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "БО1",
//         "valueField": "k2bo1",
//         disableed: true,
//         visible: false,
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#000000",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "БО2",
//         "valueField": "k2bo2",
//         disableed: true,
//         visible: false,
//         "fillAlphas": 0
//     }],
//     //select 3 уровни КГУ-1 КГУ-2 

//     [{
//         "lineColor": "#29A2CC",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "Сборник КГУ1",
//         "valueField": "k2sbr",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#66CC00",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "Сборник КГУ2",
//         "valueField": "k2sbr",
//         "fillAlphas": 0
//     }, ],

// ];

// var graphs3_1 = [
//     //select 0 пусковой
//     [{
//         "lineColor": "#29A2CC",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "T6",
//         "valueField": "k2t6",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#250acb",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "T11",
//         "valueField": "k2t11",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#66CC00",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "T12",
//         "valueField": "k2t12",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#FF3300",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "T13",
//         "valueField": "k2t13",
//         disableed: true,
//         visible: false,
//         "fillAlphas": 0
//     }],
//     //select 1 рабочий
//     [{
//             "lineColor": "#29A2CC",
//             "bullet": "round",
//             "lineThickness": 3,
//             "bulletBorderThickness": 1,
//             "hideBulletsCount": 1,
//             "title": "T6",
//             "valueField": "k2t6",
//             "fillAlphas": 0
//         }, {
//             "lineColor": "#250acb",
//             "bullet": "round",
//             "lineThickness": 3,
//             "bulletBorderThickness": 1,
//             "hideBulletsCount": 1,
//             "title": "T7",
//             "valueField": "k2t7",
//             "fillAlphas": 0
//         },

//         {
//             "lineColor": "#66CC00",
//             "bullet": "round",
//             "lineThickness": 3,
//             "bulletBorderThickness": 1,
//             "hideBulletsCount": 1,
//             "title": "dT5-6",
//             "valueField": "k2dt5t6",
//             "fillAlphas": 0
//         }, {
//             "lineColor": "#FF3300",
//             "bullet": "round",
//             "lineThickness": 3,
//             "bulletBorderThickness": 1,
//             "hideBulletsCount": 1,
//             "title": "dT3-4",
//             "valueField": "k2dt3t4",
//             disableed: true,
//             visible: false,
//             "fillAlphas": 0
//         }
//     ],
//     //select 2 уровни

//     [{
//         "lineColor": "#29A2CC",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "Сборник",
//         "valueField": "k2sbr",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#66CC00",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "Ванна",
//         "valueField": "k2vanna",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#FF3300",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "БО1",
//         "valueField": "k2bo1",
//         disableed: true,
//         visible: false,
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#000000",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "БО2",
//         "valueField": "k2bo2",
//         disableed: true,
//         visible: false,
//         "fillAlphas": 0
//     }],
//     //select 3 уровни КГУ-1 КГУ-2 

//     [{
//         "lineColor": "#29A2CC",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "Сборник КГУ1",
//         "valueField": "k2sbr",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#66CC00",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "Сборник КГУ2",
//         "valueField": "k2sbr",
//         "fillAlphas": 0
//     }, ],

// ];
// var graphs3_2 = [
//     //select 0 пусковой
//     [{
//         "lineColor": "#29A2CC",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "T6",
//         "valueField": "k2t6",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#250acb",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "T11",
//         "valueField": "k2t11",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#66CC00",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "T12",
//         "valueField": "k2t12",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#FF3300",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "T13",
//         "valueField": "k2t13",
//         disableed: true,
//         visible: false,
//         "fillAlphas": 0
//     }],
//     //select 1 рабочий
//     [{
//             "lineColor": "#29A2CC",
//             "bullet": "round",
//             "lineThickness": 3,
//             "bulletBorderThickness": 1,
//             "hideBulletsCount": 1,
//             "title": "T6",
//             "valueField": "k2t6",
//             "fillAlphas": 0
//         }, {
//             "lineColor": "#250acb",
//             "bullet": "round",
//             "lineThickness": 3,
//             "bulletBorderThickness": 1,
//             "hideBulletsCount": 1,
//             "title": "T7",
//             "valueField": "k2t7",
//             "fillAlphas": 0
//         },

//         {
//             "lineColor": "#66CC00",
//             "bullet": "round",
//             "lineThickness": 3,
//             "bulletBorderThickness": 1,
//             "hideBulletsCount": 1,
//             "title": "dT5-6",
//             "valueField": "k2dt5t6",
//             "fillAlphas": 0
//         }, {
//             "lineColor": "#FF3300",
//             "bullet": "round",
//             "lineThickness": 3,
//             "bulletBorderThickness": 1,
//             "hideBulletsCount": 1,
//             "title": "dT3-4",
//             "valueField": "k2dt3t4",
//             disableed: true,
//             visible: false,
//             "fillAlphas": 0
//         }
//     ],
//     //select 2 уровни

//     [{
//         "lineColor": "#29A2CC",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "Сборник",
//         "valueField": "k2sbr",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#66CC00",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "Ванна",
//         "valueField": "k2vanna",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#FF3300",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "БО1",
//         "valueField": "k2bo1",
//         disableed: true,
//         visible: false,
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#000000",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "БО2",
//         "valueField": "k2bo2",
//         disableed: true,
//         visible: false,
//         "fillAlphas": 0
//     }],
//     //select 3 уровни КГУ-1 КГУ-2 

//     [{
//         "lineColor": "#29A2CC",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "Сборник КГУ1",
//         "valueField": "k2sbr",
//         "fillAlphas": 0
//     }, {
//         "lineColor": "#66CC00",
//         "bullet": "round",
//         "lineThickness": 3,
//         "bulletBorderThickness": 1,
//         "hideBulletsCount": 1,
//         "title": "Сборник КГУ2",
//         "valueField": "k2sbr",
//         "fillAlphas": 0
//     }, ],

// ];


var firstDate = new Date();
// var k2t6;
// var k2t12;
// var k2t13;
// var k2t6;
// var k2t12;
// var k2t13;

//amchart/
//canvasjs
var k2dps1 = []; // dataPoints
var k2dps2 = []; // dataPoints
var k2dps3 = []; // dataPoints
var k2dps4 = []; // dataPoints
var k2dps1 = []; // dataPoints
var k2dps2 = []; // dataPoints
var k2dps3 = []; // dataPoints
var k2dps4 = []; // dataPoints

var chartk2js = {};
var chartk2js = {};

var xVal = 0;
var yVal1 = 100;
var yVal2 = 220;
var yVal3 = 10;
var updateInterval = 1;
var dataLength = 60; // number of dataPoints visible at any point

//canvasjs/
