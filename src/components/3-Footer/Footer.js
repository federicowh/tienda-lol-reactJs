import React from 'react';

export const Footer = ( props ) => {

    const {footerTitle} = props;

    return (
        <>
            <p className="footer-parrafoPrincipal">{footerTitle}</p>
        </>
    )

}