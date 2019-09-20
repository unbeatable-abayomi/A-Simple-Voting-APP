import React from 'react';
import APCForm from './APC_FORM'

class APC_COMPONENT extends React.Component {
  constructor(props){
      super(props)
      this.getAPCvoters = this.getAPCvoters.bind(this);
}

  
  getAPCvoters(e){
    e.preventDefault()
     let voter_name = e.target.elements.voter.value.toLowerCase().trim();
     let voter_Id = e.target.elements.cardId.value;
     e.target.elements.cardId.value = '';
     e.target.elements.voter.value = '';

    this.props.vote(voter_name, voter_Id, 'APC')   
  }
  
  
  
    render () {
    return (
        <div>
        <h1>APC VOTE COUNT</h1>
        {this.props.voteCount}
        <APCForm getAPCvoters={this.getAPCvoters} />
        </div>
    )
   }
   
   
    
}

export default APC_COMPONENT;