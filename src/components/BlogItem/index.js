import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogData} = this.props
    const {author, id, avatarUrl, imageUrl, title, topic} = blogData
    return (
      <Link className="remove" to={`/blogs/${id}`}>
        <li className="blog-list-item-container">
          <div className="flex-1">
            <img src={imageUrl} className="topic-url" alt="..." />
          </div>
          <div className="flex-2">
            <p className="blog-topic">{topic}</p>
            <h1 className="blog-title">{title}</h1>
            <div className="author-div">
              <img className="avatar" src={avatarUrl} alt="..." />
              <p>{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
