import React, { useState, useEffect } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('contactMessages');
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newMessages = [...messages, form];
    setMessages(newMessages);
    localStorage.setItem('contactMessages', JSON.stringify(newMessages));
    setForm({ name: '', email: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div>
      <h2 style={{ color: '#19335c', fontSize: '2rem'  }}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '1.5rem 0', color: '#19335c' }}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required style={{ padding: '0.7rem', borderRadius: '6px', border: '1px solid #ccc', color: '#19335c' }} />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required style={{ padding: '0.7rem', borderRadius: '6px', border: '1px solid #ccc', color: '#19335c' }} />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required rows={4} style={{ padding: '0.7rem', borderRadius: '6px', border: '1px solid #ccc', color: '#19335c' }} />
        <button type="submit" style={{ padding: '0.7rem', borderRadius: '6px', border: 'none', background: '#007bff', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Send</button>
        {submitted && <div style={{ color: 'green', marginTop: '0.5rem' }}>Message sent!</div>}
      </form>
      <h3 style={{ color: '#19335c' }}>Received Messages</h3>
      <ul style={{ paddingLeft: '1.2rem', maxWidth: '500px', color: '#19335c' }}>
        {messages.map((msg, idx) => (
          <li key={idx} style={{ marginBottom: '1rem', background: '#f5f7fa', borderRadius: '8px', padding: '0.8rem', color: '#19335c' }}>
            <strong>{msg.name}</strong> ({msg.email}):<br />
            {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact; 