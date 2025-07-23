import { Link, NavLink } from "react-router-dom";
import dine from "../assets/Rectangle 10.png";
import party from "../assets/image 28.png";

const Service = () => {
  return (
    <div className="w-full max-w-screen-[1440px] mx-auto p-4 mt-[141px]">
      <div className="text-center">
        <h1 className="text-[#331206] text-[16px]">OUR SERVICES</h1>
        <h2 className="text-[42px] font-pacifico">
          Catering Flavors, Hosting{" "}
          <span className="text-[#FE2833]">Smiles</span>
        </h2>
      </div>

      <div className="w-full max-w-[1080px] mx-auto mt-[50px] lg:flex lg:items-center lg:justify-around mb-10 lg:gap-5">
        <div className="w-full max-w-[503px] h-[560px] mx-auto">
          <NavLink to="/menu">
            <img className="rounded-lg" src={dine} alt="dine" />
            <h1 className="font-pacifico text-center text-[30px] pt-12">Dine in-Restaurant</h1>
          </NavLink>
        </div>

        <div className="w-full max-w-[503px] h-[560px] mx-auto">
          <Link to="/booking">
            <img className="rounded-lg" src={party} alt="dine" />
            <h1 className="font-pacifico text-center text-[30px] pt-12">Party Center</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
