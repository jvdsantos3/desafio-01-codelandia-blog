import { useState } from 'react'
import { TitleText } from '../Typography'

import {
  HeartButton,
  PostCardContainer,
  PostCardContent,
  PostCardHeader,
} from './styles'

interface PostCardProps {
  date: string
  title: string
  description: string
  favorite: boolean
}

export function PostCard({
  title,
  description,
  date,
  favorite,
}: PostCardProps) {
  const [isFavorite, setisFavorite] = useState(favorite)

  function handleFavoritePost() {
    setisFavorite(!isFavorite)
  }

  return (
    <PostCardContainer>
      <PostCardHeader>
        <p>{date}</p>

        {isFavorite ? (
          <HeartButton weight="fill" onClick={handleFavoritePost} />
        ) : (
          <HeartButton onClick={handleFavoritePost} />
        )}
      </PostCardHeader>

      <PostCardContent>
        <TitleText variant="dark" size="xl">
          {title}
        </TitleText>

        <p>{description}</p>
      </PostCardContent>
    </PostCardContainer>
  )
}
