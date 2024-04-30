import currencyFormatter from "../helpers/currencyFormatter";
// import defaultPhoto from "../helpers/defaultPhoto";

const House = ({ house }) => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <img
            className="img-fluid"
            src={
              house.photo ? `./houseImages/${house.photo}.jpeg` : defaultPhoto
            }
            alt="House pic"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col=23">{house.country}</h5>
        </div>
      </div>
    </div>
  );
};
