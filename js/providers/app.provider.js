(function () {
    'use strict';

    angular
        .module('app')
        .provider('App', AppProvider);

    function AppProvider() {
        var _url = 'https://api.github.com/';

        this.setUrl = function (url) {
            if(typeof url === 'string')
                _url = url;
        }

        this.$get = function () {
            return {
                urlBase: _url
            }
        }
    }

})();