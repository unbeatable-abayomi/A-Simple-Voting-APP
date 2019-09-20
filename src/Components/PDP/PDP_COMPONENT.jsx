import React from 'react';
import PDPForm from './PDP_FORM'
import { toUnicode } from 'punycode';


class PDP_COMPONENT extends React.Component {
    constructor(props){
        super(props)
        this.getPDPvoters = this.getPDPvoters.bind(this)
        this.state = {
            voters : [
                 {votersName : 'obi', cardId : 123}, {votersName : 'ada', cardId : 456}
            ],
              voteCount : 0
        
    }
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