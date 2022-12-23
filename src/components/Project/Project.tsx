import type { FC } from 'react'
import styles from './project.module.scss'

export interface ProjectProps {
  title: string,
  stack: string[],
  status: string,
  link: string,
  implemented: number,
  img?: string
}

const Project: FC<ProjectProps> = ({title, stack, status, link, implemented, img = ''}) => {
  return (
    <a href={link} target="_blank" className={styles.wrapper}>
      <img className={styles.img} src={img} alt={title} />
      <p className={styles.title}>{title}</p>
      <p className={status === 'Completed' ? `${styles.status} ${styles.status__completed}` : styles.status}>{status}</p>
      <div className={styles.stack}>
        {
          stack.map((tech, index) => <span key={index} className={styles.tech}>{tech}</span>)
        }
      </div>
    </a>
  )
}

export default Project