import { render, screen } from '@testing-library/react';
import TrackerInformations from '../../Header/TrackerInformations';


describe('Tracker Informations component', () => {

  const props = {
    ipAddress: "90.90.43.12",
    country: "FR",
    city: "Triel-sur-Seine",
    postalCode: "78510",
    latitude: 48.97818,
    longitude: 2.00743,
    timezone: "+02:00",
    isp: "Orange S.A.",
  };

  test('It should render tracker informations component', () => {
    render(
      <TrackerInformations infos={props} />
    );
  });

  test('It should display user\'s infos in first render', () => {
    render(
      <TrackerInformations infos={props} />
    );
    const pEl = screen.getByTestId("ip");
    expect(pEl).toBeInTheDocument();
    expect(pEl.textContent).toBe(props.ipAddress);
  });
});