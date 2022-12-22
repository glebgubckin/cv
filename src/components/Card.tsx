import type { FC } from 'react'
import styles from './card.module.scss'

interface CardProps {
  title: string, 
  img: string,
  progress?: boolean
}

const Card: FC<CardProps> = ({title, img, progress}) => {
  return (
    <div className={styles.wrapper}>
      { progress && <span className={styles.progress}>Study Progress</span> }
      <img className={progress ? styles.inprogress : ''} src={img} alt={title} />
      <span className={progress ? `${styles.title} ${styles.inprogress}` : styles.title}>{title}</span>
    </div>
  )
}

export default Card