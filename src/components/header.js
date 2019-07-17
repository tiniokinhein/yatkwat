import { Link } from "gatsby"
import React from "react"
import Logo from './logo.png'
import Sidebar from './sidebar'

const Header = () => (
  <>
  <header className="header-area">
    <div className="viral-news-main-menu"id="stickyMenu">
      <div className="classy-nav-container breakpoint-off">
        <div className="container">
          <nav className="classy-navbar justify-content-between" id="viralnewsNav">
            <Link className="nav-brand" to={'/'}>
                <img src={Logo} alt="Logo" />
            </Link>
            <Sidebar />
            <div className="classy-menu">
              <div className="classynav">
                <ul>
                  <li><Link to={'/'}>ပင်မ</Link></li>
                  <li><Link to={'/category/7'}>နိုင်ငံရေး</Link></li>
                  <li><Link to={'/category/21'}>အနုပညာ</Link></li>
                  <li><Link to={'/category/23'}>ဖျော်ဖြေရေး</Link> 
                      <ul className="dropdown">
                          <li><Link to={'/category/22'}>တေးဂီတ</Link></li>
                          <li><Link to={'/category/10'}>ဖက်ရှင်</Link></li>
                          <li><Link to={'/category/18'}>အစားအသောက်</Link></li>
                      </ul> 
                  </li> 
                  <li><Link to={'/category/9'}>ပတ်ဝန်းကျင်</Link> 
                      <ul className="dropdown">
                          <li><Link to={'/category/8'}>ပညာရေး</Link></li>
                          <li><Link to={'/category/19'}>အလှအပရေးရာ</Link></li>
                          <li><Link to={'/category/15'}>လူနေမှုပုံစံ</Link></li>
                      </ul> 
                  </li> 
                  <li><Link to={'/category/12'}>မှုခင်း</Link></li>
                  <li><Link to={'/category/17'}>ဟာသ</Link></li>
                  <li><Link to={'/category/6'}>နည်းပညာ</Link></li>
                  <li><Link to={'/category/13'}>ရသစာပေ</Link> 
                      <ul className="dropdown">
                          <li><Link to={'/category/1'}>ဝတ္ထု</Link></li>
                          <li><Link to={'/category/3'}>ကဗျာ</Link></li>
                      </ul> 
                  </li> 
                  <li><Link to={'/category/20'}>အားကစား</Link></li>
                  <li><Link to={'/about-us'}>တို့ရပ်ကွက်အကြောင်း</Link> 
                      <ul className="dropdown">
                          <li><a href="https://facebook.com/MMYatKwat/" target="_blank" rel="noopener noreferrer">ဖေ့စ်ဘုတ်စာမျက်နှာ</a></li>
                          <li><a href="https://www.instagram.com/myanmaryatkwat/" target="_blank" rel="noopener noreferrer">အင်စတာဂရမ်စာမျက်နှာ</a></li>
                          <li><a href="https://www.youtube.com/channel/UCa5CS8NOVc59ez0NlJMPtWA" target="_blank" rel="noopener noreferrer">ယူကျု့ချာနယ်စာမျက်နှာ</a></li>
                          <li><Link to={'/contact'}>ရပ်ကွက်သို့ ဆက်သွယ်ရန်</Link></li>
                      </ul> 
                  </li> 
                </ul>
              </div>
            </div> 
          </nav> 
        </div> 
      </div> 
    </div>
  </header>
  </>
)

export default Header
