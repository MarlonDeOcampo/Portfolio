const Footer = () => {
  return (
    <div>
      <div className="h-[5rem] flex justify-around items-center w-[calc(100%-6rem)] ml-[6rem]">
        <button className="hover:text-primary-yellow">Download Resume</button>
        <button className="border border-secondary text-secondary px-4 h-[3rem] flex items-center hover:text-primary-orange hover:border-primary-orange ml-10">
          Contact Me
        </button>
        <div>Call: +63-926-7035-552</div>
      </div>
    </div>
  );
};

export default Footer;
