
import './App.css';

function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={`${process.env.PUBLIC_URL}/logo192.png`} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div> 
    
    <div className="App">
      <div class="container-fluid">
          <div class="row align-items-center bg-light px-lg-5">
              <div class="col-12 col-md-8">
                  <div class="d-flex justify-content-between">
                      <div class="bg-primary text-white text-center py-2">Tranding</div>
                      <div class="owl-carousel owl-carousel-1 tranding-carousel position-relative d-inline-flex align-items-center ml-3">
                          <div class="text-truncate"><a class="text-secondary" href="">Labore sit justo amet eos sed, et sanctus dolor diam eos</a></div>
                          <div class="text-truncate"><a class="text-secondary" href="">Gubergren elitr amet eirmod et lorem diam elitr, ut est erat Gubergren elitr amet eirmod et lorem diam elitr, ut est erat</a></div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4 text-right d-none d-md-block">
                  Monday, January 01, 2045
              </div>
          </div>
          <div class="row align-items-center py-2 px-lg-5">
              <div class="col-lg-4">
                  <a href="" class="navbar-brand d-none d-lg-block">
                      <h1 class="m-0 display-5 text-uppercase"><span class="text-primary">News</span>Room</h1>
                  </a>
              </div>
              <div class="col-lg-8 text-center text-lg-right">
                  <img class="img-fluid" src="img/ads-700x70.jpg" alt=""/>
              </div>
          </div>
      </div>
    </div> 
  );
}

export default App;
