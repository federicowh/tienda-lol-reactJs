import './homeView.css';
import React from 'react';
import { TimeIs } from './TimeIs';
import { ItemListContainer } from './ItemListContainer';

export const HomeView = ( props ) => {

    const {homeViewTitle} = props;

    return (
        <>
            <TimeIs />

            <ItemListContainer />
        </>
    )

}