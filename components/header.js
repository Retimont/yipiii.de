var Header = React.createClass({
  getInitialState: function() {
    return {
      isScrolled: false
    };
  },
  componentDidMount: function() {
    $(window).on('scroll', this.handleHeaderScroll);
  },
  componentWillUnmount: function() {
    $(window).off('scroll', this.handleHeaderScroll);
  },
  handleHeaderScroll: function() {
    if($(window).width() > 991) {
      if ($(window).scrollTop() > 50) {
        this.setState({isScrolled: true});
      } else {
        this.setState({isScrolled: false});
      }
    }
    else{
      if ($(window).scrollTop() > 10) {
        this.setState({isScrolled: true});
      }
      else {
        this.setState({isScrolled: false});
      }
    }
  },
  render: function() {
    var isScrolled = this.state.isScrolled;
    var nav = $('header .container');
    var for_con = $('header .for_con');

    return (
      <div>
        <div id="header_fixed"></div>
        <div className={isScrolled ? "container small-head" : "container"}>
          <div className={isScrolled ? "for_con container" : "for_con"}>
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