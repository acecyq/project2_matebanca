var React = require("react");

class Layout extends React.Component {
  render() {
    return(

      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div className="container">
            <header>
              <h1>Matebanca</h1> 
            </header>
          </div>
          <div className="container">
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
            </nav>
          </div>
          {this.props.children}
        </body>
      </html>

    );
  }
}

module.exports = Layout;