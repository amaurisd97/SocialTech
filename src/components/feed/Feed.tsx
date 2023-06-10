import PostsComponent from '../post/PostsComponent'
import Share from '../share/Share'
import './feed.css'

function Feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        <PostsComponent />
      </div>
    </div>
  )
}
export default Feed
