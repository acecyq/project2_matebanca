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
          <div className="form-group">
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <input className="btn btn-outline-light btn-block" name="submit" type="submit" value="Log in" />
        </form>
        <script src="/check.js"></script>
      </Layout>
      
    );
  }
}

module.exports = LoginForm;