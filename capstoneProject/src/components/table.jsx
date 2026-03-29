export default function Table(){
    return(

        <>
            <section>
                <div className="section2">
                    <h2>Planetary Facts at a Glance</h2>
                    <p>Below is a comparative table of major planets in our solar system. The data highlights key physical properties used by astronomers and researchers worldwide.</p>

                    <div className="table">
                        <table>
                            <caption>Data about the planets of our solar system (Planetary facts taken from NASA)</caption>
                            <thead>
                                <tr>
                                    <th colSpan="2"></th>
                                    <th>name</th>
                                    <th>mass (1024kg)</th>
                                    <th>diameter (km)</th>
                                    <th>density (kg/m3)</th>
                                    <th>gravity (m/s2)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th colSpan="2" rowSpan="4">Terrestial Planets</th>
                                    <td>mercury</td>
                                    <td>0.330</td>
                                    <td>4878</td>
                                    <td>5427</td>
                                    <td>3.7</td>
                                </tr>
                                <tr>
                                    <td>venus</td>
                                    <td>0.330</td>
                                    <td>4878</td>
                                    <td>5427</td>
                                    <td>3.7</td>
                                </tr>
                                <tr>
                                    <td>earth</td>
                                    <td>0.330</td>
                                    <td>4878</td>
                                    <td>5427</td>
                                    <td>3.7</td>
                                </tr>
                                <tr>
                                    <td>mars</td>
                                    <td>0.330</td>
                                    <td>4878</td>
                                    <td>5427</td>
                                    <td>3.7</td>
                                </tr>

                                <tr>
                                    <th rowSpan="4">Jovian planets</th>
                                    <th rowSpan="2">gass giants</th>
                                    <td>jupita</td>
                                    <td>0.330</td>
                                    <td>4878</td>
                                    <td>5427</td>
                                    <td>3.7</td>
                                </tr>
                                <tr>
                                    
                                    <td>saturn</td>
                                    <td>0.330</td>
                                    <td>4878</td>
                                    <td>5427</td>
                                    <td>3.7</td>
                                </tr>
                                <tr>
                                    <th rowSpan="2">ice giants</th>
                                    <td>uranus</td>
                                    <td>0.330</td>
                                    <td>4878</td>
                                    <td>5427</td>
                                    <td>3.7</td>
                                </tr>
                                <tr>
                                    <td>neptune</td>
                                    <td>0.330</td>
                                    <td>4878</td>
                                    <td>5427</td>
                                    <td>3.7</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan="2">dwarf planets</th>
                                    <td>pluto</td>
                                    <td>0.330</td>
                                    <td>4878</td>
                                    <td>5427</td>
                                    <td>3.7</td>
                                </tr>
                                
                            </tfoot>
                        </table>
                    </div>
                </div>
            </section>
            <hr />
        </>
    );
}