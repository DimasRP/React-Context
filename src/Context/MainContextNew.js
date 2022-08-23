import React from "react";
import { Component, createContext } from "react"

export const MainContext = createContext();


class MainContextProv extends Component {
  state = {
    cardData: {
      name: "Dimas",
      avatar:
        "https://reqres.in/img/faces/8-image.jpg",
    },
  };

  render() {
    const mainContextValue = {
      cardData: this.state.cardData,
    };
    return (
      <MainContext.Provider value={mainContextValue}>
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContextProv;