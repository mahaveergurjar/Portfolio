import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"

import thumbWanderlust from "../public/images/works/wanderlust1.png"
import thumbSimon from "../public/images/works/simon1.png"

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="wanderlust"
            title="Wanderlust"
            thumbnail={thumbWanderlust}
          >
            WanderLust Developed a versile Website For listing of villa for
            tourists
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="simon" title="Simon" thumbnail={thumbSimon}>
            Simon Says Game
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from "../components/chakra"
