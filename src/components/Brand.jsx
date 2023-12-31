/* eslint-disable react/prop-types */

const Brand = () => {
  return (
    <>
      {/* ====== Brands Section Start */}
      <section className="">
        <div className="container mx-auto flex h-[200px] justify-center items-center">
          <div className="flex flex-wrap ">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/static/images/Airbnb Logo.svg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/static/images/Hubspot Logo.svg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/static/images/Google Logo.svg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/static/images/Microsoft Logo.svg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/static/images/Walmart Logo.svg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/static/images/FedEx Logo.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;

const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        className="mx-8 flex w-[150px] items-center justify-center  2xl:w-[180px] grayscale"
      >
        <img src={imgSrc} alt={Alt} className="w-full h-10" />
      </a>
    </>
  );
};
