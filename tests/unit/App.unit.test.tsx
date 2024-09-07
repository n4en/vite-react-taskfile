import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../src/App";

describe("App Component Unit Tests", () => {
  it("renders the Vite + React heading", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("renders the count button", () => {
    render(<App />);
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
  });

  it("increments the count on button click", () => {
    render(<App />);
    const button = screen.getByText(/count is 0/i);
    fireEvent.click(button);
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });
});
