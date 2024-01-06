import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Test if booking form is rendered correctly
test("renders BookingForm component", () => {
  const mockOnFormSubmit = jest.fn();
  const mockDispatchOnDateChange = jest.fn();
  const availableTimes = ["15:00", "15:30", "16:00"];

  render(
    <BookingForm
      onFormSubmit={mockOnFormSubmit}
      isFormSubmitted={false}
      availableTimes={availableTimes}
      dispatchOnDateChange={mockDispatchOnDateChange}
    />
  );

  const dateLabel = screen.getByText(/Date/i);
  expect(dateLabel).toBeInTheDocument();
});
