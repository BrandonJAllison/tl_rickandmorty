import React from 'react';
import styled from 'styled-components'
import {Button} from "semantic-ui-react"

// const button = { 
//   color: palevioletred,
//   fontSize: 1em,
//   margin: 1em,
//   padding: 0.25em 1em,
//   border: 2px solid palevioletred,
//   borderRadius: 3px,
//   display: block,
// }

const StyleButton = styled.button`
 
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const Div = styled.div`

border: 1px solid red;

`

function PeopleCard(props) {

console.log('props', props)

return(

<Div >

<img src={props.person.image} alt=""/>
<p>name: {props.person.name}</p>
<p>status: {props.person.status}</p>
{/* <Button>Click Me</Button> */}
<Button content='Primary' primary />
</Div> 

)

}

export default PeopleCard; 