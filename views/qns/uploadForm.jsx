var React = require("react");
var Layout = require("../layout.jsx");

class UploadForm extends React.Component {
  render() {
    return (

      <Layout>
        <div className="container">
          <select name="level" form="uploadForm">
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
          <select name="topic" form="uploadForm">
            <option value="">Select topic</option>
          </select>
        </div>
        <div className="container">
          <select name="difficulty" form="uploadForm">
            <option value="">Select difficulty</option>
            <option value="b">Basic</option>
            <option value="i">Intermediate</option>
            <option value="a">Advanced</option>
          </select>
        </div>
        <div className="container">
          <form  
        	  id='uploadForm'
  	      action='/qns/uploaded' 
  	      method='POST'
  	      encType="multipart/form-data"
          className="hide"
  	      >
            <input type="file" name="question" accept="image/*" />
            <input type='submit' value='Upload' />
  	      </form>
          <img id="uploadform-image" />
        </div>
        <script src="/getList.js" />
      </Layout>
      
    );
  }
}

module.exports = UploadForm;