var React = require("react");
var Layout = require("../layout.jsx");

class Home extends React.Component {
  render() {
    return(

      <Layout>
        <div className="container">
          <h1>Something here</h1>
        </div>
      </Layout>

    );
  }
}

module.exports = Home;