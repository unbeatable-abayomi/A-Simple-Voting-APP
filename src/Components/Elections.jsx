import React from 'react';
import PDPComponent from '../Components/PDP/PDP_COMPONENT';
import APCComponent from '../Components/APC/APC_COMPONENT';
import votersArray from './voters'


class Elections extends React.Component  {
    state = {
        voters : [],
        apcVotes: 0,
        pdpVotes: 0
    }
    
    componentDidMount() {
        this.setState({
            voters: votersArray.voters
        })
    }        

    vote = (userName, cardID, party) => {
        let { pdpVotes, apcVotes } = this.state
        let electorate = this.state.voters.find(voter => voter.votersName === userName && voter.cardID === cardID)
        if (electorate && !electorate.hasVoted) {
            party === 'APC' ? this.setState({apcVotes: apcVotes + 1}) : this.setState({pdpVotes: pdpVotes + 1})
            let voterArray = [...this.state.voters].map(voter => {
                if (voter.votersName === userName) {
                    return {
                        ...voter,
                        hasVoted: true,
                        votedFor: party
                    }
                } else {
                    return voter
                }
            })
            this.setState({voters: voterArray})
        } else if (electorate && electorate.hasVoted) {
            alert('This electorate has voted before')
        } else {
            alert('This voter is not registered')
        }
    }

    render(){
        return(
        <div>
        <h1>ELECTION COMPONENT</h1>
        <div className="component_parties">
         <PDPComponent voters={this.voters} vote={this.vote} voteCount={this.state.pdpVotes} />
         <APCComponent voters={this.voters} vote={this.vote} voteCount={this.state.apcVotes}/>
        </div>
        </div>


        )
    }
    
    
}

export default Elections;