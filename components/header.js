var Header = React.createClass({
  getInitialState: function() {
    return {
      isScrolled: false,
      isRoot: true
    };
  },
  componentDidMount: function() {
    this.handleImageLogo();
    this.handleHeaderScroll();
    $(window).on('scroll', this.handleHeaderScroll);
  },
  componentWillUnmount: function() {
    $(window).off('scroll', this.handleHeaderScroll);
    $(window).off('load', this.handleHeaderScroll);
  },
  handleImageLogo: function(){
    var location = window.location.pathname;
    // For yipiii.de
    // this.setState({
    //   isRoot: ((location === "/") || (location === "/index.html"))
    // });

    this.setState({
      isRoot: ((location === "/it_frontend/carmen/yipiii.de/") || (location === "/it_frontend/carmen/yipiii.de/index.html"))
    });
  },
  handleHeaderScroll: function() {
    var $window = $(window),
        width = $window.width(),
        scrollTop = $window.scrollTop();

    this.setState({
      isScrolled: ((width > 991) && (scrollTop > 50)) || (scrollTop > 10)
    });
  },
  render: function() {
    var isScrolled = this.state.isScrolled;
    var isRoot = this.state.isRoot;
    var nav = $('header .container');
    var for_con = $('header .for_con');

    return (
      <div>
        <div id="header_fixed"></div>
        <div className={isScrolled ? "container small-head" : "container"}>
          <div className={isScrolled ? "for_con container" : "for_con"}>
            <div className="brand">
              <a href="/"><img src={isRoot ? "img/yipiii_logo.png" : "../img/yipiii_logo.png"} alt="logo"/></a>&nbsp;&nbsp;&nbsp;&nbsp;Play&nbsp;&&nbsp;Win!
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