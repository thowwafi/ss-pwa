import Nav from '../components/nav'
import Card from '../components/card'
import Header from '../components/header'

export default function Reminders() {
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