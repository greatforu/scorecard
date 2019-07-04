import React from "react"
import * as firebase from 'firebase';

class Today extends React.Component {

    constructor() {
        super()
        this.state = {
            today: []
        }
    }
    componentDidMount() {

        const rootRef = firebase.database().ref();
        const twoRef = rootRef.child('matches').child('Today');
        twoRef.on('value', snap => {
            this.setState({
                today: snap.val()
            });
            console.log(this.state.today);
        });
    }
    render() {
        let { today } = this.state
        return (
 
               <div>            
            <h1>Today Matches</h1>
         {   Object.keys(today).map((val, ind) => (
                <div key={ind}>
                   

                    <h2>Match {ind + 1}</h2>
                    <p key={ind}>{today[val]}</p>
                </div>
            ))}
            </div>
        )
    }
}

export default Today