import React from "react";
import { PUBLIC_PATHS, PRIVATE_PATHS } from "../../app/Paths.app";
import { PublicLink, PrivateLink } from "../../utils/Utils";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <ul>
                    {
                        // PUBLIC LINKS
                        PUBLIC_PATHS.map((props, index) => (
                            <PublicLink 
                                key={index}
                                {...props}
                            />
                        ))
                    }

                    {
                        // PRIVATE LINKS
                        PRIVATE_PATHS.map((props, index) => (
                            <PrivateLink 
                                key={index}
                                {...props}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header;