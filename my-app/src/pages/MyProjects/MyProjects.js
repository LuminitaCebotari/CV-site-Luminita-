import React, { Component } from "react";
import "./MyProjects.css";
import HomePage from "../MyProjects/IMBd-home-page.PNG";
import SearchPage from "../MyProjects/IMBd-search-page.PNG"; 
import AddPage from "../MyProjects/IMBd-add-page.PNG";

class MyProjects extends Component {
    state ={}; 

    render() {
        return(
            <div  className="MyPorojectPage" id="MyProjects"> 
            <div className ="Page-title">
                <h2>MyPorojects</h2>
            </div>
            <div className="text-content">
                <p className="title-project">My IMBD project</p>
                <div className="description-container">
                <p className="text-project">Team project where the main idea was to create a simple version of IMBd site with a list of movies from an API. The site has 3 main pages: Home, Search Movie and Edition page which allow the logged in user to add/deletede or edite a movie from the API. Also there si an option to fiter the movie list based on some spesifiq criteria. </p>
                </div>
            </div>
            <div className="Photo-Container">

            <img className="Photo-screen" src={HomePage} />
            <img className="Photo-screen" src={SearchPage} />
            <img className="Photo-screen" src={AddPage} />
           
            </div>
            <div></div>
            </div>
        )
    }
}

export default MyProjects; 