import React from "./react"
import firebase from "./firebase"

class Today extends React.Component{

    constructor(){
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
    render(){
        return(
            Object.keys(matches[Past]).map((val, ind) => (
                <div>
                      <h1>Match {ind + 1}</h1>
                      <p>{val}</p>
                      <p>{matches["Past"]}</p>
  
                </div>
              ))
        )
    }
}

export default Today