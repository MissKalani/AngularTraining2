'use strict';

eventsApp.controller('CookieStoreSampleController',
    function CookieStoreSampleController($scope, $cookieStore) {
        $scope.event = { id: 1, name: "My Event" };

        $scope.saveEventToCookie = function (event) {
            $cookieStore.put('event', event); // we give it a key and value 
        };
        $scope.getEventFromCookie = function () {
            console.log($cookieStore.get('event')); //pass in the key of cookie to be retrieved
        };
        $scope.removeEventCookie = function () {
            $cookieStore.remove('event');
        };
    }
);