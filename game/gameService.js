angular.module("app").service("collectionService", function($http) {



  this.getCollections = function() {
    return $http({
      method: 'GET',
      url: 'https://restcountries.eu/rest/v1/alpha/' + randomCountryCode
    })
  };


this.countryCodes = alasql('SELECT * FROM XLSX("country_codes.xlsx",{headers: true})',[], function(data){
  console.log(data);
})
//Github about this functionality: https://github.com/agershun/alasql



this.generateRandomCountryCode() {
  var randomNum = Math.floor(Math.random() * countryCodes.length);
  this.randomCountryCode = countryCodes[randomNum]; //Country code should be 3 letters long.
}

// So thing I need to do: create a variable on scope that signifies the single "spun" country on (either in a single mainCtrl for the whole site, or the infobarCtrl).
