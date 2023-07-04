export default function HeroSection() {
  return (
    <section className="relative">
      <div className="line-gradient"></div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center z-50">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-[60px] font-light text-text_heading">
            we enable your Business <br /> with Secure & <br />
            Automated Innovation
          </h1>
          <p className="text-[18px] font-light text-text_small my-[40px] w-[550px]">
            Securing Your Business and Streamlining Operations with Integrated
            Payment, Automation, Data, and Security Solutions
          </p>
          <div className="flex justify-center space-x-10 mt-5">
            <button className="custom-btn">LET’S CONNECT</button>
            <button className="custom-btn_outline ">LEARN MORE</button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-text_small mx-auto pb-20 text-[40px] w-[746px] text-center font-light">
          Discover the limitless potential <br />
          of your business with our technology
        </h2>
      </div>
    </section>
  );
}
