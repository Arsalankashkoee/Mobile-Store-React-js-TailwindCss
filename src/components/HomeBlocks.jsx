import { BsFillBookmarkStarFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const HomeBlocks = () => {
  return (
    <article className=" mb-20">
      <section className="container grid grid-cols-auto-fit gap-11 ">
        {/* Item 1 */}
        <section className="bg-white flex flex-col items-center justify-center flex-auto p-5 rounded-lg shadow-lg">
          <span className="">
            <GiReceiveMoney className="w-8 h-8 text-violet-600 mb-3" />
          </span>
          <span className="font-semibold text-lg">
            10 days money back guarantee
          </span>
          <p className="font-medium mt-3 mx-11">
            The technical defect of the product is up to 10 days after receiving
            the product
          </p>
        </section>
        {/* Item 2 */}
        <section className="bg-white flex flex-col items-center justify-center flex-auto p-5 rounded-lg shadow-lg">
          <span className="">
            <BsFillBookmarkStarFill className="w-7 h-7 text-violet-600 mb-3" />
          </span>
          <span className="font-semibold text-lg">
            Guarantee of product authenticity
          </span>
          <p className="font-medium mt-3 mx-11">
          All products contains 18 months Golden Service
          </p>
        </section>
        {/* Item 3 */}
        <section className="bg-white flex flex-col items-center justify-center flex-auto p-5 rounded-lg shadow-lg">
          <span className="">
            <RiMoneyDollarCircleLine className="w-8 h-8 text-violet-600 mb-3" />
          </span>
          <span className="font-semibold text-lg">Best price guarantee</span>
          <p className="font-medium mt-3 mx-11">
          Arsalan Shopping online store has started its work with the approach of selling products at the lowest price to customers
          </p>
        </section>
      </section>
    </article>
  );
};

export default HomeBlocks;
