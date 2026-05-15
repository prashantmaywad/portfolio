export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: "6rem 3rem" }}>
      <div className="contact-left reveal">
        <p className="section-label">05 — Contact</p>
        <h2 className="contact-headline">
          Let's build
          <br />
          something
          <br />
          <em>great.</em>
        </h2>
        <p className="contact-sub">
          Open to freelance projects, full-time roles, and interesting collaborations.
          <br />
          Drop me a message — I usually reply within 24 hours.
        </p>
        <br />
      </div>
      <div className="contact-form reveal">
        <div className="form-field">
          <label>Prashant Maywad</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="form-field">
          <label>Email</label>
          <input type="email" placeholder="john@example.com" />
        </div>
        <div className="form-field">
          <label>Message</label>
          <textarea rows="5" placeholder="Tell me about your project..." />
        </div>
        <div className="form-submit">
          <button className="btn btn-primary" style={{ cursor: "none", border: "none", width: "100%", textAlign: "center" }}>
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
