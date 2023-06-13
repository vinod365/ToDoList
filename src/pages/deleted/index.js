import { useState } from "react";
import List from "../../compontents/list/index";

import "./style.css";
import { useLocation } from "react-router-dom";

function Deleted() {
  const location = useLocation();
  const [listItem, setItemList] = useState([]);
  const [deletedItem, setDeletedItem] = useState([]);
  const [completedItem, setCompletedItem] = useState([]);

  console.log(deletedItem);
  console.log(completedItem);
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="list">
            <List
              onCompletedItem={setCompletedItem}
              onDeleteItem2={setDeletedItem}
              onDeleteItem={setItemList}
              itemList={location.state}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Deleted;
