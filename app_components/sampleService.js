myApp.factory('sampleService', ['$http', function ($http) {
    sampleService = {};

    sampleService.getSampleData = function () { 
        console.log("hema");
        return $http({
            method: "GET",
            url: "http://192.168.1.4:8081/api/user"
        })  
    }
    sampleService.setSample = function (datavalue) {
        return $http({
            method: "POST",
            url: "http://localhost:8081/api/user",
            data: $.param(datavalue),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
    }
    sampleService.EditSample = function(dataValue,sample_id){
         console.log(dataValue);
          return $http({
                      method: 'PUT',
                      url: "http://localhost:8081/api/user"+sample_id,
                       //url: 'http://192.168.1.10:4005/api/edit_station/STN-1',
                      data: $.param(dataValue),
                      headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                  })
      };
    //   sampleService.DeleteSample = function(sample_id){
    //      return $http({
    //               method: 'DELETE',
    //               url: "http://localhost:8081/api/user"+sample_id
    //           })
    //    }
    return sampleService;
}])