require('js-loading-overlay');
window.addEventListener('DOMContentLoaded', () => {

   let loaders = require('./../../../../loading.json').loaders;
    for (var i = 0; i < loaders.length; i++) {
        $("#" + loaders[i]).on('click', function() {
          if (!document.getElementById('overlay')) {
                   JsLoadingOverlay.show({'spinnerIcon': 'ball-fussion'});
             }
        })
    }


      Livewire.on('hideLoading', () =>{
        if (document.getElementById('overlay')) {
              JsLoadingOverlay.hide();
          }
      });

      Livewire.on('showLoading', () =>{
        if (!document.getElementById('overlay')) {
                 JsLoadingOverlay.show({'spinnerIcon': 'ball-fussion'});
           }
      });

      Livewire.onError((error) => {
         if (document.getElementById('overlay')) {
           JsLoadingOverlay.hide();
         }
      });

});
