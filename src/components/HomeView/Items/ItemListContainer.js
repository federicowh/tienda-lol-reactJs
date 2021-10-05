import React from 'react'
import { useEffect, useState } from "react";
import '../../HomeView/Items/items.css';
import { askForProducts } from '../../../functions/askForProducts';
import { Loader } from '../../../helpers/Loader';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        askForProducts()
            .then((res) => {
                setItems(res)
            })
            .catch((err) => console.log(err))
            .finally(() =>{
                setLoading(false)
                console.log('Fin del Llamado')
            })
    }, [])

    return (
        <>
            {
                loading
                    ? <Loader />
                    : <ItemList items={items}/>
            }
        </>
    )
}
