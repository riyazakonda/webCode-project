import { useState } from "react";
import Heading from "../../componets/Heading";
const faqs = [
  {
    id: 1,
    question: "Who should use the app?",
    answer:
      "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools.",
  },
  {
    id: 2,
    question: "What is included with my subscription?",
    answer:
      "Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan.",
  },
  {
    id: 3,
    question: "How do I get paid?",
    answer:
      "Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard.",
  },
  {
    id: 4,
    question: "Is my personal information safe?",
    answer:
      "Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times.",
  },
  {
    id: 5,
    question: "How can we get in touch?",
    answer:
      "You can contact us via email at support@ourapp.com, or through our live chat available on the website. Our support team is always ready to assist you with any queries you may have.",
  },
];

const FAQs = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // faq toggle

  const toggleFAQ = (id) => {
    if (expandedFAQ === id) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(id);
    }
  };

  return (
    <div className="bg-[#F2F4F8]">
      <div className="max-w-7xl mx-auto container py-20 px-5">
        <Heading
          heading="Frequently Asked Questions"
          subhading="FAQS"
          description=""
        />
        {/* faqs accoudion section */}
        <div className="w-full max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-300 mb-4 ">
              {/* qurtions */}
              <div
                className="cursor-pointer flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-200 transition duration-200"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="text-lg text-gray-800 font-semibold">
                  {faq.question}
                </h3>
                <span
                  className={`transform transition duration-200 font-bold text-lg ${
                    expandedFAQ === faq.id ? "rotate-180" : ""
                  }`}
                >
                  {expandedFAQ === faq.id ? "-" : "+"}
                </span>
              </div>
              {/* awnsar */}
              <div>
                {expandedFAQ === faq.id && (
                  <div className="p-4 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
