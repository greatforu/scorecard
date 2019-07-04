import React from "react";
import firebase from "./firebase"

class Scorecard extends React.Component {
    constructor() { super()
           this.state = { country: [],selected: ""} }

    handleChange = (event) => {
        const { value } = event.target
        this.setState({ selected: value })
        if (value !== "") document.title = value;
        else document.title = "ScoreCard"

    }
    componentDidMount() {
        const rootRef = firebase.database().ref();
        const oneRef = rootRef.child('country');
        oneRef.on('value', snap => {
            this.setState({
                country: snap.val()
            });
        });

    }
    render() {
        let { country, selected } = this.state;
        return (
            <main className="main">
                <label className="text-style">Choose Country for its Scorecard:</label>
                <select
                    onChange={this.handleChange}
                    name="country"
                    className="select-css"
                >
                    <option value="" key="1234">Select</option>
                    {Object.keys(country).map((val, ind) => (
                        <option key={ind}>{val}</option>
                    ))}
                </select>
                {selected !== "" &&
                    <table border="5">
                        <tbody>
                            <tr>
                                <td>S.no</td>
                                <td>Player Name</td>
                                <td>Score</td>
                                <td>Balls Played </td>
                                <td>Strike Rate</td>
                                <td>Status</td>
                            </tr>
                            {
                                Object.keys(country[selected]).filter(
                                    (val) => (val !== "Extras" && val !== "Total Score")).map(
                                        (val, ind) => (
                                    <tr key={ind}>
                                        <td>{ind + 1}</td>
                                        <td>{val}</td>
                                        <td>{country[selected][val]["Score"]}</td>
                                        <td>{country[selected][val]["Balls Played"]}</td>
                                        <td>{country[selected][val]["Strike Rate"]}</td>
                                        <td>{country[selected][val]["Status"]}</td>
                                    </tr>
                                ))
                            }
                            {
                                country[selected]["Extras"] &&
                                <tr>
                                    <td></td>
                                    <td>Extras</td>
                                    <td>{country[selected]["Extras"]}</td>
                                </tr>

                            }
                            {
                                country[selected]["Total Score"] &&
                                <tr>
                                    <td></td>
                                    <td>Total Score</td>
                                    <td>{country[selected]["Total Score"]}</td>
                                </tr>

                            }
                        </tbody>
                    </table>
                }
            </main>
        )
    }
}

export default Scorecard