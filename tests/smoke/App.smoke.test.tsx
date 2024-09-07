import { render } from "@testing-library/react";
import App from "../../src/App";

describe("App Smoke Tests", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
