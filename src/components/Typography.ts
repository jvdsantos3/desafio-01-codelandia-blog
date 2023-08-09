import { styled } from 'styled-components'

interface TitleTextProps {
  size?: 'l' | 'xl'
  variant: 'white' | 'dark'
  weight?: string | number
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, variant }) =>
    variant === 'dark' ? theme.colors['dark-10'] : theme.colors['dark-40']};
  font-family: ${({ theme }) => theme.fonts.principal};
  font-size: ${({ size, theme }) => theme.fontSizes[`title-${size ?? 'l'}`]};
  font-weight: ${({ weight }) => weight ?? 400};

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes[`mobile-l`]};
  }
`
