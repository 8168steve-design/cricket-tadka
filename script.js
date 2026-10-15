document.getElementById('year').textContent = new Date().getFullYear();
const modal = document.getElementById('modal');
document.querySelectorAll('[data-title]').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('modal-title').textContent = button.dataset.title;
    document.getElementById('modal-copy').textContent = button.dataset.copy;
    modal.showModal();
  });
});
document.querySelectorAll('.close, .close-action').forEach(button => button.addEventListener('click', () => modal.close()));
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
