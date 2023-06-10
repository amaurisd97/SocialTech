import Online from './components/Online'
import './rightbar.css'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img src='gift.png' alt='' className='birthdayImage' />
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthay party
          </span>
        </div>
        <img src='ad.png' alt='' className='rightbarAd' />
        <h4 className='rightbarTitle'>Online friends</h4>
        <ul className='rightbarFriendList'>
          <Online />
        </ul>
      </div>
    </div>
  )
}
export default Rightbar
