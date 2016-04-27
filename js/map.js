$(document).ready(function(){



var map = L.map('map', {
        center: [39.883076, -75.164383],
        zoom: 11
    });
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

    var myIcon = L.icon({
        iconUrl: 'images/icon.png',
        iconSize: [40, 40],
        iconAnchor: [22, 10]
    });
    var myIcon2 = L.icon({
        iconUrl: 'images/icon2.png',
        iconSize: [40, 40],
        iconAnchor: [22, 10]
    });
    var myIcon3 = L.icon({
        iconUrl: 'images/icon3.png',
        iconSize: [40, 40],
        iconAnchor: [22, 10]
    });
    var myIcon4 = L.icon({
        iconUrl: 'images/icon4.png',
        iconSize: [40, 40],
        iconAnchor: [22, 10]
    });
    var style1 = {
        fill: true,
        fillColor:'#00f500',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }

    var style2 = {
        fill: true,
        fillColor:'#94f700',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }

    var style3 = {
        fill: true,
        fillColor:'#f5f500',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }

    var style4 = {
        fill: true,
        fillColor:'#fc8b00',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }

    var style5 = {
        fill: true,
        fillColor:'#f50000',
        fillOpacity: 1,
        color : '#000',
        weight: 3
    }

    var style6 = {
        fill: true,
        fillColor:'#55d296',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }

    var style7 = {
        fill: true,
        fillColor:'#32acbb',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }
    var style8 = {
        fill: true,
        fillColor:'#c835e3',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }
    var style9 = {
        color : '#f30f1f',
        weight: 5
    }

    var style10 = {
        color : '#af319f',
        fillOpacity: 1,
        weight: 5
    }

    var style11 = {
        fillColor: '#5a310a',
        fillOpacity: 1,
        weight: 5
    }
    function eachMidatlanticstates(feature, layer){
        //var poblation = Number(feature.properties.TOTPOP);
        //if(poblation >= 0 && poblation <= 1826){
        //    layer.setStyle(style1);
        //}else if(poblation >= 1827 && poblation <= 3313){
        //    layer.setStyle(style2);
        //}else if(poblation >= 3314 && poblation <= 4566){
        //    layer.setStyle(style3);
        //}else if(poblation >= 4567 && poblation <= 5948){
        //    layer.setStyle(style4);
        //}else if(poblation >= 5949){
        //    layer.setStyle(style5);
        //}
        layer.setStyle(style6);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>REGION10</th><td>'+feature.properties.REGION10+'</td> </tr> ' +
            '<tr> <th>DIVISION10</th><td>'+feature.properties.DIVISION10+'</td></tr> ' +
            '<tr> <th>STATEFP10</th> <td>'+feature.properties.STATEFP10+'</td> </tr> ' +
            '<tr> <th>01779798</th> <td>'+feature.properties.STATENS10+'</td> </tr> ' +
            '<tr> <th>NAME10</th> <td>'+feature.properties.NAME10+'</td> </tr> ' +
            '<tr> <th>MTFCC10</th> <td>'+feature.properties.MTFCC10+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };


    var midatlanticstatesMap = L.geoJson(midatlanticstates, {
        onEachFeature: eachMidatlanticstates
    }).addTo(map);



    function eachTract(feature, layer){
        var poblation = Number(feature.properties.TOTPOP);
        if(poblation >= 0 && poblation <= 1826){
            layer.setStyle(style1);
        }else if(poblation >= 1827 && poblation <= 3313){
            layer.setStyle(style2);
        }else if(poblation >= 3314 && poblation <= 4566){
            layer.setStyle(style3);
        }else if(poblation >= 4567 && poblation <= 5948){
            layer.setStyle(style4);
        }else if(poblation >= 5949){
            layer.setStyle(style5);
        }
                var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>TOTPOP</th><td>'+feature.properties.TOTPOP+'</td> </tr> ' +
            '<tr> <th>COUNTYFP10</th><td>'+feature.properties.COUNTYFP10+'</td></tr> ' +
            '<tr> <th>TRACTCE10</th> <td>'+feature.properties.TRACTCE10+'</td> </tr> ' +
            '<tr> <th>GEOID10</th> <td>'+feature.properties.GEOID10+'</td> </tr> ' +
            '<tr> <th>NAME10</th> <td>'+feature.properties.NAME10+'</td> </tr> ' +
            '<tr> <th>NAMELSAD10</th> <td>'+feature.properties.NAMELSAD10+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

        var tractsMap = L.geoJson(tracts, {
        onEachFeature: eachTract
    }).addTo(map);
    var percents =  '<div class="table-responsive"><table class="table" id="table-percents"><tr> <td id="percent-1"></td> <td>0 - 1826</td> </tr> <tr> <td id="percent-2"></td><td>1827 - 3313</td> </tr> <tr> <td id="percent-3"></td> <td>3314 - 4566</td> </tr> <tr> <td id="percent-4"></td> <td>4567 - 5948</td></tr><tr> <td id="percent-5"></td> <td>5949 - 8322</td></tr> </table></div>';
    $("#percents").html(percents);


    function eachPhilaPPR(feature, layer){
        //var poblation = Number(feature.properties.TOTPOP);
        //if(poblation >= 0 && poblation <= 1826){
        //    layer.setStyle(style1);
        //}else if(poblation >= 1827 && poblation <= 3313){
        //    layer.setStyle(style2);
        //}else if(poblation >= 3314 && poblation <= 4566){
        //    layer.setStyle(style3);
        //}else if(poblation >= 4567 && poblation <= 5948){
        //    layer.setStyle(style4);
        //}else if(poblation >= 5949){
        //    layer.setStyle(style5);
        //}
        layer.setStyle(style7);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>OBJECTID</th><td>'+feature.properties.OBJECTID+'</td> </tr> ' +
            '<tr> <th>NAME</th><td>'+feature.properties.NAME+'</td></tr> ' +
            '<tr> <th>ACRES</th> <td>'+feature.properties.ACRES+'</td> </tr> ' +
            '<tr> <th>DISTRICT</th> <td>'+feature.properties.DISTRICT+'</td> </tr> ' +
            '<tr> <th>ADDRESS</th> <td>'+feature.properties.ADDRESS+'</td> </tr> ' +
            '<tr> <th>PARK</th> <td>'+feature.properties.PARK+'</td> </tr> ' +
            '<tr> <th>ZIPCODE</th> <td>'+feature.properties.ZIPCODE+'</td> </tr> ' +
            '<tr> <th>SHAPE_AREA</th> <td>'+feature.properties.SHAPE_AREA+'</td> </tr> ' +
            '<tr> <th>SHAPE_LEN</th> <td>'+feature.properties.SHAPE_LEN+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var philaPPRMap = L.geoJson(philaPPR, {
        onEachFeature: eachPhilaPPR
    }).addTo(map);

    function eachGrocery(feature, layer){
        layer.setIcon(myIcon);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>Status</th><td>'+feature.properties.Status+'</td> </tr> ' +
            '<tr> <th>Score</th><td>'+feature.properties.Score+'</td></tr> ' +
            '<tr> <th>Address</th> <td>'+feature.properties.Address+'</td> </tr> ' +
            '<tr> <th>Neighborho</th> <td>'+feature.properties.Neighborho+'</td> </tr> ' +
            '<tr> <th>GroceryR_1</th> <td>'+feature.properties.GroceryR_1+'</td> </tr> ' +
            '<tr> <th>Name_1</th> <td>'+feature.properties.Name_1+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var groceriesMap = L.geoJson(groceries,{
        onEachFeature: eachGrocery
    }).addTo(map);


    function eachHighway(feature, layer){
        layer.setStyle(style9);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>NAME</th><td>'+feature.properties.NAME+'</td> </tr> ' +
            '<tr> <th>CLASS</th><td>'+feature.properties.CLASS+'</td></tr> ' +
            '<tr> <th>LANES</th> <td>'+feature.properties.LANES+'</td> </tr> ' +
            '<tr> <th>KM</th> <td>'+feature.properties.KM+'</td> </tr> ' +
            '<tr> <th>MILES</th> <td>'+feature.properties.MILES_1+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var highwaysMap = L.geoJson(highways,{
        onEachFeature: eachHighway
    }).addTo(map);

    function eachSeptahighlines(feature, layer){
        layer.setStyle(style11);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>LINE</th><td>'+feature.properties.LINE+'</td> </tr> ' +
            '<tr> <th>SHAPE_len</th><td>'+feature.properties.SHAPE_len+'</td></tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var septahighlinesMap = L.geoJson(septahighlines,{
        onEachFeature: eachSeptahighlines
    }).addTo(map);

    function eachAltfuel(feature, layer){
        layer.setIcon(myIcon2);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>FuelType</th><td>'+feature.properties.FuelType+'</td> </tr> ' +
            '<tr> <th>Name</th><td>'+feature.properties.Name+'</td></tr> ' +
            '<tr> <th>Address</th> <td>'+feature.properties.Address+'</td> </tr> ' +
            '<tr> <th>City</th> <td>'+feature.properties.City+'</td> </tr> ' +
            '<tr> <th>StationPho</th> <td>'+feature.properties.StationPho+'</td> </tr> ' +
            '<tr> <th>AcessTime</th> <td>'+feature.properties.AcessTime+'</td> </tr> ' +
            '<tr> <th>CardsAccep</th> <td>'+feature.properties.CardsAccep+'</td> </tr> ' +
            '<tr> <th>AccessGrou</th> <td>'+feature.properties.AccessGrou+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var altfuelsMap = L.geoJson(altfuels,{
        onEachFeature: eachAltfuel
    }).addTo(map);

    function eachSeptahighstations(feature, layer){
        layer.setIcon(myIcon4);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>STOP_NAME</th><td>'+feature.properties.STOP_NAME+'</td> </tr> ' +
            '<tr> <th>ONSTREET</th><td>'+feature.properties.ONSTREET+'</td></tr> ' +
            '<tr> <th>ON_SUFFIX</th> <td>'+feature.properties.ON_SUFFIX+'</td> </tr> ' +
            '<tr> <th>ATSTREET</th> <td>'+feature.properties.ATSTREET+'</td> </tr> ' +
            '<tr> <th>AT_SUFFIX</th> <td>'+feature.properties.AT_SUFFIX+'</td> </tr> ' +
            '<tr> <th>STOP_DIREC</th> <td>'+feature.properties.STOP_DIREC+'</td> </tr> ' +
            '<tr> <th>TAXI_STAND</th> <td>'+feature.properties.TAXI_STAND+'</td> </tr> ' +
            '<tr> <th>REST_ROOM</th> <td>'+feature.properties.REST_ROOM+'</td> </tr> ' +
            '<tr> <th>LINE_NAME</th> <td>'+feature.properties.LINE_NAME+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var septahighstationsMap = L.geoJson(septahighstations,{
        onEachFeature: eachSeptahighstations
    }).addTo(map);

    function eachAmtraklines(feature, layer){
        layer.setStyle(style10);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>FRAARCID</th><td>'+feature.properties.FRAARCID+'</td> </tr> ' +
            '<tr> <th>MILES</th><td>'+feature.properties.MILES+'</td></tr> ' +
            '<tr> <th>STATEAB</th> <td>'+feature.properties.STATEAB+'</td> </tr> ' +
            '<tr> <th>STATEFIPS</th> <td>'+feature.properties.STATEFIPS+'</td> </tr> ' +
            '<tr> <th>CNTYFIPS</th> <td>'+feature.properties.CNTYFIPS+'</td> </tr> ' +
            '<tr> <th>STCNTYFIPS</th> <td>'+feature.properties.STCNTYFIPS+'</td> </tr> ' +
            '<tr> <th>SUBDIV</th> <td>'+feature.properties.SUBDIV+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var amtraklinesMap = L.geoJson(amtraklines,{
        onEachFeature: eachAmtraklines
    }).addTo(map);

    function eachAmtrakstations(feature, layer){
        layer.setIcon(myIcon3);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>STNCODE</th><td>'+feature.properties.STNNAME+'</td> </tr> ' +
            '<tr> <th>STNNAME</th><td>'+feature.properties.STNNAME+'</td></tr> ' +
            '<tr> <th>ADDRESS1</th> <td>'+feature.properties.ADDRESS1+'</td> </tr> ' +
            '<tr> <th>ADDRESS2</th> <td>'+feature.properties.ADDRESS2+'</td> </tr> ' +
            '<tr> <th>CITY</th> <td>'+feature.properties.CITY+'</td> </tr> ' +
            '<tr> <th>STATE</th> <td>'+feature.properties.STATE+'</td> </tr> ' +
            '<tr> <th>ZIP</th> <td>'+feature.properties.ZIP+'</td> </tr> ' +
            '<tr> <th>STNTYPE</th> <td>'+feature.properties.STNTYPE+'</td> </tr> ' +
            '<tr> <th>STFIPS</th> <td>'+feature.properties.STFIPS+'</td> </tr> ' +
            '<tr> <th>VERSION</th> <td>'+feature.properties.VERSION+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var amtrakstationsMap = L.geoJson(amtrakstations,{
        onEachFeature: eachAmtrakstations
    }).addTo(map);


    $("#ch-tracts").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(tractsMap))){
                map.addLayer(tractsMap);
            }
            var percents =  '<div class="table-responsive"><table class="table" id="table-percents"><tr> <td id="percent-1"></td> <td>0 - 1826</td> </tr> <tr> <td id="percent-2"></td><td>1827 - 3313</td> </tr> <tr> <td id="percent-3"></td> <td>3314 - 4566</td> </tr> <tr> <td id="percent-4"></td> <td>4567 - 5948</td></tr><tr> <td id="percent-5"></td> <td>5949 - 8322</td></tr> </table></div>';
            $("#percents").html(percents);
        }else{
            if(map.hasLayer(tractsMap)){
                map.removeLayer(tractsMap);
            }
            $("#percents").html("");
        }
    });

    $("#ch-groceries").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(groceriesMap))){
                map.addLayer(groceriesMap);
            }
        }else{
            if(map.hasLayer(groceriesMap)){
                map.removeLayer(groceriesMap);
            }
        }
    });

    $("#ch-highways").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(highwaysMap))){
                map.addLayer(highwaysMap);
            }
        }else{
            if(map.hasLayer(highwaysMap)){
                map.removeLayer(highwaysMap);
            }
        }
    });

    $("#ch-altfuels").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(altfuelsMap))){
                map.addLayer(altfuelsMap);
            }
        }else{
            if(map.hasLayer(altfuelsMap)){
                map.removeLayer(altfuelsMap);
            }
        }
    });


    $("#ch-amtraklines").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(amtraklinesMap))){
                map.addLayer(amtraklinesMap);
            }
        }else{
            if(map.hasLayer(amtraklinesMap)){
                map.removeLayer(amtraklinesMap);
            }
        }
    });

    $("#ch-amtrakstations").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(amtrakstationsMap))){
                map.addLayer(amtrakstationsMap);
            }
        }else{
            if(map.hasLayer(amtrakstationsMap)){
                map.removeLayer(amtrakstationsMap);
            }
        }
    });

    $("#ch-midatlanticstates").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(midatlanticstatesMap))){
                map.addLayer(midatlanticstatesMap);
            }
        }else{
            if(map.hasLayer(midatlanticstatesMap)){
                map.removeLayer(midatlanticstatesMap);
            }
        }
    });

    $("#ch-philaPPR").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(philaPPRMap))){
                map.addLayer(philaPPRMap);
            }
        }else{
            if(map.hasLayer(philaPPRMap)){
                map.removeLayer(philaPPRMap);
            }
        }
    });

    $("#ch-septahighlines").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(septahighlinesMap))){
                map.addLayer(septahighlinesMap);
            }
        }else{
            if(map.hasLayer(septahighlinesMap)){
                map.removeLayer(septahighlinesMap);
            }
        }
    });

    $("#ch-septahighstations").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(septahighstationsMap))){
                map.addLayer(septahighstationsMap);
            }
        }else{
            if(map.hasLayer(septahighstationsMap)){
                map.removeLayer(septahighstationsMap);
            }
        }
    });

});
