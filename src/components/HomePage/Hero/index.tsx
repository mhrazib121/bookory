import { topImage } from "../../../assets/Images";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-red-100 to-blue-100">
      <div className="w-full md:max-w-[75%] m-auto">
        <div className="md:flex justify-between items-center ">
          <div className=" w-full ">
            <h1 className="text-4xl mb-4">Ipsum dolor si</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus
              ut magna velit eleifend. Amet, quis urna, a eu.
            </p>
            <br />
            <button className="px-4 py-2 text-white bg-violet-400 hover:bg-violet-300 rounded-lg">
              Read More
            </button>
          </div>
          <div className="w-full flex justify-end">
            <img src={topImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
