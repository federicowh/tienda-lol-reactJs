import React from 'react'

export const ItemShow = ({name, img, img1, img2, img3}) => {


    return (
        <div className="itemShow">
            <img id="newImg" className="itemImg" src={img} alt={name}/>

            <div className="itemShowNav">
                <img className="subItemImg" src={img} alt={name}/>
                <img className="subItemImg" src={img1} alt={name}/>
                <img className="subItemImg" src={img2} alt={name}/>
                <img className="subItemImg" src={img3} alt={name}/>
            </div>
        </div>
    )
}
