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
    <Layout title="SDDM Themes">
      <Container>
        <Title>
          SDDM Themes <Badge>2025</Badge>
        </Title>
        <P>
          Custom SDDM login themes inspired by Nothing OS, Pixel UI, and
          Noctalia. Designed for a clean, modern, and aesthetic Linux desktop
          experience.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/mahaveergurjar/sddm">
              https://github.com/mahaveergurjar/sddm{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Linux (SDDM)</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>QML, Qt, CSS, Shell Script</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <center>Noctalia Theme</center>
        </Heading>
        <P>
          A dark, elegant theme featuring a clean layout with a focus on
          night-mode aesthetics. Designed to be easy on the eyes while providing
          essential information at a glance.
        </P>
        <Image
          src="/images/works/sddm.png"
          alt="Noctalia Theme"
          borderRadius="lg"
          w="full"
          mb={4}
          cursor="pointer"
          onClick={() => handleImageClick("/images/works/sddm.png")}
        />

        <Heading as="h4" fontSize={16} my={6}>
          <center>Nothing OS Theme</center>
        </Heading>
        <P>
          Inspired by the unique design language of Nothing OS. This theme
          features dot-matrix fonts, monochrome visuals, and a distinctive raw,
          industrial look.
        </P>
        <Image
          src="/images/works/sddm_nothing.png"
          alt="Nothing OS Theme"
          borderRadius="lg"
          w="full"
          mb={4}
          cursor="pointer"
          onClick={() => handleImageClick("/images/works/sddm_nothing.png")}
        />

        <Heading as="h4" fontSize={16} my={6}>
          <center>Pixel UI Theme</center>
        </Heading>
        <P>
          A colorful and familiar interface inspired by Google Pixel devices. It
          brings the Material You design language to your Linux login screen
          with rounded corners and adaptive colors.
        </P>
        <Image
          src="/images/works/sddm_pixel.png"
          alt="Pixel UI Theme"
          borderRadius="lg"
          w="full"
          mb={4}
          cursor="pointer"
          onClick={() => handleImageClick("/images/works/sddm_pixel.png")}
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
