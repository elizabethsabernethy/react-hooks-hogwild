//Should show a list of pigs, as well as the sort component and filter component

import React, { useState } from "react";
import Pig from "./Pig";
import {v4 as uuid} from "uuid";
import GreasedFilter from "./GreasedFilter";
import PigSort from "./PigsSort";

function PigList({pigs}){

    const [pigsToDisplay, setPigsToDisplay] = useState(pigs)
    const [sortBy, setSortBy] = useState('Sort Pigs')

    const sortedPigs = pigsToDisplay.sort((a,b)=> { 
      if(sortBy === 'A-Z'){
        return a.name.localeCompare(b.name)
      }
      else if(sortBy === 'Z-A'){
        return b.name.localeCompare(a.name)
      }
      else if(sortBy === 'heaviest'){
        return b.weight - a.weight
      }
      else if(sortBy === 'lightest'){
        return a.weight - b.weight
      }
      return pigs;
    });

    function handleSetSortBy(input){
      setSortBy(input)
    }

    return(
        <div>
            <GreasedFilter pigs={pigs} pigsToDisplay={pigsToDisplay} setPigsToDisplay={setPigsToDisplay}/>
            <p></p>
            <PigSort handleSetSortBy={handleSetSortBy} pigsToDisplay={pigsToDisplay} setPigsToDisplay={setPigsToDisplay}/>
            <div className="ui grid container">
                {sortedPigs.map((pig)=>{
                    return <Pig key={uuid()} pig={pig}/>
                })}
            </div>
        </div>
    )
}

export default PigList;