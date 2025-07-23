const MenuAbout = () => {
  return (
    <div className="w-full max-w-screen-[1440px] mx-auto mt-3 lg:mt-[70px] mb-3 lg:mb-[70px] text-center">
      {/* Text Section */}
      <div className="w-full max-w-[900px] mx-auto">
        <h1 className="text-[16px] font-semibold">OUR MENU</h1>
        <h2 className="font-pacifico text-[28px] lg:text-[42px] mt-2">
          Explore Our Delicious <span className="text-[#FE2833]">Menu</span>
        </h2>
        <p className="pt-6 pb-6 text-[16px] leading-relaxed">
          Discover a variety of mouthwatering dishes made with fresh ingredients
          and <br className="hidden lg:block" />
          bold flavors. Whether you're craving a quick snack or a hearty meal, there's <br className="hidden lg:block" />
          something delicious waiting for you.
        </p>
      </div>
      </div>

  );
};

export default MenuAbout;
