import "./header.scss";

function Header() {
  return (
    <>
      <div className="header_list">
        <div className="header_item">
          <i className="fas fa-tag"></i>High standards. Lower prices
        </div>
        <div className="header_item">
          {" "}
          <i className="fas fa-tag"></i>Join IKIA Family
        </div>

        <div className="header_item">
          {" "}
          <i className="fas fa-phone"></i>Order by phone
        </div>
      </div>
    </>
  );
}
export default Header;
