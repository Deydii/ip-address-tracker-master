import { render, screen } from '@testing-library/react';
import TrackerInformations from '../../Header/TrackerInformations';

describe('Tracker Informations component', () => {
  test('It should render tracker informations component', () => {
    const infosObject = {};
    render(
      <TrackerInformations infos={infosObject} />
    );
  });
});