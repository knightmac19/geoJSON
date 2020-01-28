$(document).ready(function() {
    

    $(".generate").on("click", function() {
        pushArr();
        $("p").text(array);
    });

    

    

    $(document).keyup(function(event) {
        var code = event.which;
        if (code == 13) {
            event.preventDefault();
            pushArr();
            $("p").text(array);
        }
    });

    
    var stateCrime = {
        // Alabama
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-86.380,32.505]},"properties":{"name":"Alabama"}
        // Alaska
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-152.2812,64.4354]},"properties":{"name":"Alaska"}
        // Arizona
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-111.476,34.185]},"properties":{"name":"Arizona"}
        // Arkansas
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-92.181,34.489]},"properties":{"name":"Arkansas"}
        // California
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-119.2658,37.958]},"properties":{"name":"California"}
        // Colorado
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-105.325,39]},"properties":{"name":"Colorado"}
        // Connecticut
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-72.424,41.357]},"properties":{"name":"Connecticut"}
        // Delaware
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-75.3042,38.5848,]},"properties":{"name":"Delaware"}
        // Florida
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-82.2736,28.4053]},"properties":{"name":"Florida"}
        // Georgia
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-83.26179,32.39436]},"properties":{"name":"Georgia"}
        // Hawaii
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-157.156,20.571]},"properties":{"name":"Hawaii"}
        // Idaho
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-114.574,44.154]},"properties":{"name":"Idaho"}
        // Illinois
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-89.30131,39.44215,]},"properties":{"name":"Illinois"}
        // Indiana
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-86.26286,39.45577]},"properties":{"name":"Indiana"}
        // Iowa
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-93.231,41.577]},"properties":{"name":"Iowa"}
        // Kansas
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-98.419,38.299]},"properties":{"name":"Kansas"}
        // Kentucky
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-84.304,37.215]},"properties":{"name":"Kentucky"}
        // Louisiana
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-92.322,30.581]},"properties":{"name":"Louisiana"}
        // Maine
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-69.13599988,45.15119982]},"properties":{"name":"Maine"}
        // Maryland
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-77.223,39.295]},"properties":{"name":"Maryland"}
        // Massachusetts
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-71.553093,42.223762]},"properties":{"name":"Massachusetts"}
        // Michigan
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-84.563,45.37]},"properties":{"name":"Michigan"}
        // Minnesota
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-95.196,46.15]},"properties":{"name":"Minnesota"}
        // Mississippi
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-89.430,32.489]},"properties":{"name":"Mississippi"}
        // Missouri
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-92.3566,38.4992]},"properties":{"name":"Missouri"}
        // Montana
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-109.8741,47.0027]},"properties":{"name":"Montana"}
        // Nebraska
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-99.5142,41.3130]},"properties":{"name":"Nebraska"}
        // Nevada
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-116.559,39.303]},"properties":{"name":"Nevada"}
        // New Hampshire
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-71.4824994,43.5657995]},"properties":{"name":"New Hampshire"}
        // New Jersey
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-74.3330,40.412]},"properties":{"name":"New Jersey"}
        // New Mexico
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-106.67,34.301]},"properties":{"name":"New Mexico"}
        // New York
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-76.10,42.579]},"properties":{"name":"New York"}
        // North Carolina
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-79.273,35.362]},"properties":{"name":"North Carolina"}
        // North Dakota
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-100.341,47.247]},"properties":{"name":"North Dakota"}
        // Ohio
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-82.445,40.217]},"properties":{"name":"Ohio"}
        // Oklahoma
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-97.396,35.322]},"properties":{"name":"Oklahoma"}
        // Oregon
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-120.587,43.521]},"properties":{"name":"Oregon"}
        // Pennsylvania
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-77.448,40.538]},"properties":{"name":"Pennsylvania"}
        // Rhode Island
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-71.4162,41.7001]},"properties":{"name":"Rhode Island"}
        // South Carolina
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-80.524,33.498]},"properties":{"name":"South Carolina"}
        // South Dakota
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-100.287,44.241]},"properties":{"name":"South Dakota"}
        // Tennessee
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-86.373,35.477]},"properties":{"name":"Tennessee"}
        // Texas
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-99.101434,31.232952]},"properties":{"name":"Texas"}
        // Utah
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-111.411,39.232]},"properties":{"name":"Utah"}
        // Vermont
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-72.403,43.556]},"properties":{"name":"Vermont"}
        // Virginia
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-78.338,37.293]},"properties":{"name":"Virginia"}
        // Washington
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-120.161,47.2]},"properties":{"name":"Washington"}
        // West Virginia
            "type":"Feature","geometry":{"type":"Point","coordinates":[-80.422,38.359]},"properties":{"name":"West Virginia"}
        // Wisconsin
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-90.074867,44.2616]},"properties":{"name":"Wisconsin"}
        // Wyoming
            // "type":"Feature","geometry":{"type":"Point","coordinates":[-107.4018,42.5818]},"properties":{"name":"Wyoming"}

        
    }
    
    var array = [];
    
    
    var pushArr = function() {
        for (var i = 0; i < 534; i++) {
            var string = JSON.stringify(stateCrime);
            array.push(string);
        }
    }
    
    




    // var ALcount = 0;
    // var AKcount = 0;
    // var ARcount = 0;
    // var AKcount = 0;
    // var CAcount = 0;
    // var COcount = 0;
    // var CTcount = 0;
    // var DEcount = 0;
    // var FLcount = 0;
    // var GAcount = 0;
    // var IDcount = 0;
    // var ILcount = 0;
    // var INcount = 0;
    // var IAcount = 0;
    // var KAcount = 0;
    // var KYcount = 0;
    // var LAcount = 0;
    // var MEcount = 0;
    // var MDcount = 0;
    // var MAcount = 0;
    // var MIcount = 0;
    // var MNcount = 0;
    // var MIcount = 0;
    // var MOcount = 0;
    // var MTcount = 0;
    // var NEcount = 0;
    // var NVcount = 0;
    // var NHcount = 0;
    // var NJcount = 0;
    // var NMcount = 0;
    // var NYcount = 0;
    // var NCcount = 0;
    // var NDcount = 0;
    // var OHcount = 0;
    // var OKcount = 0;
    // var ORcount = 0;
    // var PAcount = 0;
    // var RIcount = 0;
    // var SCcount = 0;
    // var SDcount = 0;
    // var TNcount = 0;
    // var TXcount = 0;
    // var UTcount = 0;
    // var VTcount = 0;
    // var VAcount = 0;
    // var WAcount = 0;
    // var WVcount = 0;
    // var WIcount = 0;
    // var WYcount = 0;


    // $("#add-count").on("click", function() {
    //     var num = $(this).prev().val();
    //     var crimeCount = parseInt(num);
    //     console.log(crimeCount +1);
    // });






    // "type": "Feature",
            // "geometry": {
            //     "type": "Point",
            //     "coordinates": [-93.231, 41.577]
            // },
        
            // "properties": {
            //     "name": "Kentucky"
});
