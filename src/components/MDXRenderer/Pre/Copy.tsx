import { useState } from 'react'
import { Button, App } from 'antd'
import { useSpring, animated } from '@react-spring/web'
import { useDebounceFn, useHover } from 'ahooks'
import CopyIcon from '@/components/Icons/Copy'
import CopiedIcon from '@/components/Icons/Copied'
import { copyToClipboard } from '@/utils/func'
import { useStyles } from './style'

interface CopyProps {
  code: string
  highlightRef: React.RefObject<HTMLPreElement>
}

const Copy: React.FC<CopyProps> = ({ code, highlightRef }) => {
  const { styles } = useStyles()
  const { message } = App.useApp()
  const [copied, setCopied] = useState<boolean>(false)
  const isHover = useHover(highlightRef)

  const copyElementProps = useSpring({
    opacity: isHover ? 1 : 0,
    display: isHover ? 'flex' : 'none',
  })

  const { run } = useDebounceFn(
    () => {
      setCopied(false)
    },
    {
      wait: 2000,
    }
  )

  const copyClick = () => {
    copyToClipboard(code)
    setCopied(true)
    message.open({
      type: 'success',
      content: 'Copied 🎉',
      duration: 2,
    })
    run()
  }
  return (
    <animated.div style={{ ...copyElementProps, position: 'absolute', top: '0px', right: '0px' }}>
      <Button className={styles.copy} size="small" type="dashed" onClick={copyClick}>
        {copied ? <CopiedIcon /> : <CopyIcon />}
      </Button>
    </animated.div>
  )
}

export default Copy
