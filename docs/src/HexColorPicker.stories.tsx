import React, { useState } from 'react';

import { HexColorPicker } from '../../src/components/HexColorPicker';
import { ColorLabel } from '../components/ColorLabel';

export default { 
    title: 'Components/HexColorPicker',
    component: HexColorPicker,
    order: 0,
}

export const overview = () => {
    const [color, setColor] = useState('#990000');
    return (
        <>
            <HexColorPicker color={color} onChange={setColor} />
            <ColorLabel color={color} />
        </>
    );
}
