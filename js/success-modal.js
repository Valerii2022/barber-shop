(() => {
  const refs = {
    successModal: document.querySelector('[data-success-modal]'),
    successModalCloseBtn: document.querySelector('[data-success-modal-close]'),
  };

  refs.successModalCloseBtn.addEventListener('click', handleCloseSuccessBtnClick);

  function handleCloseSuccessBtnClick() {
    refs.successModal.classList.add('is-hidden');
  }
})();
