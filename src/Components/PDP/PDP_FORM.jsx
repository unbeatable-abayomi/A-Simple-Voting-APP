import React from 'react';



const PDP_FORM = (props)=>{
    return (
        <div>
        <h1>PDP Form</h1>
        <form onSubmit={props.getPDPvoters}> 
            <label>Name</label>
            <input className='voterName' type="text" name="voter" placeholder="Voters name" />
            <label>CardID .No</label>
            <input className='voterID' type="number" name="cardId" placeholder="Voters Card ID"/>
            <input type="submit" />
        </form>
         
        </div>
    )
}

export default PDP_FORM;