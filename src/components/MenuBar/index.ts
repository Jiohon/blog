import Link from "./Link"
import InternalMenuBar from "./MenuBar"
import Tag from "./Tag"
import Text from "./Text"
import Title from "./Title"

type InternalMenuBarType = typeof InternalMenuBar

export interface MenuBarInterface extends InternalMenuBarType {
  Title: typeof Title
  Link: typeof Link
  Text: typeof Text
  Tag: typeof Tag
}

const MenuBar = InternalMenuBar as MenuBarInterface

MenuBar.Title = Title
MenuBar.Link = Link
MenuBar.Text = Text
MenuBar.Tag = Tag

export default MenuBar
