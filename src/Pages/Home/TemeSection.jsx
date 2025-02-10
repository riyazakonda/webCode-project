import { Link } from "react-router-dom";
import Heading from "../../componets/Heading";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    image: "/images/members/person1.png",
    name: "John Doe",
    role: "CEO",
    linkedIn: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    facebook: "https://facebook.com/johndoe",
    button: "Contact Darrell",
  },
  {
    id: 2,
    image: "/images/members/person2.png",
    name: "Jane Smith",
    role: "CTO",
    linkedIn: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    instagram: "https://instagram.com/janesmith",
    facebook: "https://facebook.com/janesmith",
    button: "Contact Savannah",
  },
  {
    id: 3,
    image: "/images/members/person3.png",
    name: "Mark Johnson",
    role: "Designer",
    linkedIn: "https://linkedin.com/in/markjohnson",
    twitter: "https://twitter.com/markjohnson",
    instagram: "https://instagram.com/markjohnson",
    facebook: "https://facebook.com/markjohnson",
    button: "Contact Dianne",
  },
  {
    id: 4,
    image: "/images/members/person4.png",
    name: "Emily Carter",
    role: "Developer",
    linkedIn: "https://linkedin.com/in/emilycarter",
    twitter: "https://twitter.com/emilycarter",
    instagram: "https://instagram.com/emilycarter",
    facebook: "https://facebook.com/emilycarter",
    button: "Contact Kristin",
  },
];

const TemeSection = () => {
  return (
    <div className="bg-[#F2F4F8]">
      <div className="max-w-7xl mx-auto container py-20 px-5">
        <Heading heading="meet the experts" subhading="Our Team" />
        {/* team members carts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              {/* conteiner */}
              <div className="p-5 ">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>

                {/* social icons */}
                <div className="flex justify-center items-center space-x-8 pt-2">
                  <Link to={member.linkedIn}>
                    <FaLinkedinIn className="text-blue-600 text-2xl hover:text-blue-800" />
                  </Link>
                  <Link to={member.twitter}>
                    <FaTwitter className="text-blue-600 text-2xl hover:text-blue-800" />
                  </Link>
                  <Link to={member.instagram}>
                    <FaInstagram className="text-blue-600 text-2xl hover:text-blue-800" />
                  </Link>
                  <Link to={member.facebook}>
                    <FaFacebookF className="text-blue-600 text-2xl hover:text-blue-800" />
                  </Link>
                </div>
              </div>
              <div className="text-center pt-2 pb-2 ">
                <button className="btn border-2 py-2 px-6 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition duration-300">
                  {member.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemeSection;
