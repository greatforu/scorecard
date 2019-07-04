import React from 'react';
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Scorecard from './Scorecard';
import Past from './Components/Past'
import Today from './Components/Today';
import Upcoming from './Components/Upcoming';
import PointTable from './Components/PointTable';




function App() {
    return (
        <div >
            <Header />
            <Main />
            <Scorecard />

            <Past />

            <Today />
            <Upcoming />
            <PointTable />
            <Footer />

        </div>
    );
}

export default App;