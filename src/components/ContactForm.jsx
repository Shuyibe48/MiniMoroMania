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
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="name">Name</label>
                <input className="w-full border border-gray-300 p-2 rounded-md" type="text" id="name" value={name} onChange={handleNameChange} required />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="email">Email</label>
                <input className="w-full border border-gray-300 p-2 rounded-md" type="email" id="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="message">Message</label>
                <textarea className="w-full border border-gray-300 p-2 rounded-md" id="message" value={message} onChange={handleMessageChange} required></textarea>
            </div>
            <div className="text-center">
                <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-500" type="submit">Submit</button>
            </div>
        </form>
    );
};

export default ContactForm;
