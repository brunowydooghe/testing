import "./App.css";
import { Item } from "./componenets/Item.tsx";
import { data } from "./constants/constants.ts";

function App() {
  return (
    <div className="containerItem">
      {data?.map((el, index) => (
        <Item itemData={el} key={index} />
      ))}
    </div>
  );
}

export default App;
