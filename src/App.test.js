import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

test("should change search value based on user input", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Search here...");
  userEvent.type(input, "mun");
  expect(input).toHaveValue("mun");
});

test("should not return results less than 1 second after user stops typing", async () => {
  jest.useFakeTimers();
  render(<App />);

  const input = screen.getByPlaceholderText("Search here...");
  userEvent.type(input, "mun");

  await act(async () => {
    jest.advanceTimersByTime(900);
  });
  await waitFor(() => screen.queryByTestId("cats"));

  expect(screen.queryByTestId("cat")).toBeNull();
});

test("should return results 1 second after user stops typing", async () => {
  jest.useFakeTimers();
  render(<App />);

  const input = screen.getByPlaceholderText("Search here...");
  userEvent.type(input, "mun");

  await act(async () => {
    jest.advanceTimersByTime(1000);
  });
  await waitFor(() => screen.queryByTestId("cat"));

  expect(screen.queryByTestId("cat")).not.toBeNull();
});

test("should not return results when user types less than 3 characters", async () => {
  jest.useFakeTimers();
  render(<App />);

  const input = screen.getByPlaceholderText("Search here...");
  userEvent.type(input, "mu");

  await act(async () => {
    jest.advanceTimersByTime(1000);
  });
  await waitFor(() => screen.queryByTestId("cat"));

  expect(screen.queryByTestId("cat")).toBeNull();
});

test("white spaces should not count into 3 characters", async () => {
  jest.useFakeTimers();
  render(<App />);

  const input = screen.getByPlaceholderText("Search here...");
  userEvent.type(input, " mu");

  await act(async () => {
    jest.advanceTimersByTime(1000);
  });
  await waitFor(() => screen.queryByTestId("cat"));

  expect(screen.queryByTestId("cat")).toBeNull();
});

test("should display the right image src and alt", async () => {
  jest.useFakeTimers();
  render(<App />);

  const input = screen.getByPlaceholderText("Search here...");
  userEvent.type(input, "mun");

  await act(async () => {
    jest.advanceTimersByTime(1000);
  });
  await waitFor(() => screen.queryByTestId("cat"));

  const catImg = screen.queryByTestId("cat-img");

  expect(catImg).not.toBeNull();
  expect(catImg).toHaveAttribute(
    "src",
    "https://cdn2.thecatapi.com/images/j5cVSqLer.jpg"
  );
  expect(catImg).toHaveAttribute("alt", "Munchkin");
});
