const refs = {
  openModalBtn: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  form: document.querySelectorAll('[data-submit]'),
  successModal: document.querySelector('[data-success-modal]'),
  successModalCloseBtn: document.querySelector('[data-success-modal-close]'),
};

refs.openModalBtn.forEach(element => element.addEventListener('click', toggleModal));
refs.form.forEach(element => element.addEventListener('submit', handleSendSubmitBtn));
refs.successModalCloseBtn.addEventListener('click', handleCloseSuccessBtnClick);
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

  const formData = new FormData(e.currentTarget);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.table(data);

  refs.form.forEach(el => el.reset());
  refs.modal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
  setTimeout(handleSuccessModalOpen, 500);
  setTimeout(handleSuccessModalClose, 4000);
}

function handleSuccessModalOpen() {
  refs.successModal.classList.remove('is-hidden');
}

function handleSuccessModalClose() {
  refs.successModal.classList.add('is-hidden');
}

function handleCloseSuccessBtnClick() {
  refs.successModal.classList.add('is-hidden');
}
