import "./Featured.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Featured = () => {
  return (
    <div className="text-center py-24">
      <Swiper
        slidesPerView={4}
        spaceBetween={55}
        navigation={true}
        modules={[Navigation]}
        className="px-24"
      >
        <SwiperSlide>
          <div>
            <img
              className="w-[328px] h-[297px]"
              src="https://i.ibb.co/tbqvVFN/image-64-3.png"
              alt=""
            />
            <div className="slide-body text-center">
              <h2 className="border-b-4 w-2/3 mx-auto">
                Pre Wedding Photoshoot
              </h2>
              <p>Starting at 25,000 (One Day)</p>
              <button>Show more</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-[328px] h-[297px]"
              src="https://i.ibb.co/mDHYkFg/image-64-1.png"
              alt=""
            />
            <div className="slide-body text-center">
              <h2 className="border-b-4 w-2/3 mx-auto">Wedding Photoshoot</h2>
              <p>Starting at 65,000 (Two days )</p>
              <button>Show more</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-[328px] h-[297px]"
              src="https://i.ibb.co/1MYsdpz/image-64-2.png"
              alt=""
            />
            <div className="slide-body text-center">
              <h2 className="border-b-4 w-2/3 mx-auto">Portfolio Shoot</h2>
              <p>Starting at 25,000 (Standard price for 6-8 hours)</p>
              <button>Show more</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-[328px] h-[297px]"
              src="https://i.ibb.co/tbqvVFN/image-64-3.png"
              alt=""
            />
            <div className="slide-body text-center">
              <h2 className="border-b-4 w-2/3 mx-auto">Birthday Baby Folio</h2>
              <p>Starting at 15,000 (One days)</p>
              <button>Show more</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-[328px] h-[297px]"
              src="https://i.ibb.co/tbqvVFN/image-64-3.png"
              alt=""
            />
            <div className="slide-body text-center">
              <h2 className="border-b-4 w-2/3 mx-auto">Birthday Baby Folio</h2>
              <p>Starting at 15,000 (One days)</p>
              <button>Show more</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Featured;
