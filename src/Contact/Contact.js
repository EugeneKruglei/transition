import React from 'react';
import './Contact.css';
import FormContainer from "../Container/FormContainer";


export default function Contact(props) {
    return (
        <div className="page contact">

            <section className="block slideUp">
                <h1>Contact Us</h1>
                <FormContainer/>
                </section>

        </div>
    );
}
