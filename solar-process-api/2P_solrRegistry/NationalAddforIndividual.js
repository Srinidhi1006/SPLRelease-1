function mediate(mc){
var payload = mc.getPayloadJSON()
    var Addresses = constructAddress();
    var transform = {
    "totalSearchResults": payload.totalSearchResults,
    "Addresses":Addresses,
	"PostCode": null,
    "success": payload.success,
    "result": payload.result,
    "statusdescription": payload.statusdescription,
    "fullexception": payload.fullexception
    
  }
     mc.setPayloadJSON(transform);
 
    function constructAddress () {
        var address=[];
 
        for(i=0;i<payload.Addresses.length;i++) {
var d=payload.Addresses[i];
            var data = {
                BuildingNumber: (null !=d.BuildingNumber?d.BuildingNumber :""),
                DistrictID: null,
                Street:  (null !=d.Street_L2?d.Street :""),
                District:  (null !=d.District?d.District :""),
                City:  (null !=d.City?d.City :""),
                PostCode:  (null !=d.PostCode?d.PostCode :""),
                AdditionalNumber:  (null !=d.AdditionalNumber?d.AdditionalNumber :""),
                City_L2:  (null !=d.City_L2?d.City_L2 :""),
				Street_L2:  (null !=d.Street_L2?d.Street_L2 :""),
				District_L2:  (null !=d.District_L2?d.District_L2 :""),
                ObjLatLng: (null !=d.ObjLatLng?d.ObjLatLng :""),
				ShortAddress:  (null !=d.ShortAddress?d.ShortAddress :""),
                IsPrimaryAddress:  (null !=d.IsPrimaryAddress?d.IsPrimaryAddress :""),
                PKAddressID:  (null !=d.PKAddressID?d.PKAddressID :""),
                CityID: (null !=d.CityId?d.CityId :""),
                RegionID:  (null !=d.RegionId?d.RegionId :""),
                Address1:  (null !=d.Address1?d.Address1 :""),
                Address2:  (null !=d.Address2?d.Address2 :""),
                RegionName:  (null !=d.RegionName?d.RegionName :""),
                RegionName_L2:  (null !=d.RegionName_L2?d.RegionName_L2 :""),
                Latitude:  (null !=d.Latitude?d.Latitude :""),
                Longitude: (null !=d.Longitude?d.Longitude :"")
   
                
            }
            address.push(data);
          };
          return address;
    }
}