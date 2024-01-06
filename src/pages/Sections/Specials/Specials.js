import React from "react";
import "./Specials.css";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const specials = [
  {
    id: 1,
    title: "Greek salad",
    description:
      "Our authentic Greek salad consists of crispy lettuce and cucumbers, juicy tomatoes, and fresh Greek feta cheese.",
    image:
      "https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$12.99",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Our crispy Bruschetta is made with freshly baked bread, organic tomatoes and garnished with the finest Italian olive oil.",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$ 5.99",
  },
  {
    id: 3,
    title: "Lemon Cake",
    description:
      "Our Italian Lemon Cake comes straight out the oven daily and smells heavenly.",
    image:
      "https://images.unsplash.com/photo-1543508185-225c92847541?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$ 5.00",
  },
];

const Specials = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate(pages.get("orders").path);
  };
  return (
    <div className="specials">
      <div className="header-container">
        <h1 className="specials-title">This Week's Specials</h1>
      </div>
      <div className="header-list">
        {specials.map((special) => (
          <FoodCard
            key={special.id}
            title={special.title}
            description={special.description}
            image={special.image}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;
