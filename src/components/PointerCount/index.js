import React from 'react';
import { PointerItem, Title, Value } from './styles';

export const PointerCount = ({ value, title }) => {
    return (
        <PointerItem>
            <Title>
                Clientes Capacitados
            </Title>
            <Value>
                30/25
            </Value>
        </PointerItem>
    );
}