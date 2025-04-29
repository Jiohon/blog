import { Button } from "antd"
import { HeadFC, navigate } from "gatsby"

import SEO from "@/components/SEO"

import { useStyles } from "./style"

const FourOhFour = () => {
  const { styles } = useStyles()

  const toHome = () => {
    navigate("/" as never)
  }

  return (
    <>
      <div className={styles.container}>
        <div className="tip">404</div>
        <Button type="text" onClick={toHome}>
          Back to home page
        </Button>
      </div>
    </>
  )
}
export default FourOhFour

export const Head: HeadFC = (props) => {
  const { location } = props

  return (
    <>
      <SEO title="404" description="Page not found" pathName={location.pathname} />
    </>
  )
}
