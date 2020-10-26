import React, { useState } from 'react';
import { HslColorPicker } from '../../src/components/HslColorPicker';
import { ColorLabel } from '../components/ColorLabel';

export default { 
    title: 'Components/HslColorPicker',
    component: HslColorPicker,
    order: 5,
}

export const overview = () => {
    const [color, setColor] = useState({
        h: 213, s: 50, l: 16
    });
    return (
        <>
            <HslColorPicker color={color} onChange={setColor} />
            <ColorLabel color={color} />
        </>
    );
}
