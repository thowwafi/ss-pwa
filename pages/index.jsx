import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Card from '../components/card'
import Header from '../components/header'
import Adzan from '../components/adzan'
import Adzan2 from '../components/adzan2'
import Reminder from '../components/reminder'

export default function Home() {
  return (
    <>
      <Header/>
      <section className="container mx-auto px-4 mt-3">
        <h6>
          JADWAL SHOLAT
          <span className="float-right">></span>
        </h6>
        <Adzan2/>
      </section>
      <section className="container mx-auto px-4 mt-3">
      <h6>REMINDER</h6>
        <Reminder/>
      </section>
      <Nav/>
    </>
  )
}
