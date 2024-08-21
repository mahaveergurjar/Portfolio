import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="Wanderlust">
    <Container>
      <Title>
        Wanderlust <Badge>2023-</Badge>
      </Title>
      <P>
        Wandurlust Github Repository:WanderLust Developed a versile Website For
        listing of villa for tourists Backend using Node Js, Express and mongodb
        Frontend using EJS, CSS , HTML & bootstrap Also developed the website
        error handling in frontend and backend also using middlewares
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://wanderlust-bxzn.onrender.com/listings">
            https://wanderlust-bxzn.onrender.com/listings{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, EJS, bootstrap css, Express, Mongodb</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/wanderlust1.png" alt="wnaderlust" />
      <WorkImage src="/images/works/wanderlust2.png" alt="wanderlust" />
      <WorkImage src="/images/works/wanderlust3.png" alt="wanderlust" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
