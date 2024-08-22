import { useState } from "react"
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Image,
  useDisclosure,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react"
import Layout from "../../components/layouts/article"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleImageClick = src => {
    setSelectedImage(src)
    onOpen()
  }

  return (
    <Layout title="Simon Say Game">
      <Container>
        <Title>
          Simon Say Game <Badge>2023</Badge>
        </Title>
        <P>
          <Heading as="h4" fontSize={16} my={6}>
            <Center>Description</Center>
          </Heading>
          The Simon Game is a classic memory and pattern recognition game where
          players must repeat a sequence of colors and tones generated by the
          game. The game starts with a simple pattern and becomes progressively
          more challenging as the player successfully replicates each sequence.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android, iOS, Windows</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Objective-C, PHP, MongoDB</span>
          </ListItem>
        </List>
        <P>
          <Heading as="h4" fontSize={16} my={6}>
            <Center>Features</Center>
          </Heading>
          <ul>
            <li>Generate random sequences of colors and tones.</li>
            <li>User-friendly interface with interactive buttons.</li>
            <li>Progressive difficulty levels.</li>
            <li>Score tracking to measure the player's performance.</li>
            <li>Option to reset the game and start over.</li>
          </ul>
        </P>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Images</Center>
        </Heading>
        <Box mb={4}>
          <Image
            src="/images/works/simon1.png"
            alt="simon1"
            cursor="pointer"
            onClick={() => handleImageClick("/images/works/simon1.png")}
            width="600px"
            height="auto"
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
        <Box mb={4}>
          <Image
            src="/images/works/simon2.png"
            alt="simon2"
            cursor="pointer"
            onClick={() => handleImageClick("/images/works/simon2.png")}
            width="600px"
            height="auto"
            objectFit="cover"
            borderRadius="md"
          />
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="70vw" maxH="100vh" overflow="hidden">
            <ModalHeader>Image</ModalHeader>
            <ModalCloseButton />
            <ModalBody
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Selected Image"
                  maxW="100%"
                  maxH="80vh"
                  objectFit="contain"
                  borderRadius="0" // Ensure corners are squared
                />
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Layout>
  )
}

export default Work
