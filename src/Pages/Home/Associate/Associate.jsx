import { FaAngleRight } from "react-icons/fa";

const Associate = () => {
  return (
    <div className="bg-[#A1E3D8] p-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Find Trusted Associate</h1>
          <p className="text-gray-600">
            Find the best Fliqa Associate for your special day.
          </p>
        </div>
        <button className="flex items-center text-2xl">
          See More
          <span className="flex ml-3">
            <FaAngleRight />
            <FaAngleRight />
          </span>
        </button>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-8 py-24">
        <div className="card shadow-2xl h-[241px]">
          <figure>
            <img
              src="https://i.ibb.co/SVQjKQV/Rectangle-171-1.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-slate-900 text-white rounded-b-3xl">
            <div className="flex justify-between items-center ">
              <div>
                <h3 className="text-xl">Name Title: </h3>
                <p className="text-xl">Location: </p>
              </div>
              <img
                src="https://i.ibb.co/vLfrPhV/png-transparent-spain-sea-salt-20-minutos-brand-verified-stamp-angle-text-logo-removebg-preview-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="card shadow-2xl h-[241px]">
          <figure>
            <img
              src="https://i.ibb.co/cgnL5ng/Rectangle-171-2.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-slate-900 text-white rounded-b-3xl">
            <div className="flex justify-between items-center ">
              <div>
                <h3 className="text-xl">Name Title: </h3>
                <p className="text-xl">Location: </p>
              </div>
              <img
                src="https://i.ibb.co/vLfrPhV/png-transparent-spain-sea-salt-20-minutos-brand-verified-stamp-angle-text-logo-removebg-preview-2.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="card shadow-2xl h-[241px]">
          <figure>
            <img
              src="https://i.ibb.co/1LgpwyX/Rectangle-171-3.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-slate-900 text-white rounded-b-3xl">
            <div className="flex justify-between items-center ">
              <div>
                <h3 className="text-xl">Name Title: </h3>
                <p className="text-xl">Location: </p>
              </div>
              <img
                src="https://i.ibb.co/vLfrPhV/png-transparent-spain-sea-salt-20-minutos-brand-verified-stamp-angle-text-logo-removebg-preview-2.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="card shadow-2xl h-[241px]">
          <figure>
            <img
              src=" https://i.ibb.co/yhwQzN6/Rectangle-171-4.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-slate-900 text-white rounded-b-3xl">
            <div className="flex justify-between items-center ">
              <div>
                <h3 className="text-xl">Name Title: </h3>
                <p className="text-xl">Location: </p>
              </div>
              <img
                src="https://i.ibb.co/vLfrPhV/png-transparent-spain-sea-salt-20-minutos-brand-verified-stamp-angle-text-logo-removebg-preview-2.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="card shadow-2xl h-[241px]">
          <figure>
            <img
              src=" https://i.ibb.co/RD4b5R2/Rectangle-171.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-slate-900 text-white rounded-b-3xl">
            <div className="flex justify-between items-center ">
              <div>
                <h3 className="text-xl">Name Title: </h3>
                <p className="text-xl">Location: </p>
              </div>
              <img
                src="https://i.ibb.co/vLfrPhV/png-transparent-spain-sea-salt-20-minutos-brand-verified-stamp-angle-text-logo-removebg-preview-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Associate;
