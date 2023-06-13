import "./style.css";

function Button({ itemList, children }) {
  return (
    <>
      <div className="button">
        <input value={children} type="button"></input>
        <p className="sub__script">{itemList.length}</p>
      </div>
    </>
  );
}

export default Button;
