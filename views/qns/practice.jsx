var React = require("react");
var Layout = require("../layout.jsx");

class Practice extends React.Component {
  render() {
    return (

      <Layout>
        <h4>Practice</h4>
        <div className="form-group container">
          <select className="custom-select" name="level" form="practiceForm">
            <option value="">Select Level</option>
            <option value="s1">Secondary 1</option>
            <option value="s2">Secondary 2</option>
            <option value="s3">Secondary 3 E Math</option>
            <option value="s3a">Secondary 3 A Math</option>
            <option value="s4">Secondary 4 E Math</option>
            <option value="s4a">Secondary 4 A Math</option>
          </select>
        </div>
        <div className="form-group container">
          <select className="custom-select" name="topic" form="practiceForm">
            <option value="">Select topic</option>
          </select>
        </div>
        <div className="form-group container">
          <select className="custom-select" name="difficulty" form="practiceForm">
            <option value="">Select difficulty</option>
            <option value="b">Basic</option>
            <option value="i">Intermediate</option>
            <option value="a">Advanced</option>
          </select>
        </div>
        <div className="form-group container">
          <form  
            id='practiceForm'
            className='hide'
          >
            <button className="btn btn-outline-light btn-block" name="submit" type="submit">SEARCH</button>
          </form>
        </div>
        <div className="container">
          <p></p>
        </div>
        <h6 className="hide">Question</h6>
        <div className="photo">
          <img id="practiceform-image0" className="mx-auto d-block img-fluid" />
        </div>
        <h6 className="hide">Solution</h6>
        <div className="photo">
          <img id="practiceform-image1" className="mx-auto d-block img-fluid" />
        </div>
        <div className="container delete hide">
          <button id="delete" className="btn btn-outline-light btn-block" name="submit" type="submit">DELETE</button>
        </div>
        <script src="/practice.js" />
      </Layout>
      
    );
  }
}

module.exports = Practice;