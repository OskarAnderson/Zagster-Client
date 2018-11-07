const Base_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
    $.getJSON(Base_URL + "/rides/count" , updateRidecount)
}

function updateRidecount(data) { 
    numberofRides = data.count
    $("h2#ridecount").html(numberofRides)
}