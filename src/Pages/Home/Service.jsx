import { FaCalendar, FaCompass, FaTruck } from "react-icons/fa";
import Heading from "../../componets/Heading";
import { FiActivity } from "react-icons/fi";

const services = [
  {
    icon: FaCalendar,
    title: "Coustomeziable Settines",
    description:
      "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
  },
  {
    icon: FaCompass,
    title: "Deploper-Friendly",
    description:
      "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur.",
  },
  {
    icon: FiActivity,
    title: "Responsives Disign",
    description:
      "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.",
  },
  {
    icon: FaTruck,
    title: "Clout Intergration",
    description:
      "Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius. ",
  },
];

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-5 container">
      <Heading
        subhading="Services"
        heading="Explore our rnages of profation services tailored to meet you business needs."
        description="Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur. "
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto mb-16 md:w-4/5">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 hover:shadow-xl hover:rounded-md transition cursor-pointer"
          >
            <service.icon className="text-4xl text-blue-600 mb-6" />
            <h2 className="text-3xl font-bold p-2 text-gray-800">
              {service.title}
            </h2>
            <p className="text-gray-600 mt-2 md:px-10">{service.description}</p>
          </div>
        ))}
      </div>
      {/* button */}
      <div className="text-center">
        <button className=" bg-blue-600 text-white px-8 py-3 rounded-md  hover:bg-blue-500 transition">
          Primary Action
        </button>
      </div>
    </div>
  );
};

export default Service;
