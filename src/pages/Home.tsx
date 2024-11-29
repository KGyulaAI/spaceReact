import { Link } from "react-router-dom"
import { ROUTES } from "../App"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <section className={styles.home}>
      <div>
        <h1>We are the<br/><span>SpaceAdventures</span></h1>
        <p>A SpaceAdventures egy innovatív cég, amely lehetőséget kínál az űrélményre vágyó kalandoroknak, hogy testközelből tapasztalják meg a világűr csodáit.</p>
        <Link to={ROUTES.adventuresPage.path}>Irány az űr!</Link>
      </div>
    </section>
  )
}

export default Home