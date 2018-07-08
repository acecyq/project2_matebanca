var React = require("react");
var Layout = require("../layout.jsx");

class UploadForm extends React.Component {
  render() {
    return (

      <Layout>
        <div className="container">
          <select name="level" form="practiceForm">
            <option value="">Select Level</option>
            <option value="s1">Secondary 1</option>
            <option value="s2">Secondary 2</option>
            <option value="s3">Secondary 3 E Math</option>
            <option value="s3a">Secondary 3 A Math</option>
            <option value="s4">Secondary 4 E Math</option>
            <option value="s4a">Secondary 4 A Math</option>
          </select>
        </div>
        <div className="container">
          <select name="topic" form="practiceForm">
            <option value="">Select topic</option>
          </select>
        </div>
        <div className="container">
          <select name="difficulty" form="practiceForm">
            <option value="">Select difficulty</option>
            <option value="b">Basic</option>
            <option value="i">Intermediate</option>
            <option value="a">Advanced</option>
          </select>
        </div>
        <div className="container">
        <form  
          id='practiceForm'
          method='GET'
        >
          <input type='submit' value='Get Question' />
        </form>
        </div>
        <div className="container">
          <img id="practiceform-image" />
        </div>
        <script src="/getList.js" />
      </Layout>
      
    );
  }
}

module.exports = UploadForm;