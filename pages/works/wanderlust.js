import { useState } from "react"
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleImageClick = src => {
    setSelectedImage(src)
    onOpen()
  }

  return (
    <Layout title="Wanderlust">
      <Container>
        <Title>
          Wanderlust <Badge>2024-</Badge>
        </Title>
        <P>
          Wanderlust Github Repository: WanderLust Developed a versatile Website
          For listing of villas for tourists. Backend using Node.js, Express,
          and MongoDB, Frontend using EJS, CSS, HTML & Bootstrap. Also developed
          the website with error handling in frontend and backend using
          middlewares.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://wanderlust-bxzn.onrender.com/listings">
              https://wanderlust-bxzn.onrender.com/listings{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, EJS, Bootstrap CSS, Express, MongoDB</span>
          </ListItem>
        </List>

        <Box mb={4}>
          <Image
            src="/images/works/wanderlust1.png"
            alt="wanderlust"
            cursor="pointer"
            onClick={() => handleImageClick("/images/works/wanderlust1.png")}
            width="600px" // Adjust the width as needed
            height="auto" // Adjust height to maintain aspect ratio
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
        <Box mb={4}>
          <Image
            src="/images/works/wanderlust2.png"
            alt="wanderlust"
            cursor="pointer"
            onClick={() => handleImageClick("/images/works/wanderlust2.png")}
            width="600px" // Adjust the width as needed
            height="auto" // Adjust height to maintain aspect ratio
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
        <Box mb={4}>
          <Image
            src="/images/works/wanderlust3.png"
            alt="wanderlust"
            cursor="pointer"
            onClick={() => handleImageClick("/images/works/wanderlust3.png")}
            width="600px" // Adjust the width as needed
            height="auto" // Adjust height to maintain aspect ratio
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
                  borderRadius="10"
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
