import React from 'react';
import { render } from '@testing-library/react';

import OButton from './index';

test('O-button', () => {
  const wrapper = render(<OButton>OButton</OButton>);
  const element = wrapper.queryByText('OButton');
  expect(element).toBeTruthy();
});
