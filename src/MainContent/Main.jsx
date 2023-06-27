import Associate from "../Pages/Home/Associate/Associate";
import BestOffers from "../Pages/Home/BestOffers/BestOffers";
import Blog from "../Pages/Home/Blog/Blog";
import Creative from "../Pages/Home/Creative/Creative";
import Discover from "../Pages/Home/Discover/Discover";
import Featured from "../Pages/Home/Featured/Featured";
import Wedding from "../Pages/Home/Wedding/Wedding";
import Testimonials from "../Pages/Home/Testimonials/Testimonials";
import UserChoice from "../Pages/Home/UserChoice/UserChoice";
import Success from "../Pages/Home/Success/Success";

const Main = () => {
  return (
    <>
      <section className="creative">
        <Creative />
      </section>
      <section className="associate">
        <Associate />
      </section>
      <section className="featured">
        <Featured />
      </section>
      <section className="discover">
        <Discover />
      </section>
      <section className="blog">
        <Blog />
      </section>
      <section className="wedding">
        <Wedding />
      </section>
      <section className="bestoffers">
        <BestOffers />
      </section>
      <section className="testimonials">
        <Testimonials></Testimonials>
      </section>
      <section className="userchoice">
        <UserChoice />
      </section>
      <section className="success">
        <Success />
      </section>
    </>
  );
};

export default Main;
