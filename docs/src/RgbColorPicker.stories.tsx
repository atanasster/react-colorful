import React, { useState } from 'react';
import { RgbColorPicker } from '../../src/components/RgbColorPicker';
import { ColorLabel } from '../components/ColorLabel';

export default { 
    title: 'Components/RgbColorPicker',
    component: RgbColorPicker,
    order: 1,
}

export const overview = () => {
    const [color, setColor] = useState({
        r: 213, g: 50, b: 16
    });
    return (
        <>
            <RgbColorPicker color={color} onChange={setColor} />
            <ColorLabel color={color} />
        </>
    );
}
