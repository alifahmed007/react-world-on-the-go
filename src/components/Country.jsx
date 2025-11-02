import React, { useState } from 'react';
import '../App.css'

const Country = ({country , handlerVisit , handlerVisitedFlag}) => {
    console.log(country)
    const [Visited ,setVisited] = useState(false);

    const handlerVisited =() =>{
        // console.log("button clicked")

        // option 1
        // if(Visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }

        //option 2
        // setVisited (Visited ? false : true);

        //option 3
        setVisited(!Visited)
        handlerVisit(country);
        
    }
    return (
        <div className={`country ${Visited && 'country-visited'}`}>
            <img src={country.flags.flags.png}></img>
            <h3>Name:{country.name.common}</h3>
            <p>Population:{country.population.population}</p>
            <p>Area:{country.area.area}{country.area.area >3000 ? "Big Country" : "Small Country"} </p>
            <button onClick={handlerVisited}>
                {Visited ? "visited":"Not Visited"}
            </button>
            <button onClick={()=>{handlerVisitedFlag(country.flags.flags.png)}}>add flag</button>
            
        </div>
    );
};

export default Country;