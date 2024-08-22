import NextLink from "next/link"
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  Image,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layouts/article"
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5"

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m a full-stack developer!
        </Box>

        <Box display={{ base: "block", md: "flex" }} alignItems="center">
          <Box flexGrow={1} textAlign={{ base: "center", md: "left" }}>
            <Heading as="h2" variant="page-title">
              Mahaveer Gurjar
            </Heading>
            <p>( Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/me.jpeg"
                alt="Profile image"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Us
          </Heading>
          <Paragraph>
            Mahaveer is a full-stack developer with a passion for building
            digital services and solutions. He excels in launching products,
            from planning and designing to solving real-life problems with code.
            When not coding, he enjoys spending time with his camera. Currently,
            he is focused on his studies and personal projects while pursuing a
            B.Tech at the National Institute of Technology, Jalandhar.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Pushkar (Rajasthan), India.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Completed the 10th grade at Future Foundation School, Pisagan.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed the 12th grade at The Govt. Model School, Pisagan.
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Pursuing a B.Tech at the National Institute of Technology,
            Jalandhar.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Art, Music, Linux, Machine Learning</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List spacing={3}>
            <ListItem>
              <Link href="https://github.com/mahaveergurjar" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @mahaveer
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/mahaveer-gurjar-893919174/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @mahaveer
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://x.com/Mahaveer2030" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @mahaveer
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/mahaveer_g7/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @mahaveer
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
