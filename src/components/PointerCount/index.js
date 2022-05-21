import React from 'react';
import { PointerItem, Title, Value } from './styles';

export const PointerCount = ({ value, title }) => {
    return (
        <PointerItem>
            <Title>
                {title}
            </Title>
            <Value>
                {value}
            </Value>
        </PointerItem>
    );
}