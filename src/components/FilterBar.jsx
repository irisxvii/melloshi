function FilterBar() {
    return(
        <div className="filter">
            <span className="filter-title">Recent Guests (30)</span>
            <div className="filter-bar">
                <button className="filter-dropdown">Select Multiple</button>

                <select className="filter-dropdown">
                    <option>Checked In</option>
                    <option>Not Checked In</option>
                </select>
                <select className="filter-dropdown">
                    <option>Approval Status</option>
                    <option>Approved</option>
                    <option>Pending</option>
                    <option>Rejected</option>
                </select>
                <select className="filter-dropdown">
                    <option>Registration Status</option>
                    <option>Registered</option>
                    <option>Not Registered</option>
                </select>

            </div>
        </div>
    )
}
export default FilterBar
