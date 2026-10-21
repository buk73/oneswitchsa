(function () {
  const form = document.getElementById('coverageForm');
  const status = document.getElementById('coverageFormStatus');

  if (!form || form.dataset.coverageBound === 'true') {
    return;
  }

  form.dataset.coverageBound = 'true';

  form.addEventListener('submit', function (event) {
    const action = (form.getAttribute('action') || '').trim();
    const validAction = !!action && action !== '#' && action !== 'https://formspree.io/f/YOUR_FORM_ID';

    if (!validAction) {
      event.preventDefault();
      if (status) {
        status.textContent = 'This form is temporarily unavailable. Please contact OneSwitch SA by email or WhatsApp to submit your request.';
        status.className = 'warning';
      }
      return;
    }

    if (status) {
      status.textContent = 'Please wait while your submission is sent. OneSwitch SA will review the request and follow up as needed.';
      status.className = 'warning';
    }
  });
})();
