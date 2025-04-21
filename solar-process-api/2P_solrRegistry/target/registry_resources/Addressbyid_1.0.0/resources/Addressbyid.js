function mediate(mc){
var payload = mc.getPayloadJSON()
    var Addresses = constructAddress();
	var transform = {
    "totalSearchResults": payload.totalSearchResults.toString(),
	"Addresses":Addresses,
	"PostCode":null,
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
                Title : (null != d.Title?d.Title:null),
                Address1 : (null != d.Address1?d.Address1:""),
                Address2: (null != d.Address2?d.Address2: "" ),
                ObjLatLng:  ( null !=d.ObjLatLng?d.ObjLatLng :""),
                BuildingNumber:  ( null !=d.BuildingNumber?d.BuildingNumber :""),
                Street:  ( null !=d.Street?d.Street :""),
                District:  ( null !=d.District?d.District :""),
                City:  ( null !=d.City?d.City :""),
                PostCode:  ( null !=d.PostCode?d.PostCode :""),
                AdditionalNumber:  ( null !=d.AdditionalNumber?d.AdditionalNumber :""),
                RegionName:  ( null !=d.RegionName?d.RegionName :""),
				PolygonString: ( null !=d.PolygonString?d.PolygonString :null),
                IsPrimaryAddress: ( null !=d.IsPrimaryAddress?d.IsPrimaryAddress :""),
                UnitNumber: ( null !=d.UnitNumber?d.UnitNumber :""),
                Latitude:  ( null !=d.Latitude?d.Latitude :""),
                Longitude:  ( null !=d.Longitude?d.Longitude :""),
                CityId:  ( null !=d.CityId?d.CityId :""),
                RegionId:  ( null !=d.RegionId?d.RegionId :""),
                Restriction:  ( null !=d.Restriction?d.Restriction :""),
                PKAddressID:  ( null !=d.PKAddressID?d.PKAddressID :""),
                DistrictID:  ( null !=d.DistrictID?d.DistrictID :""),
				Title_L2:  ( null !=d.Title_L2?d.Title_L2 :null),
                RegionName_L2:  ( null !=d.RegionName_L2?d.RegionName_L2 :""),
                City_L2:  ( null !=d.City_L2?d.City_L2 :""),
                Street_L2:  ( null !=d.Street_L2?d.Street_L2 :""),
                District_L2:  ( null !=d.District_L2?d.District_L2 :""),
				CompanyName_L2: ( null !=d.CompanyName_L2?d.CompanyName_L2 :null),
                GovernorateID: ( null !=d.GovernorateID?d.GovernorateID :""),
                Governorate: ( null !=d.Governorate?d.Governorate :""),
                Governorate_L2: ( null !=d.Governorate_L2?d.Governorate_L2 :"")
                
            }
            address.push(data);
          };
          return address;
    }
}