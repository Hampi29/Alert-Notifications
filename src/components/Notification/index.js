// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notif-container">
      <div className="icon-and-text">{children}</div>
      <GrFormClose className="icon" />
    </div>
  )
}

export default Notification
