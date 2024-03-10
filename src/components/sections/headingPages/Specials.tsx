import GreekSalad from "../../../assets/food/greek-salad.webp";
import Bruschetta from "../../../assets/food/bruschetta.jpeg";
import LemonDessert from "../../../assets/food/lemon-dessert.webp";
import SpecialCard from "./CardInfo/SpecialCard";
import menu from "../../../assets/menu.webp";
import React from "react";

const recipes = [
  {
    id: 1,
    title: "Greek salad",
    price: "$12.99",
    image: GreekSalad,
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
  },
  {
    id: 2,
    title: "Bruschetta",
    price: "$5.99",
    image: Bruschetta,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil and is as authentic as can be imagined.",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "$4.78",
    image: LemonDessert,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default function Specials() {
  return (
    <section className="specials">
      <article className="specials-topbar">
        <h1>This week's specials</h1>
        <a
          className="action-button"
          href={menu}
          target="_blank"
          rel="noreferrer"
        >
          Online Menu
        </a>
      </article>

      <section className="specials-cards">
        {recipes.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <SpecialCard {...item} />
            </React.Fragment>
          );
        })}
      </section>
    </section>
  );
}
