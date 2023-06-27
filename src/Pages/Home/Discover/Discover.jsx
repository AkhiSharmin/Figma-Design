import "./Discover.css";

const Discover = () => {
  return (
    <div>
      <div className="flex py-24 space-x-10">
        <div className="w-1/3 text-white p-5">
          <h2 className="text-6xl">
            <span>
              Discover <br /> Graphic Design Ideas <br /> and services
            </span>
          </h2>
          <h3 className="text-4xl mt-6">From branding to marketing</h3>
          <div className="form-control mt-10">
            <div className="input-group flex justify-between bg-white rounded-2xl">
              <input
                className="border-2 p-5 focus:outline-none"
                type="text"
                placeholder="Search…"
              />
              <button className="p-5 bg-black text-white text-2xl rounded-2xl">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10 w-2/3">
          <div className="mt-10">
            <img src="https://i.ibb.co/Wf11FX3/image-24.png" alt="" />
          </div>
          <div className="-mt-10">
            <img src="https://i.ibb.co/F0x6Grg/image-32.png" alt="" />
          </div>
          <div className="mt-10">
            <img src="https://i.ibb.co/DV07X5P/image-49.png" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/sVgLbyB/Rectangle-166.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-2/4 mx-auto">
        <h2>Popular: </h2>
      </div>
    </div>
  );
};

export default Discover;
