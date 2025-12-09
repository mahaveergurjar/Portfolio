import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="Hyprlock Dots">
    <Container>
      <Title>
        Hyprlock Dots <Badge>2024</Badge>
      </Title>
      <P>
        Simple stylish Hyprlock configuration with script-based music, weather,
        and battery widgets for a customized Linux lock screen experience.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/mahaveergurjar/Hyprlock-Dots">
            https://github.com/mahaveergurjar/Hyprlock-Dots{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux (Hyprland)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Hyprlock, Shell Script</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <center>Layout 1</center>
      </Heading>
      <WorkImage src="/images/works/hyprlock_layout1.png" alt="Layout 1" />

      <Heading as="h4" fontSize={16} my={6}>
        <center>Layout 2</center>
      </Heading>
      <WorkImage src="/images/works/hyprlock_layout2.png" alt="Layout 2" />

      <Heading as="h4" fontSize={16} my={6}>
        <center>Layout 3</center>
      </Heading>
      <WorkImage src="/images/works/hyprlock_layout3.png" alt="Layout 3" />

      <Heading as="h4" fontSize={16} my={6}>
        <center>Layout 4</center>
      </Heading>
      <WorkImage src="/images/works/hyprlock_layout4.png" alt="Layout 4" />

      <Heading as="h4" fontSize={16} my={6}>
        <center>Layout 5</center>
      </Heading>
      <WorkImage src="/images/works/hyprlock_layout5.png" alt="Layout 5" />

      <Heading as="h4" fontSize={16} my={6}>
        <center>Layout 6</center>
      </Heading>
      <WorkImage src="/images/works/hyprlock_layout6.png" alt="Layout 6" />

      <Heading as="h4" fontSize={16} my={6}>
        <center>Layout 7</center>
      </Heading>
      <WorkImage src="/images/works/hyprlock_layout7.png" alt="Layout 7" />

      <Heading as="h4" fontSize={16} my={6}>
        <center>Layout 8</center>
      </Heading>
      <WorkImage src="/images/works/hyprlock_layout2.png" alt="Layout 8" />
    </Container>
  </Layout>
)

export default Work
