
const ErrorNotifications = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className='eMsg'>
      {message}
    </div>
  )
}

export default ErrorNotifications