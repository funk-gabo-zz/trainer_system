import React from 'react'
import { PointerCount } from '../PointerCount';
import { PointerContainer } from './styles';

export const Pointers = () => {
    return (
        <PointerContainer>
            <PointerCount />
            <PointerCount />
            <PointerCount />
        </PointerContainer>
    );
}