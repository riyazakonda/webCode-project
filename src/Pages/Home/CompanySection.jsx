import {
  FaAmazon,
  FaApple,
  FaFacebook,
  FaGoogle,
  FaMicrosoft,
} from "react-icons/fa";
import Heading from "../../componets/Heading";
import "../../App.css";

const CompanySection = () => {
  const logos = [
    { icon: FaApple, name: "Apple" },
    { icon: FaGoogle, name: "Google" },
    { icon: FaAmazon, name: "Amazon" },
    { icon: FaMicrosoft, name: "Microsoft" },
    { icon: FaFacebook, name: "Facebook" },
  ];
  return (
    <div className="bg-[#F2F4F8] ">
      <div className="max-w-7xl container mx-auto py-20 px-5 ">
        <Heading
          subhading="our trusted patners"
          heading="Companies We, ve Worked With"
          description="We,ve patners with some of the most innovaitive and leanding companies to bring the best solutions to you"
        />

        <div className="relative overflow-hidden border-y-[1px] border-none p-8">
          <div className="flex justify-around items-center md:space-x-14 space-x-8 animate-scroll animate-scroll">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-white rounded-full p-6 w-28 h-28 hover:scale-110 transition transform"
              >
                <logo.icon
                  className="text-4xl text-blue-600 "
                  title={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
