var React = require("react");
var Layout = require("../layout.jsx");

class Home extends React.Component {
  render() {
    return(

      <Layout>
        <div className="container">
          <h4>Welcome {this.props.name}</h4>
          <p className="intro">We are a database of Mathematics questions which serves to help tutors and parents to feed their students/children all the practice they will need to ace their examinations.</p>
        <p className="intro">Tip: If at first you don't succeed, Dust yourself off and try again</p>
        </div>
      </Layout>

    );
  }
}

module.exports = Home;