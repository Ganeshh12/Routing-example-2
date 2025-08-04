import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(ele => ({
      author: ele.author,
      avatarUrl: ele.avatar_url,
      id: ele.id,
      imageUrl: ele.image_url,
      title: ele.title,
      topic: ele.topic,
    }))
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader" className="loader-class">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="ull">
            {blogsData.map(ele => (
              <BlogItem key={ele.id} blogData={ele} />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default BlogList
