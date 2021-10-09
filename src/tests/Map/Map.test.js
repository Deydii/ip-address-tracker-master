import { render } from '@testing-library/react';
import TrackerMap from '../../components/Map';

describe('Map componenent', () => {
  test('It shoud render map component', () =>  {
    render(
      <TrackerMap 
        latitude={48.8982}
        longitude={2.1301}
      />
    );
  });
});