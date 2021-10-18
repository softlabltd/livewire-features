window.addEventListener('DOMContentLoaded', () => {
  Livewire.on('scrollToTop', () => {
     $('html, body').animate({ scrollTop: 0 }, 'fast');
   });
})
