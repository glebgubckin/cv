import type { FC } from 'react'
import styles from './card.module.scss'

interface CardProps {
  title: string, 
  img: string,
}

const Card: FC<CardProps> = ({title, img}) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt={title} />
      <span className={styles.title}>{title}</span>
    </div>
  )
}

export default Card