import NextLink from "next/link"
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          align="center"
          mb={6}
        >
          Hello, I&apos;m Hien
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Minh Hien
            </Heading>
          </Box>
        </Box>
        <p>This is test page abcabcabcabcabc</p>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            boderstyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/hienhm.jpeg"
            alt="Profile Image"
          />
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hien HM is a Culi developer base in HCM City. Fix bugs day by day.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Binh Thuan, VietNam.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Worked at Bestarion.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>I graduated from Ho Chi Minh City University
            of Technology.
          </BioSection>
          <BioSection>
            <BioYear>2018 to present</BioYear>
            Works at Bestarion.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Play Games, Music, Photography</Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
