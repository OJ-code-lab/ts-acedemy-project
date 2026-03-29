

export default function Hero(){
    return(
        <>
            <section>
                <div class="section1">
                    <video control autoPlay muted loop  playsInline className="planet-video">
                        <source src='/video/planet.mp4' type="video/mp4" />
                    </video>
                    <div class="text-right">
                        <h2>How Planetary Data Helps Us Understand Space</h2>
                        <p>Planetary science goes beyond images. Comparing 
                        <span class="mass">mass</span>, <span class="mass">diameter</span>, <span class="mass">gravity</span>,
                        and <span class="mass">density</span>, we gain insight into how planets form, behave, and interact within the solar system.</p>
                    </div>
                </div>
            </section>
            <hr />
        </>
    );
}

