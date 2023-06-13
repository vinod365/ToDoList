import "./style.css";

function ListItem({ listData, onDeleteItem, onDeleteItem2, onCompletedItem }) {
  function handleOnClickDelete() {
    console.log(listData);
    onDeleteItem((oldData) => {
      return oldData.filter((item) => item !== listData);
    });

    onDeleteItem2((oldData) => {
      return [...oldData, listData];
    });
  }

  function handleOnClickComplete(e) {
    onCompletedItem((oldData) => {
      return [...oldData, listData];
    });
  }

  return (
    <>
      <div className="list__item">
        <div>
          <p className="list__item__content strike__through">{listData}</p>
          <p className="by__date">By 06/13/2023</p>
        </div>
        <div className="action__button">
          <span className="complete " onClick={handleOnClickComplete}>
            ✅
          </span>
          <span className="deleted" onClick={handleOnClickDelete}>
            ❌
          </span>
        </div>
      </div>
    </>
  );
}

export default ListItem;
