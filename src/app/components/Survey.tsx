import Image from "next/image";

const Survey = () => {
  return (
    <div className="container pt-40">
      <div className="grid lg:grid-cols-[50%,1fr] gap-20">
        <div>
          <Image
            className="w-[100%] h-auto lg:w-auto ig:h-[90vh]"
            src="/survey.png"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>
        <div className="self-center">
          <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
            About our <span className="text-accent">Food</span>
          </h2>

          <p className="text-gray-700 pt-16">
            Your feedback is important to us. We want to know what you think
            about our food quality and service. Your insights help us improve
            and serve you better.
          </p>
          <p className="text-gray-700 pt-8">
            Please share your experience regarding our dishes and service. We
            appreciate your time and effort in helping us enhance our offerings
            for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;
