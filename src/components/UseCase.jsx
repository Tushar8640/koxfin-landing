/* eslint-disable react/no-unescaped-entities */
export default function UseCase() {
  return (
    <section className=" ">
      <div className="container  mx-auto px-[40px]">
        <div className="flex  bg-bg_black">
          <div className="pl-20 py-12 md:w-1/2 flex flex-col ">
            <span className="text-text_small text-[20px] font-normal">
              USE CASES
            </span>
            <h2 className=" my-[30px] text-[40px]  font-light  text-brick ">
              We supported Relish <br /> Child Care NGO to <br /> boost up there
              reach.
            </h2>
            <p className="w-[540px] text-[18px]  font-light text-text_small">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <img className="w-[50px] mt-10" src="/public/images/right.svg" alt="" />
          </div>
          <div className=" md:w-1/2 flex flex-col items-start">
            <img src="/static/images/usecase.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
