import React from 'react'
import { render } from '@testing-library/react'

import { Button } from '../button'

describe('<Button />', () => {
  test('should render', () => {
    const { debug } = render(<Button />)
    debug()
  })
})
