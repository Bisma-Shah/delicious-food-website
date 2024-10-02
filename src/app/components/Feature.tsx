import Dash from "./Dash";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="container pt-40">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-accent">Food</span>
      </h2>
      <p className="max-w-[550px] pt-10 text-gray-700">
        Discover our carefully curated selection of exquisite dishes that
        showcase the finest flavors from across the globe. Each culinary
        masterpiece is crafted with passion and precision, ensuring that every
        bite offers a unique experience that delights the senses. From vibrant
        spices to fresh, locally sourced ingredients, we take pride in
        delivering dishes that not only satisfy your hunger but also create
        lasting memories. Join us on a culinary journey that celebrates the art
        of food and the joy it brings to every gathering.
      </p>
      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__1.png"
            width={300}
            height={600}
            alt="Shrimp Salad"
          />
          <div className="space-y-4">
            <Dash />
            <h3 className="font-medium text-xl">Shrimp Salad</h3>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Enjoy our Shrimp Salad, a delightful mix of succulent shrimp and
              fresh greens, drizzled with a tangy dressing. Each bite is
              refreshing and perfect for a light meal that satisfies your
              cravings.
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__2.png"
            width={300}
            height={600}
            alt="Baked Apples"
          />
          <div className="space-y-4">
            <Dash />
            <h3 className="font-medium text-xl">Baked Apples</h3>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Indulge in our Baked Apples, featuring warm, sweet apples
              sprinkled with cinnamon and topped with a crunchy crumble. A
              delightful dessert that warms your heart and satisfies your sweet
              tooth.
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__3.png"
            width={300}
            height={600}
            alt="Cherries Chicken"
          />
          <div className="space-y-4">
            <Dash />
            <h3 className="font-medium text-xl">Cherries Chicken</h3>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Try our Cherries Chicken, a savory dish with tender chicken glazed
              in a sweet cherry sauce. It’s a unique flavor combination that’s
              sure to impress your palate with each delicious bite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
