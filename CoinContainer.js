import React, { Component } from 'react';
import {choice} from "./helpers";
import Coin from './Coin';

class CoinContainer extends Component {

    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: 'tails', imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"}
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            nFlips: 0,
            nHeads: 0,
            nTails: 0,
            currCoin: null
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
                  
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            }
        })
    }

    handleClick(e){
        this.flipCoin();
    }

    render() {
        return (
            <div className = "CoinContainer">
                <h2>Let's Flip A Coin</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button onClick={this.handleClick}>Flip The Coin!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
            </div>
        )
    }
}

export default CoinContainer;