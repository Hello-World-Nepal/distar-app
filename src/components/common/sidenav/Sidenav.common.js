import React from "react";
import { NavLink } from "react-router-dom";
import { PRIVATE_PATHS } from "../../app/Paths.app";
import { PrivateLink, isLoggedIn } from "../../utils/Utils";

// IMPORT ICONS
import { 
  MdDashboard,
  MdTimeline,
  MdPermMedia,
  MdSettings,
  MdOndemandVideo
} from "react-icons/md";
import { IoMdConstruct } from "react-icons/io";
import { 
  FaBook, 
  FaMedal, 
  FaRegNewspaper, 
  FaMapMarkedAlt,
  FaHeart,
  FaHandsHelping
} from "react-icons/fa";
import { FiActivity } from "react-icons/fi";

const SELECT_ICONS = {
  "Dashboard": <MdDashboard />,
  "Our Work": <IoMdConstruct />,
  "Stories": <FaBook />,
  "Achievements": <FaMedal />,
  "Activities": <FiActivity />,
  "Pushpa's Videos": <MdOndemandVideo />,
  "Pushpa's News": <FaRegNewspaper />,
  "NewsLetter": <FaRegNewspaper />,
  "Map": <FaMapMarkedAlt />,
  "Wishlist": <FaHeart />,
  "History Timeline": <MdTimeline />,
  "Press and Media": <MdPermMedia />,
  "Volunteer": <FaHandsHelping />,
  "Settings": <MdSettings />
};

const Sidenav = () => {
    return (
      isLoggedIn() ? 
        <div className="sidenav-container">
            <div className="sidenav">
              <ul className="sidenav-nav">
                {
                  PRIVATE_PATHS.map((props, index) => (
                    <PrivateLink 
                      key={index}
                      {...props}
                    >
                      <li className="sidenav-nav-item">
                        <NavLink 
                          to={props.path} 
                          activeClassName="sidenav-active"
                        >
                          <span className="icon">
                            {
                              SELECT_ICONS[props.name]
                            }
                          </span>
                          { props.name }
                        </NavLink>
                      </li>
                    </PrivateLink>
                  ))
                }
              </ul>
            </div>
        </div>
      : null
    )
}

export default Sidenav;