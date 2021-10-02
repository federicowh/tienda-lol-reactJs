import React from 'react'
import { useEffect, useState } from "react";
import { pedirProductos } from '../../helpers/pedirProductos';

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log(items)
        setLoading(true)

        pedirProductos()
            .then((res) => {
                setItems(res)
            })
            .catch((err) => console.log(err))
            .finally(() => 
                setLoading(false),
                console.log('Fin del Llamado')
            )
    }, [])

    return (
        <>
            {loading ? <h2>Cargando...</h2> : <h1>Productos:</h1>}

            { items.map((item) => (
                <div key={item.id}>
                    <p>ID: {item.id}</p> 
                    <h2>{item.name}</h2> 
                    <p>{item.price}</p>
                    <hr/>
                </div>
                ) 
            ) }
        </>
    )
}
