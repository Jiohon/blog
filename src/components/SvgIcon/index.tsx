import type { Language } from "@/utils/prismjsLanguages"

type SVGIconProps = {
  id: Language
  width: string
  height: string
  style?: React.CSSProperties
}

// https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/abap.svg
/**
 * Using a SVG sprite for performance reasons
 */
const SVGIcon = ({ id, ...props }: SVGIconProps) => {
  return (
    <svg aria-hidden focusable="false" {...props}>
      <use href={`/svg/languages.svg#${id}`} />
    </svg>
  )
}
export default SVGIcon
