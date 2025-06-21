import React, { useState } from 'react';

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const endpoint = 'https://formspree.io/f/xrbkakkl'; // Replace with your Formspree form ID
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(e.target),
    });
    if (response.ok) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          placeholder="Your Name" 
          required 
          className="contact-input"
        />
        <input 
          name="email" 
          type="email" 
          value={form.email} 
          onChange={handleChange} 
          placeholder="Your Email" 
          required 
          className="contact-input"
        />
        <textarea 
          name="message" 
          value={form.message} 
          onChange={handleChange} 
          placeholder="Your Message" 
          required 
          rows={4} 
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">Send</button>
      </form>
      {sent && <div className="form-success-message">Message sent!</div>}
    </div>
  );
}

export default Contact; 