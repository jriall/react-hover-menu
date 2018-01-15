import React, { Component } from "react";
import "../style/App.css";
import axios from "axios";
import Loading from "./Loading";
import MenuContainer from "./MenuContainer";
import ContentArea from "./ContentArea";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contentArea: "Click the menu items to change content..."
    };
    this.setContentArea = this.setContentArea.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/data.json")
      .then(response => {
        this.setState({
          menuItems: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setContentArea(text) {
    //if statement reduces wasteful re-renders of the same text content.
    if (text !== this.state.contentArea) {
      this.setState({
        contentArea: text
      });
    }
  }

  render() {
    return (
      //Ternary expression to show the spinner if the data is not yet loaded and the app once the data is loaded into state.
      <div className="App">
        {this.state.menuItems ? (
          <div>
            <nav>
              <MenuContainer
                data={this.state}
                setContentArea={this.setContentArea}
              />
            </nav>
            <h1 className="App-title">A React Hover Menu!</h1>
            <ContentArea
              text={this.state.contentArea}
              className="content-area"
            />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;
