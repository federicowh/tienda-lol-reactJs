import React from 'react'
import intel from '../../../media/sponsors/intelLogo.png'
import riot from '../../../media/sponsors/riot-games.svg'
import twitch from '../../../media/sponsors/twitchLogo.webp'
import '../../Footer/FooterSponsors/footerSponsors.css'

export const FooterSponsors = () => {

    const goTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="sponsorsContainer">
            <img id="intel" src={intel} alt="intel" />
            <img id="twitch" src={riot} alt="twitch" />
            <img id="riot" src={twitch} alt="riot" />

            <box-icon
                name='chevron-up-square' 
                type='solid' 
                size='md'
                animation='fade-up-hover'
                color="black"
                style={{cursor: "pointer",}}
                onClick={ goTop }
            ></box-icon>
        </div>
    )
}
