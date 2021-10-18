window.addEventListener('DOMContentLoaded', () => {
  Livewire.on('showModal', () => {
        $("#exampleModalScrollable").modal('show')
  });

  Livewire.on('hideModal', () => {
        $("#exampleModalScrollable").modal('hide')
  });


    Livewire.on('showGatewayModal', () => {
          $("#GatewayModal").modal('show')
    });

    Livewire.on('hideGatewayModal', () => {
          $("#GatewayModal").modal('hide')
    });

});
