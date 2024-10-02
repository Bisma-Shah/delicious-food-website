import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";

const menuData = [
  {
    img: "/cake.avif",
    title: "Delicious Cake",
    desc: "Rich and moist cake.",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "Classic pizza topped with fresh ingredients.",
    price: "$20.50",
  },
  {
    img: "/pasta.jpg",
    title: "Creamy Alfredo Pasta",
    desc: "Fettuccine in creamy sauce.",
    price: "$24.50",
  },
  {
    img: "/salad.avif",
    title: "Greek Salad",
    desc: "Fresh cucumbers, tomatoes, and feta.",
    price: "$19.50",
  },
  {
    img: "/sushi.webp",
    title: "Fresh Sushi Platter",
    desc: "Assorted sushi rolls and sashimi.",
    price: "$29.50",
  },
  {
    img: "/taco.jpg",
    title: "Spicy Chicken Tacos",
    desc: "Grilled chicken with salsa.",
    price: "$15.50",
  },
  {
    img: "/lemontart.jpg",
    title: "Lemon Tart",
    desc: "Tangy lemon filling in a buttery crust.",
    price: "$10.50",
  },
  {
    img: "/stirfry.jpg",
    title: "Vegetable Stir-Fry",
    desc: "Assorted vegetables sautéed in soy sauce.",
    price: "$23.50",
  },
];

const Menu = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
          Explore our diverse menu, showcasing an array of dishes designed to
          cater
          <br />
          to every taste and preference.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="bg-accent text-white p-1">Appetizers</li>
        <li>Breakfast</li>
        <li>Salads</li>
        <li>Meat & Fish</li>
        <li>Soup</li>
        <li>Desert</li>
        <li>Drinks</li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto"
            src="/menu_left.png"
            width={500}
            height={500}
            alt="dish"
          />
        </div>

        <div className="grid w-fit max-auto sm:grid-cols-2 gap-4">
          {menuData.map((items, index) => (
            <MenuCard
              key={index}
              img={items.img}
              title={items.title}
              desc={items.desc}
              price={items.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
