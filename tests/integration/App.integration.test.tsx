import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../src/App";

describe("App Component Integration Tests", () => {
  it("ensures logo links render and are clickable", () => {
    render(<App />);
    const viteLink = screen.getByAltText("Vite logo").closest("a");
    const reactLink = screen.getByAltText("React logo").closest("a");
    expect(viteLink).toHaveAttribute("href", "https://vitejs.dev");
    expect(reactLink).toHaveAttribute("href", "https://react.dev");
  });

  it("increments count when button is clicked", () => {
    render(<App />);
    const button = screen.getByText(/count is 0/i);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.getByText(/count is 2/i)).toBeInTheDocument();
  });
});
