import React from "react"
import * as firebase from 'firebase';

class Upcoming extends React.Component{

    constructor(){
        super()
        this.state = {
            upcoming: []
    }
}
    componentDidMount() {

        const rootRef = firebase.database().ref();
        const threeRef = rootRef.child('matches').child('Upcoming');
        threeRef.on('value', snap => {
            this.setState({
                upcoming: snap.val()
            });
            console.log(this.state.upcoming);
        });
    }
    render(){
        let {upcoming} = this.state
        return(

            <div>
                <h1>Upcoming Matches</h1>
            {Object.keys(upcoming).map((val, ind) => (
                <div key={ind}>
                    
                    <h2>Match {ind + 1}</h2>
                    <p key={ind}>{upcoming[val]["Upcoming"]}</p>
                </div>
              ))}

              </div>
        )
    }
}

export default Upcoming