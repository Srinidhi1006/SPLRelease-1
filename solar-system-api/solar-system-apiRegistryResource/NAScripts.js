function mediate(mc){
var log = mc.getServiceLog();        
    log.info("Logging inside Script Mediator");
var payload =mc.getPayloadJSON();
 var language = mc.getProperty("Language");
 log.info(language);
    var Addresses = constructAddress(language);
 	 var transform = {
    "totalSearchResults": payload.response.docs.length,
    "success": "true",
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
                Address1 : (null != d.buildingno?d.buildingno[0]:"" ) + ( null != d.StreetNameEN ?capitalizeFirstLetter(d.StreetNameEN[0]):"")+(null != d.DistrictAreaEN?capitalizeFirstLetter(d.DistrictAreaEN[0]):""),
                Address2: (null != d.CityEnglishName?d.CityEnglishName[0]:"" )+" " + ( null != d.zipcodenumber ?d.zipcodenumber[0]:"")+ " - "+(null != d.additionalno?d.additionalno[0]:""),
                ObjLatLng: (null != d.Latitude?d.Latitude+" ":"" ) + ( null != Longitude?Longitude:""),
                BuildingNumber: (null != d.buildingno? d.buildingno[0]:""),
                Street: ( null !=  d.StreetNameEN?capitalizeFirstLetter(d.StreetNameEN[0]) :null),
                District: ( null !=  d.DistrictAreaEN?capitalizeFirstLetter(d.DistrictAreaEN[0]) :""),
                City:  ( null !=  d.CityEnglishName?d.CityEnglishName[0] :""),
                PostCode: ( null !=  d.zipcodenumber?d.zipcodenumber [0] :""),
                AdditionalNumber: ( null !=  d.additionalno?d.additionalno [0] :""),
                RegionName: ( null !=  d.EmirateEnglishName?d.EmirateEnglishName [0] :""),
                PolygonString:  ( null !=d.PolygonString?d.PolygonString :""),
                IsPrimaryAddress: ( null !=  d.IsDefaultAddress?d.IsDefaultAddress [0] :""),
                UnitNumber: ( null !=  d.UnitNo?d.UnitNo [0] :""),
                Latitude: ( null !=  Latitude?Latitude :""),
                Longitude: ( null != Longitude?Longitude:""),
                CityId: ( null !=  d.cityId?d.cityId [0] :""),
                RegionId: ( null !=  d.emirateid?d.emirateid [0] :""),
                Restriction: ( null !=  d.Restriction?d.Restriction [0] :""),
                PKAddressID: ( null !=  d.zipcodenumber?d.zipcodenumber [0] :"")+(null != d.buildingno?d.buildingno [0] :"")+  (null != d.additionalno?d.additionalno [0] :""),
                DistrictID: null,
                RegionName_L2: (null != d.EmirateArabicName ? d.EmirateArabicName :""),
                City_L2: (null != d.CityArabicName ?d.CityArabicName:""),
                Street_L2: (null !=d.StreetNameAR? d.StreetNameAR:null),
                District_L2: (null != d.DistrictAreaAR?d.DistrictAreaAR :null),
                CompanyName_L2: null,
                GovernorateID: null,
                Governorate: "",
                Governorate_L2: "",
                Title_L2: (null != d.CustomerNameinAR?d.CustomerNameinAR :""),
                ShortAddress: (null != d.ShortAddress? d.ShortAddress:""),
                InternationalWasel: ( null !=  d.InternationalWasel?d.InternationalWasel [0] :"")
   
            };
          
              var ar = {
                Title: (null != d.CustomerNameinAR? d.CustomerNameinAR:""),
                Address1 : (null != d.buildingno?d.buildingno[0]:"" ) + ( null != d.StreetNameAR ?d.StreetNameAR:"")+(null != d.DistrictAreaAR?d.DistrictAreaAR:""),
                Address2: (null != d.CityArabicName?d.CityArabicName:"" )+" " + ( null != d.zipcodenumber ?d.zipcodenumber[0]:"")+" - "+(null != d.additionalno?d.additionalno[0]:""),
                ObjLatLng: (null != d.Latitude?d.Latitude+" ":"" )+ ( null != Longitude?Longitude:""),
                BuildingNumber: (null != d.buildingno? d.buildingno[0]:""),
                Street: ( null !=  d.StreetNameAR?d.StreetNameAR :null),
                District: ( null !=  d.DistrictAreaAR?d.DistrictAreaAR :""),
                City:  ( null !=  d.CityArabicName?d.CityArabicName :""),
                PostCode: ( null !=  d.zipcodenumber?d.zipcodenumber [0] :""),
                AdditionalNumber: ( null !=  d.additionalno?d.additionalno [0] :""),
                RegionName: ( null !=  d.EmirateArabicName?d.EmirateArabicName :""),
                PolygonString:  ( null !=d.PolygonString?d.PolygonString :""),
                IsPrimaryAddress: ( null !=  d.IsDefaultAddress?d.IsDefaultAddress [0] :""),
                UnitNumber: ( null !=  d.UnitNo?d.UnitNo [0] :""),
                Latitude: ( null !=  Latitude?Latitude :""),
                Longitude: ( null != Longitude?Longitude:""),
                CityId: ( null !=  d.cityId?d.cityId [0] :""),
                RegionId: ( null !=  d.emirateid?d.emirateid [0] :""),
                Restriction: ( null !=  d.Restriction?d.Restriction [0] :""),
                PKAddressID: ( null !=  d.zipcodenumber?d.zipcodenumber [0] :"")+(null != d.buildingno?d.buildingno [0] :"")+  (null != d.additionalno?d.additionalno [0] :""),
                DistrictID: null,
                RegionName_L2: (null != d.EmirateEnglishName ? d.EmirateEnglishName[0] :""),
                City_L2: (null != d.CityEnglishName ?d.CityEnglishName[0]:""),
                Street_L2: (null !=d.StreetNameEN?capitalizeFirstLetter(d.StreetNameEN[0]):null),
                District_L2: (null != d.DistrictAreaEN?capitalizeFirstLetter(d.DistrictAreaEN[0]) :null),
                CompanyName_L2: null,
                GovernorateID: null,
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