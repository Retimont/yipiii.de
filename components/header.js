var Header = React.createClass({
  componentDidMount: function() {
    $('.navbar-nav li a').on ('click', this.handleMenuHiding);
  },
  componentWillUnmount: function() {
    $('.navbar-nav li a').off ('click', this.handleMenuHiding);
  },
  handleMenuHiding: function(){
    $(".navbar-collapse").collapse('hide');
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-5" id="y_header_left">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/"><img src="/img/yipiii_logo.png" alt="yipiii" title="yipiii" /><p>&nbsp;&nbsp;&nbsp;Dein neues Gewinnspielportal</p></a>
            </div>
          </div>
          <div className="col-sm-6 col-md-5 " id="y_header_center">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="../index.html#an_games" title="Gewinnspiele">Gewinnspiele <i className="glyphicon glyphicon-triangle-bottom"></i></a></li>
                <li><a href="../index.html#an_about" title="Über uns">Über uns <i className="glyphicon glyphicon-triangle-bottom"></i></a></li>
                <li><a href="../index.html#an_contact" title="Kontakt">Kontakt <i className="glyphicon glyphicon-triangle-bottom"></i></a></li>
              </ul>
            </div>
           </div>
            <div className="col-md-2 hidden-xs hidden-sm" id="y_header_right">
              <a href="#an_awards" title="Rechtlich geprüfte Gewinnspiele"><img src="/img/badge.png" alt="Rechtlich geprüfte Gewinnspiele" title="Rechtlich geprüfte Gewinnspiele" /></a>
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