import ActionButtons from './components/ActionButtons'
import Header from './components/Header'
import EventStats from './components/EventStats'
import GuestList from './components/GuestList'
import FilterBar from './components/FilterBar'
import GuestTable from './components/GuestTable'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Header />
            <EventStats />
            <ActionButtons />
            <GuestList />
            <FilterBar />
            <GuestTable />
            <Footer />
        </>
    )
}
export default App