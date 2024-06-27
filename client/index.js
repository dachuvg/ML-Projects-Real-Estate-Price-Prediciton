function onPageLoad(){
    console.log("document loaded");
    var url="http://127.0.0.1:5000/get_location_names"; //use if you are not using nginx

    $.get(url,function(data,status) {
        console.log("got response for request");
        if(data){
            var locations=data.location;
            var dropdown = document.getElementById("dropdown");
            // $(`#dropdown`).empty();
            for(var i in locations){
                var opt = new Option(locations[i]);
                $(`#dropdown`).append(opt);
            }
        }
    });
}
function getBathvalue(){
    var baths=document.getElementsByName("rdbtn");
    for(var i in baths){
        if(baths[i].checked){
            return parseInt(baths[i].value);
        }
    }
    return -1;
}

function getBedvalue(){
    var beds=document.getElementsByName("bed");
    for(var i in beds){
        if(beds[i].checked){
            return parseInt(beds[i].value);
        }
    }
    return -1;
}
function estPrice(){
    var sqft=document.getElementById('sqft');
    var bhkno=getBedvalue();
    var bathno=getBathvalue();
    var locn=document.getElementById("dropdown");
    var est=document.getElementById("cost");

    var url="http://127.0.0.1:5000/predict_home_price";

    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhkno,
        bath: bathno,
        location: locn.value
    },function(data,status){
        console.log(data.estimated_price);
        est.innerHTML="<h2>"+data.estimated_price.toString() + "Lakh</h2>";
    });
}
window.onload=onPageLoad;