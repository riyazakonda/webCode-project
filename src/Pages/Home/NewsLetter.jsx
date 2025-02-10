import Heading from "../../componets/Heading";

const NewsLetter = () => {
  return (
    <div className="max-w-7xl mx-auto container py-20 px-5">
      <Heading
        heading="Newsletter"
        subhading=""
        description="Subscribe to our newsletter to get the latest news, updates, and offers. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar."
      />

      <div className="flex flex-col md:flex-row justify-center gap-4 ">
        <button className="flex bg-blue-600 text-white px-6 py-3 rounded-md justify-center items-center space-x-2 hover:bg-blue-500 transition">
          <span>Subscribe Now</span>
        </button>
        <button className="border border-blue-600 px-6 py-3 hover:bg-blue-600 hover:text-white text-blue-600 rounded-md transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
