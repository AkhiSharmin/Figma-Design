import "./BestOffers.css";
const BestOffers = () => {
  return (
    <div className="py-24 px-24 text-center offer-shadow">
      <div className="mb-10">
        <h3 className="text-5xl text-slate-600 font-bold">Best Offers</h3>
        <p className="text-3xl">Discover the best offers on our services</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full mx-auto">
        <div>
          <div className="card w-80 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                className="w-full"
                src="https://i.ibb.co/sVgLbyB/Rectangle-166.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-center border-b-2 text-2xl font-bold text-white pb-5">
                Wedding <br /> Packages
              </h2>
              <div className="text-left mt-36">
                <h4 className="text-2xl font-bold">Discount</h4>
                <img
                  className="w-48 -m-8 mt-1"
                  src="https://i.ibb.co/DGqrRJ7/Images50-removebg-preview-2.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="bg-slate-100 p-5 mt-96">
              <button className="text-2xl text-center -ml-36 ">Book Now</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co/sVgLbyB/Rectangle-166.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center border-b-2 text-2xl font-bold text-white pb-5">
              Wedding <br /> Packages
            </h2>
            <div className="text-left mt-36">
              <h4 className="text-2xl font-bold">Discount</h4>
              <img
                className="w-48 -m-8 mt-1"
                src="https://i.ibb.co/DGqrRJ7/Images50-removebg-preview-2.png"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co/sVgLbyB/Rectangle-166.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center border-b-2 text-2xl font-bold text-white pb-5">
              Wedding <br /> Packages
            </h2>
            <div className="text-left mt-36">
              <h4 className="text-2xl font-bold">Discount</h4>
              <img
                className="w-48 -m-8 mt-1"
                src="https://i.ibb.co/DGqrRJ7/Images50-removebg-preview-2.png"
                alt="img"
              />
            </div>
          </div>
        </div>

        <div className="card w-80 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co/sVgLbyB/Rectangle-166.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center border-b-2 text-2xl font-bold text-white pb-5">
              Wedding <br /> Packages
            </h2>
            <div className="text-left mt-36">
              <h4 className="text-2xl font-bold">Discount</h4>
              <img
                className="w-48 -m-8 mt-1"
                src="https://i.ibb.co/DGqrRJ7/Images50-removebg-preview-2.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOffers;
