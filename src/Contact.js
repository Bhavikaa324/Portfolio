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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <h2 style={{ color: '#19335c', fontSize: '2rem' }}>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', width: '100%', color: '#19335c' }}
      >
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required style={{ padding: '0.7rem', borderRadius: '6px', border: '1px solid #ccc', color: '#19335c' }} />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required style={{ padding: '0.7rem', borderRadius: '6px', border: '1px solid #ccc', color: '#19335c' }} />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required rows={4} style={{ padding: '0.7rem', borderRadius: '6px', border: '1px solid #ccc', color: '#19335c' }} />
        <button type="submit" style={{ padding: '0.7rem', borderRadius: '6px', border: 'none', background: '#007bff', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Send</button>
      </form>
      {sent && <div style={{ color: 'green', fontSize: '1.1rem', marginTop: '1rem' }}>Message sent!</div>}
    </div>
  );
}

export default Contact; 