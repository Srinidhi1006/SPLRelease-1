function mediate(mc)
{
var payload = mc.getPayloadJSON()
  var Zones = constructZone();
  var transform = {
  "totalSearchResults": payload.totalSearchResults,
  "Zones":Zones,
  "success": payload.success,
  "result": payload.result,
  "statusdescription": payload.statusdescription,
  "fullexception": payload.fullexception
  
}
   mc.setPayloadJSON(transform);
 
  function constructZone () {
      var Zone=[];
 
      for(i=0;i<payload.Addresses.length;i++) {
var d=payload.Addresses[i];
          var data = {
              DistrictNameEN:  ( null !=d.District?d.District :""),
              CityNameEN:  ( null !=d.City?d.City :""),
              RegionNameEN:  ( null !=d.RegionName?d.RegionName :""),
              CityID:  ( null !=d.GISCityID?d.GISCityID :""),
              RegionID:  ( null !=d.GISRegionId?d.GISRegionId :""),
              RegionNameAR:  ( null !=d.RegionName_L2?d.RegionName_L2 :""),
              CityNameAR:  ( null !=d.City_L2?d.City_L2 :""),
              DistrictNameAR:  ( null !=d.District_L2?d.District_L2 :""),
      ZipCode: ( null !=d.PostCode?d.PostCode :"")
          }
          Zone.push(data);
        };
        return Zone;
  }



}