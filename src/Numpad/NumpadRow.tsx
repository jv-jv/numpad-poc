import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const NumBtn = ({ value, onClick }: any) => {
  const btnStyle = {
    padding: "0.75rem 1.75rem",
    margin: "0.5rem",
    fontSize: "2rem",
  };

  return (
    <ButtonComponent
      // variant="contained"
      style={btnStyle}
      onClick={onClick}
    >
      {value}
    </ButtonComponent>
  );
};

interface INumpadRowProps {
  digits: number[];
  onNumpadClick: Function;
}

const NumpadRow = ({ digits, onNumpadClick }: INumpadRowProps) => {
  return (
    <>
      <div style={{ display: "block" }}>
        {digits.map((num: number) => (
          <NumBtn value={num} onClick={() => onNumpadClick(num)} />
        ))}
      </div>
    </>
  );
};

export default NumpadRow;
