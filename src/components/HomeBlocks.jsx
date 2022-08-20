import { BsFillBookmarkStarFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const HomeBlocks = () => {
  return (
    <article className=" mb-20">
      <section className="container grid xl:grid-cols-auto-fit gap-11 lg:grid-cols-3 md:grid-cols-1 ">
        {/* Item 1 */}
        <section className="bg-white flex flex-col items-center justify-center flex-auto p-5 rounded-lg shadow-lg">
          <span className="">
            <GiReceiveMoney className="w-8 h-8 text-violet-600 mb-3" />
          </span>
          <span className="font-semibold text-lg text-center">
            10 days money back guarantee
          </span>
          <p className="font-medium mt-5 ">
            Refund in case of technical defect
          </p>
        </section>
        {/* Item 2 */}
        <section className="bg-white flex flex-col items-center justify-center flex-auto p-5 rounded-lg shadow-lg">
          <span className="">
            <BsFillBookmarkStarFill className="w-7 h-7 text-violet-600 mb-3" />
          </span>
          <span className="font-semibold text-lg text-center">
            Guarantee of product authenticity
          </span>
          <p className="font-medium mt-5 ">18 months Golden Service</p>
        </section>
        {/* Item 3 */}
        <section className="bg-white flex flex-col items-center justify-center flex-auto p-5 rounded-lg shadow-lg ">
          <span className="">
            <RiMoneyDollarCircleLine className="w-8 h-8 text-violet-600 mb-3" />
          </span>
          <span className="font-semibold text-lg text-center">
            Best price guarantee
          </span>
          <p className="font-medium mt-5 ">Buy at the lowest price</p>
        </section>
      </section>
    </article>
  );
};

export default HomeBlocks;
