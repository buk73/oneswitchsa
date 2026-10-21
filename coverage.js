<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coverage Assessment Request | OneSwitch SA</title>
  <meta name="description" content="Submit a fibre coverage assessment request with OneSwitch SA. Availability must be verified through the relevant provider or authorised source.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="container">
      <img src="logo.jpg" alt="OneSwitch SA Logo" class="logo">
      <nav aria-label="Main navigation">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="coverage.html">Coverage</a></li>
          <li><a href="compare.html">Compare</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="isp-partners.html">Partners</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <h1>Coverage Assessment Request</h1>
        <p>Submit your address and requirements so the OneSwitch SA team can assess whether a fibre enquiry may be relevant to your location.</p>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-title">
          <h2>How this works</h2>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>1. Share Your Details</h3>
            <p>Provide your address, suburb and the type of connection you need.</p>
          </div>
          <div class="card">
            <h3>2. Request Review</h3>
            <p>OneSwitch SA reviews the request and may identify relevant next steps for follow-up.</p>
          </div>
          <div class="card">
            <h3>3. Confirm Through the Provider</h3>
            <p>Availability must be confirmed through the relevant provider or another authorised source before a service can be arranged.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-title">
          <h2>Request a Fibre Coverage Assessment</h2>
          <p>Submitting this form does not confirm availability. It is a request for assessment and follow-up.</p>
        </div>

        <form id="coverageForm" action="https://formspree.io/f/mjgngrye" method="POST">
          <input type="hidden" name="_subject" value="New OneSwitch SA Coverage Assessment Request">
          <input type="hidden" name="_next" value="https://oneswitchsa.co.za/thank-you.html">

          <label for="name">Full Name *</label>
          <input id="name" type="text" name="name" autocomplete="name" required>

          <label for="email">Email Address *</label>
          <input id="email" type="email" name="email" autocomplete="email" required>

          <label for="phone">Phone Number *</label>
          <input id="phone" type="tel" name="phone" autocomplete="tel" required>

          <label for="address">Street Address *</label>
          <input id="address" type="text" name="address" autocomplete="street-address" required>

          <label for="suburb">Suburb *</label>
          <input id="suburb" type="text" name="suburb" required>

          <label for="city">City *</label>
          <input id="city" type="text" name="city" autocomplete="address-level2" required>

          <label for="requirement">Service Requirement *</label>
          <select id="requirement" name="requirement" required>
            <option value="">Select an option</option>
            <option value="Home Fibre">Home Fibre</option>
            <option value="Business Fibre">Business Fibre</option>
            <option value="Upgrade Existing Connection">Upgrade Existing Connection</option>
          </select>

          <label for="message">Additional Information</label>
          <textarea id="message" name="message" rows="5" placeholder="Tell us about your location, existing connection, or requirements."></textarea>

          <p id="coverageFormStatus" class="warning" aria-live="polite">This form is only a request for review and does not confirm fibre availability.</p>

          <button type="submit" class="btn btn-secondary">Submit Coverage Request</button>
        </form>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="trust-banner">
          <h2>Why submit a request?</h2>
          <p>OneSwitch SA can help gather the information needed to assess a suitable follow-up path. The actual service availability, installation details, and eligibility must still be confirmed by the relevant provider or authorised source.</p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>© 2026 OneSwitch SA. All Rights Reserved.</p>
    </div>
  </footer>

  <script src="coverage.js"></script>
</body>
</html>
