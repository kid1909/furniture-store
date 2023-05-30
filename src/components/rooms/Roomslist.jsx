import "./Roomslist.scss";
import itemData from "../item_data/rooms/roomstype.json";

import photo1 from "../../assets/rooms/photo1.avif";
import photo2 from "../../assets/rooms/photo2.avif";
import photo3 from "../../assets/rooms/photo3.avif";
import photo4 from "../../assets/rooms/photo4.avif";
import photo5 from "../../assets/rooms/photo5.avif";
import photo6 from "../../assets/rooms/photo6.webp";
import photo7 from "../../assets/rooms/photo7.avif";
import photo8 from "../../assets/rooms/photo8.avif";
import photo9 from "../../assets/rooms/photo9.avif";

function Roomslists() {
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
  ];

  return (
    <>
      <div className="grid wide">
        <div className="row">
          <div className="col l-12"></div>
          {itemData.items.map((item, index) => (
            <div key={index} className="item_container">
              <img
                className="item_img"
                src={photos[index]}
                alt={`Image ${index + 1}`}
              />
              <p>{item.name}</p>
              <a href={item.link}></a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Roomslists;
