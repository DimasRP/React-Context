import { createContext, useState } from "react";

// export const MainContext = createContext({
//   empty: true
// })
export const MainContext = createContext();

const MainContextProv = (props) => {
  const [cardData,setCardData] = useState({
    name: "Dimas",
    avatar:
    "https://reqres.in/img/faces/8-image.jpg"
  });

  const mainContextValue = {
    cardData,
  };

  return (
    <MainContext.Provider value={mainContextValue}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProv;