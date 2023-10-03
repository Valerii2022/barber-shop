(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    sendBtn: document.querySelectorAll('[data-send-info]'),
  };

  let name;
  let phone;
  let email;
  let barber;

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
      window.removeEventListener('keydown', handleKeyDown);
    }
  }

  function handleBackdropClick(e) {
    if (e.target === refs.modal) {
      refs.modal.classList.toggle('is-hidden');
    }
  }

  function handleSendSubmitBtn(e) {
    e.preventDefault();
    name = e.target[0].value;
    phone = e.target[1].value;
    if (e.target[1].value) {
      email = e.target[2].value;
    }
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
    refs.modal.classList.add('is-hidden');
  }
})();
