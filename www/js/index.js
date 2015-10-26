
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);http://docs.monaca.mobi/cur/ja/reference/
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function boot_camera(){
    console.log("boot_camera");
    var options = {
        quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI
    };
    navigator.camera.getPicture(function(imageData){
        alert(imageData);
    }, function(){
        alert("fail");
    }, options);
}

app.initialize();