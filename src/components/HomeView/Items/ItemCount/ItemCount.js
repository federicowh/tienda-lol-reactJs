import React from 'react'
import '../ItemCount/itemCount.css'

export const ItemCount = ( {quantity, modifyQuantity, max} ) => {

    const handleRestar = () => {
        if (quantity > 1) {
            modifyQuantity(quantity - 1)
        }
    }

    const handleSumar = () => {
        if (quantity < max) {
            modifyQuantity(quantity + 1)
        }
    }

    const styles = {
        btnMin: `${quantity <= 1 ? "itemBtnActived" : ""}`,
        btnMax: `${quantity === max ? "itemBtnActived" : ""}`
    }

    return (
        <div className="itemCountContainer">
            <button 
            onClick={handleRestar}
            className={styles.btnMin}
            >
                -
            </button>

            <span>{quantity}</span>

            <button 
            onClick={handleSumar}
            className={styles.btnMax}
            >
                +
            </button>
        </div>
    )
}
