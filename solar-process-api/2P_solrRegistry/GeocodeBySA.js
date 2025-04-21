function mediate(mc){
var log = mc.getServiceLog();        
    log.info("Logging inside Script Mediator");
var payload =mc.getPayloadJSON();
var Addresses = constructAddress();
 	 var transform = {
    "totalSearchResults": payload.totalSearchResults,
    "Addresses":Addresses,
    "success": payload.success,
    "statusdescription": payload.statusdescription
  };
   mc.setPayloadJSON(transform);
    function constructAddress() {
     var address=[];
	 for (i = 0; i < payload.Addresses.length; i++) {
 var d=payload.Addresses[i];
 var data = {  
                Latitude: ( null !=  d.Latitude?d.Latitude  :""),
                Longitude: ( null !=  d.Longitude?d.Longitude :"")
            };
			 address.push(data);
			 };
			 return address;
    }
}