import Card from "./Card";
import { render, screen } from "@testing-library/react";

test("renders user infos", () => {
  render(
    <Card
      user={{
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@email.com",
      }}
    />
  );
  const firstName = screen.getByDisplayValue("John");
  const lastName = screen.getByDisplayValue("Doe");
  const email = screen.getByDisplayValue("john.doe@email.com");
  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
