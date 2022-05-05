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
      setUsers={() => {}}
    />
  );
  const firstName = screen.getByText("John");
  const lastName = screen.getByText("Doe");
  const email = screen.getByText("john.doe@email.com");
  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
