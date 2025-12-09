import { Container, Badge, Link, List, ListItem, Image } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="Chatbot">
    <Container>
      <Title>
        Chatbot <Badge>2024</Badge>
      </Title>
      <P>
        Chat application allowing users to send messages and receive responses
        from a language model API. Supports code formatting, explanations, and
        link formatting.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/mahaveergurjar/Chatbot">
            https://github.com/mahaveergurjar/Chatbot{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Node.js, API</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/chatbot.png" alt="Chatbot" />
    </Container>
  </Layout>
)

export default Work
