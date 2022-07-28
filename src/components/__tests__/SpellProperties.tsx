
import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import SpellProperties from "../SpellProperties"

let props:{
  title: string,
  description?: string | number | boolean | string[]
}
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));


function resetAll() {
	props  ={
    title :'test-title',
    description:"test description"
  }
}

beforeEach(resetAll);
afterEach(resetAll);

test('Component renders correctly', async () => {
  const item = render(<SpellProperties {...props} />)
  expect(item.getByTestId('dt')).toHaveTextContent('test-title')
  expect(item.getByTestId('dd')).toHaveTextContent('test description')
})
