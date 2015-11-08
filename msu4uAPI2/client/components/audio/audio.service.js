'use strict';

angular.module('appApp')
  .factory('Audio', function ($resource) {
    return $resource('/api/audio/:fileName/:method', {
      fileName: '@fileName'
    },
    {
      create: {
        method: 'POST',
        params: {}
      },
      get: {
        method: 'GET',
        params: {}
      },
      remove: {
        method: 'DELETE',
        params: {}
      },
      download: {
        method: 'GET',
        params: {
          method: 'download'
        }
      }
	  });
  });
