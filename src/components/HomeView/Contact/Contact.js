import React, { useContext, useEffect } from 'react'
import { ContactInfo } from './ContactInfo/ContactInfo'
import { ContactForm } from './ContactForm/ContactForm'
import { Loader } from '../../../utilities/Loader/Loader'
import { UIContext } from '../../../context/UIContext'
import '../Contact/contact.css'

export const Contact = () => {

    const {loading, setLoading} = useContext(UIContext)

    useEffect( () => {
        setLoading(true)

        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <>
            {
                loading
                ?   <Loader />

                :   <div className="contactContainer">
                        <div className="contactContainerForm">
                            <ContactInfo />

                            <ContactForm />
                        </div>
                    </div>
            }
        </>
    )
}