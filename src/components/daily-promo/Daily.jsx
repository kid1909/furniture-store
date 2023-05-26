import photo1 from "../../assets/hero-photo.avif";
import photo2 from "../../assets/hero-photo.gif";
import "./daily.scss";

function Daily() {
  return (
    <>
      <div className="grid wide">
        <div className="row">
          <div className="col l-6">
            <div className="img_container">
              {" "}
              <img src={photo1} className="img_container_item" />
              <div className="price_tag_item">
                <div className="price_tag_item_outside">
                  <div className="price_tag_item_inside"></div>
                  <div className="price_tag_item_des">
                    <div className="price_tag_content">
                      <h3 className="item_name">Pillow</h3>
                      <p className="item_category">Indoor</p>
                      <p className="item_price">$6.79</p>
                    </div>
                    <div className="price_tag_link">
                      <i className="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col l-6">
            <div className="img_container">
              {" "}
              <img src={photo2} className="img_container_item" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Daily;
