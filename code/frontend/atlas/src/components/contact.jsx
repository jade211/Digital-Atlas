
// import { useEffect, useState } from "react";

// function Contact() {
//     const [contactData, setContactData] = useState({
//         name: '',
//         email: '',
//         message: '',
//         status: '' // Add status field to the state
//     });

//     const handleChange = (event) => {
//         setContactData({
//             ...contactData,
//             [event.target.name]: event.target.value
//         });
//     };

//     const submitForm = async () => {
//         const requestOptions = {
//             method: 'POST',
//             body: JSON.stringify(contactData),
//             headers: { 'Content-Type': 'application/json' }
//         };

//         try {
//             const baseUrl = 'http://127.0.0.1:8000/contact/';
//             const response = await fetch(baseUrl, requestOptions);
//             if (response.ok) {
//                 setContactData({
//                     name: '',
//                     email: '',
//                     message: '',
//                     status: 'success' // Set status to success
//                 });
//             } else {
//                 throw new Error('Network response was not ok.');
//             }
//         } catch (error) {
//             console.error('There was an error!', error);
//             setContactData({ ...contactData, status: 'error' }); // Update status to error
//         }
//     };

//     useEffect(() => {
//         document.title = "Contact Us";
//     }, []);

//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 <div className="col-8 offset-2">
//                     {contactData.status === 'success' && <p className="text-success">Thanks for contacting us</p>}
//                     {contactData.status === 'error' && <p className="text-danger">Something wrong happened!!</p>}
//                     <div className="card">
//                         <h5 className="card-header">Contact Us</h5>
//                         <div className="card-body">
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputEmail1" className="form-label">Full Name:</label>
//                                 <input value={contactData.name} onChange={handleChange} name="name" type="text" className="form-control" />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputEmail" className="form-label">Email</label>
//                                 <input value={contactData.email} onChange={handleChange} name="email" type="email" className="form-control" />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputEmail" className="form-label">Message</label>
//                                 <textarea rows="10" value={contactData.message} onChange={handleChange} name="message" className="form-control"></textarea>
//                             </div>
//                             <button onClick={submitForm} type="submit" className="btn btn-primary">Submit</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact;


// function Contact() {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-6 offset-md-3">
//                     <div className="contact-form-container">
//                         <h2 className="contact-heading">Contact Us</h2>
//                         <div className="contact-form-wrapper">
//                             <iframe className="contact-form-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLScvNdFzXCM7N7R8kIFNSKWuXdDxNWzVO6OdUosDSdzWtoYx8A/viewform?embedded=true" width="640" height="687" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Contact;



// import React from 'react';

// function ContactPage() {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-6 offset-md-3">
//                     <div className="contact-info-container">
//                         <h2 className="contact-heading">Contact Us</h2>
//                         <div className="contact-info">
//                             <div className="mb-3">
//                                 <h4>Email:</h4>
//                                 <p>info@digitalatlas.com</p>
//                             </div>
//                             <div className="mb-3">
//                                 <h4>Phone:</h4>
//                                 <p>+1234567890</p>
//                             </div>
//                             <div className="mb-3">
//                                 <h4>Address:</h4>
//                                 <p>123 Main Street, City, Country</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ContactPage;


import React, { useState } from 'react';

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
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="contact-info-container">
                        <h2 className="contact-heading">Contact Us</h2>
                        <div className="contact-info">
                            <div className="mb-3">
                                <h4>Email:</h4>
                                <p>info@digitalatlas.com</p>
                            </div>
                            <div className="mb-3">
                                <h4>Phone:</h4>
                                <p>+1234567890</p>
                            </div>
                            <div className="mb-3">
                                <h4>Address:</h4>
                                <p>123 Main Street, City, Country</p>
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
    );
}

export default ContactPage;