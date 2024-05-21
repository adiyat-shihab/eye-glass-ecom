import Header from "./Header.jsx";

const Slides = ({ HeadingContent, personImg, imageStyle }) => {
  return (
    <div
      className={
        "flex h-screen  flex-col px-4 py-4 md:px-10 md:py-0 lg:flex-row lg:pl-10  xl:pl-36 xl:pr-32 2xl:pl-72 "
      }
    >
      <div
        className={"z-20 mt-5 space-y-[3.25rem] md:mt-0 md:pt-5 lg:pt-[16rem]"}
      >
        <Header
          content={HeadingContent}
          style={
            "2xl:text-3xl lg:text-2xl xl:text-3xl text-2xl md:text-3xl lg:w-[21rem] xl:w-[30rem] 2xl:w-[34.75rem]"
          }
        />
        <button
          className={
            " flex items-center gap-3 rounded-[0.3125rem] bg-[#383838] px-3 py-3 text-md font-bold text-white md:px-10 md:py-4 lg:px-6 lg:py-3  xl:px-10 xl:py-[0.69rem]"
          }
        >
          <img src="cart-icon.svg" alt="cart icon" />
          Buy Now
        </button>
      </div>
      <div
        className={
          "relative flex-col items-end   justify-end pt-[2rem]  md:pt-0 lg:pt-[5.06rem] 2xl:pt-0"
        }
      >
        <img
          src={personImg}
          alt="Person Image"
          className={` z-20 mx-auto mt-[7.7rem] md:mt-[2rem] md:h-[30.3rem] lg:mx-0 lg:mt-0 lg:h-[45.59rem] xl:h-[90vh] 2xl:-ml-[10rem] 2xl:mt-20    2xl:h-[54rem] 2xl:w-[63rem] `}
        />
        <div
          className={
            " absolute right-0 top-32 -z-10 h-[25rem] w-[25rem] rounded-full bg-primary md:right-[9rem] md:top-[2rem] md:h-[30rem] md:w-[30rem] lg:right-[2rem] lg:top-[2rem]  lg:mt-10   lg:h-[40rem] lg:w-[40rem] xl:right-[2rem] xl:top-[2rem] xl:h-[90vh] xl:w-[50rem] 2xl:right-[15rem] 2xl:h-[55rem] 2xl:w-[55rem]"
          }
        ></div>
      </div>
    </div>
  );
};

export default Slides;
