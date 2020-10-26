import React, { useState } from 'react';
import { ColorLabel } from '../../components/ColorLabel';
import { Pointer } from '../../../src/components/common/Pointer';
import styles from "../../../src/css/styles.css";
import { hsvaToHslaString } from "../../../src/utils/convert";
import { formatClassName } from "../../../src/utils/format";

export default { 
    title: 'Common/Pointer',
    component: Pointer,
}

export const overview = () => {
    const hsva = {  h: 213, s: 50, v: 50, a: 0.2 };
    const pointerClassName = formatClassName(["react-colorful__alpha-pointer", styles.alphaPattern]);

    return (
        <>
            <div style={{ position: 'relative', height: 50 }}>
                <Pointer className={pointerClassName} left={hsva.a} color={hsvaToHslaString(hsva)} />
            </div>    
            <ColorLabel color={hsva} />
        </>
    );
}
