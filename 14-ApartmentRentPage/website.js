let backdrop = document.querySelector('.backdrop');
let body = document.querySelector('body');

backdrop.addEventListener('click', function () {
    body.classList.remove('show');
})

let closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', function () {
    body.classList.remove('show');
})


let menuIcon = document.querySelector('.menu');

const toggleNavbar = () => {
    body.classList.toggle('show');
}
menuIcon.addEventListener('click', toggleNavbar);


let subscribeModal = document.querySelector('#subscribe-modal');
let subscribeLink = document.querySelector('#subscribe');
let subscribeModalBtn = document.querySelector('#subscribe-modal-btn');
let modalCloseIcon = document.querySelector('.modal-close-icon');

subscribeLink.addEventListener('click', function () {
    subscribeModal.style.display = 'block';
});

subscribeModalBtn.addEventListener('click', function () {
    subscribeModal.style.display = 'block';
});


modalCloseIcon.addEventListener('click', function () {
    subscribeModal.style.display = 'none';
});



let rentalForm = document.querySelector('#rental-form');
let checkInInput = document.querySelector('#check-in');
let checkOutInput = document.querySelector('#check-out');
let adultsInput = document.querySelector('#adults');
let kidsInput = document.querySelector('#kids');

rentalForm.addEventListener('submit', event => {
    event.preventDefault();
    validateInputs('rental');
});

let contactForm = document.querySelector('#contact-form');
let contactNameInput = document.querySelector('#contact-name-input');
let contactEmailInput = document.querySelector('#contact-email-input');
let contactMessageInput = document.querySelector('#contact-message-input');

contactForm.addEventListener('submit', event => {
    event.preventDefault();
    validateInputs('contact');
});

let subscriptionForm = document.querySelector('#subscribe-form');
let subscriptionEmail = document.querySelector('#subscribe-email-input');

subscriptionForm.addEventListener('submit', event => {
    event.preventDefault();
    validateInputs('subscription');
});
