import { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form className="p-4 mx-auto max-w-md" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4 text-[#ffc800]">Contact Us</h2>
            <div className="mb-4">
                <label className="block font-bold mb-2 text-[#ffc800]" htmlFor="name">Name</label>
                <input className="shadow border border-[#ffc800] bg-transparent appearance-none border rounded w-full py-2 px-3 text-cyan-100 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" value={name} onChange={handleNameChange} required />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2 text-[#ffc800]" htmlFor="email">Email</label>
                <input className="shadow border border-[#ffc800] bg-transparent appearance-none border rounded w-full py-2 px-3 text-cyan-100 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2 text-[#ffc800]" htmlFor="message">Message</label>
                <textarea className="shadow border border-[#ffc800] bg-transparent appearance-none border rounded w-full py-2 px-3 text-cyan-100 leading-tight focus:outline-none focus:shadow-outline" id="message" value={message} onChange={handleMessageChange} required></textarea>
            </div>
            <div className="text-center">
                <button className="bg-[#ffc800] hover:bg-[#8b6b05] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
            </div>
        </form>
    );
};

export default ContactForm;
