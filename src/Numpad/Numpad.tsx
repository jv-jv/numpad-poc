import {
  ButtonComponent,
  ChipDirective,
  ChipListComponent,
  ChipsDirective,
} from "@syncfusion/ej2-react-buttons";
import NumpadRow from "./NumpadRow";

const Numpad = ({
  count,
  onNumpadClick,
  onClear,
  btnStyle,
  onSubmit,
  switchSign,
}: // action,
any) => {
  return (
    <>
      <div>
        <h4>numpad</h4>
        <div style={{ position: "relative", height: "3rem", margin: "0.5rem" }}>
          {/* <ButtonComponent
            cssClass="e-round e-small"
            iconCss="e-icons e-plus-icon"
            // isPrimary={true}
            style={{
              position: "absolute",
              top: "calc(3rem - 50% - 15px  )",
              left: "0.5rem",
            }}
            // style={{ fontSize: "1.5rem", padding: "0rem" }}
          ></ButtonComponent> */}
          <input
            value={count || "0"}
            style={{
              height: "2.5rem",
              width: "90%",
              fontSize: "1.5rem",
              paddingLeft: "0.5rem",
            }}
          ></input>
        </div>
        <NumpadRow digits={[1, 2, 3]} onNumpadClick={onNumpadClick} />
        <NumpadRow digits={[4, 5, 6]} onNumpadClick={onNumpadClick} />
        <NumpadRow digits={[7, 8, 9]} onNumpadClick={onNumpadClick} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ButtonComponent style={btnStyle} onClick={onClear}>
            Clear
          </ButtonComponent>

          <ButtonComponent style={btnStyle} onClick={switchSign}>
            + / -
          </ButtonComponent>
          <ButtonComponent style={btnStyle} onClick={onSubmit}>
            Submit
          </ButtonComponent>
        </div>
      </div>
    </>
  );
};

export default Numpad;
