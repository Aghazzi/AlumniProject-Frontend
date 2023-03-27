// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import pr1 from "../../images/product-1.png";
// import pr2 from "../../images/product-2.png";
// import pr3 from "../../images/product-3.png";
// import { FaEye, FaHeart } from "react-icons/fa";
// import "../categories/categories.css";
// class CoffeeAccesorieProduct extends Component {
//     render() {
//         return (
//             <div>
//                 <section className="categories vapeAccesories">
//                     <h1 className="heading">
//                         our <span>Coffee Accesories</span>
//                     </h1>
//                     <div className="box-container">
//                         {/* first product */}
//                         <div className="box">
//                             <div className="image">
//                                 <img src={pr2} alt="product" />
//                             </div>
//                             <div className="content">
//                                 <h3> product Name</h3>
//                             </div>
//                             <div className="price">
//                                 $25.99 <span>$30.00</span>
//                             </div>
//                             <div>
//                                 <Link to="/categories" className="btn">
//                                     Add To Cart
//                                 </Link>
//                             </div>
//                             <div className="icons">
//                                 <a href="/" className="fas fa-heart">
//                                     <FaHeart />
//                                 </a>
//                                 <Link
//                                     to="/categories"
//                                     href="#"
//                                     className="fas fa-eye"
//                                 >
//                                     <FaEye />
//                                 </Link>
//                             </div>
//                         </div>
//                         {/* second product */}
//                         <div className="box">
//                             <div className="image">
//                                 <img src={pr3} alt="product" />
//                             </div>
//                             <div className="content">
//                                 <h3> product Name</h3>
//                             </div>
//                             <div className="price">
//                                 $25.99 <span>$30.00</span>
//                             </div>
//                             <div>
//                                 <Link to="/categories" className="btn">
//                                     Add To Cart
//                                 </Link>
//                             </div>
//                             <div className="icons">
//                                 <a href="/" className="fas fa-heart">
//                                     <FaHeart />
//                                 </a>
//                                 <Link
//                                     to="/categories"
//                                     href="#"
//                                     className="fas fa-eye"
//                                 >
//                                     <FaEye />
//                                 </Link>
//                             </div>
//                         </div>
//                         {/* third product */}
//                         <div className="box">
//                             <div className="image">
//                                 <img src={pr1} alt="product" />
//                             </div>
//                             <div className="content">
//                                 <h3> product Name</h3>
//                             </div>
//                             <div className="price">
//                                 $25.99 <span>$30.00</span>
//                             </div>
//                             <div>
//                                 <Link to="/categories" className="btn">
//                                     Add To Cart
//                                 </Link>
//                             </div>
//                             <div className="icons">
//                                 <a href="/" className="fas fa-heart">
//                                     <FaHeart />
//                                 </a>
//                                 <Link
//                                     to="/categories"
//                                     href="#"
//                                     className="fas fa-eye"
//                                 >
//                                     <FaEye />
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                     <br />
//                     {/* second row */}
//                     <div className="box-container">
//                         <div className="box">
//                             <div className="image">
//                                 <img src={pr2} alt="product" />
//                             </div>
//                             <div className="content">
//                                 <h3> product Name</h3>
//                             </div>
//                             <div className="price">
//                                 $25.99 <span>$30.00</span>
//                             </div>
//                             <div>
//                                 <Link to="/categories" className="btn">
//                                     Add To Cart
//                                 </Link>
//                             </div>
//                             <div className="icons">
//                                 <a href="/" className="fas fa-heart">
//                                     <FaHeart />
//                                 </a>
//                                 <Link
//                                     to="/categories"
//                                     href="#"
//                                     className="fas fa-eye"
//                                 >
//                                     <FaEye />
//                                 </Link>
//                             </div>
//                         </div>
//                         {/* second product */}
//                         <div className="box">
//                             <div className="image">
//                                 <img src={pr3} alt="product" />
//                             </div>
//                             <div className="content">
//                                 <h3> product Name</h3>
//                             </div>
//                             <div className="price">
//                                 $25.99 <span>$30.00</span>
//                             </div>
//                             <div>
//                                 <Link to="/categories" className="btn">
//                                     Add To Cart
//                                 </Link>
//                             </div>
//                             <div className="icons">
//                                 <a href="/" className="fas fa-heart">
//                                     <FaHeart />
//                                 </a>
//                                 <Link
//                                     to="/categories"
//                                     href="#"
//                                     className="fas fa-eye"
//                                 >
//                                     <FaEye />
//                                 </Link>
//                             </div>
//                         </div>
//                         {/* third product */}
//                         <div className="box">
//                             <div className="image">
//                                 <img src={pr1} alt="product" />
//                             </div>
//                             <div className="content">
//                                 <h3> product Name</h3>
//                             </div>
//                             <div className="price">
//                                 $25.99 <span>$30.00</span>
//                             </div>
//                             <div>
//                                 <Link to="/categories" className="btn">
//                                     Add To Cart
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         );
//     }
// }
// export default CoffeeAccesorieProduct;
