import React from 'react'
import { useHistory } from 'react-router'
import '../../Items/ItemDetailContainer/itemDetail.css'

export const ItemDetail = ({id, name, price, img, img1, img2, img3, description, category}) => {

    const {goBack, push} = useHistory()

    return (
        <div className="itemContainer">
            <div className="itemShow">
                <img id="newImg" className="itemImg" src={img} alt={name}/>

                <div className="itemShowNav">
                    <img className="subItemImg" src={img} alt={name}/>
                    <img className="subItemImg" src={img1} alt={name}/>
                    <img className="subItemImg" src={img2} alt={name}/>
                    <img className="subItemImg" src={img3} alt={name}/>
                </div>
            </div>

            <div className="itemInfo">
                <h2 className="itemName">{name}</h2>
                <p>Descripción: {description}</p>
                <p>Categoría: {category}</p>
                <h4>Precio: ${price}</h4>

                <div className="itemBtn">
                    <span onClick={ () => goBack() }>
                        Volver atras
                    </span>

                    <span onClick={ () => push("/tienda-lol-reactJs") }>
                        Volver al Inicio
                    </span>
                </div>
            </div>
        </div>
    )
}