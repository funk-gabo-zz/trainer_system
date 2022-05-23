import React from 'react';
import { PointerCountContainer, PointerItem, Title, Value } from './styles';

export const PointerCount = ({ value, title }) => {
    return (
        <PointerCountContainer>
            <PointerItem>
                <Title>
                    {title}
                </Title>
                <Value>
                    {value}
                </Value>
            </PointerItem>
        </PointerCountContainer>
    );
}