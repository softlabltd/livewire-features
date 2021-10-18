import Swal from 'sweetalert2';

window.Swal = Swal
window.Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

window.addEventListener('DOMContentLoaded', () => {
  Livewire.on('success', text => {
    Toast.fire({
      title : text,
      icon : 'success'
    });
  });

  Livewire.on('warning', text => {
    Toast.fire({
      title : text,
      icon : 'warning'
    });
  });


  Livewire.on('error', text => {
    Toast.fire({
      title : text,
      icon : 'error'
    });
  });

  Livewire.on('info', text => {
    Toast.fire({
      title : text,
      icon : 'info'
    });
  });


  Livewire.on('confirm', (data) => {
     Swal.fire({
        icon: 'warning',
        title: 'are you sure?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        html: data.text,
     }).then( (resp) => {
        if (resp.isConfirmed) {
          return Livewire.emit(data.method, data.token);
        }
     });
  });

})
