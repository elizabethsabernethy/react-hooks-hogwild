//should only show pig info, such as title, pic, and details

import React, { useState } from "react";
import Title from "./Title";
import Details from "./Details";

function Pig({pig}){
    const [hide, setHide] = useState(true)

    function isHidden(){
        setHide(hide => !hide)
    }

    return(
        <div className="ui eight wide column">
           <Title pig={pig} showDetails={isHidden}/>
           <Details pig={pig} hide={hide}/>
        </div>
    )
}

export default Pig;