import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from 'reactstrap';
// Import Logo
import Logo from "assets/img/logo.png"
// Import router
import routes from "../router";
// Import Component
import NavbarTop from "components/Navabar_Top";
let switchRoutes = routes.map((props, k) => <Route key={k} exact path={props.path} component={props.component}/>)
const Index = () => {
    return (
        <Container>
            <NavbarTop
              logo={Logo}
            />
            <Switch>
              {switchRoutes}
            </Switch>
        </Container>
    )
}

export default Index
