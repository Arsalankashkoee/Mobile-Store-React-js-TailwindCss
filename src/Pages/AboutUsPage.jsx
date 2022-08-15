import { SiWhatsapp } from "react-icons/si";
import { SiTelegram } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

const AboutUsPage = () => {
  return (
    <section className="">
      <div className="container flex flex-col items-start justify-start bg-white rounded-lg shadow-lg">
        <div className="py-5 ">
          <h2 className="font-semibold text-xl mb-5">Arsalan Shopping</h2>
          <p className="mb-3 text-lg">
            Welcome to Arsalan Shopping, the online store for buying mobile
            phones and accessories.In this center, the top brands of the market
            are offered, and we try to collect and display the most complete and
            expressive product information for you.
          </p>
          <p className="mb-3 text-lg">
            Our goal is to provide easier and better services to you friends.
          </p>
          <p className="mb-3 text-lg">
            Arsalan Shopping's best efforts are to ensure that your orders reach
            you in Tehran on the same working day and outside of Tehran, between
            24 and 48 working hours at the most, and that you are always
            satisfied with your purchase.
          </p>
          {/* Contact us */}
          <div className="mt-11">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <div className="flex items-center gap-11">
              {/* telegram */}
              <div className="flex items-center justify-center gap-1">
                <SiTelegram className="w-5 h-5 text-telegram" />
                <a
                  href="https://t.me/kashkoei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  Telegram
                </a>
              </div>
              {/* whats-app */}
              <div className="flex items-center justify-center gap-1">
                <SiWhatsapp className="w-5 h-5 text-whatsapp" />
                <a
                  href="https://wa.me/09125775473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  WhatsApp
                </a>
              </div>
              {/* instagram */}
              <div className="flex items-center justify-center gap-1">
                <SiInstagram className="w-5 h-5 text-instagram" />
                <a
                  href="https://instagram.com/arsalan_kashkoei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
