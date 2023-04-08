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
                          <h3>Beach Home & Resort</h3>
                      </div>
                  </a>
              </div><!--ft-logo end-->
              <ul class="src-book">

                  <li>
                      <a href="#" title=""><img src="images/icon5.png" alt=""></a>
                      <a href="#" title="" class="bk-now">Check Rooms</a>
                  </li>
              </ul><!--src-book end-->
              <nav>
                  <ul>
                      <li class="active"><a href="index.html" title="">Home</a>
                          <ul>
                              <li><a class="active" href="index.html" title="">Homepage 1</a></li>
                              <li><a href="index2.html" title="">Homepage 2</a></li>
                              <li><a href="index3.html" title="">Homepage 3</a></li>
                              <li><a href="index4.html" title="">Homepage 4</a></li>
                              <li><a href="index5.html" title="">Homepage 5</a></li>
                              <li><a href="index6.html" title="">Homepage 6</a></li>
                              <li><a href="index7.html" title="">Homepage 7</a></li>
                              <li><a href="index8.html" title="">Homepage 8</a></li>
                              <li><a href="index9.html" title="">Homepage 9</a></li>
                              <li><a href="index10.html" title="">Homepage 10</a></li>
                          </ul>
                      </li>
                      <li><a href="#" title="">Rooms</a>
                          <ul>
                              <li><a href="11_room_list_v1.html" title="">Room Version 1</a></li>
                              <li><a href="12_room_list_v2.html" title="">Room Version 2</a></li>
                              <li><a href="13_room_list_v3.html" title="">Room Version 3</a></li>
                              <li><a href="14_room_list_v4.html" title="">Room Version 4</a></li>
                              <li><a href="15_room_list_v5.html" title="">Room Version 5</a></li>
                              <li><a href="#" title="">Room Single</a>
                                  <ul>
                                      <li><a href="16_room_single_v1.html" title="">Room Single v1</a></li>
                                      <li><a href="17_room_single_v2.html" title="">Room Single v2</a></li>
                                      <li><a href="18_room_single_v3.html" title="">Room Single v3</a></li>
                                  </ul>
                              </li>
                              <li><a href="19_booking_list.html" title="">Booking List</a></li>
                          </ul>
                      </li>

                      <li><a href="27_about.html" title="">About Us</a></li>

                      <li><a href="35_services.html" title="">Services</a></li>

                      <li><a href="30_gallery.html" title="">Gallery</a></li>

                      <li><a href="#" title="">Pages</a>
                          <ul>
                              <li><a href="34_terms_and_conditions.html" title="">Terms & Conditions</a></li>
                              <li><a href="35_services.html" title="">Services</a></li>
                              <li><a href="36_coming_soon.html" title="">Coming Soon</a></li>
                              <li><a href="38_testimonials.html" title="">Testimonials</a></li>
                              <li><a href="#" title="">More Pages</a>
                                  <ul>
                                      <li><a href="30_gallery.html" title="">Gallery</a></li>
                                      <li><a href="31_restaurant.html" title="">Restaurant</a></li>
                                      <li><a href="32_places.html" title="">Places</a></li>
                                      <li><a href="33_explore.html" title="">Explore</a></li>
                                      <li><a href="37_404.html" title="">404</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                      <li><a href="#" title="">News</a>
                          <ul>
                              <li><a href="23_blog_list_v1.html" title="">Blog Version 1</a></li>
                              <li><a href="24_blog_list_v2.html" title="">Blog Version 2</a></li>
                              <li><a href="25_blog_list_v3.html" title="">Blog Version 3</a></li>
                              <li><a href="26_blog_single.html" title="">Blog Single</a></li>
                          </ul>
                      </li>
                      <li><a href="#" title="">Contact</a>
                          <ul>
                              <li><a href="28_contact_v1.html" title="">Contact v1</a></li>
                              <li><a href="29_contact_v2.html" title="">Contact v2</a></li>
                          </ul>
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
      <div class="ct_head">
          <h3>+1 888 123 4567</h3>
          <div class="lang-slct">
              <div class="custom-select">
                  <select>
                      <option value="0">En</option>
                      <option value="1">TR</option>
                      <option value="2">EN</option>
                      <option value="3">FR</option>
                      <option value="4">BR</option>
                  </select>
              </div>
          </div><!--lang-select end-->
      </div><!--ct_head end-->
      <div class="navigations">
          <ul>
              <li><a class="active" href="#" title="">Home</a>
                  <ul>
                      <li><a class="active" href="index.html" title="">Homepage 1</a></li>
                      <li><a href="index2.html" title="">Homepage 2</a></li>
                      <li><a href="index3.html" title="">Homepage 3</a></li>
                      <li><a href="index4.html" title="">Homepage 4</a></li>
                      <li><a href="index5.html" title="">Homepage 5</a></li>
                      <li><a href="index6.html" title="">Homepage 6</a></li>
                      <li><a href="index7.html" title="">Homepage 7</a></li>
                      <li><a href="index8.html" title="">Homepage 8</a></li>
                      <li><a href="index9.html" title="">Homepage 9</a></li>
                      <li><a href="index10.html" title="">Homepage 10</a></li>
                  </ul>
              </li>
              <li><a href="#" title="">Rooms</a>
                  <ul>
                      <li><a href="11_room_list_v1.html" title="">Room Version 1</a></li>
                      <li><a href="12_room_list_v2.html" title="">Room Version 2</a></li>
                      <li><a href="13_room_list_v3.html" title="">Room Version 3</a></li>
                      <li><a href="14_room_list_v4.html" title="">Room Version 4</a></li>
                      <li><a href="15_room_list_v5.html" title="">Room Version 5</a></li>
                      <li><a href="16_room_single_v1.html" title="">Room Single v1</a></li>
                      <li><a href="17_room_single_v2.html" title="">Room Single v2</a></li>
                      <li><a href="18_room_single_v3.html" title="">Room Single v3</a></li>
                      <li><a href="19_booking_list.html" title="">Booking List</a></li>
                  </ul>
              </li>
              <li><a href="27_about.html" title="">About Us</a></li>
              <li><a href="#" title="">Pages</a>
                  <ul>
                      <li><a href="34_terms_and_conditions.html" title="">Terms & Conditions</a></li>
                      <li><a href="35_services.html" title="">Services</a></li>
                      <li><a href="36_coming_soon.html" title="">Coming Soon</a></li>
                      <li><a href="38_testimonials.html" title="">Testimonials</a></li>
                      <li><a href="30_gallery.html" title="">Gallery</a></li>
                      <li><a href="31_restaurant.html" title="">Restaurant</a></li>
                      <li><a href="32_places.html" title="">Places</a></li>
                      <li><a href="33_explore.html" title="">Explore</a></li>
                      <li><a href="37_404.html" title="">404</a></li>
                  </ul>
              </li>
              <li><a href="#" title="">News</a>
                  <ul>
                      <li><a href="23_blog_list_v1.html" title="">Blog Version 1</a></li>
                      <li><a href="24_blog_list_v2.html" title="">Blog Version 2</a></li>
                      <li><a href="25_blog_list_v3.html" title="">Blog Version 3</a></li>
                      <li><a href="26_blog_single.html" title="">Blog Single</a></li>
                  </ul>
              </li>
              <li><a href="#" title="">Contact</a>
                  <ul>
                      <li><a href="28_contact_v1.html" title="">Contact v1</a></li>
                      <li><a href="29_contact_v2.html" title="">Contact v2</a></li>
                  </ul>
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
                      <h3>Bleach Home & Resort</h3>
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
                          Welcome to dolphine hoe & Resort, a premier beachside resort that offers the perfect combination of relaxation and luxury. Our resort is nestled in a beautiful location on the coast, surrounded by stunning ocean views, and provides guests with an unforgettable experience.
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
                    <p> Dolphin Beach Homes& Resort, House No. 3-100/1, Kome -Koravadi beach ,Udupi district, Kundapur Taluka Of southern part of Karnataka State,Pin code- 576257 <br> </p><br> 
                    <ul>
                    <li>

                    <div class="cco_icon">
                        <img src="images/cc2.png" alt="">
                    </div>
                    <span><strong>Phone:</strong> Deepak : 95352 90767 <br>
                        Suresh : 99002 00827
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
              <p>© 2023 Dolphine Bleach Homes. All Rights Reserved. Made by <a href="https://networkinfotech.in/"><u>Network Infotech</u></a></p>
          </div>
      </div><!--bottom-strip end-->
  </footer><!--FOOTER END-->
      `
    }
}

customElements.define('my-footer', MyFooter)

