const Heading = ({ subhading, heading, description }) => {
  return (
    <div className="text-center mb-12">
      <p className="text-blue-600 uppercase font-semibold uppercase">
        {subhading}
      </p>
      <h2 className="text-3xl lg:text-4xl sm:w-3/5 mx-auto leading-normal lg:leading-snug capitalize font-bold text-gray-800 mt-3">
        {heading}
      </h2>
      {description && (
        <p className="text-gray-600 sm:w-3/5 mx-auto text-base mt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
