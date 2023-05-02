import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Footer(){
    return(
        <div className="footer">
        <div className="details">
<p className="details">About</p>
<p className="details">Blog</p>
<p className="details">Contact</p>
<p className="details">Career</p>
<p className="details">Press</p>
<p className="details">Brand</p>
<p className="details">Sitemap</p>
<img src="./image/seeklogs.png" alt="" width="10%" className="logos"/>
</div>
<div className="line">
</div>



<div className="head">
<div className="services">
<p id="headline">Sell</p>
<p>Sell everywhere</p>
<p>Online store</p>
<p>International ecommerce</p>
<p>Headless commerce</p>
<p>Campaigns and flash sales</p>
<p>Retails and point of sals</p>
<p>B2B ecommerce</p>
</div>

<div className="manage">
<p id="headline">Manage</p>
<p>Manage complexity</p>
<p>Automation</p>
<p>Shipping</p>
<p>Payements</p>
<p>ShopifyQL Notebooks</p>
</div>

<div className="integrate">
<p id="headline">Integrate</p>
<p>Integrate system</p>
<p>Automation</p>
<p>Headless commerce</p>
<p>Partners</p>
</div>

<div className="migrate">
<p id="headline">Migrate</p>
<p>Migrate shopify plus</p>
</div>

<div className="platform">
<p id="headline">Platform</p>
<p>Shopify plus platform</p>
<p>Customers stories</p>
<p>Merchants success</p>
<p>shopify Accademy</p>
<p>Pricing</p>
<p>Platform devo video</p>
<p>Upgrading to shopify plus</p>
</div>

<div className="industries">
<p id="headline">Beauty and cosmetics</p>
<p>Customers electronics</p>
<p>Fashion and apparel</p>
<p>Beauty and cosmetics</p>
<p>Food and Beverages</p>
<p>Home and Funishing</p>
</div>
</div>
<div className="line">
</div>

          <div className="cover">
               <div className="footer-nav">
               <img src="./image/logo_icons.png" alt="" width="10%"/>
               <h2>Shopify</h2>
               <p className="plus">plus</p>
          </div>

                 <div className="end">
                      <p className="end">Terms of service</p>
                      <p className="end">Privacy Policy</p>
                      <p className="end"><LanguageIcon/></p>
                      <p className="end">United Kingdom</p>
                      <p className="end"><ArrowDropDownIcon/></p>
                 </div>
      </div>
</div>




    )
}
export default Footer;