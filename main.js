
function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.add('open');
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.remove('open');
}

function selectServiceAndBook(serviceName) {
  const select = document.getElementById('custService');
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(serviceName)) {
        select.selectedIndex = i;
        break;
      }
    }
  }
  openBookingModal();
}

function toggleMobileMenu() {
  const links = document.getElementById('navLinks');
  if (links) links.classList.toggle('mobile-open');
}

function showToast(message) {
  const toast = document.getElementById('toastPopup');
  const msgEl = document.getElementById('toastMessage');
  if (toast && msgEl) {
    if (message) msgEl.innerText = message;
    toast.classList.add('visible');
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 4500);
  }
}

function handleBookingSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('custName')?.value || 'Guest';
  const service = document.getElementById('custService')?.value || 'Service';
  
  closeBookingModal();
  showToast(`Thank you ${name}! Your booking for "${service}" has been received. Our team will text you to confirm.`);
  e.target.reset();
}

// Close on backdrop click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('bookingModal');
  if (e.target === modal) {
    closeBookingModal();
  }
});
