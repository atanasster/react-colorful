import React, { useState } from 'react';
import { HsvStringColorPicker } from '../../src/components/HsvStringColorPicker';
import { ColorLabel } from '../components/ColorLabel';

export default { 
    title: 'Components/HsvStringColorPicker',
    component: HsvStringColorPicker,
    order: 10,
}

export const overview = () => {
    const [color, setColor] = useState('hsv(1, 96%, 97%)');
    return (
        <>
            <HsvStringColorPicker color={color} onChange={setColor} />
            <ColorLabel color={color} />
        </>
    );
}
