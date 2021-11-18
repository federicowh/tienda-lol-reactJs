import React, { useContext, useEffect} from 'react'
import { CartContext } from '../../../context/CartContext'
import { UIContext } from '../../../context/UIContext'
import { Loader } from '../../../utilities/Loader/Loader'
import { ShoppingItemList } from './ShoppingItemList/ShoppingItemList'
import { ShoppingItemEmpty } from './ShoppingItemEmpty/ShoppingItemEmpty'
import { ShoppingFinalPrice } from './ShoppingFinalPrice/ShoppingFinalPrice'
import { Clock } from '../Clock/Clock'
import '../Shopping/shopping.css'

export const Shopping = () => {

    const { cart } = useContext(CartContext)

    const {loading, setLoading} = useContext(UIContext)

    useEffect( () => {
        setLoading(true)

        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <>
            {
                loading 
                ? <Loader />

                : <>
                    <Clock />

                    <div className="shoppingCart">

                        {
                            cart.length === 0
                            ?   <ShoppingItemEmpty />

                            :   <>
                                <h2>Resumen de compra</h2>

                                {
                                    <ShoppingItemList />
                                }

                                <ShoppingFinalPrice />
                                </>
                        }
                    </div>
                </>
            }
        </>
    )
}