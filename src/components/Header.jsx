import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  return (
    <div>
      <header className='header'>
        <h1>Task Tracker</h1>
        <Button
          onClick={onAdd}
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
        />
      </header>
    </div>
  );
};

export default Header;
