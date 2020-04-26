import Link from 'next/link'
import styles from './posts.module.css'

export default function Posts({posts}) {
    const getRandomButtonStyle = () => {
        const styles = {
            0: '',
            1: 'is-primary',
            2: 'is-success',
            3: 'is-warning',
            4: 'is-error',
        }

        let i = Math.floor(Math.floor(Math.random() * 11)/2.1);
        return styles[i]
    }

    return (
        <div className="nes-container with-title">
            <p className="title">Knowledge</p>
            {posts.map(({id,date,title}) => (
            <div key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <a className={`nes-btn ${getRandomButtonStyle()} ${styles.button}`}>{title}</a>
                </Link>
            </div>
            ))}
        </div>
    )
}
