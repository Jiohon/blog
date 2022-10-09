import React from 'react'
import { Link } from 'gatsby'

/**
 * @description 文章组件-item
 */

export const Post = ({ node, prefix }) => {
  let formattedDate

  if (node.date) {
    const dateArr = node.date.split(' ')
    dateArr.pop()

    dateArr[0] = dateArr[0].slice(0, 3)
    formattedDate = dateArr.join(' ').slice(0, -1)
  }

  return (
    <Link to={prefix ? `/${prefix}${node.slug}` : node.slug} key={node.id} className="post">
      <h5>{node.title}</h5>
      <time>{formattedDate}</time>
    </Link>
  )
}