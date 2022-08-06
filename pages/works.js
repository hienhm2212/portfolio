import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
// import Layout from '../components/layouts/article'
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"

import thumbVetApp from "../public/images/works/vetapp.jpg"
import thumbHotelBooking from "../public/images/works/hotelbooking.png"
import Layout from "../components/layouts/article"

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem id="vetapp" title="VetApp" thumbnail={thumbVetApp}>
              A website for Veterinary Clinic
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem
              id="hotel"
              title="HotelBooking"
              thumbnail={thumbHotelBooking}
            >
              A website for Booking Hotel
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
