import { Users } from '../mocks/dummyData'
import { IPost } from '../models/post.model'
import { useState, useEffect } from 'react'

function useUser(post: IPost) {
  const initState = { id: 0, profilePicture: '', username: '' }

  const [user, setUser] = useState(initState)

  useEffect(() => {
    Users.find((user) => {
      if (user.id === post.userId) setUser(user)
    })
  }, [post])

  return user
}
export default useUser
