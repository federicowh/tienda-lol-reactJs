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
            <span 
            onClick={handleRestar}
            className={styles.btnMin}
            >
                <box-icon name='minus' animation="tada-hover"></box-icon>
            </span>

            <span>{quantity}</span>

            <span 
            onClick={handleSumar}
            className={styles.btnMax}
            >
                <box-icon name='plus' animation="tada-hover"></box-icon>
            </span>
        </div>
    )
}
