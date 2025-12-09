import { Container, Badge, Link, List, ListItem, Image } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="Sweet Shop System">
    <Container>
      <Title>
        Sweet Shop System <Badge>2025</Badge>
      </Title>
      <P>
        A comprehensive management system for sweet shops, including inventory
        tracking and sales management.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sweet-shop-management-system-phi.vercel.app/login">
            https://sweet-shop-management-system-phi.vercel.app/login{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/mahaveergurjar/Sweet-Shop-Management-System">
            https://github.com/mahaveergurjar/Sweet-Shop-Management-System{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS, PHP/Node</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sweetshop.png" alt="Sweet Shop" />
    </Container>
  </Layout>
)

export default Work
