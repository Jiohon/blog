import { Link } from 'gatsby'
import React from 'react'
import { PostSideImage, SideCard, SideSticky, SideTag, SideTags, SideTitle } from './style'

import { FixedObject } from 'gatsby-image'
import { PostBySlug_markdownRemark_frontmatter_thumbnail } from '../../templates/__generated__/PostBySlug'
import { slugify } from '../../utils/helpers'

/**
 * @description 侧边文章详细信息
 */

export const PostSidebar = ({
  tags = [],
  date,
  categories = [],
  thumbnail,
}: {
  date: string
  tags?: (string | null)[] | null
  categories?: (string | null)[] | null
  thumbnail?: PostBySlug_markdownRemark_frontmatter_thumbnail | null
}) => {
  const category = categories?.filter((category) => category !== 'Highlight')
  const { fixed } = { ...thumbnail?.childImageSharp }

  return (
    <aside>
      <SideSticky>
        {thumbnail && <PostSideImage fixed={fixed as FixedObject} />}
        {/* <SideCard>
        <h2>About me</h2>
        <img alt="Tania" className="sidebar-avatar" />
        <p>
          Hello and thanks for visiting! My name is <Link to="/me">Hush</Link>,
          and this is my website and digital garden. 🌱
        </p>
        <p>
          I'm a software developer who writes articles and tutorials about
          things that interest me. This site is and has always been free of ads,
          trackers, social media, affiliates, and sponsored posts.
        </p>
        <p>I hope you enjoy the post and have a nice day.</p>
      </SideCard> */}
        <SideCard>
          <SideTitle>日期</SideTitle>
          <ul>
            <li>发布于 {date}</li>
          </ul>

          {category && (
            <div>
              <SideTitle>类别</SideTitle>
              <ul>
                <li>
                  <Link to={`/categories/${slugify(category)}`}>{category}</Link>
                </li>
              </ul>
            </div>
          )}

          <SideTitle>标签</SideTitle>
          <SideTags>
            {tags &&
              tags.map((tag) => {
                return (
                  <SideTag key={tag} to={`/tags/${slugify(tag!)}`} activeClassName="active">
                    {tag}
                  </SideTag>
                )
              })}
          </SideTags>
        </SideCard>
      </SideSticky>
    </aside>
  )
}
