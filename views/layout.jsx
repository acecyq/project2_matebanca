var React = require("react");

class Layout extends React.Component {
  render() {
    return(

      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Monoton|Permanent+Marker" rel="stylesheet" />
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <header>
            <h1>Matebanca</h1>
            <div className="container-fluid">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/users/register">Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/users/login">Log In</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/users/logout">Log Out</a>
                </li>
              </ul>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="/qns/upload">Upload Question</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/qns/practice">Practice</a>
                </li>
              </ul>
            </div>
          </header>
          {this.props.children}
        </body>
      </html>

    );
  }
}

module.exports = Layout;