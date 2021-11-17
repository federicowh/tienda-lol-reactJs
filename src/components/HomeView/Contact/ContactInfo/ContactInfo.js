import React from 'react'

export const ContactInfo = () => {
    const contactInfo = 'Riot Games, Inc. es una desarrolladora y editora de videojuegos y organizador de torneos de deportes electrónicos estadounidense. La empresa se fundó en septiembre de 2006 para desarrollar League of Legends, un videojuego multijugador de arena de batalla en línea. Riot Games opera 14 ligas de deportes electrónicos a nivel internacional y el Campeonato del Mundo de League of Legends. Hasta mayo de 2018, Riot Games tenía 24 oficinas en todo el mundo, en las que empleaba alrededor de 2500 personas.'
    const contactAddress = 'Los Ángeles, California, EE.UU'
    const contactEmail = 'support@riotgames.com'
    const contactTel = '424-231-1111'
    const connectWithUs = 'Conecta con nosotros:'

    return (
        <div className="contact-info">
            <h3 className="title">Contacta con Nosotros.</h3>

            <p className="text">{contactInfo}</p>

            <div className="info">
                <div className="information">
                    <box-icon name='map' type='solid' color="white" animation='tada-hover'></box-icon>
                    <p>{contactAddress}</p>
                </div>

                <div className="information">
                    <box-icon name='envelope-open' color="white" animation='tada-hover'></box-icon>
                    <p>{contactEmail}</p>
                </div>

                <div className="information">
                    <box-icon name='phone' color="white" animation='tada-hover'></box-icon>
                    <p>{contactTel}</p>
                </div>
            </div>

            <div className="social-media">
                <p>{connectWithUs}</p>

                <div className="social-icons">
                    <i><box-icon type='logo' name='facebook-circle' color="white" animation='tada-hover'></box-icon></i>
                    <i><box-icon type='logo' name='twitter' color="white" animation='tada-hover'></box-icon></i>
                    <i><box-icon type='logo' name='instagram' color="white" animation='tada-hover'></box-icon></i>
                    <i><box-icon type='logo' name='linkedin' color="white" animation='tada-hover'></box-icon></i>
                </div>
            </div>
        </div>
    )
}
