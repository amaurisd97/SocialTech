import './sidebarfriends.css'
import { Users } from '../../../mocks/dummyData'

function SidebarFriends() {
  return (
    <>
      {Users.map((user) => (
        <li key={user.id} className='sidebarFriend'>
          <img src={user.profilePicture} alt='friend1' className='sidebarFriendImage' />
          <span className='sidebarFriendName'>{user.username}</span>
        </li>
      ))}
    </>
  )
}
export default SidebarFriends
