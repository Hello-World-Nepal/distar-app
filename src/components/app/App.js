import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "../app/Routes.app";
import { PUBLIC_PATHS, PRIVATE_PATHS } from "../app/Paths.app";
import { getUserRole } from "../utils/Utils";

// IMPORT COMPONENTS
import Header from "../common/header/Header.common";
import Sidenav from "../common/sidenav/Sidenav.common"
// IMPORT ROUES
import NotFoundPage from "../notFoundPage/NotFoundPage";

// ALL ROUTES ARE HERE
const App = () => {
    return (
        <Switch>
            {
                // PUBLIC ROUTES
                PUBLIC_PATHS.length &&
                PUBLIC_PATHS.map(({ path, component, restricted, exact }, index) => (
                    <PublicRoute 
                        key={index}
                        path={path} 
                        component={component} 
                        restricted={restricted}
                        exact={exact}
                        userRole={getUserRole()}
                    />
                ))
            }
            {
                // PRIVATE ROUTES
                PRIVATE_PATHS.length &&
                PRIVATE_PATHS.map(({ path, component, exact }, index) => (
                    <PrivateRoute 
                        key={index}
                        path={path} 
                        component={component}
                        exact={exact}
                        userRole={getUserRole()}
                    />
                ))
            }

            {/* NOT FOUND PAGE */}
            <Route render={() => <NotFoundPage />} />
        </Switch>
    )
}

// SHARED COMPONENTS AND ROUTER
const AppWithRouter = () => {
    return(
        <React.Fragment>
            <Router>
                <Header />
                <Sidenav/>
                <App />
            </Router>
        </React.Fragment>
    )
}

export default AppWithRouter;