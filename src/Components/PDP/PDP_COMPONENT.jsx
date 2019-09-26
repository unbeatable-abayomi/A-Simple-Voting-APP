import React from 'react';
import PDPForm from './PDP_FORM';



class PDP_COMPONENT extends React.Component {
    constructor(props){
        super(props)
        this.getPDPvoters = this.getPDPvoters.bind(this)
    
    }
    
    getPDPvoters(e){
        e.preventDefault()
        let voter_name = e.target.elements.voter.value.toLowerCase().trim();
        let voter_Id = e.target.elements.cardId.value;
        e.target.elements.cardId.value = '';
        e.target.elements.voter.value = '';
        
   
       this.props.vote(voter_name, voter_Id, 'PDP')  
    }
  
  
    render () {
    return (
        <div>
        <h1>PDP VOTE COUNT</h1>
        {this.props.voteCount}
        <PDPForm getPDPvoters = {this.getPDPvoters} />
        </div>
    )
   }
   
   
    
}

export default PDP_COMPONENT;