import React from 'react';
import { FooterTitle } from './FooterTitle/FooterTitle'
import { FooterSponsors } from './FooterSponsors/FooterSponsors';

export const Footer = () => {

    const footerTitle = '™ & © 2021 Riot Games, Inc. Todos los derechos reservados. Riot Games, League of Legends y PvP.net son marcas comerciales o marcas registradas de Riot Games, Inc.'

    return (
        <>
            <FooterTitle footerTitle={footerTitle} />

            <FooterSponsors />
        </>
    )

}