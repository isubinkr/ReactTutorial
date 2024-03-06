import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RetaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
// We can name MOCK_DATA_NAME anything since it is coming form a default export
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  });
});

it("should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Bucket Biryani (3)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(3);

  expect(screen.getByText("Cart - [0 items]")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  // Now we have to check wheter our Cart in Header Component got updated
  // for which we will have to add <Header /> componnet in render();

  expect(screen.getByText("Cart - [1 items]")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - [2 items]")).toBeInTheDocument();
  // Break all these down into smaller test cases -> good practice

  // screen.getAllByTestId("foodItems") we can use the same for cart because the same div is getting
  // rendered in Cart page as well
  // 3 from above and 2 more that we added in cart

  expect(screen.getAllByTestId("foodItems").length).toBe(3 + 2);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  // After clearing the card the foodItems divs rendered must become 3 again (in Res..Menu component)

  expect(screen.getAllByTestId("foodItems").length).toBe(3 + 2 - 2);

  expect(
    screen.getByText("Cart is empty. Add Items to the cart!")
  ).toBeInTheDocument();
});
