import { useState } from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'
import { IPost } from '../../../models/post.model'
import useUser from '../../../hooks/useUser'

function Post({ post }: { post: IPost }) {
  const [likes, setLikes] = useState(post.like)
  const [itsLiked, setItsLiked] = useState(false)

  const user = useUser(post)

  const handleLike = () => {
    setLikes((like) => {
      return !itsLiked ? like + 1 : like - 1
    })
    setItsLiked(!itsLiked)
  }

  return (
    <div key={user.id} className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img src={user.profilePicture} alt='' className='postProfileImage' />
            <span className='postUserName'>{user.username}</span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          {post.desc ? <span className='postText'>{post.desc}</span> : <span className='postText'></span>}
          <img src={post.photo} alt='' className='postImage' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img onClick={handleLike} className='likeIcon' src='like.png' alt='' />
            <img onClick={handleLike} className='likeIcon' src='heart.png' alt='' />
            <span className='postLikeCounter'>{likes > 0 ? `${likes} people like it` : ''}</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment > 0 ? `${post.comment} comments` : ''}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post
