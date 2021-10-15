import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { server } from '../../mocks/server';
import App from '../../components/App/App';

describe('App component', () => {
  test('It should load data and map', async () => {
    render(
      <App />
    );

    const ip = await screen.findByText(/90.90.43.12/);
    expect(ip).toBeInTheDocument();

    const city = await screen.findByText(/Triel-sur-Seine/i);
    expect(city).toBeInTheDocument(); 
    
    const country = await screen.findByText(/FR/i);
    expect(country).toBeInTheDocument();

    const timezone = await screen.findByText(/\+1:00/);
    expect(timezone).toBeInTheDocument();

    const isp = await screen.findByText(/Orange S.A./i);
    expect(isp).toBeInTheDocument();

    const map = await screen.findByTestId("map")
    expect(map).toBeInTheDocument();
  });

  test('It should load ip infos', async () => {
    render(
      <App />
    );

    const inputEl = screen.getByRole("textbox");
    userEvent.type(inputEl, "107.20.175.192")

    const buttonEl = screen.getByRole("button")
    userEvent.click(buttonEl);

    const data = await screen.findByText("107.20.175.192");
    expect(data).toBeInTheDocument();
  })
 
  test('It should load domain infos', async () => {
    render(
      <App />
    );

    const inputEl = screen.getByRole("textbox");
    userEvent.type(inputEl, "reactjs.org");
    
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    const data = await screen.findByText("76.76.21.21");
    expect(data).toBeInTheDocument();
  });

  test('It shows error message if the request fails', async () => {
    server.use(
      rest.get("http://ipwhois.app/json/:ip", (req, res, ctx) => {
        return res(
          ctx.json({
            success: false,
            message: "invalid IP address"  
          }),
        );
      })
    )

    render(
      <App />
    );

    const inputEl = screen.getByRole("textbox");
    userEvent.type(inputEl, "107.20.175.");
    
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    const errorMessage = await screen.findByText("Invalid IP address");
    expect(errorMessage).toBeInTheDocument();
  });
});