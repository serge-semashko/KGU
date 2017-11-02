"use strict";
var ncount = 0;
var newtime = new Date().getTime();
var starttime = new Date().getTime() - 1000000;
var chupdating = [false, false, false, false, false];
var ch2updating = false;
var ch3updating = false;
var step = 0;
var chart2count = 0;
var chart3count = 0;

function toChart(txtval) {
    txtval = txtval.toString();
    var t6 = Number(txtval.replace(/,/g, "."))
    t6 = Number(t6.toFixed(2));
    return t6;
}

function spliceData(elName, elData) {

    var selnum = document.getElementById(elName).options.selectedIndex;
    var needlen = 120;
    switch (selnum) {
        case 0:
            needlen = 120;
            break;
        case 1:
            needlen = 6 * 120;
            break;
        case 2:
            needlen = 24 * 120;
            break;
    }

    if (elData.length > needlen) {
        elData.splice(0, elData.length - needlen)
    }
}

function appendData(elSelectPeriod, elChart, elDataHist, elDataNow) {

    var selnum = document.getElementById(elSelectPeriod).options.selectedIndex;
    var selopt = document.getElementById(elSelectPeriod).options[selnum].value
    var newtime = new Date().getTime();

    var needlen = 120;
    switch (selopt) {
        case "online":
            needlen = 0;
            break;
        case "1h":
            needlen = 120;
            break;
        case "6h" :
            needlen = 6 * 120;
            break;
        case "24h":
            needlen = 24 * 120;
            break;
    }
    var deltime = (newtime - starttime);
    if (( deltime < 30000) && (needlen > 0)) return;
    if (needlen == 0) {
        needlen = 300;
    }
    elDataHist.push(elDataNow);
    if (elDataHist.length > needlen) {
        elDataHist.splice(0, elDataHist.length - needlen)
    }
    elChart.validateData();
}


function processData(t) {
    var r = [],
        o = 0;


    console.log('\n step 2\n');

    var a = t.VV[1].replace(/,/g, "."),
        i = t.VV[2].replace(/,/g, "."),
        d = t.VV[167].replace(/,/g, "."),
        l = Number(a),
        n = Number(i),
        c = Number(d);
    for (var h = 0; h < t.ID.length; ++h) {
        var s = t.ID[h];
        r[s] = 0;
        for (var g = t.VC[h], p = o; p < o + g; p++) "VALUE" == t.VN[p] && (r[s] = t.VV[p].replace(",", "."));
        o += g
    }
    $.each($(".data-table").find("div.int"), function () {
        var o = $(this).data("id");
        $(this).html(r[o])
    }), $.each($(".data-table").find("div.float"), function () {
        var o = $(this).data("id");
        $(this).html(parseFloat(r[o]).toFixed(3))
    });
    //                        console.log('\n step 3\n');

    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    k1t6 = toChart(r[12]);
    var k1t11 = toChart(r[28]);
    var k1t12 = toChart(r[29]);
    var k1t13 = toChart(r[111]);
    var k1t6 = toChart(r[12]);
    var k1t7 = toChart(r[26]);
    var k1t5 = toChart(r[11]);
    var k1t3 = toChart(r[9]);
    var k1t4 = toChart(r[10]);
    var k1dt5t6 = k1t5 - k1t6;
    var k1dt3t4 = k1t3 - k1t4;
    var k1sdt5t6 = k1dt5t6.toString();
    var k1sdt3t4 = k1dt3t4.toString();
    k1dt5t6 = toChart(k1sdt5t6);
    k1dt3t4 = toChart(k1sdt3t4);
    var k1sbr = toChart(r[35]);
    var k1vanna = toChart(r[36]);
    var k1bo1 = toChart(r[32]);
    var k1bo2 = toChart(r[33]);
    var sbrkgu1 = toChart(r[35]);
    var sbrkgu2 = toChart(r[85]);

    var k2t7 = toChart(r[76]);
    var k2t11 = toChart(r[78]);
    var k2t12 = toChart(r[79]);
    var k2t13 = toChart(r[112]);
    var k2t6 = toChart(r[62]);
    var k2t5 = toChart(r[61]);
    var k2t3 = toChart(r[59]);
    var k2t4 = toChart(r[60]);
    var k2dt5t6 = k2t5 - k2t6;
    var k2dt3t4 = k2t3 - k2t4;
    var k2sdt5t6 = k2dt5t6.toString();
    var k2sdt3t4 = k2dt3t4.toString();
    k2dt5t6 = toChart(k2sdt5t6);
    k2dt3t4 = toChart(k2sdt3t4);
    var k2sbr = toChart(r[85]);
    var k2vanna = toChart(r[86]);
    var k2bo1 = toChart(r[82]);
    var k2bo2 = toChart(r[83]);


    //amchart process
    var argx = newDate.format("H:i:s");

    newDatam2 = {
        time: argx,
        sbrkgu1: sbrkgu1,
        sbrkgu2: sbrkgu2,

        k1t6: k1t6,
        k1t7: k1t7,
        k1t11: k1t11,
        k1t12: k1t12,
        k1t13: k1t13,
        k1dt5t6: k1dt5t6,
        k1dt3t4: k1dt3t4,
        k1sbr: k1sbr,
        k1vanna: k1vanna,
        k1bo1: k1bo1,
        k1bo2: k1bo2,

        k2t6: k2t6,
        k2t7: k2t7,
        k2t11: k2t11,
        k2t12: k2t12,
        k2t13: k2t13,
        k2dt5t6: k2dt5t6,
        k2dt3t4: k2dt3t4,
        k2sbr: k2sbr,
        k2vanna: k2vanna,
        k2bo1: k2bo1,
        k2bo2: k2bo2,
    };

    newDatam2_1 = {
        time: argx,
        sbrkgu1: sbrkgu1,
        sbrkgu2: sbrkgu2,

        k1t6: k1t6,
        k1t7: k1t7,
        k1t11: k1t11,
        k1t12: k1t12,
        k1t13: k1t13,
        k1dt5t6: k1dt5t6,
        k1dt3t4: k1dt3t4,
        k1sbr: k1sbr,
        k1vanna: k1vanna,
        k1bo1: k1bo1,
        k1bo2: k1bo2,

        k2t6: k2t6,
        k2t7: k2t7,
        k2t11: k2t11,
        k2t12: k2t12,
        k2t13: k2t13,
        k2dt5t6: k2dt5t6,
        k2dt3t4: k2dt3t4,
        k2sbr: k2sbr,
        k2vanna: k2vanna,
        k2bo1: k2bo1,
        k2bo2: k2bo2,
    };
    newDatam2_2 = {
        time: argx,
        sbrkgu1: sbrkgu1,
        sbrkgu2: sbrkgu2,

        k1t6: k1t6,
        k1t7: k1t7,
        k1t11: k1t11,
        k1t12: k1t12,
        k1t13: k1t13,
        k1dt5t6: k1dt5t6,
        k1dt3t4: k1dt3t4,
        k1sbr: k1sbr,
        k1vanna: k1vanna,
        k1bo1: k1bo1,
        k1bo2: k1bo2,

        k2t6: k2t6,
        k2t7: k2t7,
        k2t11: k2t11,
        k2t12: k2t12,
        k2t13: k2t13,
        k2dt5t6: k2dt5t6,
        k2dt3t4: k2dt3t4,
        k2sbr: k2sbr,
        k2vanna: k2vanna,
        k2bo1: k2bo1,
        k2bo2: k2bo2,
    };


    newDatam3 = {
        time: argx,
        sbrkgu1: sbrkgu1,
        sbrkgu2: sbrkgu2,

        k1t6: k1t6,
        k1t7: k1t7,
        k1t11: k1t11,
        k1t12: k1t12,
        k1t13: k1t13,
        k1dt5t6: k1dt5t6,
        k1dt3t4: k1dt3t4,
        k1sbr: k1sbr,
        k1vanna: k1vanna,
        k1bo1: k1bo1,
        k1bo2: k1bo2,

        k2t6: k2t6,
        k2t7: k2t7,
        k2t11: k2t11,
        k2t12: k2t12,
        k2t13: k2t13,
        k2dt5t6: k2dt5t6,
        k2dt3t4: k2dt3t4,
        k2sbr: k2sbr,
        k2vanna: k2vanna,
        k2bo1: k2bo1,
        k2bo2: k2bo2,
    };

    newDatam3_1 = {
        time: argx,
        sbrkgu1: sbrkgu1,
        sbrkgu2: sbrkgu2,

        k1t6: k1t6,
        k1t7: k1t7,
        k1t11: k1t11,
        k1t12: k1t12,
        k1t13: k1t13,
        k1dt5t6: k1dt5t6,
        k1dt3t4: k1dt3t4,
        k1sbr: k1sbr,
        k1vanna: k1vanna,
        k1bo1: k1bo1,
        k1bo2: k1bo2,

        k2t6: k2t6,
        k2t7: k2t7,
        k2t11: k2t11,
        k2t12: k2t12,
        k2t13: k2t13,
        k2dt5t6: k2dt5t6,
        k2dt3t4: k2dt3t4,
        k2sbr: k2sbr,
        k2vanna: k2vanna,
        k2bo1: k2bo1,
        k2bo2: k2bo2,
    };
    newDatam3_2 = {
        time: argx,
        sbrkgu1: sbrkgu1,
        sbrkgu2: sbrkgu2,

        k1t6: k1t6,
        k1t7: k1t7,
        k1t11: k1t11,
        k1t12: k1t12,
        k1t13: k1t13,
        k1dt5t6: k1dt5t6,
        k1dt3t4: k1dt3t4,
        k1sbr: k1sbr,
        k1vanna: k1vanna,
        k1bo1: k1bo1,
        k1bo2: k1bo2,

        k2t6: k2t6,
        k2t7: k2t7,
        k2t11: k2t11,
        k2t12: k2t12,
        k2t13: k2t13,
        k2dt5t6: k2dt5t6,
        k2dt3t4: k2dt3t4,
        k2sbr: k2sbr,
        k2vanna: k2vanna,
        k2bo1: k2bo1,
        k2bo2: k2bo2,
    };
    newtime = new Date().getTime();
    appendData("ch2periodselect", chart2, chartData2, newDatam2);
    appendData("ch3periodselect", chart3, chartData3, newDatam3);
    appendData("ch2_1periodselect", chart2_1, chartData2_1, newDatam2_1);
    appendData("ch2_2periodselect", chart2_2, chartData2_2, newDatam2_2);
    appendData("ch3_1periodselect", chart3_1, chartData3_1, newDatam3_1);
    appendData("ch3_2periodselect", chart3_2, chartData3_2, newDatam3_2);
    var deltime = (newtime - starttime);
    if ((newtime - starttime) < 30000) return;
    starttime = newtime;
    return 0;

    //    chartData2.push(newDatam2);
    //    chartData2.push(newDatam2);
    // chartData2.push(newDatam2);
    // chart2.validateData();
    chartData2_1.push(newDatam2_1);
    chartData2_2.push(newDatam2_2);
    chartData3.push(newDatam3);
    chartData3_1.push(newDatam3_1);
    chartData3_2.push(newDatam3_2);
    //        console.log('\nregular: ' + JSON.stringify(chartData2));
    // spliceData("ch2periodselect", chartData2);
    spliceData("ch2_1periodselect", chartData2_1);
    spliceData("ch2_2periodselect", chartData2_2);
    spliceData("ch3periodselect", chartData3);
    spliceData("ch3_1periodselect", chartData3_1);
    spliceData("ch3_2periodselect", chartData3_2);

    // chart2.validateData();
    chart3.validateData();
    chart2_1.validateData();
    chart2_2.validateData();
    chart3_1.validateData();
    chart3_2.validateData();
    //amchart process/

}

function getAllData() {


    //                        console.log('\n step 1\n');

    var url = "http://127.0.0.1:9090/get_data=1&callback=?";
    //console.log("\n###Agetson nucloweb start");
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url,
        data: {
            "get_member": "id"
        },
        success: function (t) {
            processData(t);
        },
        error: function (error) {
            console.log("\n####AJAX  error:" + JSON.stringify(error));

        }
    })

    //                        //console.log('\n step chart 4 1\n');


}

function saveCookie(name, value) {
    Cookies.set(name, value);
}

function ch2modechange() {
    chupdating[2] = true;
    var selnum = document.getElementById("ch2modeselect").options.selectedIndex;
    Cookies.set("ch2modeselect", selnum);
    chart2.graphs = graphs2[selnum];
    chart2.validateData();
}

function ch2_1modechange() {
    chupdating[2] = true;
    var selnum = document.getElementById("ch2_1modeselect").options.selectedIndex;
    Cookies.set("ch2_1modeselect", selnum);
    chart2_1.graphs = graphs2_1[selnum];
    chart2_1.validateData();
}

function ch2_2modechange() {
    chupdating[2] = true;
    var selnum = document.getElementById("ch2_2modeselect").options.selectedIndex;
    Cookies.set("ch2_2modeselect", selnum);
    chart2_2.graphs = graphs2_2[selnum];
    chart2_2.validateData();
}

function ch3modechange() {
    chupdating[3] = true;
    var selnum = document.getElementById("ch3modeselect").options.selectedIndex;
    Cookies.set("ch3modeselect", selnum);
    chart3.graphs = graphs3[selnum];
    chart3.validateData();
}

function ch3_1modechange() {
    chupdating[3] = true;
    var selnum = document.getElementById("ch3_1modeselect").options.selectedIndex;
    Cookies.set("ch3_1modeselect", selnum);
    chart3_1.graphs = graphs3_1[selnum];
    chart3_1.validateData();
}

function ch3_2modechange() {
    chupdating[3] = true;
    var selnum = document.getElementById("ch3_2modeselect").options.selectedIndex;
    Cookies.set("ch3_2modeselect", selnum);
    chart3_2.graphs = graphs3_2[selnum];
    chart3_2.validateData();
}

function periodChange(elSelect, elChart, elData) {
    var selnum = document.getElementById(elSelect).options.selectedIndex;
    var selopt = document.getElementById(elSelect).options[selnum].value
    Cookies.set(elSelect, selnum);
    var needlen = 120;
    switch (selopt) {
        case "online":
            needlen = 0;
            break;
        case "1h":
            needlen = 120;
            break;
        case "6h" :
            needlen = 6 * 120;
            break;
        case "24h":
            needlen = 24 * 120;
            break;
    }
    updateChart(elData, elChart, needlen);
}

function ch2periodchange() {
    periodChange("ch2periodselect", chart2, chartData2)
}

function ch2_1periodchange() {
    periodChange("ch2_1periodselect", chart2_1, chartData2_1)
}

function ch2_2periodchange() {
    periodChange("ch2_2periodselect", chart2_2, chartData2_2)
}

function ch3periodchange() {
    periodChange("ch3periodselect", chart3, chartData3)
}

function ch3_1periodchange() {
    periodChange("ch3_1periodselect", chart3_1, chartData3_1)
}

function ch3_2periodchange() {
    periodChange("ch3_2periodselect", chart3_2, chartData3_2)
}


function objconv(indata) {
    var result = [];
    var sdate = indata[0];
    var ryear = '20' + sdate.substring(0, 2);
    var rmon = sdate.substring(3, 5);
    var rday = sdate.substring(6, 8);
    var rhour = sdate.substring(9, 11);
    var rmin = sdate.substring(12, 14);
    var rsec = sdate.substring(15, 17);
    //    //                        console.log(ryear + '.' + rmon + '.' + rday + '    ' + rhour + ':' + rmin + ':' + rsec);
    var rdate = new Date(Number(ryear), Number(rmon) - 1, rday, rhour, rmin, rsec);
    result[0] = rdate.getTime();
    for (var i = 1; i < indata.length; i++) {
        result[i] = toChart(indata[i]);

    }
    return result;
}

window.onload = function () {
    document.getElementById("defaultOpen").click();
    chart2 = AmCharts.makeChart("chart2", {
        "type": "serial",
        "theme": "light",
        "legend": {
            align: "right",
            valueWidth: 0,
            spacing: 10,
            markerSize: 14,
            fontSize: 12,
            //            "useGraphSettings": true
        },
        "dataProvider": chartData2,
        "synchronizeGrid": true,
        "graphs": graphs2[0],
        //        "chartScrollbar": {},
        "chartCursor": {
            "cursorPosition": "mouse"
        },
        "valueScrollbar": {
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 35
        },

        "categoryField": "time",
        "categoryAxis": {
            gridCount: 6,
            labelFrequency: 1,
            equalSpacing: true,
            "axisColor": "#DADADA",
            "minorGridEnabled": false
        },
        //        "export": {
        //            "enabled": true,
        //            "position": "bottom-right"
        //        }
    });

    chart2_1 = AmCharts.makeChart("chart2_1", {
        "type": "serial",
        "theme": "light",
        "legend": {
            align: "right",
            valueWidth: 0,
            spacing: 10,
            markerSize: 14,
            fontSize: 12,
            //            "useGraphSettings": true
        },
        "dataProvider": chartData2_1,
        "synchronizeGrid": true,
        "graphs": graphs2_1[0],
        //        "chartScrollbar": {},
        "chartCursor": {
            "cursorPosition": "mouse"
        },
        "valueScrollbar": {
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 35
        },

        "categoryField": "time",
        "categoryAxis": {
            gridCount: 6,
            labelFrequency: 1,
            equalSpacing: true,
            "axisColor": "#DADADA",
            "minorGridEnabled": false
        },
        //        "export": {
        //            "enabled": true,
        //            "position": "bottom-right"
        //        }
    });
    chart2_2 = AmCharts.makeChart("chart2_2", {
        "type": "serial",
        "theme": "light",
        "legend": {
            align: "right",
            valueWidth: 0,
            spacing: 10,
            markerSize: 14,
            fontSize: 12,
            //            "useGraphSettings": true
        },
        "dataProvider": chartData2_2,
        "synchronizeGrid": true,
        "graphs": graphs2_2[2],
        //        "chartScrollbar": {},
        "chartCursor": {
            "cursorPosition": "mouse"
        },
        "valueScrollbar": {
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 35
        },

        "categoryField": "time",
        "categoryAxis": {
            gridCount: 6,
            labelFrequency: 1,
            equalSpacing: true,
            "axisColor": "#DADADA",
            "minorGridEnabled": false
        },
        //        "export": {
        //            "enabled": true,
        //            "position": "bottom-right"
        //        }
    });


    chart3 = AmCharts.makeChart("chart3", {
        //        automarginlegend:"false",
        "type": "serial",
        "theme": "light",
        "legend": {
            align: "right",
            valueWidth: 0,
            spacing: 10,
            markerSize: 14,
            fontSize: 12,
            //            "useGraphSettings": true
        },
        "dataProvider": chartData3,
        "synchronizeGrid": true,
        "graphs": graphs3[0],
        //        "chartScrollbar": {},
        "chartCursor": {
            "cursorPosition": "mouse"
        },
        "valueScrollbar": {
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 35
        },

        "categoryField": "time",
        "categoryAxis": {
            gridCount: 5,
            labelFrequency: 1,
            equalSpacing: true,
            "axisColor": "#DADADA",
            "minorGridEnabled": false
        },
        //        "export": {
        //            "enabled": true,
        //            "position": "bottom-right"
        //        }
    });

    chart3_1 = AmCharts.makeChart("chart3_1", {
        //        automarginlegend:"false",
        "type": "serial",
        "theme": "light",
        "legend": {
            align: "right",
            valueWidth: 0,
            spacing: 10,
            markerSize: 14,
            fontSize: 12,
            //            "useGraphSettings": true
        },
        "dataProvider": chartData3_1,
        "synchronizeGrid": true,
        "graphs": graphs3_1[0],
        //        "chartScrollbar": {},
        "chartCursor": {
            "cursorPosition": "mouse"
        },
        "valueScrollbar": {
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 35
        },

        "categoryField": "time",
        "categoryAxis": {
            gridCount: 5,
            labelFrequency: 1,
            equalSpacing: true,
            "axisColor": "#DADADA",
            "minorGridEnabled": false
        },
        //        "export": {
        //            "enabled": true,
        //            "position": "bottom-right"
        //        }
    });
    chart3_2 = AmCharts.makeChart("chart3_2", {
        //        automarginlegend:"false",
        "type": "serial",
        "theme": "light",
        "legend": {
            align: "right",
            valueWidth: 0,
            spacing: 10,
            markerSize: 14,
            fontSize: 12,
            //            "useGraphSettings": true
        },
        "dataProvider": chartData3_2,
        "synchronizeGrid": true,
        "graphs": graphs3_2[2],
        //        "chartScrollbar": {},
        "chartCursor": {
            "cursorPosition": "mouse"
        },
        "valueScrollbar": {
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 35
        },

        "categoryField": "time",
        "categoryAxis": {
            gridCount: 5,
            labelFrequency: 1,
            equalSpacing: true,
            "axisColor": "#DADADA",
            "minorGridEnabled": false
        },
        //        "export": {
        //            "enabled": true,
        //            "position": "bottom-right"
        //        }
    });


    setModePeriod("2");
    setModePeriod("3");
    setModePeriod("3_1");
    setModePeriod("3_2");
    setModePeriod("2_1");
    setModePeriod("2_2");
    ch3periodchange();
    ch2periodchange();
    ch3_1periodchange();
    ch2_1periodchange();
    ch3_2periodchange();
    ch2_2periodchange();
    ch3modechange();
    ch2modechange();
    ch3_1modechange();
    ch2_1modechange();
    ch3_2modechange();
    ch2_2modechange();
    getAllData();
    setInterval(getAllData, 1000);
};

function setModePeriod(grId) {

    var elSelect = "ch" + grId + "modeselect";
    if (Cookies.get(elSelect) === undefined) {

    } else {
        document.getElementById(elSelect).options.selectedIndex = Cookies.get(elSelect);
    }
    var elSelect = "ch" + grId + "periodselect";
    if (Cookies.get(elSelect) === undefined) {

    } else {
        document.getElementById(elSelect).options.selectedIndex = Cookies.get(elSelect);
    }

}

function fixCh() {
}

function updateChart(chartD, chart, serlen) {
    var url = "127.0.0.1:9090/get_hist=1&callback=?";
    //console.log("\n###Agetson nucloweb start");
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url,
        data: {
            "get_member": "id"
        },
        success: function (histData) {
            //            console.log(" GET HISTORY" + JSON.stringify(histData));
            chartD.splice(0, chartD.length);
            Array.prototype.push.apply(chartD, histData);
            if (chartD.length > serlen) {
                chartD.splice(0, chartD.length - serlen)
            }
            chart.validateData();

        },
        error: function (error) {
            console.log("\n####AJAX  error:" + JSON.stringify(error));

        }
    })

    //                        //console.log('\n step chart 4 1\n');

}

function getDate() {
    var e = new Date,
        r = e.getFullYear(),
        o = e.getMonth() + 1,
        t = e.getDate(),
        a = e.getHours(),
        i = e.getMinutes(),
        d = e.getSeconds();
    d < 10 && (d = "0" + d), i < 10 && (i = "0" + i), r < 10 && (r = "0" + r), o < 10 && (o = "0" + o), t < 10 && (t = "0" + t), document.getElementById("timedisplay").innerHTML = t + "." + o + "." + r + "\t" + a + ":" + i + ":" + d
}

setInterval(getDate, 1000);
Date.prototype.format = function (format) {
    var returnStr = '';
    var replace = Date.replaceChars;
    for (var i = 0; i < format.length; i++) {
        var curChar = format.charAt(i);
        if (i - 1 >= 0 && format.charAt(i - 1) == "\\") {
            returnStr += curChar;
        } else if (replace[curChar]) {
            returnStr += replace[curChar].call(this);
        } else if (curChar != "\\") {
            returnStr += curChar;
        }
    }
    return returnStr;
};

Date.replaceChars = {
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    longMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    longDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

    // Day
    d: function () {
        return (this.getDate() < 10 ? '0' : '') + this.getDate();
    },
    D: function () {
        return Date.replaceChars.shortDays[this.getDay()];
    },
    j: function () {
        return this.getDate();
    },
    l: function () {
        return Date.replaceChars.longDays[this.getDay()];
    },
    N: function () {
        return this.getDay() + 1;
    },
    S: function () {
        return (this.getDate() % 10 == 1 && this.getDate() != 11 ? 'st' : (this.getDate() % 10 == 2 && this.getDate() != 12 ? 'nd' : (this.getDate() % 10 == 3 && this.getDate() != 13 ? 'rd' : 'th')));
    },
    w: function () {
        return this.getDay();
    },
    z: function () {
        var d = new Date(this.getFullYear(), 0, 1);
        return Math.ceil((this - d) / 86400000);
    }, // Fixed now
    // Week
    W: function () {
        var d = new Date(this.getFullYear(), 0, 1);
        return Math.ceil((((this - d) / 86400000) + d.getDay() + 1) / 7);
    }, // Fixed now
    // Month
    F: function () {
        return Date.replaceChars.longMonths[this.getMonth()];
    },
    m: function () {
        return (this.getMonth() < 9 ? '0' : '') + (this.getMonth() + 1);
    },
    M: function () {
        return Date.replaceChars.shortMonths[this.getMonth()];
    },
    n: function () {
        return this.getMonth() + 1;
    },
    t: function () {
        var d = new Date();
        return new Date(d.getFullYear(), d.getMonth(), 0).getDate()
    }, // Fixed now, gets #days of date
    // Year
    L: function () {
        var year = this.getFullYear();
        return (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0));
    }, // Fixed now
    o: function () {
        var d = new Date(this.valueOf());
        d.setDate(d.getDate() - ((this.getDay() + 6) % 7) + 3);
        return d.getFullYear();
    }, //Fixed now
    Y: function () {
        return this.getFullYear();
    },
    y: function () {
        return ('' + this.getFullYear()).substr(2);
    },
    // Time
    a: function () {
        return this.getHours() < 12 ? 'am' : 'pm';
    },
    A: function () {
        return this.getHours() < 12 ? 'AM' : 'PM';
    },
    B: function () {
        return Math.floor((((this.getUTCHours() + 1) % 24) + this.getUTCMinutes() / 60 + this.getUTCSeconds() / 3600) * 1000 / 24);
    }, // Fixed now
    g: function () {
        return this.getHours() % 12 || 12;
    },
    G: function () {
        return this.getHours();
    },
    h: function () {
        return ((this.getHours() % 12 || 12) < 10 ? '0' : '') + (this.getHours() % 12 || 12);
    },
    H: function () {
        return (this.getHours() < 10 ? '0' : '') + this.getHours();
    },
    i: function () {
        return (this.getMinutes() < 10 ? '0' : '') + this.getMinutes();
    },
    s: function () {
        return (this.getSeconds() < 10 ? '0' : '') + this.getSeconds();
    },
    u: function () {
        var m = this.getMilliseconds();
        return (m < 10 ? '00' : (m < 100 ?
            '0' : '')) + m;
    },
    // Timezone
    e: function () {
        return "Not Yet Supported";
    },
    I: function () {
        var DST = null;
        for (var i = 0; i < 12; ++i) {
            var d = new Date(this.getFullYear(), i, 1);
            var offset = d.getTimezoneOffset();

            if (DST === null) DST = offset;
            else if (offset < DST) {
                DST = offset;
                break;
            } else if (offset > DST) break;
        }
        return (this.getTimezoneOffset() == DST) | 0;
    },
    O: function () {
        return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + '00';
    },
    P: function () {
        return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + ':00';
    }, // Fixed now
    T: function () {
        var m = this.getMonth();
        this.setMonth(0);
        var result = this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/, '$1');
        this.setMonth(m);
        return result;
    },
    Z: function () {
        return -this.getTimezoneOffset() * 60;
    },
    // Full Date/Time
    c: function () {
        return this.format("Y-m-d\\TH:i:sP");
    }, // Fixed now
    r: function () {
        return this.toString();
    },
    U: function () {
        return this.getTime() / 1000;
    }
};
