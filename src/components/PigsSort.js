//should sort pigs based on name or weight, 
//i.e. from A-Z, Z-A, heaviest to lightest, or lightest to heaviest

import React from "react";

function PigSort({handleSetSortBy}){

    function sortPigs(event){
        handleSetSortBy(event.target.value)
    }

    return(
        <div>
            <select onChange={sortPigs} name="pigs_Sort">
            <option value="Sort Pigs">Sort Pigs</option>
            <option value="A-Z">A - Z</option>
            <option value="Z-A">Z - A</option>
            <option value="heaviest">Heaviest</option>
            <option value="lightest">Lightest</option>
            </select>
        </div>
    )
}

export default PigSort;