var React = require("react");
var Layout = require("../layout.jsx");

class UploadForm extends React.Component {
  render() {

    return (

      <Layout>
        <h4>Upload Question and Solution</h4>
        <div className="form-group container">
          <p></p>
          <select className="custom-select" name="level" form="uploadForm" required>
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
          <select className="custom-select" name="topic" form="uploadForm" required>
            <option value="">Select topic</option>
          </select>
        </div>
        <div className="form-group container">
          <select className="custom-select" name="difficulty" form="uploadForm" required>
            <option value="">Select difficulty</option>
            <option value="b">Basic</option>
            <option value="i">Intermediate</option>
            <option value="a">Advanced</option>
          </select>
        </div>
        <div className="form-group container">
          <form  
        	  id='uploadForm'
    	      action='/qns/uploaded' 
    	      method='POST'
    	      encType="multipart/form-data"
            className="hide"
  	      >
            <div className="photo">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Question</span>
                </div>
                <div className="custom-file">
                  <input className="custom-file-input" id="question" type="file" name="question" accept="image/*" />
                  <label className="custom-file-label" htmlFor="question">Choose image file</label>
                </div>
              </div>
              <div className="container">
                <img id="questionImg" className="mx-auto d-block img-fluid upload-img"></img>
              </div>
            </div>
            <div className="photo">
<<<<<<< HEAD
              <img id="questionImg" className="mx-auto d-block img-fluid upload-img"></img>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Solution</span>
=======
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Solution</span>
                </div>
                <div className="custom-file">
                  <input className="custom-file-input" id="solution" type="file" name="question" accept="image/*" />
                  <label className="custom-file-label" htmlFor="solution">Choose image file</label>
                </div>
>>>>>>> master
              </div>
              <div className="container">
                <img id="solutionImg" className="mx-auto d-block img-fluid upload-img"></img>
              </div>
            </div>
<<<<<<< HEAD
            <div className="photo">
              <img id="solutionImg" className="mx-auto d-block img-fluid upload-img"></img>
            </div>
=======
>>>>>>> master
            <button className="btn btn-outline-light btn-block" name="submit" type="submit">UPLOAD</button>
  	      </form>
        </div>
        <script src="/uploadForm.js" />
      </Layout>
      
    );
  }
}

module.exports = UploadForm;