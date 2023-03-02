import React from 'react'
import { ButtonProps } from './Button.types'
import { ButtonContainer } from './Button.styles'

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <ButtonContainer className="button" onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}
