import './homeView.css';
import React from 'react';
import { Clock } from './Clock/Clock';
import { ItemListContainer } from './Items/ItemListContainer';

export const HomeView = ( props ) => {

    const {homeViewTitle} = props;

    return (
        <>
            <Clock />

            <ItemListContainer />
        </>
    )

}