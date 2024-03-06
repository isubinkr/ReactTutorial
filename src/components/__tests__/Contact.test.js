import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// we can group our test cases
// We can nest describe as well
describe("Contact Us Page Test Case", () => {
  // We can use these two also
  beforeAll(() => {
    // console.log("Before All");
  });

  beforeEach(() => {
    // console.log("Before Each");
  });
  // similarly we have these also:
  // afterAll();
  // afterEach();

  // it("Should load contact us component", () => { // same thing it is easier to read
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside Contact component", () => {
    render(<Contact />);

    // Quering
    const inputBoxes = screen.getAllByRole("textbox");
    // For multiple items we use getAllBy.....

    // console.log(inputBoxes);
    // logs the react element/ virtual dom object

    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(3);
  });
});
