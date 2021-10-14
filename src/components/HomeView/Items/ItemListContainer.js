import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import '../../HomeView/Items/items.css'
import { askForProducts } from '../../../functions/askForProducts'
import { Loader } from '../../../helpers/Loader'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        askForProducts()
            .then((res) => {

                if (categoryId) {
                    setItems(res.filter( prod => prod.category === categoryId))
                } else {
                    setItems( res )
                }
            })
            .catch((err) => console.log(err))
            .finally(() =>{
                setLoading(false)
                console.log('Fin del Llamado')
            })
    }, [categoryId])

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
