import { useState } from "react";
import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";

const App = () => {
const [selectedHouse, setSelectedHouse] = useState()

const setSelectedHouseWrapper = (house) => {
  //do checks on houses
  setSelectedHouse(house);
};

  return (
    <>
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      {selectedHouse ? (
      <House house={selectedHouse} /> 
      ) : ( 
        <HouseList selectHouse={setSelectedHouse} />
      )}
    </>
  );
};

export default App;
