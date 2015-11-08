'use strict';

angular.module('appApp')
    .controller('AudioCtrl', function($scope, socket, Modal, Audio) {
    	$scope.audio = Audio.query();

    	$scope.addAudio = function() {
    		Modal.audio.add();
    	};

    	$scope.removeAudio = function(clip, $index) {
    		Modal.audio.delete(clip, function(wasRemoved) {
                socket.socket.emit('audio:removed');
    		});
    	};

        $scope.listenAudio = function(clip) {
            Modal.audio.listen(clip);
        };

    	socket.socket.on('audio:update:one', function(clip) {
    		$scope.audio.unshift(clip);
    	});

        socket.socket.on('audio:update:all', function(clips) {
            $scope.audio = clips;
        });
    });
