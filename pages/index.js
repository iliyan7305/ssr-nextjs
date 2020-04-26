import PageLayout from '../components/layouts/pagelayout'
import { getSortedPostsData } from '../lib/posts'
import Posts from '../components/Posts'
import utilStyles from '../utils/styles/utilStyles.module.css'

export default function Home({allPostsData}) {
  return (
    <PageLayout>
      <div className="container">
        <main>
          <section className={utilStyles.section}>
            <h2 id="about">
              <a href="#about">#</a>
              About
            </h2>

            <div className="nes-container is-dark with-title">
              <p className="title">Me</p>
              <p>A developer wannabe who likes extreme sports like snowboarding, mountain biking and javascript.</p>
            </div>

            <div className="nes-container is-dark with-title">
              <p className="title">This project</p>
              <p>A place for me to store my knowledge and practice my react skills</p>
            </div>
          </section>
          <section className={utilStyles.section}>
            <Posts posts={allPostsData}/>
          </section>
        </main>
      </div>
    </PageLayout>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
      props: {
       allPostsData
      }
  }
}