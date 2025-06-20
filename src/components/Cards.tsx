
export default function Cards(props:any){
    return(
        <section className="cards-container">
            <article className="card cardColor1">
                <header className="card-header">
                    <h1>
                        Let You Break My Heart Again
                    </h1>
                    <button className="cardColor1-btn">Details</button>
                </header>
                <div className="detail">
                    <h3>Laufey</h3>
                    <h3>April 24 2024</h3>
                </div>
            </article>
            <article className="card cardColor2">
                <header className="card-header">
                    <h1>
                        La Fille aux cheveux de lin
                    </h1>
                    <button className="cardColor2-btn">Details</button>
                </header>
                <div className="detail">
                    <h3>Debussy</h3>
                    <h3>June 16 2025</h3>
                </div>
            </article>
             <article className="card">
                <header className="card-header">
                    <h1>
                        Arabesque No.1 in E Major
                    </h1>
                    <button>Details</button>
                </header>
                <div className="detail">
                    <h3>Debussy</h3>
                    <h3>July 19 2025</h3>
                </div>
            </article>
        </section>
    )
}