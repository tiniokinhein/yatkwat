import React, { Component } from 'react'
import { Link } from 'gatsby'

import { slide as Menu } from 'react-burger-menu'

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,

            oneMenu: false,
            twoMenu: false,
            threeMenu: false,
            fourMenu: false
        }

        this.oneDropdownMenu = this.oneDropdownMenu.bind(this)
        this.oneOffDropdownMenu = this.oneOffDropdownMenu.bind(this)

        this.twoDropdownMenu = this.twoDropdownMenu.bind(this)
        this.twoOffDropdownMenu = this.twoOffDropdownMenu.bind(this)

        this.threeDropdownMenu = this.threeDropdownMenu.bind(this)
        this.threeOffDropdownMenu = this.threeOffDropdownMenu.bind(this)

        this.fourDropdownMenu = this.fourDropdownMenu.bind(this)
        this.fourOffDropdownMenu = this.fourOffDropdownMenu.bind(this)
    }

    oneDropdownMenu(event) {
        event.preventDefault()
        this.setState({
            oneMenu: true,
        }, () => {
            document.addEventListener('click', this.oneOffDropdownMenu)
        });
    }
    oneOffDropdownMenu() {
        this.setState({
            oneMenu: false
        }, () => {
            document.removeEventListener('click', this.oneOffDropdownMenu)
        })

    }

    twoDropdownMenu(event) {
        event.preventDefault()
        this.setState({
            twoMenu: true,
        }, () => {
            document.addEventListener('click', this.twoOffDropdownMenu)
        });
    }
    twoOffDropdownMenu() {
        this.setState({
            twoMenu: false
        }, () => {
            document.removeEventListener('click', this.twoOffDropdownMenu)
        })

    }

    threeDropdownMenu(event) {
        event.preventDefault()
        this.setState({
            threeMenu: true,
        }, () => {
            document.addEventListener('click', this.threeOffDropdownMenu)
        });
    }
    threeOffDropdownMenu() {
        this.setState({
            threeMenu: false
        }, () => {
            document.removeEventListener('click', this.threeOffDropdownMenu)
        })

    }

    fourDropdownMenu(event) {
        event.preventDefault()
        this.setState({
            fourMenu: true,
        }, () => {
            document.addEventListener('click', this.fourOffDropdownMenu)
        });
    }
    fourOffDropdownMenu() {
        this.setState({
            fourMenu: false
        }, () => {
            document.removeEventListener('click', this.fourOffDropdownMenu)
        })

    }

    handleStateChange(state) {
        this.setState({
            menuOpen: state.isOpen
        })
    }
    closeMenu() {
        this.setState({
            menuOpen: false
        })
    }

    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        var styles = {
            bmBurgerButton: {
                position: 'absolute',
                width: '30px',
                height: '28px',
                left: 'auto',
                right: '15px',
                top: '36px',
                bottom: '20px',
                cursor: 'pointer'
            },
            bmBurgerBars: {
                background: '#11629c',
                height: '10%'
            },
            bmBurgerBarsHover: {
                background: '#a90000'
            },
            bmCrossButton: {
                height: '24px',
                width: '24px',
                right: '15px',
                top: '15px'
            },
            bmCross: {
                background: '#fff'
            },
            bmMenuWrap: {
                position: 'fixed',
                height: '100%',
                top: '0',
                width: '320px',
                maxWidth: '100%',
                zIndex: '999999'
            },
            bmMenu: {
                background: '#001829',
                padding: '0',
                width: '100%'
            },
            bmMorphShape: {
                fill: 'rgba(17, 98, 156, 0.5)'
            },
            bmItemList: {
                color: '#fff',
                padding: '0'
            },
            bmItem: {
                display: 'block',
                paddingBottom: '5em'
            },
            bmOverlay: {
                background: 'rgba(0, 0, 0, 0.84)'
            }
        }

        return(
            <Menu right styles={styles} id="__sidebar" isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                <div className="classy-menu sidebar-menu">
                    <div className="classynav">
                        <ul>
                                <li><Link to={'/'} onClick={() => this.closeMenu()}>ပင်မ</Link></li>
                                <li><Link to={'/category/7'} onClick={() => this.closeMenu()}>နိုင်ငံရေး</Link></li>
                                <li><Link to={'/category/21'} onClick={() => this.closeMenu()}>အနုပညာ</Link></li>
                                <li><Link to={'/category/23'} onClick={() => this.closeMenu()}>ဖျော်ဖြေရေး</Link>
                                    <span className="button" onClick={this.oneDropdownMenu} >
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </span>
                                    { this.state.oneMenu ? (
                                        <ul className="dropdown" id="myDropdown">
                                            <li><Link to={'/category/22'} onClick={() => this.closeMenu()}>တေးဂီတ</Link></li>
                                            <li><Link to={'/category/10'} onClick={() => this.closeMenu()}>ဖက်ရှင်</Link></li>
                                            <li><Link to={'/category/18'} onClick={() => this.closeMenu()}>အစားအသောက်</Link></li>
                                        </ul> 
                                        ) : (null)
                                    }
                                </li> 
                                <li><Link to={'/category/9'} onClick={() => this.closeMenu()}>ပတ်ဝန်းကျင်</Link> 
                                    <span className="button" onClick={this.twoDropdownMenu}>
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </span>
                                    { this.state.twoMenu ? (
                                        <ul className="dropdown">
                                            <li><Link to={'/category/8'} onClick={() => this.closeMenu()}>ပညာရေး</Link></li>
                                            <li><Link to={'/category/19'} onClick={() => this.closeMenu()}>အလှအပရေးရာ</Link></li>
                                            <li><Link to={'/category/15'} onClick={() => this.closeMenu()}>လူနေမှုပုံစံ</Link></li>
                                        </ul>
                                        ) : (null)
                                    }
                                </li> 
                                <li><Link to={'/category/12'} onClick={() => this.closeMenu()}>မှုခင်း</Link></li>
                                <li><Link to={'/category/17'} onClick={() => this.closeMenu()}>ဟာသ</Link></li>
                                <li><Link to={'/category/6'} onClick={() => this.closeMenu()}>နည်းပညာ</Link></li>
                                <li><Link to={'/category/13'} onClick={() => this.closeMenu()}>ရသစာပေ</Link> 
                                    <span className="button" onClick={this.threeDropdownMenu}>
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </span>
                                    { this.state.threeMenu ? (
                                        <ul className="dropdown">
                                            <li><Link to={'/category/1'} onClick={() => this.closeMenu()}>ဝတ္ထု</Link></li>
                                            <li><Link to={'/category/3'} onClick={() => this.closeMenu()}>ကဗျာ</Link></li>
                                        </ul> 
                                        ) : (null)
                                    }
                                </li> 
                                <li><Link to={'/category/20'} onClick={() => this.closeMenu()}>အားကစား</Link></li>
                                <li><Link to={'/about-us'} onClick={() => this.closeMenu()}>တို့ရပ်ကွက်အကြောင်း</Link> 
                                    <span className="button" onClick={this.fourDropdownMenu}>
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </span>
                                    { this.state.fourMenu ? (
                                        <ul className="dropdown">
                                            <li><a href="https://facebook.com/MMYatKwat/" target="_blank" rel="noopener noreferrer">ဖေ့စ်ဘုတ်စာမျက်နှာ</a></li>
                                            <li><a href="https://www.instagram.com/myanmaryatkwat/" target="_blank" rel="noopener noreferrer">အင်စတာဂရမ်စာမျက်နှာ</a></li>
                                            <li><a href="https://www.youtube.com/channel/UCa5CS8NOVc59ez0NlJMPtWA" target="_blank" rel="noopener noreferrer">ယူကျု့ချာနယ်စာမျက်နှာ</a></li>
                                            <li><Link to={'/contact'} onClick={() => this.closeMenu()}>ရပ်ကွက်သို့ ဆက်သွယ်ရန်</Link></li>
                                        </ul> 
                                        ) : (null)
                                    }
                                </li> 
                        </ul>
                    </div>
                </div>
            </Menu>
        )
    }
}

