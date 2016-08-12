//REQUIRE React
var React = require('react');
//CREATE a React class
module.exports = React.createClass({
  _handleClick: function() {
    alert();
  },
  render: function() {
//Refactor Component into jsx
//Nest Children in root node <div>
  return(
      <html>
      <head>
      <title>{this.props.title}</title>
      <link rel='stylesheet' href='/style.css'/>
      </head>
      <body>
          <h1>{this.props.title}</h1>
          <p>Isn't server-side rendering remarkable?</p>
          <button onClick={this._handleClick}>Click Me</button>
      <script dangerouslySetInnerHTML={{
            __html: 'window.PROPS=' + JSON.stringify(this.props)
      }}/>
      <script src='/bundle.js' />
      </body>
      </html>
  );
//React.createElement('h1', null, 'Hello World!');
  }
});
