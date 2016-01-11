var selfNetwork = null;

function NetworkInformation(){
  selfNetwork = this;
  this.googleInformation = null;
  this.ipApiInformation = null;
  this.coordinates = [0, 0];

  this.getGoogleInfo = function(lat, lon){
    try{
      var geocoder;
      geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(lat, lon);

      geocoder.geocode(
        {'latLng': latlng},
        function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              var add= results[0].formatted_address ;
              var  value=add.split(",");
              selfNetwork.googleInformation = value;
            }
          }
        }
      );
    }
    catch(err){
      ;
    }
  }

  this.getHtml5Geolocation = function(tail_method, callbackfunction){
    var success = function(data){
      selfNetwork.coordinates = [data.coords.latitude, data.coords.longitude];
      if(selfNetwork.coordinates[0] != 0 && selfNetwork.coordinates[1] != 0){
        selfNetwork.getGoogleInfo(data.coords.latitude, data.coords.longitude);
      }
      tail_method(callbackfunction);
    }
    var failure = function(data){
      tail_method(callbackfunction);
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, failure);
    }
    else{
      tail_method(callbackfunction);
    }
  }

  this.getIpApiInformation = function(callbackfunction){
    var setData = function(data){
      selfNetwork.ipApiInformation = data;
      callbackfunction();
    }
    $.getJSON("http://ip-api.com/json/?callback=?&lang=es&fields=262111", setData);
  }

  this.setInformation = function(readyMethod){
    this.getHtml5Geolocation(this.getIpApiInformation, readyMethod);
  }

  this.getAS = function(){
    return this.ipApiInformation.as;
  }

  this.getCity = function(){
    if(this.googleInformation){
      return this.googleInformation[1];
    }
    else{
      return this.ipApiInformation.city;
    }
  }

  this.getCountry = function(){
    if(this.googleInformation){
      return this.googleInformation[4];
    }
    else{
      return this.ipApiInformation.country;
    }
  }

  this.getCountryCode = function(){
    return this.ipApiInformation.countryCode;
  }

  this.getIsp = function(){
    return this.ipApiInformation.isp;
  }

  this.getCoordinates = function(){
    if(this.coordinates[0] === 0 && this.coordinates[1] === 0){
      this.coordinates = [this.ipApiInformation.lat, this.ipApiInformation.lon];
    }
    return this.coordinates;
  }

  this.isMobile = function(){
    return this.ipApiInformation.mobile;
  }

  this.getOrganization = function(){
    return this.ipApiInformation.org;
  }

  this.useProxy = function(){
    return this.ipApiInformation.proxy;
  }

  this.getIp = function(){
    return this.ipApiInformation.query;
  }

  this.getRegion = function(){
    if(this.googleInformation){
      return this.googleInformation[3];
    }
    else{
      return this.ipApiInformation.region;
    }
  }

  this.getRegionName = function(){
    if(this.googleInformation){
      return this.googleInformation[3];
    }
    else{
      return this.ipApiInformation.regionName;
    }
  }

  this.getReverseDNS = function(){
    return this.ipApiInformation.reverse;
  }

  this.isSuccessful = function(){
    if(this.ipApiInformation.status == "success"){
      return true;
    }
    else{
      return false;
    }
  }

  this.getTimezone = function(){
    return this.ipApiInformation.timezone;
  }


}