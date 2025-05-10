import search from "../assets/search.png"

function GuestList() {
    return(
        <div className="guest-list">
                <span className="guest-list-title">Guests List</span>
                <div className="search-bar">
                    <img src={search} alt="search icon" className="search-icon"/>
                    <input type="text" placeholder="Search" className="guest-search" />
                </div>
        </div>
    )
}
export default GuestList
