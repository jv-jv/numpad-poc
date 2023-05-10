import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import NumpadRow from "./NumpadRow";

const Numpad = ({
  count,
  onNumpadClick,
  onClear,
  btnStyle,
  onSubmit,
}: // action,
any) => {
  return (
    <>
      <div>
        <h4>numpad</h4>
        <input
          value={count || "0"}
          style={{
            height: "2.5rem",
            width: "90%",
            fontSize: "1.5rem",
            margin: "0.5rem",
          }}
        ></input>
        <NumpadRow digits={[1, 2, 3]} onNumpadClick={onNumpadClick} />
        <NumpadRow digits={[4, 5, 6]} onNumpadClick={onNumpadClick} />
        <NumpadRow digits={[7, 8, 9]} onNumpadClick={onNumpadClick} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ButtonComponent
            // variant="contained"
            style={btnStyle}
            onClick={onClear}
          >
            Clear
          </ButtonComponent>
          <ButtonComponent
            // variant="contained"
            style={btnStyle}
            // onClick={() => onSubmit({ action })}
            onClick={onSubmit}
          >
            Submit
          </ButtonComponent>
        </div>
      </div>
    </>
  );
};

export default Numpad;
