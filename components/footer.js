var Footer = React.createClass({
  render: function() {
    return (
      <div className='closing'>
        <div className="container">
          <div className="row">
            <div className="col-md-1 ">
              <a href="mailto:info@winmarket.de">
                Kontakt
              </a>
            </div>
            <div className="col-md-1">
              <a style={{cursor: 'pointer'}} href="/agb" className="" >
                AGB
              </a>
            </div>
            <div className="col-md-1 ">
              <a style={{cursor: 'pointer'}} className="" data-toggle="modal" data-target="#impressum">
                Impressum
              </a>
            </div>
            <div className=" visible-xs-block" style={{height: '20px'}} ></div>
            <div id="trust-elements" className="col-md-offset-5 col-md-4 ">
              <div id="ecommerceaward-logo" className="col-md-3 col-xs-3  col-xs-offset-1  img-full-responsive" > </div>
              <div id="gambling-commission-logo" className="col-md-3 col-xs-3 img-full-responsive" > </div>
              <div id="mga-logo" className="col-md-2 col-xs-2 img-full-responsive" > </div>
            </div>
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