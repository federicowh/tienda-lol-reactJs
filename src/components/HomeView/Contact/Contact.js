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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                            dolorum adipisci recusandae praesentium dicta!
                        </p>

                        <div class="info">
                            <div class="information">
                                <box-icon name='map' type='solid' color="white" ></box-icon>
                                <p>92 Cherry Drive Uniondale, NY 11553</p>
                            </div>

                            <div class="information">
                                <box-icon name='envelope-open' color="white" ></box-icon>
                                <p>lorem@ipsum.com</p>
                            </div>

                            <div class="information">
                                <box-icon name='phone' color="white" ></box-icon>
                                <p>123-456-789</p>
                            </div>
                        </div>

                        <div class="social-media">
                            <p>Connect with us :</p>

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
