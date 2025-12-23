import { useEventListener } from "ahooks"
import { App, message } from "antd"

import SiteStoreProvider from "@/context/SiteStoreProvider"
import SiteThemeProvider from "@/context/SiteThemeProvider"

import { Footer } from "./footer"
import { Header } from "./header"
import { useStyles } from "./style"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { styles } = useStyles()
  const [messageApi, contextHolder] = message.useMessage()

  useEventListener("copy", () => {
    messageApi.open({
      type: "success",
      content: "Copied 🎉",
      duration: 2,
    })
  })

  return (
    <SiteStoreProvider>
      <SiteThemeProvider>
        <App>
          {contextHolder}
          <div className={styles.layout}>
            <Header />
            <main className={styles.content}>{children}</main>
            <Footer />
          </div>
        </App>
      </SiteThemeProvider>
    </SiteStoreProvider>
  )
}

export default Layout
