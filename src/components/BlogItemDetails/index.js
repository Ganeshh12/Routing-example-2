import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogg: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetailsById()
  }

  getBlogDetailsById = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    this.setState({blogg: data, isLoading: false})
  }

  render() {
    const {blogg, isLoading} = this.state
    const {author, content, avatar_url, title, image_url} = blogg
    return (
      <>
        {isLoading ? (
          <div data-testid="loader" className="loader-class">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-tiem-details-container">
            <h1 className="blog-titlee">{title}</h1>
            <div className="author-divv">
              <img className="avatar" src={avatar_url} alt="..." />
              <p>{author}</p>
            </div>
            <img className="blogitem-image" src={image_url} alt={title} />
            <p className="content">{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
