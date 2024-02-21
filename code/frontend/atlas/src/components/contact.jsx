import React, { useState } from 'react';
import Footer from './footer';

function ContactPage() {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement the logic to handle the submitted message
        console.log("Received message:", message);
        // Reset the message input after submission
        setMessage('');
    };

    return (
        <>
        <div className="black-block left"></div> {/* Left black block */}
        <div className="container contact-container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="contact-info-container">
                        <h2 className="contact-heading">Contact Us</h2>
                        <div className="contact-info">
                            <div className="mb-3">
                                <h4>Email:</h4>
                                <p>digitalatlas211@gmail.com</p>
                            </div>
                            <div className="mb-3">
                                <h4>Phone:</h4>
                                <p>+1234567890</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <p>If any queries: </p>
                                <label htmlFor="message" className="form-label">Query</label>
                                <textarea className="form-control" id="message" name="message" rows="5" value={message} onChange={handleMessageChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="black-block right"></div> {/* Right black block */}
        <Footer />
        </>
    );
}

export default ContactPage;