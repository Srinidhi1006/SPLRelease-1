function mediate(mc){
var payload = mc.getPayloadJSON()
    var Addresses = constructAddress();
    var transform = {
    "totalSearchResults": payload.totalSearchResults.toString(),
    "Addresses":Addresses,
    "success": payload.success,
    "statusdescription": payload.statusdescription
  }
     mc.setPayloadJSON(transform);

 

    function constructAddress () {
        var address=[];

 

        for(i=0;i<payload.Addresses.length;i++) {
var d=payload.Addresses[i];
            var data = {
                BuildingNumber:  ( null !=d.BuildingNumber?d.BuildingNumber :""),
                City:  ( null !=d.City?d.City :""),
                PostCode:  ( null !=d.PostCode?d.PostCode :""),
                AdditionalNumber:  ( null !=d.AdditionalNumber?d.AdditionalNumber :"")
            }
            address.push(data);
          };
          return address;
    }
}