import left from "../assets/left.png"
import right from "../assets/right.png"
import hoomans from "../assets/hoomans.png"
import socials from "../assets/socials.png"

function Footer() {
    return(
        <footer className="footer">
            <div className="footer-top">
                <span>69 Records</span>
                <span>Per Page: 30</span>
                <span>1 of 3
                    <img src={left} alt="left" className="arrow" />
                    <img src={right} alt="left" className="arrow" />
                </span>
            </div>

            <div className="footer-bottom">
                <img src={hoomans} alt="hoomans" className="hoomans"/>
                <img src={socials} alt="socials" className="socials"/>
            </div>
        </footer>
    )
}
export default Footer
