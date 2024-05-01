import { Section, Container, Heading, Content, Desc, Name } from "./Review";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useEffect, useState } from "react";

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://everest.everest-marketingagency.com/api/review")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Received data:", data.data);
        setReviews(data.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  return (
    <Section>
      <Heading>اراء العملاء</Heading>
      <Container className="slider-container">
        <Slider {...settings}>
          {reviews &&
            reviews.map(({ name, description, id }) => (
              <Content key={id}>
                <Desc>{description}</Desc>
                <Name>{name}</Name>
              </Content>
            ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default Reviews;

// eslint-disable-next-line react/prop-types, no-unused-vars
function SampleNextArrow({ className, style, onClick }) {
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <GrNext className="arrows" />
    </div>
  );
}

const SamplePrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <GrPrevious className="arrows" />
    </div>
  );
};
