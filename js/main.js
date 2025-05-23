//Show and hide modal
const buyBtns = document.querySelectorAll('.js-buy');
    const modal = document.querySelector('.js-modal');
    const modalContainer =document.querySelector('.modal-container');
    const modalClose = document.querySelector('.js-modal-close');

    function showBuyTicket() {
        // alert('Successfully purchased ticket');
        modal.classList.add('open');
    }

    function hideBuyTicket() {
        modal.classList.remove('open');
    }

    for(const buyBtn of buyBtns) {
        buyBtn.addEventListener('click', showBuyTicket)
    }

    modalClose.addEventListener('click', hideBuyTicket)
    modal.addEventListener('click', hideBuyTicket)
    modalContainer.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    //Show slide
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.member-item');

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Chỉ kích hoạt 1 lần
      }
    });
  }, {
    threshold: 0.1 
  });

  items.forEach(item => {
    observer.observe(item);
  });
});
