function NavBar(){
         return(
              <div className="nav">
                   <img src="./image/logo_icons.png" alt="" width="5%" className="nav-image"/>
                   <h2>Shopify</h2>
                   <p className="plus">plus</p>
                   <div className="first-nav">
                   <a href="http://www.shopify.com" className="first-nav">Sell</a>
                   <a href="http://www.shopify.com/uk/migrate" className="first-nav">Migrate</a>
                   <a href="http://getfoodcourt.com" className="first-nav">Manage</a>
                   
                   
                      <form action="/action_page.php">
                            <select className="integra" name="integrate">
                                <option value="Integrate" id="all">Integrate</option>
                                <option value="Integrate system" id="all">Integrate system</option>
                                <option value="Automation" id="all">Automation</option>
                                <option value="Headless commerce" id="all">Headless commerce</option>
                                <option value="Partners" id="all">Customers stories</option>
                                <option value="Online Services" id="all">Online Services</option>
                                <option value="Partners" id="all">Partners</option>
                                <option value="Shipping" id="all">Shipping</option>
                                <option value="Payments" id="all">Payment</option>
                                <option value="Pricing" id="all">Pricing</option>
                            </select>
                   </form>
       </div>
                            
                                 <div className="second-nav">
                                      <form action="/action_page.php">
                                      <select className="plat" name="platform">
                                      <option value="Integrate" id="all">platform</option>
                                      <option value="Automation" id="all">Shopify plus platform</option>
                                      <option value="Headless commerce" id="all">Upgrade to shopify plus</option>
                                      <option value="Integrate system" id="all">Merchant success</option>
                                      <option value="Integrate system" id="all">Platform</option>
                                      <option value="Integrate" id="all">B2B2 commerce</option>
                              </select>
                   </form>
        
                               <a href="https://www.shopify.com/uk/enterprise" className="second-nav">Blog</a>
                               <p id="sec" className="second-nav">Contact Sales</p>
                    </div>
        </div>

    )
}
export default NavBar;