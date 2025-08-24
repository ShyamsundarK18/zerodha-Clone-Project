import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";

describe("Home Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image"); // case-insensitive match
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "/media/images/homeHero.png");
  });

  test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", {
      name: /Sign up for free/i,
    }); // case-insensitive match
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });
});
