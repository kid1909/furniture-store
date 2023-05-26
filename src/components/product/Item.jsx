import "./Item.scss";
import itemData from "../item_data/item_data.json";
import { useState } from "react";

function Item() {
  const [startIndex, setStartIndex] = useState(0);
  const isNextButtonVisible = startIndex + 3 < itemData.items.length;
  const isPrevButtonVisible = startIndex > 0;

  return (
    <>
      <div className="grid wide">
        <div className="row">
          <div className="col l-12"></div>
          {itemData.items.map((item, key) => (
            <div key={item.id} className="item_container">
              <img className="item_img" src={item.url} alt={item.name} />
              <h3>{item.name}</h3>
              <a href={item.link}>{item.price}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Item;
