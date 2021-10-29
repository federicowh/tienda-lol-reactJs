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

    const contactInfo = 'Riot Games, Inc. es una desarrolladora y editora de videojuegos y organizador de torneos de deportes electrónicos estadounidense. La empresa se fundó en septiembre de 2006 para desarrollar League of Legends, un videojuego multijugador de arena de batalla en línea. Riot Games opera 14 ligas de deportes electrónicos a nivel internacional y el Campeonato del Mundo de League of Legends. Hasta mayo de 2018, Riot Games tenía 24 oficinas en todo el mundo, en las que empleaba alrededor de 2500 personas.'

    return (
        <>
            {
                loading
                ?   <Loader />

                :   <div className="container">
                        <div className="form">
                            <ContactInfo contactInfo={ contactInfo } />

                            <ContactForm />
                        </div>
                    </div>
            }
        </>
    )
}