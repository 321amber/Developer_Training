function getGeolocation(){
        navigator.geolocation.getCurrentPosition(function showPos(){
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        alert(`the coordinates are latitude:${latitude} and longitude: ${longitude}`);
        
    },
    function error(e){
        console.log(`there is an error while getting the geolocation error message: ${e.message} and error code:${e.code}`);
        
    }
);   
}

getGeolocation();