import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="lg:flex space-x-10">
      <div className="w-1/3 flex justify-center items-center mx-auto">
        <img
          src="https://i.ibb.co/J5RFKKy/Screenshot-2023-06-15-080130.png"
          alt=""
        />
      </div>
      <div className="w-2/3 p-24">
        <div className="mb-28 flex justify-between items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-500">Testimonials</h3>
            <p className="text-xl text-slate-600">Words from our clients</p>
          </div>
          <div className="flex space-x-10">
            <button className="btn-outline btn rounded-full text-xl">
              Google
            </button>
            <button className="btn-outline btn rounded-full text-xl">
              Facebook
            </button>
            <button className="btn-outline btn rounded-full text-xl">
              Weddingwire
            </button>
            <button className="btn-outline btn rounded-full text-xl">
              WedmeGood
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-24  ">
          <div className="relative">
            <div className="testimonials-content p-5 text-white text-center text-xl">
              <p className="pt-28">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet
              </p>
              <h3 className="text-2xl font-bold mt-2">~ Ramdom Name</h3>

              <img
                className="testimonial-img"
                src="https://i.ibb.co/cwhkvnm/Ellipse-1.png"
                alt=""
              />
            </div>
          </div>
          <div className="relative">
            <div className="testimonials-content p-5 text-white text-center text-xl">
              <p className="pt-28">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                dolor suscipit, eius ut dolorem.
              </p>
              <h3 className="text-2xl font-bold mt-2">~ Ramdom Name</h3>

              <img
                className="testimonial-img"
                src="https://i.ibb.co/cwhkvnm/Ellipse-1.png"
                alt=""
              />
            </div>
          </div>
          <div className="relative">
            <div className="testimonials-content p-5 text-white text-center text-xl">
              <p className="pt-28">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                dolor suscipit, eius ut dolorem.
              </p>
              <h3 className="text-2xl font-bold mt-2">~ Ramdom Name</h3>

              <img
                className="testimonial-img"
                src="https://i.ibb.co/cwhkvnm/Ellipse-1.png"
                alt=""
              />
            </div>
          </div>
          <div className="relative">
            <div className="testimonials-content p-5 text-white text-center text-xl">
              <p className="pt-28">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                dolor suscipit, eius ut dolorem.
              </p>
              <h3 className="text-2xl font-bold mt-2">~ Ramdom Name</h3>

              <img
                className="testimonial-img"
                src="https://i.ibb.co/cwhkvnm/Ellipse-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
