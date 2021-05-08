import styles from '../styles/Home.module.css';
import Nav from '../components/nav';
import Card from '../components/card';
import Header from '../components/header';
import Adzan from '../components/adzan';
import Adzan2 from '../components/adzan2';
import Reminder from '../components/reminder';
import jadwal from '../scripts/jadwal_20215.json';
import moment from 'moment';
import Link from 'next/link';
import Sidebar from '../components/sidebar';
import React, { useState } from 'react';
import { useAuth } from '../lib/auth';

export default function Home({ schedule }) {
  return (
    <>
      <Header />
      <section className="container mx-auto px-4 mt-3">
        <h6>
          JADWAL SHOLAT
          <Link as={'/reminders/'} href={'/reminders/'}>
            <a className="float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </h6>
        <Adzan2 schedule={schedule} />
      </section>
      <section className="container mx-auto px-4 mt-3">
        <h6>REMINDER</h6>
        <Reminder />
      </section>
      <Nav />
    </>
  );
}

export const getStaticProps = async () => {
  const date_today = moment().format('YYYY-MM-DD');
  const today_schedule = jadwal.filter(function (el) {
    if (el.tanggal === date_today) return el;
  });
  return {
    props: {
      schedule: today_schedule[0]
    }
  };
};
