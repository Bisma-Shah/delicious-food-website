import Dash from "./Dash";
import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    img: "/services__1.png",
    title: "professonal Kitchen",
    desc: "Our kitchen is equipped with top-notch facilities for an exceptional dining experience.",
  },
  {
    img: "/services__2.png",
    title: "Delivery",
    desc: "We offer prompt delivery service to bring your favorite dishes right to your door.",
  },
  {
    img: "/services__3.png",
    title: "Wine List",
    desc: "Our extensive wine list features a variety of selections for all occasions.",
  },
  {
    img: "/services__4.png",
    title: "Free Wifi",
    desc: "Enjoy free wifi throughout the restaurant to stay connected while dining.",
  },
];

const Services = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Choose Best <span className="text-accent">Service</span>
        </h2>
        <p className="text-gray-700">
        Discover our exceptional services designed to enhance your experience.We prioritize quality and
          <br />
         customer satisfaction in everything we do.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {serviceData.map((item, index) => (
          <ServiceCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
