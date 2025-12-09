import { Container, Badge, Link, List, ListItem, Image } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="AlgoVisualizer">
    <Container>
      <Title>
        AlgoVisualizer <Badge>2025</Badge>
      </Title>
      <P>
        AlgoVisualizer is a web-based, interactive platform designed to help
        users understand complex Data Structures and Algorithms (DSA) by
        visualizing their step-by-step execution.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://algo-visualizer-green.vercel.app/">
            https://algo-visualizer-green.vercel.app/{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/mahaveergurjar/AlgoVisualizer">
            https://github.com/mahaveergurjar/AlgoVisualizer{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, JavaScript, CSS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/algo.png" alt="AlgoVisualizer" />
    </Container>
  </Layout>
)

export default Work
