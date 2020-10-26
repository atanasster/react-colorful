import React, { useState } from 'react';
import { RgbStringColorPicker } from '../../src/components/RgbStringColorPicker';
import { ColorLabel } from '../components/ColorLabel';

export default { 
    title: 'Components/RgbStringColorPicker',
    component: RgbStringColorPicker,
    order: 2,
}

export const overview = () => {
    const [color, setColor] = useState('rgb(213, 50, 16)');
    return (
        <>
            <RgbStringColorPicker color={color} onChange={setColor} />
            <ColorLabel color={color} />
        </>
    );
}
