import React, { useState } from 'react';
import { ColorLabel } from '../../components/ColorLabel';
import { Hue } from '../../../src/components/common/Hue';

export default { 
    title: 'Common/Hue',
    component: Hue,
}

export const overview = () => {
    const [color, setColor] = useState({ h: 213 });
    return (
        <>
            <Hue hue={color.h} onChange={setColor} />
            <ColorLabel color={color} />
        </>
    );
}
