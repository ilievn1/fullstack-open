import PropTypes from 'prop-types'

const LoginForm = (props) => (
  <div>
    <h1>log in to application</h1>
    <form onSubmit={props.handleLogin}>
      <div>
        username
        <input
          id='usernameInputField'
          type="text"
          value={props.username}
          name="Username"
          onChange={props.handleUsernameChange}
        />
      </div>
      <div>
        password
        <input
          id='passwordInputField'
          type="password"
          value={props.password}
          name="Password"
          onChange={props.handlePasswordChange}
        />
      </div>
      <button id='login-btn' type="submit">login</button>
    </form>
  </div>
)

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm
