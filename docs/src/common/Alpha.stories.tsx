import React, { useState } from 'react';
import { ColorLabel } from '../../components/ColorLabel';
import { Alpha } from '../../../src/components/common/Alpha';

export default { 
    title: 'Common/Alpha',
    component: Alpha,
}

export const overview = () => {
    const [color, setColor] = useState({
        a: 0.2
    });
    return (
        <>
            <Alpha hsva={{ a: color.a,  h: 213, s: 50, v: 50 }} onChange={setColor} />
            <ColorLabel color={color} />
        </>
    );
}
