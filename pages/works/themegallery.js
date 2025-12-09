import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
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
import { useState } from "react"
import { Title, Meta } from "../../components/work"
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
    <Layout title="Theme Gallery">
      <Container>
        <Title>
          Theme Gallery <Badge>2024</Badge>
        </Title>
        <P>
          A collection of custom HyDE themes for Linux, featuring vibrant color
          palettes and clean designs. Includes Greenify, Monokai, and Red-Stone
          themes.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/mahaveergurjar/Theme-Gallery">
              https://github.com/mahaveergurjar/Theme-Gallery{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Linux (Hyprland/HyDE)</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>CSS, Shell Script, Hyprconf</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <center>Greenify Theme</center>
        </Heading>
        <P>
          A nature-inspired theme dominated by deep greens and earthy tones.
          Perfect for a focused, calming workflow.
        </P>
        <Image
          src="/images/works/greenify.png"
          alt="Greenify Theme"
          borderRadius="lg"
          w="full"
          mb={4}
          cursor="pointer"
          loading="lazy"
          onClick={() => handleImageClick("/images/works/greenify.png")}
        />

        <Heading as="h4" fontSize={16} my={6}>
          <center>Monokai Theme</center>
        </Heading>
        <P>
          Based on the classic Monokai color scheme popular among developers.
          High contrast, vibrant colors on a dark background.
        </P>
        <Image
          src="/images/works/monokai.png"
          alt="Monokai Theme"
          borderRadius="lg"
          w="full"
          mb={4}
          cursor="pointer"
          loading="lazy"
          onClick={() => handleImageClick("/images/works/monokai.png")}
        />

        <Heading as="h4" fontSize={16} my={6}>
          <center>Red Stone Theme</center>
        </Heading>
        <P>A bold, warm theme with red accents and stone-gray backgrounds.</P>
        <Image
          src="/images/works/redstone.png"
          alt="Red Stone Theme"
          borderRadius="lg"
          w="full"
          mb={4}
          cursor="pointer"
          loading="lazy"
          onClick={() => handleImageClick("/images/works/redstone.png")}
        />

        <Modal isOpen={isOpen} onClose={onClose} isCentered allowPinchZoom>
          <ModalOverlay />
          <ModalContent
            maxW="90vw"
            maxH="90vh"
            bg="transparent"
            boxShadow="none"
          >
            <ModalHeader color="white" bg="rgba(0,0,0,0.5)">
              Theme Preview
            </ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody p={0} display="flex" justifyContent="center">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Selected Theme"
                  maxH="85vh"
                  objectFit="contain"
                  borderRadius="md"
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
