import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SpellDetailPage from "../SpellDetailPage";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

function resetAll() {}

beforeEach(resetAll);
afterEach(resetAll);

test("Component renders correctly", async () => {
  const item = render(<SpellDetailPage />);
  expect(item.getByRole("button")).toHaveTextContent("Go Back");
});
