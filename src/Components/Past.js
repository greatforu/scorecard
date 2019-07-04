import React from "react";
import * as firebase from 'firebase';

class Past extends React.Component {
    constructor() {
        super()
        this.state = {
            past: []
        }
    }
    componentDidMount() {

        const rootRef = firebase.database().ref();
        const twoRef = rootRef.child('matches').child('Past');
        twoRef.on('value', snap => {
            this.setState({
                past: snap.val()
            });
            console.log('past--->' + this.state.past);
        });
    }

    render() {
        let { past } = this.state
        // let { matches } = this.state.past
        // console.log('recode------->'+matches)
        return (
            <div>
                  <h1>Past Matches</h1>
            {Object.keys(past).map((val, ind) => (
                <div key={ind}>
                   
                    <h2>Match {ind + 1}</h2>
                    <p key={ind}>{past[val]["Past"]}</p>
                </div>
            ))}

            </div>
                
        )
    }
}
export default Past