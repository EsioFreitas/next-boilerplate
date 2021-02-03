import { render, screen } from '@testing-library/react';

import Exemple from '.';

describe('<Exmple />', () => {
  it('should render component', () => {
    const { container } = render(<Exemple />);

    expect(container).toBeTruthy();
  });
});
