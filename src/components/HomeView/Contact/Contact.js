import React from 'react'
import { ContactInfo } from './ContactInfo/ContactInfo'
import { ContactForm } from './ContactForm/ContactForm'
import '../Contact/contact.css'

export const Contact = () => {

    return (
        <>
            <div className="container">
                <div className="form">
                    <ContactInfo />

                    <ContactForm />
                </div>
            </div>
        </>
    )
}