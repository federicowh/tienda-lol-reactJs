import React from 'react';
import { Clock } from './Clock/Clock';
import { ItemListContainer } from './Items/ItemListContainer';

export const HomeView = () => {

    return (
        <>
            <Clock />

            <ItemListContainer />
        </>
    )

}