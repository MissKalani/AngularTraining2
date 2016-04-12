'use strict';

eventsApp.controller('EventController',

    function EventController($scope, eventData, $anchorScroll, $location) {
        $scope.sortorder = 'name';
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = { color: 'red' };
        $scope.myclass = "blue";
        eventData.getEvent()
            .$promise
            .then(function (event) { $scope.event = event; console.log(event); })
            .catch(function (response) {console.log(response);}
            );
        

        //eventData.getEvent()
        //.success(function (event) {
        //    $scope.event = event;
        //}).error(function (data, status, headers, config) {
        //    $log.warn(data, status, headers(), config);
        //});

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function () {       
            $anchorScroll();
        }
    });