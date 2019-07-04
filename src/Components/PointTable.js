import React from "react";
import * as firebase from 'firebase';

class PointTable extends React.Component {

    constructor() {
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
    render() {
        let { pointTable } = this.state;

        return (
            <div>
            <h1>Points Table</h1>
            <table border="5">
                <tbody>
                    <tr>
                        <td>S.no</td>
                        <td>Country</td>
                        <td>Matches</td>
                        <td>Win </td>
                        <td>Lose</td>
                        <td>Points</td>
                        <td>NRR </td>
                    </tr>
                    {
                        Object.keys(pointTable).map((val, ind) => (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{val}</td>
                                <td>{pointTable[val]["Matches Played"]}</td>
                                <td>{pointTable[val]["Win"]}</td>
                                <td>{pointTable[val]["Lose"]}</td>
                                <td>{pointTable[val]["Points"]}</td>
                                <td>{pointTable[val]["Nrr"]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
}

export default PointTable