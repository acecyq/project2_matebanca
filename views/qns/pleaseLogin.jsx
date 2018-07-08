var React = require("react");
var Layout = require("../layout.jsx");

class PleaseLogin extends React.Component {
  render() {
    return(

      <Layout>
        <div className="container">
          <h1>Members Only Area: Please log in to continue</h1>
        </div>
      </Layout>

    );
  }
}

module.exports = PleaseLogin;