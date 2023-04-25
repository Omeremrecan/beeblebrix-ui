import React from 'react'
import { ButtonProps } from './Button.types'
import { ButtonContainer } from './Button.styles'

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}
