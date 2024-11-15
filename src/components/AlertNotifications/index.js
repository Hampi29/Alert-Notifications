// Write your code here

import {MdInfo, MdWarning} from 'react-icons/md'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderInfoNotif = () => {
    return (
      <Notification>
        <MdInfo className="icons info" />
        <div>
          <h1 className="info">Info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
      </Notification>
    )
  }

  const renderSuccessNotif = () => {
    return (
      <Notification>
        <AiFillCheckCircle className="icons success" />
        <div>
          <h1 className="success">Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
      </Notification>
    )
  }
  const renderErrorNotif = () => {
    return (
      <Notification>
        <RiErrorWarningFill className="icons error" />
        <div>
          <h1 className="error">Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </Notification>
    )
  }
  const renderWarningNotif = () => {
    return (
      <Notification>
        <MdWarning className="icons warning" />
        <div>
          <h1 className="warning">Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
      </Notification>
    )
  }

  return (
    <div className="alert-container">
      <h1>Alert Notifications</h1>
      {renderSuccessNotif()}
      {renderErrorNotif()}
      {renderWarningNotif()}
      {renderInfoNotif()}
    </div>
  )
}
export default AlertNotifications
