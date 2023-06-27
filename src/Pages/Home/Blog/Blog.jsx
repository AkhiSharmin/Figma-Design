import "./Blog.css";
const Blog = () => {
  return (
    <div className="px-10 py-20 bg-[#DDF8F3]">
      <div className="mb-5">
        <h1 className="text-4xl font-bold text-slate-500">Our Blog</h1>
        <p className="text-xl">check out my latest blog</p>
      </div>
      <div className="md:flex space-x-5 justify-center">
        <div className="flex w-2/3 space-x-5">
          <div className=" blog-img-1">
            <div className="bg-black px-5 py-10 text-white bg-opacity-50 rounded-xl w-2/3 h-[285px]">
              <p className="text-2xl mb-10">Featured on: Sep 15, 2021</p>
              <h2 className="text-6xl font-light">
                Wedding Photography at Goa
              </h2>
            </div>
          </div>

          <div className=" blog-img-2">
            <div className="bg-black px-5 py-10 text-white bg-opacity-50 rounded-xl w-2/3 h-[285px]">
              <p className="text-2xl mb-10">Featured on: Sep 15, 2021</p>
              <h2 className="text-6xl font-light">
                Wedding Photography at Goa
              </h2>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-2xl">Tranding Now</h3>
            <button className="text-2xl">show more</button>
          </div>
          <div>
            <div className="flex items-center">
              <img
                src=" https://i.ibb.co/cJMqZyM/Fliqa-India-wedding-1.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">
                  Creative Industries are on the verge of depletion due to
                  COVID-19
                </h4>
                <p className="text-gray-400">
                  In a period where many industries remain highly unclear,
                  others want to grasp how COVID-19 impact{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/j6Hp8sx/Fliqa-India-wedding-2.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">
                  Creative Industries are on the verge of depletion due to
                  COVID-19
                </h4>
                <p className="text-gray-400">
                  In a period where many industries remain highly unclear,
                  others want to grasp how COVID-19 impact{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/Lry8Cd8/Wedding-Trailer-1.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">
                  Creative Industries are on the verge of depletion due to
                  COVID-19
                </h4>
                <p className="text-gray-400">
                  In a period where many industries remain highly unclear,
                  others want to grasp how COVID-19 impact{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
