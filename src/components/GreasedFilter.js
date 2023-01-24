//should filter pigs based on greased being true

import React, {useState} from "react";

function GreasedFilter({pigs, pigsToDisplay, setPigsToDisplay}){

    const [showGreasedOnly, setShowGreasedOnly] = useState(false)

    const greasedPigsToDisplay = pigs.filter((pig) => {
        if (pig.greased) {
        return pig;
        }
        return false;
      })

    function handleGreaseFilter(){
        setPigsToDisplay(greasedPigsToDisplay);
        setShowGreasedOnly(showGreasedOnly => !showGreasedOnly)
    }

    function handleShowAllPigs(){
        setPigsToDisplay(pigs);
        setShowGreasedOnly(showGreasedOnly => !showGreasedOnly)
    }

    function toggleGreasedPigs(){
        if(pigsToDisplay === pigs){
            handleGreaseFilter();
        }
        else {
            handleShowAllPigs();
        }
    }

    return(
        <div>
            <button onClick={toggleGreasedPigs}>{showGreasedOnly ? 'Show All Hogs' : 'Show Greased Hogs Only'}</button>
        </div>
    )
}

export default GreasedFilter;