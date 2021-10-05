import './footer.css';
import React from 'react';
import { FooterSponsors } from './FooterSponsors/FooterSponsors';

export const Footer = () => {

    const footerTitle = '™ & © 2021 Riot Games, Inc. Todos los derechos reservados. Riot Games, League of Legends y PvP.net son marcas comerciales o marcas registradas de Riot Games, Inc.'

    return (
        <>
            <p className="footerTitle">{footerTitle}</p>

            <FooterSponsors />
        </>
    )

}