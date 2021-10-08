import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TrackerForm from '../../components/Header/TrackerForm';

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
  });

  test('Error message should be equal to errorMessage prop if ip address or domain is invalid', () => {
    render(
      <TrackerForm
        inputValue="90.90.43."
        onChangeInputValue={jest.fn()}
        searchIpInfos={jest.fn()}
        error={true}
        errorMessage="Invalid IP address"
      />
    );

  const divEl = screen.getByTestId("error-message");
  expect(divEl).toHaveTextContent("Invalid IP address");
  });

  test('Error message should have form__message--hide className when user is typing', () => {
    render(
      <TrackerForm
        inputValue=""
        onChangeInputValue={jest.fn()}
        searchIpInfos={jest.fn()}
        error={false}
        errorMessage=""
      />
    );
    
    const inputEl = screen.getByRole("textbox");
    const divEl = screen.getByTestId("error-message");
    userEvent.type(inputEl, "90.90.43.12");

    expect(divEl).toHaveClass("form__message--hide");
  });
});