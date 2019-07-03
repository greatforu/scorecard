import React from 'react';
import firebase from './firebase'

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
            console.log(this.state.past);
        });
    }

    render() {
        // let {past} = this.state
        let {matches}= this.state.past
        return (
             
            Object.keys(matches[Past]).map((val, ind) => (
              <div>
                    <h1>Match {ind + 1}</h1>
                    <p>{matches["Past"]}</p>

              </div>
            ))
        
             )
    }
}
export default Past