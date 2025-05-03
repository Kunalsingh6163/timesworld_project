/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Row, Col, Button, Offcanvas } from "react-bootstrap";
import Footer from "./Footer";
import ImageSlider from "../slider/Slider";
import ImageCard from "../slider/Card";
import WelcomeSection from "./Welcome";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import axios from "axios";

const image = ["/img1.svg", "/img2.svg", "/img3.svg", "/img4.svg"];

type Country = {
  name: string;
  region: string;
  flag: string;
};

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const regions = ["All", "Asia", "Europe"];

  const handleShow = () => setShowMenu(true);
  const handleClose = () => setShowMenu(false);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12); // Add 12 more
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v2/all?fields=name,region,flag"
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries =
    selectedRegion === "All"
      ? countries
      : countries.filter((country: { region: string; }) => country.region === selectedRegion);

  return (
    <Container fluid className="px-8 py-8">
      <div className="md:mr-4 md:ml-4">
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
                className={`fw-semibold mb-0 hover:text-[#3d3d3d] text-[16px] ${
                  selectedRegion === region ? "text-dark" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedRegion(region)}
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
                onClick={() => {
                  setSelectedRegion(region);
                  handleClose();
                }}
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
        {filteredCountries.slice(0, visibleCount).map((country: any, i) => (
          <Col xs={12} sm={6} key={i}>
            <div
              className="d-flex flex-row align-items-center shadow- p-2 border-2 border-[#3d3d3d] "
              style={{
                boxShadow: "4px 4px 4px rgba(178, 190, 181)", // Right and bottom
              }}
            >
              <div
                className="bg-secondary bg-opacity-25 d-flex justify-content-center align-items-center me-3"
                style={{ width: "48px", height: "48px" }}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: "127px", height: "50px", objectFit: "cover" }}
                />
              </div>
              <div>
                <p className="mb-1 font-semibold text-[24px]">{country.name}</p>
                <small className="text-muted">{country.region}</small>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Load More Button */}
      {visibleCount < filteredCountries.length && (
        <div className="text-center">
          <Button variant="dark" size="sm" onClick={handleLoadMore}>
            Load more
          </Button>
        </div>
      )}
      {/* Social and footer items */}
      <div className="text-center">
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
