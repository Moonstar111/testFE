import '../App.css';

export default function Footer() {
  return (
    <footer id="footer">
       <div className="social-links">
        <a href="https://facebook.com/" class="fa fa-facebook"></a>
        <a href="https://twitter.com/" class="fa fa-twitter"></a>
        <a href="https://instagram.com" class="fa fa-instagram"></a>
        <a href="https://linkedin.com/" class="fa fa-linkedin"></a>
        <a href="https://linkedin.com/" class="fa fa-discord"></a>


      </div> 
    <div class="container">
  
      <div class="copyright">
        &copy; Copyright <strong><span>Wicked Designs</span></strong>. All Rights Reserved
      </div>
    
      <div class="credits">
         <div class="info">
              <div class="address">
                <i class="bx bx-map"></i>
                <p>A108 Adam Street<br></br>New York, NY 535022</p>
              </div>

              <div class="email">
                <i class="bx bx-envelope"></i>
                <p>info@example.com</p>
              </div>

              <div class="phone">
                <i class="bx bx-phone-call"></i>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>

        Designed by <a href="https://bootstrapmade.com/">Wicked Designs</a>
      </div>
    </div>
  </footer>
  );}