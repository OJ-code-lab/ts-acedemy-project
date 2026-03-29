function Header(){
    return(
        <>
        <header>
            <section>

                <div  className="container">
                    <div  className="logo">
                        <span><img src="/Group.png" alt="" /></span>
                        <div  className="logo-tx">
                            <p><b>planet</b></p>
                            <p>creative world</p>
                        </div>
                    </div>
    
                    <div  className="section">
                        <div  className="left-text">
                            <h1>explore our solar <br /> system through data</h1>
                            <p>Understand the planets not just by name, but by measurable facts. From size and mass to gravity and density, this page breaks down the solar system in a clear, data-driven way.</p>
    
                            <nav>

                                <span className="nav"><a href="#">Explore the Data</a></span>
                                <span className="nav"><a href="#contact">contact us</a></span>
                            </nav>
                        </div>
                        <div  className="right-img"><img src="/earth.png" alt="" /></div>
                    </div>
                </div>
            </section>
        </header>
    </>
    );
}
export default Header;