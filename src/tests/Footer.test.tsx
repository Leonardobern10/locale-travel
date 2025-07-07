import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import Footer from "../components/Footer/Footer";

it("deve renderizar o rodapé com a logo", () => {
  render(<Footer />);
  const logo = screen.getByAltText(/logo da empresa em cor azul/i);
  expect(logo).toBeInTheDocument();
});
