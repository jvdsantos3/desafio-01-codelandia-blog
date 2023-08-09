import { styled } from 'styled-components'
import { HeartStraight } from 'phosphor-react'

export const PostCardContainer = styled.div`
  padding: 1.25rem 1.5625rem;
  background: ${({ theme }) => theme.colors['dark-40']};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const PostCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors['dark-20']};
    font-size: 1rem;

    @media (max-width: 425px) {
      font-size: 0.875rem;
    }
  }
`

export const HeartButton = styled(HeartStraight)`
  width: 1.5625rem;
  height: 1.5625rem;
  color: ${({ theme }) => theme.colors['brand-color']};

  cursor: pointer;

  @media (max-width: 425px) {
    width: 1.1875rem;
    height: 1.1875rem;
  }
`

export const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h1 {
    @media (max-width: 425px) {
      line-height: 1.625rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors['dark-20']};
    font-size: 1.125rem;

    @media (max-width: 425px) {
      font-size: 0.875rem;
      line-height: 1.625rem;
    }
  }
`
