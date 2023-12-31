import Hero from "../Hero/Hero";
import Divider from "../Divider/Divider";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import AboutUs from "../AboutUs/AboutUs";
import PastEvents from "../PastEvents/PastEvents";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Divider />
      <UpcomingEvents />
      <Divider />
      <AboutUs />
      <Divider />
      <PastEvents />
      <Divider />
    </>
  );
};

export default MainPage;
