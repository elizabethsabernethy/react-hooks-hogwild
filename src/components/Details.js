import React from "react";

function Details({pig, hide}){
    return(
        <div hidden={hide}>
            <p>Specialty: {pig.specialty}</p>
            <p>Weight: {pig.weight}</p>
            <p>Greased: {pig.greased ? 'Yes' : 'No'}</p>
            <p>Highest Achievement: {pig['highest medal achieved']}</p>
        </div>
    )
}

export default Details;