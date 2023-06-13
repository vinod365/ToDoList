import ListItem from "../list-item/index";

import "./style.css";

function List({ itemList, onDeleteItem, onDeleteItem2, onCompletedItem }) {
  return (
    <>
      <div className="list">
        <p className="sub__heading">Item Lists</p>
        <ul>
          <li>
            {itemList.map((listData) => (
              <ListItem
                onDeleteItem={onDeleteItem}
                listData={listData}
                onDeleteItem2={onDeleteItem2}
                onDeletedItem={onDeleteItem}
                onCompletedItem={onCompletedItem}
              />
            ))}
          </li>
        </ul>
      </div>
    </>
  );
}

export default List;
