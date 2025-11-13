import { Link} from "react-router-dom";
import Navbar from "../NavbarFooter/Navbar.jsx";
import Footer from "../NavbarFooter/Footer.jsx";
import { useState, useEffect} from "react";
import "../styles/HomePage.css";
import React from "react";


const Homepage=({inputRef,focusRef})=> { 
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        Categories();
        Products();
    }, []);
    async function Categories(){
        const url=("http://localhost:8080/category")
        let response=await fetch(url);
        response=await response.json()
    }
    async function Products(){
        const url=("http://localhost:8080/All")
        let response=await fetch(url);
        response=await response.json();
        setProducts(response);

    }



    return (
        <div>
            <Navbar inputRef={inputRef} focusRef={focusRef}/>
            <main>
                <section className="section4">
                    <div className="offerBanner">
                        <Link className="banner" to={"/offers"}>
                            <h3>😲fashion Sale-1</h3>
                            <p>Up to 50% off on selected items. Limited time offer!</p>
                        
                        </Link>
                    </div>
                </section>
                <section className="section1">
                    <h2>Welcom to MS world and get dream products asap</h2>
                    <p>Discover exclusive deals, trending styles, and the best prices on top brands.</p>
                    <Link to="/shop" className="Shop">Shop Now</Link>
                </section>
                <section className="section2">
                    <h3>Shop by Category</h3>
                    <div>{categories.map((categary)=>
                        <div key={categary}>
                            <Link to={"/shop/"+categary} className="Category">{categary}</Link>
                        </div>
                        )}
                    </div>    
                </section>
                <section className="section3">
                    <h3>Featured Products</h3>
                    <div >                        
                        {products.map((product)=>
                            
                        <div key={product.id} value={product} >
                            <h3 value={product.name}></h3>
                            <Link to={"/shop/"+product.name} className="featuredImage"><img src={product.imageUrl} alt="product image" /></Link>
                            <h3 value={product.price} >${product.price}</h3>
                            <button >add to cart</button>
                        </div>)
                        }                        
                    </div>
                </section>
                
                {/* <section className="section5">
                    <h3>what our customer says</h3>
                    <div>
                        {[
                        { name: "Priya S.", text: "Great quality and fast delivery!" },
                        { name: "Rahul M.", text: "Excellent customer support!" },
                        { name: "Aditi K.", text: "Loved the product design!" },
                        ].map((review) => (
                        <div
                        key={review.name}>
                        <p>“{review.text}”</p>
                        <h4>– {review.name}</h4>
                        </div>
                        ))}
                    </div>
                </section> */}
                <section className="section6">
                    <h3>stay Updated</h3>
                    <p>subscribe for exclusive deals and product updates.</p>
                    <form action="">
                        <input type="email" placeholder="Enter your email"/>
                        <button type="submit">Subscribe</button>
                    </form>
                </section>
            </main>
            <Footer/>
        </div>
    );
};
export default Homepage;