import React from "react"
import "./index.css"
class Header extends React.Component{
    constructor(){
        super()
        this.state={
            country:"India"
        }
    }
    

    render(){
        
  return(
      <header> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwiqZaJpwd3s5Ul_rpjD0m67JQUVCOVNvFuXrgi8M_6uxd50r" alt="Problem?"/>
          <h1 className="header-text">ScoreCard of {this.state.country}</h1>
          
      </header>
  )

}
}

export default Header