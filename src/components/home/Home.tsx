import { Container, Row, Col, Button, Card, Offcanvas } from "react-bootstrap";
import Footer from "./Footer";
import ImageSlider from "../slider/Slider";
import ImageCard from "../slider/Card";
import WelcomeSection from "./Welcome";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const image = ["/img1.svg", "/img2.svg", "/img3.svg", "/img4.svg"];

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const regions = ["All", "Asia", "Europe"];

  const handleShow = () => setShowMenu(true);
  const handleClose = () => setShowMenu(false);

  return (
    <Container fluid className="px-8 py-8">
      <div>
        <Row className="align-items-start justify-content-between mb-3">
          <Col xs="auto">
            <h2 className="text-dark fw-bold" style={{ fontSize: "24px" }}>
              Countries
            </h2>
          </Col>

          {/* Desktop Menu */}
          <Col
            xs="auto"
            className="d-none d-md-flex gap-3 text-secondary align-items-center"
          >
            {regions.map((region) => (
              <p
                key={region}
                className="fw-semibold mb-0 hover:text-[#3d3d3d] text-[16px]"
                style={{ cursor: "pointer" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                {region}
              </p>
            ))}
          </Col>

          {/* Mobile Menu Button */}
          <Col xs="auto" className="d-flex d-md-none">
            <Button variant="light" onClick={handleShow}>
              <FiMenu size={24} />
            </Button>
          </Col>
        </Row>

        {/* Offcanvas Menubar for Mobile */}
        <Offcanvas show={showMenu} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Select Region</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {regions.map((region) => (
              <p
                key={region}
                className="fw-semibold mb-3 text-dark"
                style={{ cursor: "pointer", fontSize: "18px" }}
                onClick={handleClose}
              >
                {region}
              </p>
            ))}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div className=" p-4">
        <WelcomeSection />
      </div>
      {/* Top Cards */}
      <div className="flex flex-col-reverse md:flex-row items-start justify-between w-full px-4 gap-4">
        {/* Left Side - Image Slider */}
        <div className="w-full md:w-8/12 border-2 border-[#3d3d3d] text-secondary h-full">
          <ImageSlider images={image} />
        </div>
        {/* Right Side - Image Card */}
        <div className="w-full md:w-4/12 border-2 border-[#3d3d3d] text-secondary  h-full">
          <ImageCard image="/imge.png" className="" />
        </div>
      </div>

      {/* Grid of Country Cards */}
      <Row className="g-3 mb-4 p-4">
        {Array.from({ length: 11 }, (_, i) => (
          <Col xs={12} sm={6} key={i}>
            <Card className="d-flex flex-row align-items-center shadow-sm p-2">
              <div
                className="bg-secondary bg-opacity-25 d-flex justify-content-center align-items-center  me-3"
                style={{ width: "48px", height: "48px" }}
              >
                🖼️
              </div>
              <div>
                <h6 className="mb-1">Afghanistan</h6>
                <small className="text-muted">Asia</small>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Load More Button */}
      <div className="text-center">
        <Button variant="dark" size="sm">
          Load more
        </Button>
      </div>
      {/* Social and footer items */}
      <div className="text-center">
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
