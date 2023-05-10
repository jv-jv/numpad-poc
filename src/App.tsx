import { useEffect, useState } from "react";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import "./App.css";
import Numpad from "./Numpad/Numpad";

const ActionButton = ({
  btnStyle,
  count,
  title,
  setAction,
  wasSubmitted,
}: any) => {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    setIsSelected(false);
  }, [wasSubmitted]);

  useEffect(() => {
    if ((document.querySelector("body > div:nth-child(3)") as any) !== null) {
      const interval = setTimeout(() => {
        (document.querySelector("body > div:nth-child(3)") as any).remove();
      }, 100);
      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
        <ButtonComponent
          // variant={isSelected ? 'contained' : 'outlined'}
          // cssClass="e-danger"
          // cssClass={isSelected ? 'e-outline' : 'e-flat'}
          cssClass={isSelected ? "e-outline-custom" : "e-flat-custom"}
          style={btnStyle}
          onClick={() => {
            setAction(title);
            setIsSelected(true);
          }}
        >
          {title}
        </ButtonComponent>
        <div
          style={{
            display: "grid",
            placeContent: "center",
            fontSize: "1.5rem",
          }}
        >
          {count || 0}
        </div>
      </div>
    </>
  );
};

function App() {
  const [count, setCount] = useState("");
  const [data, setData] = useState<any>({
    pick: 0,
    waste: 0,
    ullage: 0,
    inbound: 0,
  });

  const [wasSubmitted, setWasSubmitted] = useState(false);

  console.log(data);
  const [action, setAction] = useState("");

  const btnStyle = {
    padding: "0.5rem 0.5rem",
    margin: "0.5rem",
    fontSize: "1rem",
  };

  const onNumpadClick = (num: string | number) => {
    setWasSubmitted(false);
    setCount((prev) => String(prev) + String(num));
  };

  const onClear = () => {
    console.log("clear");

    setCount("");
  };

  const onSubmit = ({ action }: any) => {
    if (!action) return;
    console.log(action);
    setData((prev: any) => ({
      ...prev,
      [action]: prev[action] + Number(count),
    }));
    setAction("");
    setCount("");
    setWasSubmitted(true);
  };

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Numpad
          count={count}
          onNumpadClick={onNumpadClick}
          onClear={onClear}
          btnStyle={btnStyle}
          onSubmit={() => onSubmit({ action })}
        />

        <div
          style={{ display: "flex", flexDirection: "column", width: "200px" }}
        >
          <h4>values</h4>

          {["pick", "waste", "ullage", "inbound"].map((item) => (
            <ActionButton
              count={data[item]}
              btnStyle={btnStyle}
              title={item}
              setAction={setAction}
              wasSubmitted={wasSubmitted}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
