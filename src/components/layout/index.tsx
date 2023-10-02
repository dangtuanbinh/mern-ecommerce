import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Layout() {
  return (
    <Col>
      <Row className="px-0">
        <Header />
      </Row>
      <Row className="px-0">
        <main>
          <Outlet />
        </main>
      </Row>
      <Row className="px-0">
        <Footer />
      </Row>
    </Col>
  );
}

export default Layout;
