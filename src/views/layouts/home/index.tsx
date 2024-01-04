import React from "react";
import "./style.scss"

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="carousel-container">
            <div id="carouselExampleFade" className="carousel slide carousel-fade p">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.all-free-download.com/images/graphiclarge/belgium_514505.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.all-free-download.com/images/graphicwebp/seascape_514656.webp" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.all-free-download.com/images/graphicwebp/seascape_514669.webp" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            <div className="buttonContainer">
                <button type="button" className="btn btn-success">Iniciar Sesion</button>
                <button type="button" className="btn btn-secondary">Registrarse Como Empresa</button>
            </div>
           
        </div>
    )
}

export default Home;