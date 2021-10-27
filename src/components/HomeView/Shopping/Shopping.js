import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { ShoppingItemList } from './ShoppingItemList/ShoppingItemList'
import { ShoppingItemEmpty } from './ShoppingItemEmpty/ShoppingItemEmpty'
import { ShoppingFinalPrice } from './ShoppingFinalPrice/ShoppingFinalPrice'
import { Clock } from '../Clock/Clock'
import '../Shopping/shopping.css'

export const Shopping = () => {
    const { cart } = useContext(CartContext)

    return (
        <>
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
    )
}