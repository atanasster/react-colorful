import React, { useState } from 'react';
import { RgbaColorPicker } from '../../src/components/RgbaColorPicker';
import { ColorLabel } from '../components/ColorLabel';

export default { 
    title: 'Components/RgbaColorPicker',
    component: RgbaColorPicker,
    order: 3,
}

export const overview = () => {
    const [color, setColor] = useState({
        r: 213, g: 50, b: 16, a: 0.2
    });
    return (
        <>
            <RgbaColorPicker color={color} onChange={setColor} />
            <ColorLabel color={color} />
        </>
    );
}
