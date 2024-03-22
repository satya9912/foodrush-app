const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="flex justify-center border-2 p-2">
        <p className="mr-1">Created by 😍</p>
        <a
          href="https://www.linkedin.com/in/satya-prasad-karri-0108b3272/"
          className="text-violet-950 hover:text-[#ff9600] font-semibold text-base mr-1"
        >
          Satya Karri
        </a>
        <p className="mr-1">©</p>
          {year}
          < strong className="ml-1">
            Food<span>Rush</span>
          </strong>
      </div>
    );
  };
  
  export default Footer;