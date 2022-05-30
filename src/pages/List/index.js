import React from 'react'
import { Pie } from "@ant-design/plots";
import { stsconfig } from '../../components/DonutPie/stsconfig'
import { ExampleDiv } from './style';

export const List = () => {
    return (
        <ExampleDiv>
        <Pie {...stsconfig} />
        </ExampleDiv>
    );
}