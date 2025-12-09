import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"

import thumbWanderlust from "../public/images/works/wanderlust1.png"
import thumbSimon from "../public/images/works/simon1.png"
import thumbSddm from "../public/images/works/sddm.png"
import thumbAlgo from "../public/images/works/algo.png"
import thumbChatbot from "../public/images/works/chatbot.png"
import thumbHyprlock from "../public/images/works/hyprlock_layout5.png"
import thumbNexchain from "../public/images/works/nexchain.png"
import thumbSweetShop from "../public/images/works/sweetshop.png"
import thumbThemeGallery from "../public/images/works/greenify.png"
import thumbHyDe from "../public/images/works/hyde.png"

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="sweetshop"
            title="Sweet Shop System"
            thumbnail={thumbSweetShop}
          >
            Comprehensive management system for sweet shops and inventory.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="algovisualizer"
            title="AlgoVisualizer"
            thumbnail={thumbAlgo}
          >
            Web-based platform to visualize complex Data Structures and
            Algorithms.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="sddm" title="SDDM Themes" thumbnail={thumbSddm}>
            Custom SDDM login themes inspired by Nothing OS, Pixel UI, and
            Noctalia.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="chatbot" title="Chatbot" thumbnail={thumbChatbot}>
            AI-powered chat application using modern LLM APIs.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="nexchain"
            title="NeXchain"
            thumbnail={thumbNexchain}
          >
            Electronic supply chain management and visualization platform.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="wanderlust"
            title="Wanderlust"
            thumbnail={thumbWanderlust}
          >
            A versatile platform for listing and booking luxury villas.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="hyde" title="HyDE" thumbnail={thumbHyDe}>
            Portable and extensible re-work of Hyprdots.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="themegallery"
            title="Theme Gallery"
            thumbnail={thumbThemeGallery}
          >
            A collection of vibrant HyDE themes for Linux.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="hyprlock"
            title="Hyprlock Dots"
            thumbnail={thumbHyprlock}
          >
            Hyprlock Configurations
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="simon" title="Simon" thumbnail={thumbSimon}>
            A classic Simon Says memory game built with interactive web
            technologies.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from "../components/chakra"
