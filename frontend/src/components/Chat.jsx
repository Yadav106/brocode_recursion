import React, { Component } from 'react'

export default class Chat extends Component {
  componentDidMount(){
    
    return (function(d, m){
        var kommunicateSettings = 
            {"appId":"3f78e3cf593c2167f0111d7f2c709bba9","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
