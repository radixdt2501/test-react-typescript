
import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import SpellCard from "../SpellCard"
import { ISpellCardProps } from '../../types'

let props:ISpellCardProps

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));


function resetAll() {
	props = {
        spell: {
            index: 'string-1',
            name: 'test-string',
            url: 'abc.com'},
	isFavorite: true,
    }
}

beforeEach(resetAll);
afterEach(resetAll);

test('Component renders correctly', async () => {
  const item = render(<SpellCard {...props} />)
  expect(item.getByRole('button')).toHaveTextContent('View test-string')
})

test('When user click button', async () => {
    const item = render(<SpellCard {...props} />)
    const button = item.getByRole('button')
    await fireEvent.click(button);
    expect(item.getByRole('button')).toHaveTextContent('View test-string')
  })

  test('When user see favourite item', async () => {
    const item = render(<SpellCard {...props} />)
    expect(item.getAllByTestId('fav-icon')).toHaveLength(1)
  })

  test('When user see un-favourite item', async () => {
      props.isFavorite = false;
    const item = render(<SpellCard {...props} />)
    expect(item.getAllByTestId('add-fav')).toHaveLength(1)
  })