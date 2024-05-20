import Header from "./Header.jsx";

const Slides = ({ HeadingContent, personImg, imageStyle }) => {
  return (
    <div className={"flex  h-screen lg:pl-10  xl:pl-36 xl:pr-32 2xl:pl-72 "}>
      <div className={"z-20 space-y-[3.25rem] pt-[16rem]"}>
        <Header
          content={HeadingContent}
          style={
            "2xl:text-3xl lg:text-2xl xl:text-3xl lg:w-[21rem] xl:w-[30rem] 2xl:w-[34.75rem]"
          }
        />
        <button
          className={
            " flex items-center gap-3 rounded-[0.3125rem] bg-[#383838] text-md font-bold text-white lg:px-6 lg:py-3 xl:px-10 xl:py-[0.69rem]"
          }
        >
          <img src="cart-icon.svg" alt="cart icon" />
          Buy Now
        </button>
      </div>
      <div className={"relative flex-col items-end   justify-end pt-[5.06rem]"}>
        <img
          src={personImg}
          alt="Person Image"
          className={` ${imageStyle || " xl:h-[90vh]    2xl:h-[54rem] 2xl:w-[63rem]"} z-20 lg:h-[45.59rem] 2xl:-ml-[10rem] `}
        />
        <div
          className={
            "absolute -z-10 rounded-full bg-primary lg:right-[2rem] lg:top-[2rem] lg:mt-10   lg:h-[40rem] lg:w-[40rem] xl:right-[2rem] xl:top-[3.63rem] xl:h-[90vh] xl:w-[50rem] 2xl:right-[15rem] 2xl:h-[55rem] 2xl:w-[55rem]"
          }
        ></div>
      </div>
    </div>
  );
};

export default Slides;
