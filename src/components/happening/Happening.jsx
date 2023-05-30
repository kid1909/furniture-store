import "./happening.scss";
import { useState, useEffect } from "react";
import data from "../json/data.json.js";
import photo1 from "../../assets/happen-photo/photo1.jpg";
import photo2 from "../../assets/happen-photo/photo2.jpg";
import photo3 from "../../assets/happen-photo/photo3.jpg";
import photo4 from "../../assets/happen-photo/photo4.jpg";
import photo5 from "../../assets/happen-photo/photo5.jpg";
import photo6 from "../../assets/happen-photo/photo6.jpg";

function Happening() {
  const [startIndex, setStartIndex] = useState(0);

  // Function to handle button click
  const handleNextImages = () => {
    setStartIndex(startIndex + 3);
  };

  const handlePrevImages = () => {
    setStartIndex(startIndex - 3);
  };

  const isNextButtonVisible = startIndex + 3 < data.items.length;
  const isPrevButtonVisible = startIndex > 0;

  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];
  const visibleItems = data.items.slice(startIndex, startIndex + 3);

  return (
    <>
      <div className="grid wide">
        <div className="row">
          <div className="col l-12">
            {/* ... other code ... */}
            <div className="happen_gallery">
              {visibleItems.map((item, index) => (
                <div
                  className="happen_gallery_container"
                  key={index}
                  style={{ backgroundColor: item.color }}
                >
                  <img
                    className="happen_gallery_img"
                    src={photos[startIndex + index]}
                    alt={`Image ${index + startIndex + 1}`}
                  />
                  <h3
                    className="happen_gallery_header"
                    style={{ color: item.font_color }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="happen_gallery_content"
                    style={{ color: item.font_color }}
                  >
                    {item.content}
                  </p>
                  <a href={item.link} className="happen_gallery_link">
                    Read more
                  </a>
                </div>
              ))}

              {/* Button to load next set of images */}
              <div className="happen_gallery_direction group">
                {isPrevButtonVisible && (
                  <button onClick={handlePrevImages}>Back</button>
                )}
                {isNextButtonVisible && (
                  <button onClick={handleNextImages}>Next</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Happening;
