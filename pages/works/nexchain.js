import { Container, Badge, Link, List, ListItem, Image } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="NeXchain">
    <Container>
      <Title>
        NeXchain <Badge>2024</Badge>
      </Title>
      <P>
        Nexchain is a website for electronic supply chain management, offering
        visualization and tracking features.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/mahaveergurjar/NeXchain">
            https://github.com/mahaveergurjar/NeXchain{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Node.js</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/nexchain.png" alt="NeXchain" />
    </Container>
  </Layout>
)

export default Work
