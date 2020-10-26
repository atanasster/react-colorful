import React, { useState } from 'react';
import { HsvColorPicker } from '../../src/components/HsvColorPicker';
import { ColorLabel } from '../components/ColorLabel';

export default { 
    title: 'Components/HsvColorPicker',
    component: HsvColorPicker,
    order: 9,
}

export const overview = () => {
    const [color, setColor] = useState({
        h: 213, s: 50, v: 50
    });
    return (
        <>
            <HsvColorPicker color={color} onChange={setColor} />
            <ColorLabel color={color} />
        </>
    );
}
