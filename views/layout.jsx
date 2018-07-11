var React = require("react");

class Layout extends React.Component {
  render() {
    return(

      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Monoton|Permanent+Marker" rel="stylesheet" />
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <header>
            <div className="container-fluid">
              <h1 className="display-1">Matebanca</h1> 
            </div>
            <div className="container-fluid">
              <nav>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/users/register">Register</a>
                  </li>
                  <li>
                    <a href="/users/login">Log In</a>
                  </li>
                  <li>
                    <a href="/users/logout">Log Out</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/qns/upload">Upload Question</a>
                  </li>
                  <li>
                    <a href="/qns/practice">Practice</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          {this.props.children}
        </body>
      </html>

    );
  }
}

module.exports = Layout;