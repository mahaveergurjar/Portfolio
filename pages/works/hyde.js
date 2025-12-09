import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="HyDE">
    <Container>
      <Title>
        HyDE <Badge>2024</Badge>
      </Title>
      <P>
        HyDE (Hyprland Desktop Experience) is a portable and extensible re-work
        of Hyprdots. It provides an aesthetic, dynamic, and minimal dotfiles
        configuration for Arch Linux using the Hyprland compositor. It features
        multiple themes, easy installation scripts, and a highly customizable
        desktop environment.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/mahaveergurjar/HyDE">
            https://github.com/mahaveergurjar/HyDE <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux (Arch)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Shell Script, Hyprland, Wayland</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/hyde.png" alt="HyDE Project" />
    </Container>
  </Layout>
)

export default Work
