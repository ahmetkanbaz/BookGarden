import PropTypes from 'prop-types'
import { SingleBlogWrapper } from './SingleBlogStyle'

const SingleBlog = ({blog}) => {
  const {image, src} = blog
  return (
    <div className="col-md-6 d-flex justify-content-center">
      <SingleBlogWrapper className='d-flex justify-content-center'>
        <img src={image} alt="Blog 1" className="img-fluid w-75 rounded" onClick={() => window.open(src, '_blank')} />
      </SingleBlogWrapper>
    </div>
  )
}

SingleBlog.propTypes = {
  blog: PropTypes.object
}

export default SingleBlog