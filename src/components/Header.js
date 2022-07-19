import '../App.css';

export default function Header() {
  return (
    <header className='border' id="header" class="border mt-0">
    <div  className='border' class="container-fluid " >
      <div>
        <nav className='border' class="navbar navbar-expand-lg bg-light mt-0">
          <div className='border' class="container-fluid">
            <a class="navbar-brand" href="./index.html">ETH Dero Bridge</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="./Home.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./AboutUs.html">About Us</a>
                </li>
              </ul>
                <button class="enableEthereumButton d-flex btn btn-dark d-grid gap-2 d-md-block">Connect MetaMask</button>
            </div>
          </div>
        </nav>
      </div>
     
    </div>
  </header>
  );}