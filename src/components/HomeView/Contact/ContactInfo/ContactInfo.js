import React from 'react'

export const ContactInfo = ( props ) => {
    const { contactInfo } = props;

    return (
        <div className="contact-info">
            <h3 className="title">Contacta con Nosotros.</h3>

            <p className="text">{contactInfo}</p>

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
                    <i><box-icon type='logo' name='facebook-circle' color="white"></box-icon></i>
                    <i><box-icon name='twitter' type='logo' color="white"></box-icon></i>
                    <i><box-icon name='instagram' type='logo' color="white"></box-icon></i>
                    <i><box-icon name='linkedin' type='logo' color="white"></box-icon></i>
                </div>
            </div>
        </div>
    )
}
