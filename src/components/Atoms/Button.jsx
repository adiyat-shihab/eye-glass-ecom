const Button = ({ content }) => {
  return (
    <button
      className={
        " rounded-[0.3125rem] bg-[#383838] px-10 py-[0.69rem] text-md font-bold text-white"
      }
    >
      {content}
    </button>
  );
};

export default Button;
