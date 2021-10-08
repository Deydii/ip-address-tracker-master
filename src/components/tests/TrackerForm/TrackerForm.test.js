import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TrackerForm from '../../Header/TrackerForm';

describe('Tracker Form component', () => {
  test('It should render tracker form component', () => {
    render(
      <TrackerForm
        inputValue=""
        onChangeInputValue={jest.fn()}
        searchIpInfos={jest.fn()}
        error={false}
        errorMessage=""
      />
    );
  });
  test('onChange function should be called when user is typing in the input', () => {
    const changeValue=jest.fn()
    render(
      <TrackerForm
        inputValue=""
        onChangeInputValue={changeValue}
        searchIpInfos={jest.fn()}
        error={false}
        errorMessage=""
      />
    );

    const inputEl = screen.getByRole("textbox");
    userEvent.type(inputEl, "google");
    expect(changeValue).toHaveBeenCalled();
  });

  test('Input value should be equal to inputValue prop', () => {
    render(
      <TrackerForm
        inputValue="google"
        onChangeInputValue={jest.fn()}
        searchIpInfos={jest.fn()}
        error={false}
        errorMessage=""
      />
    );

    const inputEl = screen.getByRole("textbox");
    expect(inputEl.value).toBe("google");
  })

  test('searchIpInfos function should be called when user cliks on the button or presses enter', () => {
    const handleSubmit = jest.fn()
    render(
      <TrackerForm
        inputValue="google"
        onChangeInputValue={jest.fn()}
        searchIpInfos={handleSubmit}
        error={false}
        errorMessage=""
      />
    );

    // When user clicks on the button
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    // When user presses enter
    const inputEl = screen.getByRole("textbox");
    userEvent.type(inputEl, '{enter}')
    
    expect(handleSubmit).toHaveBeenCalled();
  })
});