var Footer = React.createClass({
  getInitialState: function() {
    return {
      isRoot: true
    };
  },
  componentDidMount: function() {
    this.checkIfRoot();
    this.facebookScript(document, 'script', 'facebook-jssdk');
  },
  checkIfRoot: function() {
    var location = window.location.pathname;
    // For yipiii.de
    // this.setState({
    //   isRoot: ((location === "/") || (location === "/index.html") || (location === "/daten.html") || (location === "/agb.html"))
    // });

    this.setState({
      isRoot: ((location === "/it_frontend/carmen/yipiii.de/") || (location === "/it_frontend/carmen/yipiii.de/index.html") || (location === "/it_frontend/carmen/yipiii.de/daten.html") || (location === "/it_frontend/carmen/yipiii.de/agb.html"))
    });
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
        <div className={this.state.isRoot ? "" : "hidden"}>
          <hr/>
          <div className="row">
            <div className="col-md-6" id="">
              <p className="text12px">Yipiii.de bietet dir die besten kostenlosen Gewinnspiele in Echtzeit. Deine Teilnahme ist immer sicher und kostenlos! Gewinne tolle Preise wie eine Autorennbahn von Carrera oder auch Smartphones wie das iPhone 6s. Neben den Hauptpreisen kannst du auch tolle Gutscheine und Rabatte gewinnen. So kannst du dir zur Not das iPhone günstiger kaufen, oder bekommst eine Gratiszugabe, kostenlose Probe oder Zusatzservice wie kostenlosen Versand mit dazu.</p>
              <p className="text12px">Wir bringen die klassischen Gewinnspiele wie das Glücksrad online. Oder möchtest du lieber ein gratis Rubbellos bekommen? Kein Problem! Für unsere ausgewählten Partner erstellen wir schöne gratis Games. Und du darfst sie kostenlos spielen um einen Hauptpreis zu gewinnen. Auf yipiii.de findest du nur Spiele ohne Download, ohne Installation und ohne komplizierte Anmeldung.</p>
              <p className="text12px">Unsere Gewinnspiele erstellen wir immer zusammen mit einem ausgewählten Partner, meistens aus dem Bereich Online-Shopping. Hier decken wir alle möglichen Gebiete ab wie Online Möbel, Online Parfum, Online Kinderbedarf, Online Spiele, Online Mode und Fashion bis hin zu Online Schmuck und Juwelieren.</p>
            </div>
            <div className="col-md-6" id="">
              <p className="text12px">Neben den Hauptgewinnen wie Gratis-Parfum, kostenlosen Produkten oder auch ein einem Smartphone kannst du auch viele Ersparnisse und exklusive Rabatte wie Gutscheine für dein Online-Shopping gewinnen. Unsere Partner bieten nicht nur die attraktivsten Gewinne, sondern auch die günstigen Preise im Online-Shopping an.</p>
              <p className="text12px">Ganz wichtig: Bei uns bist du in sicheren Händen. Wir sind eine deutsche Firma mit Sitz in Berlin und handeln nach deutschem Datenschutz-Recht. Alle kostenlosen Spiele laufen auf gesicherten Servern. Wir sind keine dubiose Gewinnspiel-Firma, die deine Daten einfach nur sammeln und verkaufen will. Von diesen Praktiken distanzieren wir uns klar.</p>
              <p className="text12px">Alle Gewinnspiele sind echt, die Gewinne sind tatsächlich vorhanden und dein Preis ist dir garantiert. Alle Spieler haben die gleiche Gewinnchance.</p>
              <p className="text12px">Wenn dir die Gewinnspiele auf yipiii.de gefallen, besuche uns gerne auch bei Facebook und schenke uns Dein „gefällt mir“. Dort bleibst du immer auf dem Laufenden und erfährst zuerst von tollen neuen Gewinnchancen, egal ob aus dem Bereich Mode, Online Möbel oder Elektronik wie den neues Tablets oder Smartphones von Samsung, Apple und Co gratis.</p>
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