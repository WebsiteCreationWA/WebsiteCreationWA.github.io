const klappbareSektion = document.querySelector('.klappbare-sektion');

klappbareSektion.addEventListener('click', function() {
    this.classList.toggle('geöffnet');
});
