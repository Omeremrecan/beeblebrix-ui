import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: red;

  &:hover {
    background-color: green;
  }

  & > div {
    background-color: blue;
  }
`

