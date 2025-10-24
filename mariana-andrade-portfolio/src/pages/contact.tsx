import React from 'react';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <div>
            <Header />
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
                <p className="mb-4">I would love to hear from you! Please fill out the form below to get in touch.</p>
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;