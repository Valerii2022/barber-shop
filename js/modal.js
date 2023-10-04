const refs = {
  openModalBtn: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  sendBtn: document.querySelectorAll('[data-send-info]'),
  successModal: document.querySelector('[data-success-modal]'),
};

refs.openModalBtn.forEach(element => element.addEventListener('click', toggleModal));
refs.sendBtn.forEach(element => addEventListener('submit', handleSendSubmitBtn));

refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modal.addEventListener('click', handleBackdropClick);

function toggleModal() {
  document.body.classList.toggle('no-scroll');
  refs.modal.classList.toggle('is-hidden');
  window.addEventListener('keydown', handleKeyDown);
}

function handleKeyDown(e) {
  if (e.code === 'Escape') {
    refs.modal.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    window.removeEventListener('keydown', handleKeyDown);
  }
}

function handleBackdropClick(e) {
  if (e.target === refs.modal) {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.remove('no-scroll');
  }
}

function handleSendSubmitBtn(e) {
  e.preventDefault();

  let barberName;

  if (e.target[4]?.checked) barberName = e.target[4].id;
  if (e.target[5]?.checked) barberName = e.target[4].id;
  if (e.target[6]?.checked) barberName = e.target[4].id;

  e.target[3].name && e.target[4].name
    ? console.table({
        [e.target[0].name]: e.target[0].value,
        [e.target[1].name]: e.target[1].value,
        [e.target[2].name]: e.target[2].value,
        [e.target[3].name]: e.target[3]?.value,
        barber: barberName,
      })
    : console.table({
        [e.target[0].name]: e.target[0].value,
        [e.target[1].name]: e.target[1].value,
        [e.target[2].name]: e.target[2].value,
      });

  e.target[0].value = '';
  e.target[1].value = '';
  e.target[2].value = '';
  refs.modal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
  setTimeout(handleSuccessModalOpen, 1000);
  setTimeout(handleSuccessModalClose, 4000);
}

function handleSuccessModalOpen() {
  refs.successModal.classList.remove('is-hidden');
}

function handleSuccessModalClose() {
  refs.successModal.classList.add('is-hidden');
}
