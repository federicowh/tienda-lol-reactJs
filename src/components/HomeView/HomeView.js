import React from 'react';
import { Clock } from './Clock/Clock';
import { ItemListContainer } from './Items/ItemListContainer/ItemListContainer';

export const HomeView = () => {

    return (
        <>
            <Clock />

            <ItemListContainer />
        </>
    )

}