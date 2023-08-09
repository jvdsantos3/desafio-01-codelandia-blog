import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { AppContent } from './styles'
import { PostCard } from './components/PostCard'
import { useState } from 'react'

const data = [
  {
    id: 1,
    title: 'Agora é oficial: o Windows 11 está vindo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
    date: '02 de jul, 2021',
    favorite: false,
  },
  {
    id: 2,
    title: 'Tim Berners-Lee vai leiloar código-fonte da web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
    date: '02 de jul, 2021',
    favorite: false,
  },
  {
    id: 3,
    title: 'Tem Firefox novo no pedaço e você vai querer migrar',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.',
    date: '02 de jul, 2021',
    favorite: false,
  },
  {
    id: 4,
    title: 'John McAfee, criador do antivírus McAfee, morre',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
    date: '02 de jul, 2021',
    favorite: false,
  },
]

export function App() {
  const [posts, setPosts] = useState(data)
  const [isFilterd, setIsFiltered] = useState(false)

  const isEmpty = posts.length === 0

  function resetList() {
    setPosts(data)

    setIsFiltered(false)
  }

  function filterList(q: string) {
    const filteredList = data.filter((post) => post.title.includes(q))

    setPosts(filteredList)
    setIsFiltered(true)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header
        isEmpty={isEmpty}
        filterList={filterList}
        resetList={resetList}
        isFilterd={isFilterd}
      />
      <AppContent>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.description}
            date={post.date}
            favorite={post.favorite}
          />
        ))}
      </AppContent>
    </ThemeProvider>
  )
}
