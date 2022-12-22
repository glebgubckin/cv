import type { FC } from 'react'
import styles from './miniCard.module.scss'

interface CardProps {
  img: string,
  link: string
}

const MiniCard: FC<CardProps> = ({link, img}) => {
  return (
    <a href={link} target="_blank" className={styles.wrapper}>
      <img src={img} alt="link" />
    </a>
  )
}

export default MiniCard