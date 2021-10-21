import React from 'react'
import '../Contact/contact.css'

export const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="form">
                    <div className="contact-info">
                        <h3 className="title">Contacta con Nosotros.</h3>

                        <p className="text">
                        Riot Games, Inc. es una desarrolladora y editora de videojuegos y organizador de torneos de deportes electrónicos estadounidense. 
                        La empresa se fundó en septiembre de 2006 para desarrollar League of Legends, un videojuego multijugador de arena de batalla en línea. 
                        Riot Games opera 14 ligas de deportes electrónicos a nivel internacional y el Campeonato del Mundo de League of Legends. Hasta mayo de 2018, Riot Games tenía 24 oficinas en todo el mundo, en las que empleaba alrededor de 2500 personas.
                        </p>

                        <div className="info">
                            <div className="information">
                                <box-icon name='map' type='solid' color="white" ></box-icon>
                                <p>Los Ángeles, California, EE.UU</p>
                            </div>

                            <div className="information">
                                <box-icon name='envelope-open' color="white" ></box-icon>
                                <p>support@riotgames.com</p>
                            </div>

                            <div className="information">
                                <box-icon name='phone' color="white" ></box-icon>
                                <p>424-231-1111</p>
                            </div>
                        </div>

                        <div className="social-media">
                            <p>Conecta con nosotros :</p>

                            <div className="social-icons">
                                <a href="#">
                                    <box-icon type='logo' name='facebook-circle' color="white" ></box-icon>
                                </a>
                                <a href="#">
                                    <box-icon name='twitter' type='logo' color="white" ></box-icon>
                                </a>
                                <a href="#">
                                    <box-icon name='instagram' type='logo' color="white" ></box-icon>
                                </a>
                                <a href="#">
                                    <box-icon name='linkedin' type='logo' color="white" ></box-icon>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form action="index.html" autoComplete="off">
                            <h3 className="title">Dejanos un mensaje</h3>

                            <div className="input-container">
                                <input type="text" name="name" className="input" placeholder="Nombre" />
                                <label></label>
                            </div>

                            <div className="input-container">
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label></label>
                            </div>

                            <div className="input-container">
                                <input type="tel" name="phone" className="input" placeholder="Teléfono" />
                                <label></label>
                            </div>

                            <div className="input-container textarea">
                                <textarea name="message" className="input" placeholder="Tu mensaje..."></textarea>
                                <label></label>
                            </div>

                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}