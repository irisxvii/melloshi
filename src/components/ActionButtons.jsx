import dropped from "../assets/dropped.png"
import blacklisted from "../assets/black.png"
import third from "../assets/third.png"
import guest from "../assets/guest.png"

function ActionButtons() {
    return(
    <div className="action-buttons">
        <button>Dropped Users <img src={dropped} alt="dropped" /> </button>
        <button>Blacklisted Users <img src={blacklisted} alt="blacklisted" /> </button>
        <button>Export Data<img src={third} alt="export data" /> </button>
        <button>Add Guest<img src={guest} alt="add guest" /> </button>
    </div>
    )
}
export default ActionButtons
