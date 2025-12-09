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
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiLinux,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiCplusplus,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiElectron,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { SimpleGrid, Icon, Text } from "@chakra-ui/react"

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
          Hello, I&apos;m a full-stack developer based in India!
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
            About Me
          </Heading>
          <Paragraph>
            Mahaveer is a full-stack developer with a passion for building
            digital services and solutions. He excels in launching products,
            from planning and designing to solving real-life problems with code.
            He specializes in the{" "}
            <Box as="span" fontWeight="bold">
              MERN stack
            </Box>{" "}
            and is currently exploring{" "}
            <Box as="span" fontWeight="bold">
              Next.js
            </Box>
            ,{" "}
            <Box as="span" fontWeight="bold">
              Electron
            </Box>
            , and{" "}
            <Box as="span" fontWeight="bold">
              Data Structures & Algorithms
            </Box>
            . Mahaveer was also a contributor to{" "}
            <Box as="span" fontWeight="bold">
              GSSOC&apos;24 (GirlScript Summer of Code)
            </Box>
            . When not coding, he enjoys spending time with his camera.
            Currently, he is focused on his studies and personal projects while
            pursuing a B.Tech at the National Institute of Technology,
            Jalandhar.
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
            Skills
          </Heading>
          <SimpleGrid columns={[3, 4, 5]} gap={6} justifyContent="center">
            {/* JavaScript */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiJavascript} w="full" h="full" color="#F7DF1E" />
              </Box>
              <Text fontSize="xs">JavaScript</Text>
            </Box>

            {/* TypeScript */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiTypescript} w="full" h="full" color="#3178C6" />
              </Box>
              <Text fontSize="xs">TypeScript</Text>
            </Box>

            {/* C++ */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiCplusplus} w="full" h="full" color="#00599C" />
              </Box>
              <Text fontSize="xs">C++</Text>
            </Box>

            {/* Java */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={FaJava} w="full" h="full" color="#5382A1" />
              </Box>
              <Text fontSize="xs">Java</Text>
            </Box>

            {/* Python */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiPython} w="full" h="full" color="#3776AB" />
              </Box>
              <Text fontSize="xs">Python</Text>
            </Box>

            {/* PHP */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiPhp} w="full" h="full" color="#777BB4" />
              </Box>
              <Text fontSize="xs">PHP</Text>
            </Box>

            {/* HTML5 */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiHtml5} w="full" h="full" color="#E34F26" />
              </Box>
              <Text fontSize="xs">HTML5</Text>
            </Box>

            {/* CSS3 */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiCss3} w="full" h="full" color="#1572B6" />
              </Box>
              <Text fontSize="xs">CSS3</Text>
            </Box>

            {/* Tailwind */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiTailwindcss} w="full" h="full" color="#38B2AC" />
              </Box>
              <Text fontSize="xs">Tailwind</Text>
            </Box>

            {/* React */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiReact} w="full" h="full" color="#61DAFB" />
              </Box>
              <Text fontSize="xs">React</Text>
            </Box>

            {/* Next.js */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiNextdotjs} w="full" h="full" />
              </Box>
              <Text fontSize="xs">Next.js</Text>
            </Box>

            {/* Node.js */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiNodedotjs} w="full" h="full" color="#339933" />
              </Box>
              <Text fontSize="xs">Node.js</Text>
            </Box>

            {/* Express */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiExpress} w="full" h="full" />
              </Box>
              <Text fontSize="xs">Express</Text>
            </Box>

            {/* Electron */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiElectron} w="full" h="full" color="#47848F" />
              </Box>
              <Text fontSize="xs">Electron</Text>
            </Box>

            {/* MongoDB */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiMongodb} w="full" h="full" color="#47A248" />
              </Box>
              <Text fontSize="xs">MongoDB</Text>
            </Box>

            {/* MySQL */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiMysql} w="full" h="full" color="#4479A1" />
              </Box>
              <Text fontSize="xs">MySQL</Text>
            </Box>

            {/* Git */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiGit} w="full" h="full" color="#F05032" />
              </Box>
              <Text fontSize="xs">Git</Text>
            </Box>

            {/* Linux */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiLinux} w="full" h="full" />
              </Box>
              <Text fontSize="xs">Linux</Text>
            </Box>

            {/* Postman */}
            <Box align="center">
              <Box
                w={16}
                h={16}
                borderRadius="xl"
                bg={useColorModeValue("white", "whiteAlpha.200")}
                p={3}
                mb={2}
                boxShadow="lg"
              >
                <Icon as={SiPostman} w="full" h="full" color="#FF6C37" />
              </Box>
              <Text fontSize="xs">Postman</Text>
            </Box>
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Pushkar (Rajasthan), India.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Completed the 10th grade at Future Foundation School, Pisagan.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed the 12th grade at The Govt. Model School, Pisagan.
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Pursuing a B.Tech at the National Institute of Technology,
            Jalandhar.
          </BioSection>
        </Section>

        <Section delay={0.4}>
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
                  @mahaveergurjar
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
                  LinkedIn
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
                  Twitter / X
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
                  Instagram
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
