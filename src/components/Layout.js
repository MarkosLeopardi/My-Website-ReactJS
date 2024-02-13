import React from "react";
import NavMenu  from './NavMenu/NavMenu';
import Header  from './Header/Header';
import Footer from './Footer/Footer';
import { Container } from "reactstrap";

function Layout (props) {

        return(
            <div>
                <Header />
                <NavMenu />
                <Container tag='main'>
                    {props.children}
                </Container>
                <Footer />
            </div>
        );
    }

 export default Layout;