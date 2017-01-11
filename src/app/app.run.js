;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .run(run);
    run.$inject = ['$rootScope', '$interval'];

    function run($rootScope, $interval) {
        var timer = $interval(function() {

        }, 100, 25);
        timer.then(finish, error, notify);
        $rootScope.cancelInterval = function() {
            $interval.cancel(timer);
        }
    }

    function finish() {
        console.log("finish");
    }

    function error() {
        console.log("error");
    }

    function notify() {
        console.log("updating")
    }


}(window, angular, undefined));
