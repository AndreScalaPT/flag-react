import "./App.css";
import Carousel from "./components/Carousel";
import Countdown from "./components/Countdown";
import WelcomeModal from "./components/WelcomeModal";
import BackgroundMusic from "./components/BackgroundMusic";
import SubscribeMail from "./components/SubscribeMail";
import ListTopProducts from "./components/store/ListTopProducts";
import ListTopProductsInStore from "./data/ListTopProducts";
import Testimonial from "./components/testimonial/Testimonial";


function App() {
  return (
    <>
      <BackgroundMusic />
      <WelcomeModal />
      <Carousel />
      <div className="flex flex-col gap-5 justify-center my-10 items-center">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-[#EC9A00] uppercase tracking-widest font-display">
          Eles vêm aí! São 3! E andam aos pares!
        </h1>
        <Countdown />
        <ListTopProducts ListTopProductsInStore={ListTopProductsInStore} />
        <SubscribeMail />
        <Testimonial />
      </div>
    </>
  );
}

export default App;