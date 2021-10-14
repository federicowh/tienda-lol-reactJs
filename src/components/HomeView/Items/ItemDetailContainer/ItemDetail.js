import React from 'react'
import { useHistory } from 'react-router'

export const ItemDetail = ({id, name, price, img, description, category}) => {

    const {goBack, push} = useHistory()

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <p>{category}</p>
            <h4>Precio: ${price}</h4>

            <button onClick={ () => goBack() }>
                Volver atras
            </button>

            <button onClick={ () => push("/") }>
                Volver al Inicio
            </button>
        </div>
    )
}
