import React from "react"
import firebase from './firebase'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            country: []

        }
        this.handleChange = this.handleChange.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })

    }
    componentDidMount() {
        const rootRef = firebase.database().ref();
        const oneRef = rootRef.child('country');
        oneRef.on('value', snap => {
            this.setState({
                country: snap.val()
            });
            console.log(this.state.country)
        });

        const countries = this.state.country.map((number) => <li>{number}</li>)
    }
    render() {
        return (
            <main className="main">
                <h1>  <ul>{this.countries}</ul></h1>
{/* 
            { rootRef = firebase.database().ref()}
             {   twoRef = rootRef.child('country').child('{this.state.country}')} */}

                <label className="text-style">Choose Country for its Scorecard:</label>
                <select
                    value={this.state.country}
                    onChange={this.handleChange}
                    name="country"
                    className="select-css"
                >
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                    <option value="England">England</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="West Indies">West Indies</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Bangladesh">Bangladesh</option>
                </select>


                <html>

                    <body>
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

                                <tr>
                                    <td>1</td>
                                    <td>Sachin Tendulkar</td>
                                    <td>74</td>
                                    <td>55</td>
                                    <td>Row 2, Column 4</td>
                                    <td>out</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Virender Sehwag</td>
                                    <td>55</td>
                                    <td>66</td>
                                    <td>Row 2, Column 4</td>
                                    <td>out</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>M.S Dhoni</td>
                                    <td>26</td>
                                    <td>40</td>
                                    <td>Row 2, Column 4</td>
                                    <td>out</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Yuvraj Singh</td>
                                    <td>60</td>
                                    <td>20</td>
                                    <td>Row 2, Column 4</td>
                                    <td>out</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Virat Kohli</td>
                                    <td>79</td>
                                    <td>85</td>
                                    <td>Row 2, Column 4</td>
                                    <td>out</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Zahir Khan</td>
                                    <td>12</td>
                                    <td>4</td>
                                    <td>Row 2, Column 4</td>
                                    <td>out</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Rohit Sharma</td>
                                    <td>112</td>
                                    <td>88</td>
                                    <td>Row 2, Column 4</td>
                                    <td>out</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Harbhajan Singh</td>
                                    <td>32</td>
                                    <td>22</td>
                                    <td>Row 2, Column 4</td>
                                    <td>out</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Bumrah</td>
                                    <td>9*</td>
                                    <td>15</td>
                                    <td>Row 2, Column 4</td>
                                    <td>not out</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Umesh Yadav</td>
                                    <td>8</td>
                                    <td>4</td>
                                    <td>Row 2, Column 4</td>
                                    <td>out</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Hardhik Pandya</td>
                                    <td>55*</td>
                                    <td>30</td>
                                    <td>Row 2, Column 4</td>
                                    <td>not out</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>total</td>
                                </tr>
                            </tbody>

                        </table>

                    </body>
                </html>
            </main>
        )
    }
}

export default Main