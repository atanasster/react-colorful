import React, { useState } from 'react';
import { ColorLabel } from '../../components/ColorLabel';
import { Interactive, Interaction } from '../../../src/components/common/Interactive';

export default { 
    title: 'Common/Interactive',
    component: Interactive,
}

export const overview = () => {
    const [key, setKey] = useState<Interaction| undefined>();
    const [move, setMove] = useState<Interaction| undefined>();
    return (
        <>
            <Interactive onKey={setKey} onMove={setMove}>
                <input defaultValue="use keyboad and mouse move" />
            </Interactive>    
            <ColorLabel label='key' color={key} />
            <ColorLabel label='move' color={move} />
        </>
    );
}
