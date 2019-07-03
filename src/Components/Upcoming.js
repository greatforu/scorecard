import React from "./react"
import firebase from "./firebase"

class Upcoming extends React.Component{

    constructor(){
        super()
        this.state = {
            upcoming: []
    }
}
    componentDidMount() {

        const rootRef = firebase.database().ref();
        const twoRef = rootRef.child('matches').child('Upcoming');
        twoRef.on('value', snap => {
            this.setState({
                today: snap.val()
            });
            console.log(this.state.upcoming);
        });
    }
    render(){
        return(
            Object.keys(matches[Upcoming]).map((val, ind) => (
                <div>
                      <h1>Match {ind + 1}</h1>
                      <p>{val}</p>
                      <p>{matches["Upcoming"]}</p>
  
                </div>
              ))
        )
    }
}

export default Upcoming