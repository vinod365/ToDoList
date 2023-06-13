import { useState } from "react";
import Button from "../../compontents/buttons";
import Form from "../../compontents/form/index";
import List from "../../compontents/list/index";

import "./style.css";
import { Link } from "react-router-dom";

function Home() {
  const [listItem, setItemList] = useState([]);
  const [deletedItem, setDeletedItem] = useState([]);
  const [completedItem, setCompletedItem] = useState([]);

  return (
    <>
      <div className="home">
        <div className="container">
          <Form onAddItems={setItemList}></Form>
          <div className="buttons">
            <Link to="/deleted" state={deletedItem}>
              <Button itemList={deletedItem}>Deleted items</Button>
            </Link>
            <Link to="/completed" state={completedItem}>
              <Button itemList={completedItem}>Completed</Button>
            </Link>
          </div>
          <div className="list">
            <List
              onCompletedItem={setCompletedItem}
              onDeleteItem2={setDeletedItem}
              onDeleteItem={setItemList}
              itemList={listItem}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
