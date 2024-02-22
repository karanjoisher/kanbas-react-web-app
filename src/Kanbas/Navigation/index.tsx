import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaTv, FaArrowCircleRight, FaInfoCircle } from "react-icons/fa";
function KanbasNavigation() {
    const links = [
        { label: "N", icon: null },
        { label: "Account", icon: <FaRegUserCircle className="fs-2 fa-user text-danger" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 text-danger" /> },
        { label: "Courses", icon: <FaBook className="fs-2 text-danger" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2 text-danger" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2 text-danger" /> },
        { label: "History", icon: <FaClock className="fs-2 text-danger" /> },
        { label: "Studio", icon: <FaTv className="fs-2 text-danger" /> },
        { label: "Commons", icon: <FaArrowCircleRight className="fs-2 text-danger" /> },
        { label: "Help", icon: <FaInfoCircle className="fs-2 text-danger" /> },
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : "wd-non-active"}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;