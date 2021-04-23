import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Card from '../components/card'
import Header from '../components/header'

export default function Home() {
  return (
    <>
      <Header/>
      <section className="container mx-auto px-4 mt-3">
        <Card/>
      </section>
      <Nav/>
    </>
  )
}
