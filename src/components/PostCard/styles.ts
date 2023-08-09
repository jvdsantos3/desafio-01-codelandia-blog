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
  }
`

export const HeartButton = styled(HeartStraight)`
  width: 1.5625rem;
  height: 1.5625rem;
  color: ${({ theme }) => theme.colors['brand-color']};

  cursor: pointer;
`

export const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  p {
    color: ${({ theme }) => theme.colors['dark-20']};
    font-size: 1.125rem;
  }
`
