import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
import { Loader } from '../../../../utilities/Loader/Loader'
import { UIContext } from '../../../../context/UIContext'
import { getFirestore } from '../../../../firebase/FirebaseConfig'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const {loading, setLoading} = useContext(UIContext)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const products = db.collection('products')
        const item = products.doc(itemId)

        item.get()
            .then( (doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch( err => console.log(err) )
            .finally( () => {
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
