function EventStats () {
    return(
        <div className="stats-overview">
            <div className="stats-header">
                <span>At a Glance</span>
                <span className="right-top">Last registered 1st May at 7:42 PM</span>
            </div>
            <div className="stats-summary">
                <span>80 unique guests</span>
                <span>59 shortlisted 11 unclaimed</span>
            </div>

            <div className="status-bar">
                <div className="violet"></div>
                <div className="green"></div>
                <div className="white"></div>
                <div className="blue"></div>
            </div>

            <div className="stat">
                <span className="vio">• (280) Special Ticket</span>
                <span className="gre">• (3) Demo Paid Ticket</span>
                <span className="whi">• (4) Hackathon</span>
                <span className="blu">• (50) New Ticket</span>
            </div>
        </div>
    )
}
export default EventStats
