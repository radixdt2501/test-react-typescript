
import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import SpellDetails from "../SpellDetails"
import * as AppContext from '../../context/DungeonsDragonsContext'

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
	jest.spyOn(AppContext, 'DungeonsDragonsProvider')
			.mockImplementation(() => <></>);
  const item = render(<SpellDetails  />)
  expect(item.getByRole('button')).toHaveTextContent('Go Back')
})

test('When user click button', async () => {
    const item = render(<SpellDetails  />)
    const button = item.getByRole('button')
    await fireEvent.click(button);
    expect(item.getByRole('button')).toHaveTextContent('Go Back')
  })
