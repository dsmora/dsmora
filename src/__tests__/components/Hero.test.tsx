import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";

const mockSiteConfig = {
  name: "Test Name",
  title: "Test Title",
  description: "A short test description.",
  email: "test@example.com",
  socialLinks: [],
};

describe("Hero", () => {
  it("renders the name", () => {
    render(<Hero siteConfig={mockSiteConfig} />);
    expect(screen.getByText("Test Name")).toBeDefined();
  });

  it("renders the title", () => {
    render(<Hero siteConfig={mockSiteConfig} />);
    expect(screen.getByText("Test Title")).toBeDefined();
  });

  it("has a call to action button", () => {
    render(<Hero siteConfig={mockSiteConfig} />);
    expect(screen.getByText("Get in Touch")).toBeDefined();
  });
});
