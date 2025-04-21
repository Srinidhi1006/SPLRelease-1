function mediate(mc){
var log = mc.getServiceLog();        
    log.info("Logging inside Script Mediator");
var payload =mc.getPayloadJSON();
 var language = mc.getProperty("Language");
 log.info(language);
    var Addresses = constructAddress(language);
 	 var transform = {
    "totalSearchResults": payload.response.docs.length,
    "success": true,
    "result": null,
    "statusdescription": "SUCCESS",
    "fullexception": null,
    "Addresses":Addresses
  };
   mc.setPayloadJSON(transform);
    function constructAddress(lang) {
     var address=[];
     
for (i = 0; i < payload.response.docs.length; ++i) {
d = payload.response.docs[i];
var Latitude="";
var Longitude="";
if(Array.isArray(d.Latitude))
{
Latitude=d.Latitude[0].toString();
Longitude=d.Longitude[0].toString();
}
else
{
Latitude=d.Latitude;
Longitude=d.Longitude;
}
 var english = {
                Title: null,
                Address1 : (null != d.BuildingNo?d.BuildingNo[0]:"" )+ " "+( null != d.StreetNameEN?capitalizeFirstLetter(d.StreetNameEN[0]):"")+" - "+(null != d.DistrictAreaEN?capitalizeFirstLetter(d.DistrictAreaEN[0]):""),
Address2: (null != d.CityNameEN?d.CityNameEN[0]:"" )+" "+( null != d.ZipCode ?d.ZipCode[0]:"")+" - "+(null != d.AdditionalNumber?d.AdditionalNumber[0]:""),                
ObjLatLng: ( null != Longitude?Longitude+" ":"")+ (null != d.Latitude?d.Latitude:"" ),
                BuildingNumber: (null != d.BuildingNo? d.BuildingNo[0]:""),
                Street: ( null !=  d.StreetNameEN?capitalizeFirstLetter(d.StreetNameEN[0]) :""),
                District: ( null !=  d.DistrictAreaEN?capitalizeFirstLetter(d.DistrictAreaEN[0]) :""),
                City:  ( null !=  d.CityNameEN?d.CityNameEN[0] :""),
                PostCode: ( null !=  d.ZipCode?d.ZipCode [0] :""),
                AdditionalNumber: ( null !=  d.AdditionalNumber?d.AdditionalNumber [0] :""),
                RegionName: ( null !=  d.RegionNameEN?d.RegionNameEN [0] :""),
                PolygonString:  ( null !=d.PolygonString?d.PolygonString :null),
               IsPrimaryAddress: ( null !=  d.IsDefaultAddress?d.IsDefaultAddress [0] :""),
                UnitNumber: ( null !=  d.UnitNo?d.UnitNo [0] :""),
                Latitude: ( null !=  Latitude?Latitude :""),
                Longitude: ( null != Longitude?Longitude:""),
                CityId: ( null !=  d.GISCityID?d.GISCityID [0] :""),
				GISRegionId: ( null !=  d.RegionId?d.RegionId [0] :""),
				GISCityID: ( null !=  d.CityId?d.CityId [0] :""),
                RegionId: ( null !=  d.GISRegionId?d.GISRegionId [0] :""),
                Restriction: "",
                PKAddressID: ( null !=  d.ZipCode?d.ZipCode [0] :"")+(null != d.BuildingNo?d.BuildingNo [0] :"")+  (null != d.AdditionalNumber?d.AdditionalNumber [0] :""),
                DistrictID: null,
                RegionName_L2: (null != d.RegionNameAR ? d.RegionNameAR :""),
                City_L2: (null != d.CityNameAR ?d.CityNameAR:""),
                Street_L2: (null !=d.StreetNameAR? d.StreetNameAR:""),
                District_L2: (null != d.DistrictAreaAR?d.DistrictAreaAR :""),
                CompanyName_L2: null,
                GovernorateID: "",
                Governorate: "",
                Governorate_L2: "",
                Title_L2: null,
                ShortAddress: (null != d.ShortAddress? d.ShortAddress:""),
                InternationalWasel: ( null !=  d.InternationalWasel?d.InternationalWasel [0] :"")
   
            }

            var ar = {
                Title: null,
				Address1 : (null != d.BuildingNo?d.BuildingNo[0]:"" )+ " "+( null != d.StreetNameAR?d.StreetNameAR:"")+" - " +(null != d.DistrictAreaAR?d.DistrictAreaAR:""),
				 Address2: (null != d.AdditionalNumber?d.AdditionalNumber[0]:"")+ " "+ ( null != d.ZipCode ?d.ZipCode[0]:"")+" - "+(null != d.CityNameAR?d.CityNameAR:"" ),
                ObjLatLng: ( null != Longitude?Longitude+" ":"")+ (null != d.Latitude?d.Latitude:"" ),
                BuildingNumber: (null != d.BuildingNo? d.BuildingNo[0]:""),
                Street: ( null !=  d.StreetNameAR?d.StreetNameAR :""),
                District: ( null !=  d.DistrictAreaAR?d.DistrictAreaAR :""),
                City:  ( null !=  d.CityNameAR?d.CityNameAR :""),
                PostCode: ( null !=  d.ZipCode?d.ZipCode [0] :""),
                AdditionalNumber: ( null !=  d.AdditionalNumber?d.AdditionalNumber [0] :""),
                RegionName: ( null !=  d.RegionNameAR?d.RegionNameAR :""),
                PolygonString:  ( null !=d.PolygonString?d.PolygonString :null),
              IsPrimaryAddress: ( null !=  d.IsDefaultAddress?d.IsDefaultAddress [0] :""),
                UnitNumber: ( null !=  d.UnitNo?d.UnitNo [0] :""),
                Latitude: ( null !=  Latitude?Latitude :""),
                Longitude: ( null != Longitude?Longitude:""),
                CityId: ( null !=  d.GISCityID?d.GISCityID [0] :""),
				GISRegionId: ( null !=  d.GISRegionId?d.GISRegionId [0] :""),
				GISCityID: ( null !=  d.CityId?d.CityId [0] :""),
                RegionId: ( null !=  d.GISRegionId?d.GISRegionId [0] :""),
                Restriction: "",
                PKAddressID: ( null !=  d.ZipCode?d.ZipCode [0] :"")+(null != d.BuildingNo?d.BuildingNo [0] :"")+  (null != d.AdditionalNumber?d.AdditionalNumber [0] :""),
                DistrictID: null,
                RegionName_L2: (null != d.RegionNameEN ? d.RegionNameEN[0] :""),
                City_L2: (null != d.CityNameEN ?d.CityNameEN[0]:""),
                Street_L2: (null !=d.StreetNameEN?capitalizeFirstLetter(d.StreetNameEN[0]):""),
                District_L2: (null != d.DistrictAreaEN?capitalizeFirstLetter(d.DistrictAreaEN[0]) :""),
                CompanyName_L2: null,
                GovernorateID: "",
                Governorate: "",
                Governorate_L2: "",
                Title_L2: null,
                ShortAddress: (null != d.ShortAddress? d.ShortAddress:""),
                InternationalWasel: ( null !=  d.InternationalWasel?d.InternationalWasel [0] :"")
   
            };

             var data = lang.toLowerCase()=='e'?english:ar;
            address.push(data);


}
return address;
    }
	function capitalizeFirstLetter(str)
 {
    const words = str.trim().split(" ");

    var Letter = "";
    for (j = 0; j < words.length; j++) {

      Letter=  Letter.concat(words[j][0].toUpperCase() + words[j].substr(1));
        if(j!=words.length-1)
         Letter=  Letter.concat(" ");
    }
    return Letter;
}
}