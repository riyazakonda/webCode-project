import { FiCloud, FiCode, FiSettings, FiSmartphone } from "react-icons/fi";
import Heading from "../../componets/Heading";

const tools = [
  {
    icon: FiSettings,
    title: "Coustomeziable Settines",
    description: "Easily Configurs tools to fit your project requirements",
  },
  {
    icon: FiCode,
    title: "Deploper-Friendly",
    description: "Optimized for deplopers with clean and efficinet code ",
  },
  {
    icon: FiSmartphone,
    title: "Responsives Disign",
    description: "Build tools  that look great on any device and screen size",
  },
  {
    icon: FiCloud,
    title: "Clout Intergration",
    description: "Seamlessly connect with cluid service for better productvity",
  },
];

const ToolsSection = () => {
  return (
    <div className="max-w-7xl mx-auto container py-20 px-5">
      {/* tool section */}

      <Heading
        subhading={"The Tools you need"}
        heading={"All-in-one Solution For Your Project"}
      />

      {/* tools */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col text-center items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
          >
            <tool.icon className="text-blue-600 text-4xl mb-4 " />
            <h3 className="text-lg text-gray-800 font-bold ">{tool.title}</h3>
            <p className="text-gray-600 mt-2">{tool.description}</p>
          </div>
        ))}
      </div>

      {/* button */}
      <div className="text-center">
        <button className=" bg-blue-600 text-white px-6 py-3 rounded-md  hover:bg-blue-500 transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ToolsSection;
