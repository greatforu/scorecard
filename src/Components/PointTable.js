import React from "./react"
import firebase from "./firebase"

class PointTable extends React.Component{

    constructor(){
        super()
        this.state = {
            pointTable: []
    }
}
    componentDidMount() {

        const rootRef = firebase.database().ref();
        const twoRef = rootRef.child('pointTable');
        twoRef.on('value', snap => {
            this.setState({
                pointTable: snap.val()
            });
            console.log(this.state.pointTable);
        });
    }
    render(){
        return(
            Object.keys(pointTable[val]).map((val, ind) => (
                <div>
                      <h1>Match {ind + 1}</h1>
                      <p>{val}</p>
                      <p>{pointTable[""]}</p>
  
                </div>
              ))
        )
    }
}

export default PointTable
