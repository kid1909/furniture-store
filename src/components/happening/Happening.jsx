import "./happening.scss";
import { useState, useEffect } from "react";
import data from "../json/data.json.js";

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
  return (
    <>
      <div className="grid wide">
        <div className="row">
          <div className="col l-12">
            <div className="container_header">
              <h1 className="header_happen">Save 15% on plant pots</h1>
              <p className="content_happen">
                Dig into savings and liven up any indoor or outdoor space with a
                stylish plant pot.{" "}
              </p>
              <p className="content_happen2">Valid May 18 – 24.</p>
              <a href="" className="content_happen3">
                *View offer details
              </a>
              <br />
              <button className="btn_happen">Shop plant pots</button>
            </div>
          </div>
          <div className="col l-12">
            <h1 className="header_happen">Happening right now</h1>
          </div>
          <div className="col l-12">
            <div className="happen_gallery">
              {/* Display current set of images */}

              {data.items
                .slice(startIndex, startIndex + 3)
                .map((item, index) => (
                  <div
                    className="happen_gallery_container"
                    key={index}
                    style={{ backgroundColor: item.color }}
                  >
                    <img
                      className="happen_gallery_img"
                      src={item.url}
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
