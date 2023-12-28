import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AuthorCarousel = ({ dataItem }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const slidesToShowAndScoll = () => {
    if (windowWidth <= 575) {
      return 1;
    } else if (windowWidth <= 992) {
      return 3;
    } else if (windowWidth <= 1200) {
      return 4;
    } else {
      return 5;
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShowAndScoll(),
    slidesToScroll: slidesToShowAndScoll(),
  };

  return (
    <>
      <seciton className="author-carousel">
        <Container>
          <Row>
            <Col>
              <p className="mb-0">Author</p>
              <span>Most author fav</span>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <span>
                <Link to="/author">View Another Author</Link>
              </span>
            </Col>
          </Row>
          <Row>
            <Slider {...settings}>
              {dataItem.slice(0, 10).map((item, index) => (
                <div
                  className="d-flex align-items-center justify-content-center flex-column author-info"
                  key={index}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    roundedCircle
                  />
                  <p className="mb-0">{item.author}</p>
                  <span>1 Published Books</span>
                </div>
              ))}
            </Slider>
          </Row>
        </Container>
      </seciton>
    </>
  );
};

export default AuthorCarousel;