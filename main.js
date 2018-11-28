let Base_URL = newFunction()

$ (updateView)

function newFunction() {
    return "https://zagster-service.herokuapp.com";
}

function updateView() {
    $.getJSON(Base_URL + "/rides/count" , (updateRidecount))
    $.getJSON(Base_URL + "/rides/count/per_year", displayridecountperyear)

}


function updateRidecount(data) { 
    numberofRides = data.count
    $("h2#ridecount").html(numberofRides)
    $("h2#ridecount").css('visibility', 'visible').hide().fadeIn("fast");
    console.log(data)
}
function displayridecountperyear(data) {
    numberofrides = data.count
    $("h3#ridecountperyear").html(numberofrides)
    console.log(data)
}




