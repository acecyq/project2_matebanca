var React = require("react");
var Layout = require("../layout.jsx");

class Home extends React.Component {
  render() {
    return(

      <Layout>
        <div className="container">
          <h4>Welcome</h4>
        </div>
      </Layout>

    );
  }
}

module.exports = Home;