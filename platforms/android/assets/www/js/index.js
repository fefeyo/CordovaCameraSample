
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        console.log("onDeviceReady");

        var options = {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI
        };
        navigator.camera.getPicture(function(imageData){
            alert(imageData);
        }, function(){
            alert("fail");
        }, options);
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();