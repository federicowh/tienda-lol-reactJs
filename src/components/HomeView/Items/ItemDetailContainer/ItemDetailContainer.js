import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
import { askForProducts } from '../../../../functions/askForProducts'
import { Loader } from '../../../../helpers/Loader'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        askForProducts()
            .then ( res => {
                setItem( res.find( prod => prod.id === Number(itemId)) )
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div>
            {
                loading
                    ? <Loader />
                    : <ItemDetail {...item}/>
            }
        </div>
    )
}
