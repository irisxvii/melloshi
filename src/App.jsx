import ActionButtons from './components/ActionButtons'
import Header from './components/Header'
import EventStats from './components/EventStats'
import GuestList from './components/GuestList'
import FilterBar from './components/FilterBar'
import GuestTable from './components/GuestTable'

function App() {
    return (
        <>
            <Header />
            <EventStats />
            <ActionButtons />
            <GuestList />
            <FilterBar />
            <GuestTable />
        </>
    )
}
export default App