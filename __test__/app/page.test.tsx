/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/app/page'

describe('Home Page', () => {
  // it('Is the Navbar Visible on the Home Page?', () => {
  //   render(<Home />)
  //   expect(screen.getByText('HOME')).toBeInTheDocument()
  // })

  it('Can you see the Button on the Home Page?', () => {
    render(<Home />)
    expect(
      screen.getByRole('button', { name: 'Visit the Github' }),
    ).toBeInTheDocument()
  })
})
