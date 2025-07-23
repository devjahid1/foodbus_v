const Testimonials = () => {
  return (
    <div className="bg-test w-full max-w-screen[1440px] mx-auto bg-cover bg-center h-[1000px] lg:h-[800px] pt-1 text-white mb-16 mt-[180px]">
      <div className="text-[16px] text-center mb-10 mt-28">
        <h2 className="">TESTIMONIALS</h2>
        <h3 className="text-[22px] lg:text-[40px] font-pacifico">
          {" "}
          <span className="text-red-500">Loved</span> by Foodies & Party-Goers
          Alike
        </h3>
      </div>

      <div className="text-center mt-20 font-playwrite text-[20px] lg:text-[32px] lg:mt-32 ">
        <h1>
          Great food, cozy vibe, and perfect for parties! <br />
          The staff made everything smooth and stress-free
        </h1>
      </div>

      <div>
        <div className="rating flex flex-row items-center justify-center mt-16">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="1 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="2 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="3 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="4 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="5 star"
            defaultChecked
          />
        </div>
        <h2 className="text-center mt-3 font-plusjakarta text-[24px]">
          Usama Khan
        </h2>
        <h2 className="text-center">Student</h2>
        <h2 className="text-center">Metropolitan University, Bangladesh</h2>
      </div>
    </div>
  );
};

export default Testimonials;
