import { subscriptionBooks } from "../../assets/Images";
import { backgroundColor } from "../../utils/BackgroundColor";

const Subscription = () => {
  return (
    <div>
      <div className="flex h-[553px]">
        <div
          style={{ background: backgroundColor }}
          className="w-1/2 rounded-l-md p-6 flex items-center"
        >
          <div>
            <div className="flex items-center gap-2">
              <div className="bg-red-400 h-1 w-6"></div>
              <div>
                <p className="text-red-400 text-sm font-bold">ebook</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-3xl">
                Access, Read, Practice & Engage with Digital Content (eBook)
              </h3>
              <p className="font-medium text-slate-400 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
              <div>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Your Email Address"
                  className="rounded-l-md py-1 px-2 outline-none"
                />

                <button className="bg-red-400 hover:bg-red-500 text-white font-bold text-l py-1 px-3 rounded-r-md hover:scale-110 transition duration-100 ease-in-out hover:rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <img className="w-1/2  rounded-r-md" src={subscriptionBooks} alt="" />
      </div>
    </div>
  );
};

export default Subscription;
