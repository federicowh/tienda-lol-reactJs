import { stock } from "../data/stock"

export const askForProducts = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock) 
        }, 2000)
    })

}