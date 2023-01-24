import React from "react";

function Title({pig, showDetails}){

    return(
        <div onClick={showDetails}>
            <h2>{pig.name}</h2>
            <img alt={pig.name} src={pig.image} width='500px' height='300px'></img>
        </div>
    )
}

export default Title;