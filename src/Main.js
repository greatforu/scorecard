import React from "react"
import { Link } from "react-router-dom";



class Main extends React.Component {

    render() {

        return (
            <div>
                <button>
                    <h1><Link to="/Past">Past</Link></h1>
                </button>

                <button>
                    <h1><Link to="/Upcoming">Upcoming</Link></h1>
                </button>

                <button>
                    <h1><Link to="/Today">Today</Link></h1>
                </button>


                <button>
                    <h1><Link to="/PointTable">PointTable</Link></h1>
                </button>

                <button>
                    <h1><Link to="/Scorecard">scorecard</Link></h1>
                </button>
            </div>
        )
    }
}
export default Main
