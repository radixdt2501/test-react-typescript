
import { render} from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from "../HomePage"

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));


function resetAll() {

}

beforeEach(resetAll);
afterEach(resetAll);

test('Component renders correctly', async () => {
  const item = render(<HomePage />)
  expect(item.getByTestId('heading')).toHaveTextContent('Welcome to Dungeons & Dragons')
})

