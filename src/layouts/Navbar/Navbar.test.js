import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import "@testing-library/jest-dom/extend-expect";

// Test if Navbar is rendered
test("it renders the Navbar component correctly", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  // Check if the logo is in the document
  expect(screen.getByAltText("logo")).toBeInTheDocument();

  // Check if the links are in the document
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("About")).toBeInTheDocument();
  expect(screen.getByText("Menu")).toBeInTheDocument();
  expect(screen.getByText("Reservations")).toBeInTheDocument();
  expect(screen.getByText("Order Online")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
});
