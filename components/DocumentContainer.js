import React from 'react';
import dCStyles from '../styles/documentContainer.module.css';

function DocumentContainer({children}) {


    return (
        <div id={dCStyles.documentContainer} >
            {children}
        </div>
    );
}

export default DocumentContainer;