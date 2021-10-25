import React from 'react'
import '../FooterTitle/footerTitle.css'

export const FooterTitle = ( props ) => {

    const { footerTitle } = props;

    return (
        <>
            <p className="footerTitle">{footerTitle}</p>
        </>
    )
}
