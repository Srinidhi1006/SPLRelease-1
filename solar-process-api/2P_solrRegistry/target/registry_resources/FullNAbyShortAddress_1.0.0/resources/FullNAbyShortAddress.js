function mediate(mc){
var payload = mc.getPayloadJSON()
    var Addresses = constructAddress();
    var transform = {
    "totalSearchResults": payload.totalSearchResults,
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
                Address1:  (null !=d.Address1?d.Address1 :""),
                Address2:  (null !=d.Address2?d.Address2 :""),
                ObjLatLng: (null !=d.ObjLatLng?d.ObjLatLng :""),
                BuildingNumber: (null !=d.BuildingNumber?d.BuildingNumber :""),
                District:  (null !=d.District?d.District :""),
                City:  (null !=d.City?d.City :""),
                PostCode:  (null !=d.PostCode?d.PostCode :""),
                AdditionalNumber:  (null !=d.AdditionalNumber?d.AdditionalNumber :""),
                RegionName:  (null !=d.RegionName?d.RegionName :""),
                Latitude:  (null !=d.Latitude?d.Latitude :""),
                Longitude: (null !=d.Longitude?d.Longitude :""),
                CityId: (null !=d.CityId?d.CityId :""),
                RegionId:  (null !=d.RegionId?d.RegionId :""),
                Restriction:  (null !=d.Restriction?d.Restriction :""),
                PKAddressID:  (null !=d.PKAddressID?d.PKAddressID :""),
                DistrictID:  (null !=d.DistrictID?d.DistrictID :""),
                RegionName_L2:  (null !=d.RegionName_L2?d.RegionName_L2 :""),
                City_L2:  (null !=d.City_L2?d.City_L2 :""),
                ShortAddress:  (null !=d.ShortAddress?d.ShortAddress :""),
                GovernorateID: (null !=d.GovernorateID?d.GovernorateID : null),
				District_L2:  ( null !=d.District_L2?d.District_L2 :""),
                Street:  (null !=d.Street?d.Street :null),
                Street_L2:  (null !=d.Street_L2?d.Street_L2 :null)
            }
var log = mc.getServiceLog();        
    log.info(JSON.stringify(data));
if(d.GovernorateID==null)
{
delete data.GovernorateID;
}
if(d.Street==null)
{
delete data.Street;
}
if(d.Street_L2==null)
{
delete data.Street_L2;
}
            address.push(data);
          };
          return address;
    }
}