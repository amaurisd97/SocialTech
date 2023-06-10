import { Users } from '../../../mocks/dummyData'
import './online.css'

function Online() {
  return (
    <>
      {Users.map((user) => (
        <li key={user.id} className='rightBarFriend'>
          <div className='rightbarProfileImageContainer'>
            <img src={user.profilePicture} alt='' className='rightbarProfileImage' />
            <span className='rightbarOnline'></span>
          </div>
          <span className='rightbarUserName'>{user.username}</span>
        </li>
      ))}
    </>
  )
}
export default Online
