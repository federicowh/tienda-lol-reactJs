import React from 'react'
import '../Contact/contact.css'

export const Contact = () => {
    return (
        <>
            <div class="container">
                <div class="form">
                    <div class="contact-info">
                        <h3 class="title">Contacta con Nosotros.</h3>

                        <p class="text">
                        Riot Games, Inc. es una desarrolladora y editora de videojuegos y organizador de torneos de deportes electrónicos estadounidense. 
                        La empresa se fundó en septiembre de 2006 para desarrollar League of Legends, un videojuego multijugador de arena de batalla en línea. 
                        Riot Games opera 14 ligas de deportes electrónicos a nivel internacional y el Campeonato del Mundo de League of Legends. Hasta mayo de 2018, Riot Games tenía 24 oficinas en todo el mundo, en las que empleaba alrededor de 2500 personas.
                        </p>

                        <div class="info">
                            <div class="information">
                                <box-icon name='map' type='solid' color="white" ></box-icon>
                                <p>Los Ángeles, California, EE.UU</p>
                            </div>

                            <div class="information">
                                <box-icon name='envelope-open' color="white" ></box-icon>
                                <p>support@riotgames.com</p>
                            </div>

                            <div class="information">
                                <box-icon name='phone' color="white" ></box-icon>
                                <p>424-231-1111</p>
                            </div>
                        </div>

                        <div class="social-media">
                            <p>Conecta con nosotros :</p>

                            <div class="social-icons">
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

                    <div class="contact-form">
                        <form action="index.html" autocomplete="off">
                            <h3 class="title">Dejanos un mensaje</h3>

                            <div class="input-container">
                                <input type="text" name="name" class="input" placeholder="Nombre" />
                                <label for=""></label>
                            </div>

                            <div class="input-container">
                                <input type="email" name="email" class="input" placeholder="Email" />
                                <label for=""></label>
                            </div>

                            <div class="input-container">
                                <input type="tel" name="phone" class="input" placeholder="Teléfono" />
                                <label for=""></label>
                            </div>

                            <div class="input-container textarea">
                                <textarea name="message" class="input" placeholder="Tu mensaje..."></textarea>
                                <label for=""></label>
                            </div>

                            <input type="submit" value="Send" class="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
