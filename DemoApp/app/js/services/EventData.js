﻿
eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/:id', { id: '@id' }, {"getAll": {method: 'GET', isArray:true}});
    return {
        getEvent: function () {
            return resource.get({ id: 1 });
        },
        save: function (event) {
            event.id = 999;
            return resource.save(event);
        },
        getAllEvents: function () {
            return resource.query();
        }
    };
});



//eventsApp.factory('eventData', function ($http) {
//    return {
//        getEvent: function () {
//           return $http({ method: 'GET', url: '/data/event/1' });
//        }
//    };
//});