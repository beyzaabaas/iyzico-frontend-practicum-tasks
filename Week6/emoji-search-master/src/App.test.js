import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import  userEvent from'@testing-library/user-event'
import {fireEvent, render, screen} from '@testing-library/react'

//Testing import component
describe("App Tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("header must be rendered", () => {
    const header = screen.getByText("Emoji Search");

  });

  test("Emoji list should be rendered successfully", () => {
    const items = screen.getAllByText("Click to copy emoji");
    expect(items.length).toEqual(20);
  });

  test("Filtering should work", () => {
    const emoji = "Cloud Snow";
    const input = screen.getByRole("textbox");
    fireEvent.change(input,{target:{value:emoji}})
  });

  test("Copying should work", () => {
    const click = screen.getAllByText("Click to copy emoji").at(0);
    const parent = click.parentElement;
    expect(parent.getAttribute("data-clipboard-text").length).toBeGreaterThan(
      0
    );
  });
});