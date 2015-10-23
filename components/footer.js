var Footer = React.createClass({
  componentDidMount: function() {
    this.facebookScript(document, 'script', 'facebook-jssdk');
  },
  facebookScript: function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v2.5";
    fjs.parentNode.insertBefore(js, fjs);
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-2 col-xs-6" id="">
            <h5>Über Yipiii</h5>
            <li><a href="../index.html#an_about" title="Über uns">Über uns</a></li>
            <li><a href="../index.html#an_contact" title="Kontakt">Kontakt</a></li>
            <li><a href="../daten.html" title="Datenschutz">Datenschutz</a></li>
            <li><a href="../agb.html" title="AGB">AGB</a></li>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-6" id="">
            <h5>Yipiii business</h5>
            <li><a href="http://winmarket.de/" title="Für Handel">Für Handel</a></li>
            <li><a href="http://winmarket.de/" title="Für Hersteller">Für Hersteller</a></li>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-12" id="">
            <div className="fb-page" data-href="https://www.facebook.com/yipiiide?fref=ts" data-width="290" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true" data-show-posts="false">
              <div className="fb-xfbml-parse-ignore">
                <blockquote cite="https://www.facebook.com/yipiiide?fref=ts">
                  <a href="https://www.facebook.com/yipiiide?fref=ts">Yipiii.de</a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <p id="y_copy">© 2015 winmarket solutions GmbH</p>
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <Footer />,
  document.getElementById('footer')
);