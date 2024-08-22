import Layout from "../components/layouts/main"
import { AnimatePresence } from "framer-motion"
import Fonts from "../components/fonts"
import Chakra from "../components/chakra"
import { Analytics } from "@vercel/analytics/react"

const Website = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
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
        <Analytics />
      </Layout>
    </Chakra>
  )
}

export default Website
