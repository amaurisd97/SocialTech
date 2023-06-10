import { Posts } from '../../mocks/dummyData'
import { IPost } from '../../models/post.model'
import Post from './components/Post'

function PostsComponent() {
  return (
    <>
      {Posts.map((post: IPost) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}
export default PostsComponent
