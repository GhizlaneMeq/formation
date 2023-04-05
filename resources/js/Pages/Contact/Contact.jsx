import React from 'react'
import Navbar from './../Navbar/Navbar';

import './Contact.css'


function Contact({ auth }) {
    return (
        <>
            <Navbar auth={auth} />
            <section id="contact">
                <h2>Contact Us</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} required defaultValue={""} />
                    <button type="submit" className="cta">Send Message</button>
                </form>
            </section>


        </>
    )
}

export default Contact
