import Header from "./Header.jsx";
import Button from "./Button.jsx";

const Slides = ({ HeadingContent, personImg, imageStyle }) => {
  return (
    <div className={"flex   pl-72 "}>
      <div className={"z-20 space-y-[3.25rem] pt-[16rem]"}>
        <Header content={HeadingContent} style={"text-3xl w-[34.75rem]"} />
        <Button content={"Buy Now"} />
      </div>
      <div className={"relative pt-[5.06rem]"}>
        <img
          src={personImg}
          alt="Person Image"
          className={` ${imageStyle || "h-[54rem] w-[63rem]"} z-20 -ml-[10rem] `}
        />
        <div
          className={
            "absolute right-[15rem] top-[3.63rem] -z-10 h-[55rem] w-[55rem] rounded-full bg-primary"
          }
        ></div>
      </div>
    </div>
  );
};

export default Slides;
