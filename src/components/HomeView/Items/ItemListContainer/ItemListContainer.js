import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Loader } from '../../../../utilities/Loader/Loader'
import { ItemList } from './ItemList'
import { UIContext } from '../../../../context/UIContext'
import { getFirestore } from '../../../../firebase/FirebaseConfig'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const {loading, setLoading} = useContext(UIContext)

    const {categoryId} = useParams()

    useEffect( () => {

        setLoading(true)

        const db = getFirestore()
        const products = categoryId 
            ? db.collection('products').where('category', '==', categoryId)
            : db.collection('products')

        products.get()
        .then( (response) => {
            const newProducts = response.docs.map( (doc) => {
                return { id: doc.id, ...doc.data() }
            })

            setItems(newProducts)
        })
        .catch( err => console.log(err) )
        .finally( () => {
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
