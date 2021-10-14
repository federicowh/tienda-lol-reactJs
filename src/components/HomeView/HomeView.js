import React from 'react';
import { Clock } from './Clock/Clock';
import { ItemListContainer } from './Items/ItemListContainer';
// import { Poke } from './Poke/Poke';

export const HomeView = () => {

    return (
        <>
            <Clock />

            <ItemListContainer />

            {/* <Poke /> */}
        </>
    )

}