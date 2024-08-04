import React,{useState} from 'react'
import "./contact.css"

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name.trim() || !email.includes('@')) {
      alert('Please fill out the form correctly.');
      return;
    }

    // Here you would typically send the data to a server or handle it as needed
    console.log({ name, email, message });
    alert('Form submitted successfully!');
  };
  return (
    <>
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Contact