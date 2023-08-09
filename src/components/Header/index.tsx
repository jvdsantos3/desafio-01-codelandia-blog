import { MagnifyingGlass, X } from 'phosphor-react'
import { HeaderContainer, HeaderContent, SearchInput } from './styles'
import { useState, FormEvent } from 'react'
import { TitleText } from '../Typography'

interface HeaderProps {
  isEmpty: boolean
  isFilterd: boolean
  filterList: (e: string) => void
  resetList: () => void
}

export function Header({
  isEmpty,
  isFilterd,
  filterList,
  resetList,
}: HeaderProps) {
  const [search, setSearch] = useState('')

  function handleSearchPost(e: FormEvent) {
    e.preventDefault()

    if (search.length > 0) {
      filterList(search)
    }
  }

  function handleResetList() {
    resetList()

    setSearch('')
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <TitleText variant="white" size="l">
            Codelândia
          </TitleText>
          <TitleText variant="white" size="l">
            blog
          </TitleText>
        </div>

        <SearchInput onSubmit={handleSearchPost}>
          <button>
            <MagnifyingGlass />
          </button>
          <input
            type="text"
            placeholder="Pesquisar no blog"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {(search.length > 0 || isEmpty || isFilterd) && (
            <X onClick={handleResetList} />
          )}
        </SearchInput>
      </HeaderContent>
    </HeaderContainer>
  )
}
