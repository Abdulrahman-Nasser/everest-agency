import { useEffect, useState } from "react";
import {
  Container,
  Fig,
  Grid,
  Heading,
  Section,
  Title,
  Service,
  FigIcon,
  IconWrapper,
} from "./ServicesStyle";
import ServiceIcon from "../../assets/images/service-icon.svg";
// import { serviceData } from "./serviceData";
// Import statements...

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://everest.everest-marketingagency.com/api/services")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received data:", data.data);
        setServiceData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setError(error.message);
      });
  }, []);

  return (
    <Section>
      <Container>
        <Heading>Services</Heading>
        {error && <p>Error: {error}</p>}
        <Grid>
          {serviceData.map(({ description, path, id }) => (
            <Service key={id} imgUrl={path} className="img">
              <Fig>
                <IconWrapper>
                  <FigIcon src={ServiceIcon} alt="service icon" />
                </IconWrapper>
                <Title>{description}</Title>
              </Fig>
            </Service>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;
