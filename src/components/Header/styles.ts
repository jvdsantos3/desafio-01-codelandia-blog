import { css, styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) =>
    css`linear-gradient(
      90deg, 
      ${theme.colors['background-01']} 0%, 
      ${theme.colors['background-02']} 100%)`};

  @media (max-width: 1024px) {
    padding: 0 1.25rem;
  }
`

export const HeaderContent = styled.div`
  max-width: 56.25rem;
  margin: 0 auto;
  padding: 2.5625rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5625rem;

  @media (max-width: 425px) {
    gap: 2.5rem;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const SearchInput = styled.form`
  width: 100%;
  padding: 1.125rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${({ theme }) => theme.colors['dark-40']};

  button {
    border: 0;
    background: transparent;
    width: 1.875rem;
    height: 1.875rem;
    color: ${({ theme }) => theme.colors['dark-40']};
    cursor: pointer;

    @media (max-width: 425px) {
      width: 0.9375rem;
      height: 0.9375rem;
    }
  }

  svg {
    width: 1.875rem;
    height: 1.875rem;
    cursor: pointer;

    @media (max-width: 425px) {
      width: 0.9375rem;
      height: 0.9375rem;
    }
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors['dark-40']};
    font-size: ${({ theme }) => theme.fontSizes.m};

    @media (max-width: 425px) {
      font-size: ${({ theme }) => theme.fontSizes['mobile-m']};
    }

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors['dark-40']};
      opacity: 0.5;
    }
  }
`
