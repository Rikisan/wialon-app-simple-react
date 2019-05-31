import React from 'react'


class Peticiones extends React.Component{
  shouldComponentUpdate() {
    // component will never update
    return false;
  }

  componentWillReceiveProps(nextProps) {
  }

    componentDidMount(){
      // though never re-rendered, the component will receive new props here

      /// Fetch varable from 'GET' request
      function getHtmlVar(name) {
        if (!name)
          return null;
        var pairs = decodeURIComponent(document.location.search.substr(1)).split("&");
        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split("=");
          if (pair[0] === name) {
            pair.splice(0, 1);
            return pair.join("=");
          }
        }
        return null;
      }

      /// Login result
      function login(code) {
        console.log( "login: " + code );
        if (code) {
          alert( "Login error" );
          return;
        }
        alert( "Hello, " + window.wialon.core.Session.getInstance().getCurrUser().getName() + "!" );
      }

      /// Init SDK
      function initSdk() {
        console.log( "initialize sdk" );
        var url = getHtmlVar("baseUrl") || getHtmlVar("hostUrl") || "https://hst-api.wialon.com";
        var user = getHtmlVar("user") || "";
        window.wialon.core.Session.getInstance().initSession(url);
        window.wialon.core.Session.getInstance().duplicate(getHtmlVar("sid"), user, true, login);
      }
    initSdk();
  }

    render() {
    return <div/>;
    }
}

export default Peticiones