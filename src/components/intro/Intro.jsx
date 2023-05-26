import "./intro.scss";

function Intro() {
  return (
    <>
      <div className="grid wide">
        <div className="row">
          <div className="col l-8 m-6">
            <h1 className="intro_header">Hej!</h1>
            <p className="intro_body">This is how we say “hello” in Swedish</p>
            <p className="intro_body2">
              <a href="#">Join IKEA Family </a>to get inspired, claim discounts,
              and receive rewards.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col l-8 m-6">
            <h1 className="intro_header2">
              Invite nature’s magic into your home
            </h1>
            <p className="intro_body2">
              Meet the perfect roommate, plants! They bring colour, life, and
              warmth into your home and keep you company. Invite some plants
              into your home today, it might be the beginning of a beautiful
              friendship.
            </p>
          </div>
          <div className="col l-4">
            <div className="intro_button_container">
              <button className="intro_button">Shop plants & plant pots</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
