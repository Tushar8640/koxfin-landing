/* eslint-disable react/no-unescaped-entities */
export default function Expertise() {
  return (
    <section className="bg-bg_black mt-[-10px]">
      <div className="container px-5 py-24 mx-auto">
        <div className=" px-5  mx-auto bg-bg_black upper-section">
          <div className="flex flex-wrap  ">
            <div className="px-12 md:w-1/2 flex flex-col items-start ">
              <span className="text-text_small text-[20px] font-normal">
                OUR EXPERTISE
              </span>
              <h2 className=" my-[30px] text-[40px]  font-light  text-brick ">
                Our goal is to help users <br /> develop a strong liking for{" "}
                <br /> your products.
              </h2>
            </div>
            <div className="px-10 md:w-1/2 flex flex-col items-start justify-center">
              <p className="w-[683px] text-[18px]  font-light text-text_small">
                At Koxfin, we offer personalized solutions that encompass the
                entire life cycle of your digital product, starting from
                conceptualization and research, through design and development,
                to sustained growth and success.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap p-5">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col  hover:bg-bg_gray group">
              <div className="flex mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                  <img
                    className="bg-[#272727] rounded-sm mt-8"
                    src="/static/images/Group 51.svg"
                    alt=""
                  />
                </div>
                <div className="ml-2">
                  <h2 className="text-text_small text-[40px]  font-light group-hover:text-brick">
                    Branding
                  </h2>
                  <div className="mt-8 flex flex-col space-y-8 relative">
                    <div className="bg-[#eaeaec46] w-[1px] h-[120px] absolute top-[50px] left-[-30px]  hidden group-hover:block"></div>
                    <p className="text-[20px]  font-light text-text_small">
                      Brand Strategy
                    </p>
                    <p className="text-[20px]  font-light text-text_small">
                      Brand Identity
                    </p>
                    <p className="text-[20px]  font-light text-text_small">
                      Brand Content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col  hover:bg-bg_gray group">
              <div className="flex mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                  <img
                    className="bg-[#272727] rounded-sm mt-8"
                    src="/static/images/Group 50.svg"
                    alt=""
                  />
                </div>
                <div className="ml-2">
                  <h2 className="text-text_small text-[40px]  font-light group-hover:text-brick">
                    Digital Product
                  </h2>
                  <div className="mt-8 flex flex-col space-y-8 relative">
                    <div className="bg-[#eaeaec46] w-[1px] h-[200px] absolute top-[50px] left-[-30px]  hidden group-hover:block"></div>
                    <p className="text-[20px]  font-light text-text_small">
                      Data science & optimization
                    </p>
                    <p className="text-[20px]  font-light text-text_small">
                      uX research
                    </p>
                    <p className="text-[20px]  font-light text-text_small">
                      product design
                    </p>
                    <p className="text-[20px]  font-light text-text_small">
                      product development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col  hover:bg-bg_gray group">
              <div className="flex mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                  <img
                    className="bg-[#272727] rounded-sm mt-8"
                    src="/static/images/Group 50.svg"
                    alt=""
                  />
                </div>
                <div className="ml-2">
                  <h2 className="text-text_small text-[40px]  font-light group-hover:text-brick">
                    Social Media
                  </h2>
                  <div className="mt-8 flex flex-col space-y-8 relative">
                    <div className="bg-[#eaeaec46] w-[1px] h-[200px] absolute top-[50px] left-[-30px]  hidden group-hover:block"></div>
                    <p className="text-[20px]  font-light text-text_small">
                      search engine optimization
                    </p>
                    <p className="text-[20px]  font-light text-text_small">
                      uX research
                    </p>
                    <p className="text-[20px]  font-light text-text_small">
                      product design
                    </p>
                    <p className="text-[20px]  font-light text-text_small">
                      product development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
