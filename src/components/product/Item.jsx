import "./Item.scss";
import itemData from "../item_data/item_data.json";
import { useState } from "react";
import photo1 from "../../assets/products/photo1.jpg";
import photo2 from "../../assets/products/photo2.jpg";
import photo3 from "../../assets/products/photo3.jpg";
import photo4 from "../../assets/products/photo4.jpg";
import photo5 from "../../assets/products/photo5.jpg";
import photo6 from "../../assets/products/photo6.jpg";

function Item() {
  const [startIndex, setStartIndex] = useState(0);

  const isNextButtonVisible = startIndex + 3 < itemData.items.length;
  const isPrevButtonVisible = startIndex > 0;
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  return (
    <>
      <div className="grid wide">
        <div className="row">
          <div className="col l-12"></div>
          {itemData.items.map((item, index) => (
            <div key={item.id} className="item_container">
              <img
                className="item_img"
                src={photos[startIndex + index]}
                alt={`Image ${index + startIndex + 1}`}
              />
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
