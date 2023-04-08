class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header class="pb hp1">
			
      <div class="bottom-header">
          <div class="container-fluid">
              <div class="ft-logo">
                  <a href="index.html" title="">
                      <img src="images/ft-logo.png" alt="">
                      <div class="ft-text">
                          <h2>Dolphin</h2>
                          <h3>Beach Homes & Resort</h3>
                      </div>
                  </a>
              </div><!--ft-logo end-->
              <!--src-book end-->
              <nav>
                  <ul>
                      <li><a href="index.html" title="">Home</a>
                      </li>

                      <li><a href="27_about.html" title="">About Us</a></li>

                      <li><a href="35_services.html" title="">Services</a></li>

                      <li><a href="30_gallery.html" title="">Gallery</a></li>

                      <li><a href="28_contact_v1.html" title="">Contact</a>
                      </li>
                  </ul>
              </nav>
              <div class="menu-bar">
                  <a href="#" title="">
                      <span class="bar1"></span>
                      <span class="bar2"></span>
                      <span class="bar3"></span>
                  </a>
              </div>
              <div class="clearfix"></div>
          </div>
      </div><!--bottom-header end-->
  
  </header>

  <div class="responsive_mobile_menu">
      <div class="resp_head">
          <div class="ft-logo">
              <a href="#" title="">
                  <img src="images/ft-logo.png" alt="">
              </a>
          </div><!--ft-logo end-->
          <div class="menu-bar">
              <a href="#" title="">
                  <span class="bar1"></span>
                  <span class="bar2"></span>
                  <span class="bar3"></span>
              </a>
          </div><!--menu-bar end-->
          <div class="clearfix"></div>
      </div>
     <!--ct_head end-->
     <br>
      <div class="navigations">
          <ul>
              <li><a  href="index.html" title="">Home</a>
              </li>
              <li><a href="27_about.html" title="">About Us</a></li>

              <li><a href="35_services.html" title="">Services</a></li>

              <li><a href="30_gallery.html" title="">Gallery</a></li>

              <li><a href="28_contact_v1.html" title="">Contact</a>
              </li>
            
          </ul>
      </div><!--navigations end-->
      <ul class="mbl_contact_info">
          <li>PO Box 16122 Collins Street West Victoria 8007 Australia</li>
          <li><a href="#" title="">Map</a></li>
          <li>info@lordcros.com</li>
      </ul><!--mbl_contact_info end-->
  </div><!--responsive_mobile_menu end-->
      `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer>
      <div class="top-footer">
          <div class="container">
              <div class="ft-logo">
                  <img src="images/ft-logo.png" alt="">
                  <div class="ft-text">
                      <h2>Dolphin</h2>
                      <h3>Beach Homes & Resort</h3>
                  </div>
              </div><!--ft-logo end-->
              
              
              <div class="clearfix"></div>
          </div>
      </div><!--top-footer end-->
      <div class="bottom-footer">
          <div class="container">
              <div class="row">
                  <div class="col-lg-4 col-md-6">
                      <div class="widget widget-info">
                          <h4>About Us</h4>
                          <p>
                          Welcome to Dolphin Homes & Resort, a premier beachside resort that offers the perfect combination of relaxation and luxury. Our resort is nestled in a beautiful location on the coast, surrounded by stunning ocean views, and provides guests with an unforgettable experience.
                          </p>
                          
                      </div><!--widget-info end-->
                  </div>
                  <div class="col-lg-2 col-md-6">
                      <div class="widget widget-links">
                          <h3 class="widget-title">BookIng</h3>
                          <ul>
                              <li><a href="#" title="">Rooms & Suites</a></li>
                              <li><a href="#" title="">Catering</a></li>
                              <li><a href="#" title="">Services</a></li>
                              <li><a href="#" title="">Gallery</a></li>
                          </ul>
                      </div><!--widget-links end-->
                  </div>
                  <div class="col-lg-2 col-md-6">
                      <div class="widget widget-links">
                          <h3 class="widget-title">About</h3>
                          <ul>
                              <li><a href="#" title="">About</a></li>
                              <li><a href="#" title="">Events</a></li>
                              <li><a href="#" title="">About Us</a></li>
                              <li><a href="#" title="">Contact Us</a></li>
                          </ul>
                      </div><!--widget-links end-->
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <h3 class="widget-title">Address</h3>
                    <p> Dolphin Beach Homes & Resort, House No. 3-100/1, Kome -Koravadi beach ,Udupi district, Kundapur Taluka Of southern part of Karnataka State,Pin code- 576257 <br> </p><br> 
                    <ul>
                    <li>

                    <div class="cco_icon">
                        <img src="images/cc2.png" alt="">
                    </div>
                    <span><strong>Phone:</strong>
                    Mr. Deepak : +91 95352 90767 <br>
                    Mr. Suresh : +91 99002 00827 <br>
                    Mr. Sachin : +91 99013 94741
                    </span>
                </li><br> 
                <li>
                    <div class="cco_icon">
                        <img src="images/cs4_1.png" alt="">
                    </div>
                    <span>
                        <a href="mailto:dolphinbeachhome@gmail.com" title="">Email :dolphinbeachhome@gmail.com</a>
                    </span>
                        
                </li>
                    </ul>
                   
                  </div>
              </div>
          </div>
      </div><!--bottom-footer end-->
      <div class="bottom-strip">
          <div class="container">
              <p>© 2023 Dolphin Beach Homes & Resort. All Rights Reserved. Made by <a href="https://networkinfotech.in/"><u>Network Infotech</u></a></p>
          </div>
      </div><!--bottom-strip end-->
  </footer><!--FOOTER END-->
      `
    }
}

customElements.define('my-footer', MyFooter)

