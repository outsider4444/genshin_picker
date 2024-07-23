import React from 'react';

const PreIcon = ({number, size = 70, float}) => {
    return (
        <div style={{
            border: "grey 2px solid",
            borderRadius: "25%",
            width: size,
            height: size,
            textAlign: "center",
            marginRight: "10px",
            marginTop: "15px",
            float: float
        }}>
            <div style={{marginTop: "15px"}}>{number}</div>
        </div>
    );
};

export default PreIcon;
