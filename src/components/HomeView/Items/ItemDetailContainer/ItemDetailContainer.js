import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
import { askForProducts } from '../../../../functions/askForProducts'
import { Loader } from '../../../../utilities/Loader/Loader'
import { UIContext } from '../../../../context/UIContext'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const {loading, setLoading} = useContext(UIContext)

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
    }, [itemId, setLoading])

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
