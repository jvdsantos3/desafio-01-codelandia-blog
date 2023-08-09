import { styled } from 'styled-components'

export const AppContent = styled.main`
  max-width: 56.25rem;
  margin: 6.25rem auto;

  display: flex;
  flex-direction: column;
  gap: 3.125rem;

  @media (max-width: 425px) {
    margin: 3.125rem auto;
    gap: 1.5625rem;
  }

  @media (max-width: 1024px) {
    padding: 0 1.25rem;
  }
`
