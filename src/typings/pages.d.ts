/// <reference types="@/utils/prismjsLanguages" />

type TableOfContentsItem = {
  url: string
  title: string
}

type Frontmatter = {
  title: string
  description: string
  date: string
  lastUpdated: string
  icon: Language
  slug: string
  template: string
  tags: string[]
  published: boolean
}

type TimeToRead = {
  minutes: number
  time: number
  words: number
  text: string
}

type fields = {
  slug: string
  timeToRead: TimeToRead
}

type tableOfContents = {
  items: TableOfContentsItem[]
}

type Internal = {
  contentFilePath: string
}

type GraphqlNode = {
  body: string
  frontmatter: Frontmatter
  fields: fields
  tableOfContents: tableOfContents
  internal: Internal
}

interface CategoryData {
  category: string
}

interface TagData {
  tag: string
}

interface SimplifiedQueryData extends Frontmatter {
  id: string
}

type YearListData = Record<string, Frontmatter[]>

type MdxQuery = GraphqlNode

type AllMdxQuery = {
  nodes: GraphqlNode[]
  totalCount: number
  fields: {
    slug
  }
}

type MdxNodesQuery<T = "mdx", V = MdxQuery> = Record<T extends null ? "mdx" : T, V>

type allMdxNodesQuery<T = "allMdx", V = AllMdxQuery> = Record<T extends null ? "allMdx" : T, V>

interface ImageItem {
  id: number
  idx: number
  name: string
  url: string
  thumbnail: string
}

interface HeadNodeProps<DT = unknown, PT = unknown, CT = unknown, ST = unknown> {
  data: DT
  pathname: {
    location: string
  }
  pageContext: PT
  params: CT
  serverData: ST
}

interface GroupItem {
  name: string
  totalCount: number
}

type Group = Record<"group", GroupItem[]>
