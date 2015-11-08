angular.module('appApp')
    .directive('audioPlayer', function() {
        return {
            replace: true,
            restrict: 'AE',
            templateUrl: 'components/audio-player/audio-player.html',
            scope: {
                audioPlayer: '='
            },
            link: function(scope, elem, attrs) {

            }
        };
    });
