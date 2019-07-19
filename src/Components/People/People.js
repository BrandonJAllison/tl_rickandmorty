import React, {useState, useEffect} from "react";
import axios from 'axios';
import PeopleCard from './PeopleCard'



function People() {

const [peopleData, setPeopleData] = useState();

useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character/?page=1')
    .then(res => {
        setPeopleData(res.data.results)
    })
    .catch(err => console.log(err));

},[])

console.log(peopleData)

if (!peopleData){
    return <h1>Loading......</h1>
}else {

    return(
        <div>
            {peopleData.map((person, index) => <PeopleCard person={person}  key={index}  />)}
              
        
        </div>
        
        );
     
}


}

export default People