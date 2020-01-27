$(document).ready(function() {
    $("button").on("click", function() {
        pushArr();
        $("p").text(array);
    });
    
    var stateCrime = {
        
        "type":"Feature","geometry":{"type":"Point","coordinates":[-80.422,38.359]},"properties":{"name":"West Virginia"}
            // "type": "Feature",
            // "geometry": {
            //     "type": "Point",
            //     "coordinates": [-93.231, 41.577]
            // },
        
            // "properties": {
            //     "name": "Kentucky"
            // }
        
    }
    
    var array = [];
    
    
    var pushArr = function() {
        for (var i = 0; i < 409; i++) {
            var string = JSON.stringify(stateCrime);
            array.push(string);
        }
    }
    
    

});
