import React from 'react';



const APC_FORM = (props)=>{
    return (
        <div>
        <h1>APC Form</h1>
        <form onSubmit={props.getAPCvoters}>
            <label className="votername_slt">Name</label>
            <input className='voterName' type="text" name="voter" placeholder="Voters name" />
            <label className="cdname_slt">CardID .No</label>
            <input className='voterID' type="number" name="cardId" placeholder="Voters Card ID"/>
            <input type="submit" />
        </form>
         
        </div>
    )
}

export default APC_FORM;