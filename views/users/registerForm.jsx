var React = require("react");
var Layout = require("../layout.jsx");

class RegisterForm extends React.Component {
  render() {
    return (

      <Layout>
        <div className="container-fluid">
          <h4>User Registration</h4>
          <form
            className="user-form"
            method="POST"
            action="/users/registered"
          >
            <p></p>
            <div className="form-group">
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
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
            <button className="btn btn-outline-light btn-block" name="submit" type="submit">SUBMIT</button>
            <script src="/check.js"></script>
          </form>
        </div>
      </Layout>
      
    );
  }
}

module.exports = RegisterForm;