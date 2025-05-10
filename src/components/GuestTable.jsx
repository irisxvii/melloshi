import edit from "../assets/edit.png"
import check from "../assets/check.png"
import dollar from "../assets/dollar.png"
import ticket from "../assets/ticket.png"

const guests = [
    { 
        name: "Ananthu M P",
        username: "chn21ec019",
        time: "5 days ago"
    },
    { 
        name: "Aro Ann",
        username: "aroann23",
        time: "5 days ago"
    },
    { 
        name: "Aswin Asok",
        username: "aswinasokofficial",
        time: "5 days ago"
    },
    { 
        name: "Ananthu M P",
        username: "chn21ec019",
        time: "5 days ago"
    },
    { 
        name: "Aro Ann",
        username: "aroann23",
        time: "5 days ago"
    },
    { 
        name: "Aswin Asok",
        username: "aswinasokofficial",
        time: "5 days ago"
    },
    { 
        name: "Ananthu M P",
        username: "chn21ec019",
        time: "5 days ago"
    },
    { 
        name: "Aro Ann",
        username: "aroann23",
        time: "5 days ago"
    },
    { 
        name: "Aswin Asok",
        username: "aswinasokofficial",
        time: "5 days ago"
    }
];

function GuestTable() {
    return(
        <div className="guest-table">
            {guests.map((guest,index)=>(
                <div key={index} className="guest-card">
                    <div className="guest-info">
                        <div className="name">{guest.name}</div>
                        <div className="username">{guest.username}</div>
            </div>

            <div className="guest-icons">
                <div className="time">{guest.time}</div>
                <div className="icons">
                    <img src={edit} alt="edit" />
                    <img src={check} alt="check" />
                    <img src={dollar} alt="dollar" />
                    <img src={ticket} alt="ticket" />
                </div>
            </div>
                </div>
            ))}
        </div>
    )
}
export default GuestTable
