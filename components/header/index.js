import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import { removeFromCart } from "../../store/actions/action";
import {totalPrice} from "../../utils";
import HeaderTopbar from "../HeaderTopbar";

class Header extends Component {
  state = {
    isSearchShow: false,
    isCartShow: false,
  }

  searchHandler = () => {
    this.setState({
      isSearchShow: !this.state.isSearchShow
    })
  }
  cartHandler = () => {
    this.setState({
      isCartShow: !this.state.isCartShow
    })
  }

  render() {
    const { isSearchShow, isCartShow } = this.state;

    const SubmitHandler = (e) => {
      e.preventDefault()
    }

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    }

    const { carts } = this.props;



    return (
      <header id="header" className={this.props.topbarNone}>
        <HeaderTopbar/>
        <div className={`wpo-site-header ${this.props.hclass}`}>
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <Link onClick={ClickHandler} className="navbar-brand" href="/"><img src='/images/logo.png'
                      alt="" /></Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-1 col-1">
                  <div id="navbar" className="collapse navbar-collapse navigation-holder">
                    <button className="menu-close"><i className="ti-close"></i></button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} href="/">Home</Link>
                        <ul className="sub-menu">
                          <li><Link onClick={ClickHandler} href="/">Main Home</Link></li>
                          <li><Link onClick={ClickHandler} href="/home2">Wedding Planner</Link></li>
                          <li><Link onClick={ClickHandler} href="/home3">Announcement S1</Link></li>
                          <li><Link onClick={ClickHandler} href="/home4">Announcement S2</Link></li>
                          <li><Link onClick={ClickHandler} href="/home5">Wedding Home</Link></li>
                          <li><Link onClick={ClickHandler} href="/home6">Shop Home</Link></li>
                          <li><Link onClick={ClickHandler} href="/home7">Invitation</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="/">Pages</Link>
                        <ul className="sub-menu">
                          <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                          <li><Link onClick={ClickHandler} href="/story">Our story</Link></li>
                          <li><Link onClick={ClickHandler} href="/accomodation">Accomodation</Link></li>
                          <li><Link onClick={ClickHandler} href="/rsvp">RSVP</Link></li>
                          <li><Link onClick={ClickHandler} href="/gallery">Gallery</Link></li>
                          <li><Link onClick={ClickHandler} href="/planner">Planners</Link></li>
                          <li><Link onClick={ClickHandler} href="/team-single/Elizabeth-Anny">Planner Single</Link></li>
                          <li><Link onClick={ClickHandler} href="/groom-bride">Bridesmaid & Groomsman</Link></li>
                          <li><Link onClick={ClickHandler} href="/service">Serevice</Link></li>
                          <li><Link onClick={ClickHandler} href="/service-s2">Serevice S2</Link></li>
                          <li><Link onClick={ClickHandler} href="/service/Photography">Serevice Single</Link></li>
                          <li><Link onClick={ClickHandler} href="/pricing">Pricing</Link></li>
                          <li><Link onClick={ClickHandler} href="/coming">Coming Soon</Link></li>
                          <li><Link onClick={ClickHandler} href="/404">404 Error</Link></li>
                          <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                          <li><Link onClick={ClickHandler} href="/register">Register</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="/portfolio-grid">Portfolio</Link>
                        <ul className="sub-menu">
                          <li><Link href="/portfolio-grid">Portfolio Grid</Link></li>
                          <li><Link href="/portfolio-mashonary">Portfolio Mashonary</Link></li>
                          <li><Link href="/portfolio-mashonary-s2">Portfolio Mashonary S2</Link></li>
                          <li><Link href="/project/Maria-Nevela">Portfolio Single</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="/shop">Shop</Link>
                        <ul className="sub-menu">
                          <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                          <li><Link onClick={ClickHandler} href="/product-single/Wedding-Cake">Shop Single</Link></li>
                          <li><Link onClick={ClickHandler} href="/cart">Cart</Link></li>
                          <li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} href="/blog">Blog</Link>
                        <ul className="sub-menu">
                          <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                          <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                          <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                          <li className="menu-item-has-children">
                            <Link onClick={ClickHandler} href="/">Blog details</Link>
                            <ul className="sub-menu">
                              <li><Link onClick={ClickHandler} href="/blog-single/Top-10-wedding">Blog details right sidebar</Link>
                              </li>
                              <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/Top-10-wedding">Blog details left
                                sidebar</Link></li>
                              <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/Top-10-wedding">Blog details
                                fullwidth</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                    </ul>

                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-2">
                  <div className="header-right">
                    <div className="header-search-form-wrapper">
                      <div className="cart-search-contact">
                        <button onClick={this.searchHandler} className="search-toggle-btn"><i
                          className={`${isSearchShow ? 'ti-close' : 'ti-search'}`}></i></button>
                        <div className={`header-search-form ${isSearchShow ? 'header-search-content-toggle' : ''}`}>
                          <form onSubmit={SubmitHandler}>
                            <div>
                              <input type="text" className="form-control"
                                placeholder="Search here..." />
                              <button type="submit"><i
                                className="fi flaticon-search"></i></button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="mini-cart">
                      <button
                        onClick={this.cartHandler}
                        className="cart-toggle-btn"
                      >
                        {" "}
                        <i className="fi flaticon-shopping-cart"></i>{" "}
                        <span className="cart-count">{carts.length}</span>
                      </button>
                      <div
                        className={`mini-cart-content ${isCartShow ? "mini-cart-content-toggle" : ""
                          }`}
                      >
                        <button
                          onClick={this.cartHandler}
                          className="mini-cart-close"
                        >
                          <i className="ti-close"></i>
                        </button>
                        <div className="mini-cart-items">
                          {carts &&
                            carts.length > 0 &&
                            carts.map((cart, crt) => (
                              <div className="mini-cart-item clearfix" key={crt}>
                                <div className="mini-cart-item-image">
                                  <span>
                                    <img src={cart.proImg} alt="icon" />
                                  </span>
                                </div>
                                <div className="mini-cart-item-des">
                                  <p>{cart.title} </p>
                                  <span className="mini-cart-item-price">
                                    ${cart.price} x {" "} {cart.qty}
                                  </span>
                                  <span className="mini-cart-item-quantity">
                                    <button
                                      onClick={() =>
                                        this.props.removeFromCart(cart.id)
                                      }
                                      className="btn btn-sm btn-danger"
                                    >
                                      <i className="ti-close"></i>
                                    </button>{" "}
                                  </span>
                                </div>
                              </div>
                            ))}
                        </div>
                        <div className="mini-cart-action clearfix">
                          <span className="mini-checkout-price">
                            Total: ${totalPrice(carts)}
                          </span>
                          <div className="mini-btn">
                            <Link onClick={ClickHandler} href="/checkout" className="view-cart-btn s1">Checkout</Link>
                            <Link onClick={ClickHandler} href="/cart" className="view-cart-btn">View Cart</Link>
                          </div>
                        </div>
                        <div className="visible-icon">
                          <img src='/images/love.png' alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
