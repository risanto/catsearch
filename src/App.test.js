import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

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

  expect(screen.queryByTestId("cats")).toBeNull();
});

test("should return results 1 second after user stops typing", async () => {
  jest.useFakeTimers();
  render(<App />);

  const input = screen.getByPlaceholderText("Search here...");
  userEvent.type(input, "mun");

  await act(async () => {
    jest.advanceTimersByTime(1000);
  });
  await waitFor(() => screen.queryByTestId("cats"));

  expect(screen.queryByTestId("cats")).not.toBeNull();
});
