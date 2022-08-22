import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import imgOne from "../Images/1.jpg";
import imgTwo from "../Images/2.jpg";
import imgThree from "../Images/3.jpg";
import imgFour from "../Images/4.jpg";
import imgFive from "../Images/5.jpg";
import imgSix from "../Images/6.jpg";

const Carousel = () => {
  return (
    <div className="mb-32 mt-20 ">
      {/* Carousel wrapper */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative container"
        data-bs-ride="carousel"
      >
        {/* Slider indicators */}
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        {/* images */}
        <div className="carousel-inner relative w-full overflow-hidden">
          {/* Item 1 */}
          <div className="carousel-item active relative float-left w-full h-full  ">
            <img
              src={imgOne}
              className="block w-full rounded-xl h-full object-contain"
              alt="..."
            />
          </div>
          {/* Item 2 */}
          <div className="carousel-item relative float-left w-full h-full">
            <img
              src={imgTwo}
              className="block w-full rounded-xl h-full object-contain"
              alt="..."
            />
          </div>
          {/* Item 3 */}
          <div className="carousel-item relative float-left w-full h-full">
            <img
              src={imgThree}
              className="block w-full rounded-xl h-full object-contain"
              alt="..."
            />
          </div>
          {/* Item 4 */}
          <div className="carousel-item relative float-left w-full h-full">
            <img
              src={imgFour}
              className="block w-full rounded-xl h-full object-contain"
              alt="..."
            />
          </div>
          {/* Item 5 */}
          <div className="carousel-item relative float-left w-full h-full">
            <img
              src={imgFive}
              className="block w-full rounded-xl h-full object-contain"
              alt="..."
            />
          </div>
          {/* Item 6 */}
          <div className="carousel-item relative float-left w-full h-full">
            <img
              src={imgSix}
              className="block w-full rounded-xl h-full object-contain"
              alt="..."
            />
          </div>
        </div>
        {/* Slider controls */}
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="">
            <BsFillArrowLeftCircleFill className="w-6 h-6 md:w-8 md:h-8 relative left-3 md:left-0 text-violet-300" />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="">
            <BsFillArrowRightCircleFill className="w-6 h-6 md:w-8 md:h-8 relative right-3 md:right-0 text-violet-300" />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
