import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { askForProducts } from '../../../functions/askForProducts'
import { Loader } from '../../../utilities/Loader/Loader'
import { ItemList } from './ItemList'
import { UIContext } from '../../../context/UIContext'
import '../../HomeView/Items/items.css'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const {loading, setLoading} = useContext(UIContext)

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
            })
    }, [categoryId, setLoading])

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
