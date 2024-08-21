import Layout from "../components/layouts/main"
import { AnimatePresence } from "framer-motion"
import Fonts from "../components/fonts"
import { ChakraProvider } from "@chakra-ui/react"

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
