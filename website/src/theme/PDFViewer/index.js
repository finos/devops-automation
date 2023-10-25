import React from 'react';

export default ({pdf, height}) => {
    return <embed src={pdf + "#toolbar=0"} type="application/pdf" width="100%" height={height}/>
}