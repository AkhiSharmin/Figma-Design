const Creative = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h1 className=" text-6xl">Indias leading creative platform</h1>
        <p className=" text-2xl">
          experience hassle free booking. Trusted by 2500+ customers
        </p>
      </div>
      <div className="form-control w-1/2 mx-auto">
        <div className="input-group flex justify-between border-2 rounded-full">
          <input
            className="text-3xl focus:outline-none"
            type="text"
            placeholder="Search…"
          />
          <button className="bg-[#221010] p-5 rounded-full text-3xl">
            Search
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <div className="flex justify-center items-center">
          <img
            className="w-[100px] h-[100px]"
            src="https://i.ibb.co/VByyDwQ/image-2023-06-13-T12-57-10-439-Z.png"
            alt="image"
          />
          <div>
            <h3 className="text-3xl font-bold">Verified Reviews</h3>
            <p className="text-gray-400">For verified reviewers</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-[100px] h-[100px]"
            src="https://i.ibb.co/v3kkSNx/vector2.png"
            alt="image"
          />
          <div>
            <h3 className="text-3xl font-bold">Top Articles</h3>
            <p className="text-gray-400">Helps you decide</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-[100px] h-[100px]"
            src="https://i.ibb.co/FntFBGc/vector3.png"
            alt="image"
          />
          <div>
            <h3 className="text-3xl font-bold">Write Share Win Contest</h3>
            <p className="text-gray-400">Earn cash for reviews</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-[100px] h-[100px]"
            src="https://i.ibb.co/qRT5M8G/vector4.png"
            alt="image"
          />
          <div>
            <h3 className="text-3xl font-bold">MouthShut for Brands</h3>
            <p className="text-gray-400">Request a Demo</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 max-w-screen-lg mx-auto mt-10 pb-20"></div>
    </div>
  );
};

export default Creative;
