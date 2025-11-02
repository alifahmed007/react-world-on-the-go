import React, { use, useState } from 'react';
import Country from '../Country';
import '../../App.css'

const  Countries =({countriesPromise})=>{
    const [visit , setVisit]=useState([]);
    const [visitedFlag ,setVisitedFlag] =useState([])

    const handlerVisit =(country)=>{
        const visitNew =[...visit , country]
        setVisit(visitNew)
    }
    const handlerVisitedFlag =(flag)=>{
        const newVisitedFlag =[...visitedFlag ,flag ]
        setVisitedFlag(newVisitedFlag)
    }
    const countriesData =use(countriesPromise)
    const countries =countriesData.countries


    return (
        <div >
            <h4>In the countries:{countries.length}</h4>
            <h3>Total Country Visited: {visit.length} </h3>
            <h3>Total visit Flag: {visitedFlag.length}</h3>
            <ol>{
                visit.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
            }
            <div className='visited-flags'>
            {
                visitedFlag.map(flag =><img src={flag}></img>)
            }
            </div>
            </ol>
            <div className=' countries'>
                {
                countries.map(country =><Country key={country.cca3.cca3} country={country} handlerVisit={handlerVisit}  handlerVisitedFlag={handlerVisitedFlag}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;
