(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open2]"),
        closeModalBtn: document.querySelector("[data-modal-close2]"),
        modal: document.querySelector("[data-modal2]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

   function toggleModal() {
        document.body.classList.toggle("no-scroll");
        refs.modal.classList.toggle("is-hidden2");
    }
})();