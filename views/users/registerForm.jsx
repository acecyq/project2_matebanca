var React = require("react");
var Layout = require("../layout.jsx");

class RegisterForm extends React.Component {
  render() {
    return (

      <Layout>
        <h4>User Registration</h4>
        <form
          className="user-form"
          method="POST"
          action="/users/registered"
        >
          <p></p>
          <div className="form-input">
            Name:<input
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
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
          <input name="submit" type="submit" />
          <script src="/check.js"></script>
        </form>
      </Layout>
      
    );
  }
}

module.exports = RegisterForm;