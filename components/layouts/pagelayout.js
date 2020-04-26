import styles from './pagelayout.module.css'

export default function PageLayout({children}) {
    return (
        <div className={styles.component}>
            {children}
        </div>
    )
}
