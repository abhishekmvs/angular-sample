myApp.controller("sampleController", ['$scope', '$http', 'ngDialog', 'sampleService', function ($scope, $http, ngDialog, sampleService) {
 
    $scope.getsample = function () {
        
        //   console.log("hema");
        sampleService.getSampleData()
            .then(function (response, status) {
                 console.log(JSON.stringify(response));
                $scope.sampleDetails = response.data.sampleData;
                $scope.sample_details = [];
                index = 0;
                $scope.sampleDetails.forEach(function (element) {

                    var obj = {
                        id: element.id,
                        name: element.name,
                        near: element.near,
                        street: element.street,
                        city: element.City
                    }
                    $scope.sample_details.push(obj);

                })
                //  console.log($scope.sample_details);               

            })

    }
    $scope.addSample = function (value) {
        // console.log("message");
        //console.log(JSON.stringify(value));
        var sampleData = {
            name: $scope.value.name,
            id: $scope.value.id,
            city: $scope.value.city,
            near: $scope.value.near,
            street: $scope.value.street
        }
       // console.log(sampleData);

        sampleService.setSample(sampleData)
            .then(function (data, status) {

                ngDialog.open({
                    template: '<p> Class Added successfully </p>',
                    plain: true
                });
                // $scope.data = [];

                $scope.getsample();
            }, function (error) {
                console.log(error);
            })

    }
    // $scope.DeleteSample = function (value) {
    //     $scope.editdata = angular.copy($scope.data[value]);
    //     $scope.sample_id = $scope.editdata.sample_id;
    //     // console.log($scope.station_id);
    //     sampleService.DeleteSample($scope.sample_id)
    //         .success(function (data, status) {
    //             ngDialog.open({
    //                 template: '<p style="color:green;">sample is Deleted Successfully.</p>',
    //                 plain: true
    //             });
    //             $scope.editdata = [];
    //             $scope.getsample();
    //         })
    //         .error(function (data, success) {
    //             ngDialog.open({
    //                 template: '<p style="color:red;">Some Error Occured!</p>',
    //                 plain: true
    //             });
    //         })
    // }
    $scope.EditSample = function (value, sample) {

        // console.log("messsage");
        $scope.sample = angular.copy($scope.sample_details[value]);
        var sample_details = {
            name: $scope.sample.name,
            id: $scope.sample.id,
            city: $scope.sample.city,
            near: $scope.sample.near,
            street: $scope.sample.street,

        }
        // console.log(sampleData);
        $scope.sample_id = $scope.sample.sample_id;
        //  console.log($scope.sample_id);
        $scope.addEditSample(sample_details, $scope.sample_id);
    }
    $scope.addEditSample = function (sample_details, sample_id) {
        sampleService.EditSample(sample_details, sample_id)
            .success(function (data, status) {
                // ngDialog.open({
                //     template: '<p>sample is Edited Successfully.</p>',
                //     plain: true
                // });
                $scope.editdata = [];
                $scope.getsample();
            })
            .error(function (data, success) {
                ngDialog.open({
                    template: '<p style="color:red;">Some Error Occured!</p>',
                    plain: true
                });
            })

    }  


    $scope.getsample();

}])