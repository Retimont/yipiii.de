var Header = React.createClass({
  render: function() {
    return (
      <div>
        <div id="header_fixed"></div>
        <div className="container">
          <div className="for_con">
            <div className="brand">
              <a href="/"><img src="../img/yipiii_logo.png" alt="logo"/></a>&nbsp;&nbsp;&nbsp;&nbsp;Play&nbsp;&&nbsp;Win!
            </div>
            <div className="toggle_nav"><button className="cmn-toggle-switch cmn-toggle-switch__htx"><span></span></button></div>
            <nav className="navigation">
              <div className="nav-item "><i className="fa fa-check"></i>&nbsp;live gewinnen</div>
              <div className="nav-item"><i className="fa fa-check"></i>&nbsp;sofort einlösen</div>
              <div className="nav-item"><i className="fa fa-check"></i>&nbsp;exklusive Gutscheine</div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <Header />,
  document.getElementById('header')
);