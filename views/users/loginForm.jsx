var React = require("react");
var Layout = require("../layout.jsx");

class LoginForm extends React.Component {
  render() {
    return (

      <Layout>
        <h4>User Login</h4>
        <form
          className="user-form"
          method="POST"
          action="/users/loggedin"
        >
          <p></p>
          <div className="form-input">
            Email:<input
              name="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="form-input">
            Password:<input
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <input name="submit" type="submit" value="Log in" />
        </form>
        <script src="/check.js"></script>
      </Layout>
      
    );
  }
}

module.exports = LoginForm;