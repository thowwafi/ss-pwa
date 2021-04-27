import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Card from '../components/card'
import Header from '../components/header'
import Adzan from '../components/adzan'
import Adzan2 from '../components/adzan2'
import Reminder from '../components/reminder'
import jadwal from "../scripts/jadwal_20214.json"
import moment from "moment"

export default function Home({schedule}) {
  return (
    <>
      <Header/>
      <section className="container mx-auto px-4 mt-3">
        <h6>
          JADWAL SHOLAT
          <a href="#" className="float-right">a</a>
        </h6>
        <Adzan2 schedule={schedule}/>
      </section>
      <section className="container mx-auto px-4 mt-3">
      <h6>REMINDER</h6>
        <Reminder/>
      </section>
      <Nav/>
    </>
  )
}

export const getStaticProps = async () => {
  const date_today = moment().format("YYYY-MM-DD")
  const today_schedule = jadwal.filter(function (el) {
    if(el.tanggal === date_today) return el;
  });
  return {
    props: {
      schedule: today_schedule[0]
    },
  };
};
