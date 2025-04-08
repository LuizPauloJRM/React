import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [index, setIndex] = useState(0);
  const slides = [
    {
      title: "Desafio 1",
      text: "Participe desse incrível desafio agora!",
      img: "https://via.placeholder.com/1200x500?text=Desafio+1"
    },
    {
      title: "Desafio 2",
      text: "Prepare-se para o próximo nível!",
      img: "https://via.placeholder.com/1200x500?text=Desafio+2"
    },
    {
      title: "Desafio 3",
      text: "Desafie seus amigos!",
      img: "https://via.placeholder.com/1200x500?text=Desafio+3"
    }
  ];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToDesafios = () => {
    const section = document.getElementById("desafios");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div className="carousel-box">
        <button onClick={prevSlide}>◀</button>
        <div className="carousel-slide">
          <img src={slides[index].img} alt={slides[index].title} style={{ width: "100%" }} />
          <div className="carousel-overlay">
            <h2>{slides[index].title}</h2>
            <p>{slides[index].text}</p>
            <button className="saiba-mais-btn" onClick={scrollToDesafios}>Saiba Mais</button>
          </div>
        </div>
        <button onClick={nextSlide}>▶</button>
      </div>

      <section className="destaques" id="desafios">
        <h2>Destaques</h2>
        <div className="card-container">
          <div className="card">
            <img src="https://via.placeholder.com/350x200?text=Destaque+1" alt="Destaque 1" />
            <div className="card-body">
              <h3>Desafio de Codificação</h3>
              <p>Participe do nosso desafio de codificação e mostre suas habilidades!</p>
              <button className="btn-card" onClick={scrollToDesafios}>Saiba Mais</button>
            </div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/350x200?text=Destaque+2" alt="Destaque 2" />
            <div className="card-body">
              <h3>Desafio de Criatividade</h3>
              <p>Libere sua criatividade e conquiste grandes prêmios!</p>
              <button className="btn-card" onClick={scrollToDesafios}>Saiba Mais</button>
            </div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/350x200?text=Destaque+3" alt="Destaque 3" />
            <div className="card-body">
              <h3>Desafio de Lógica</h3>
              <p>Teste suas habilidades em lógica com nossos desafios desafiadores!</p>
              <button className="btn-card" onClick={scrollToDesafios}>Saiba Mais</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sobre">
        <div className="text-content">
          <h2>Sobre a Plataforma</h2>
          <p>Esta plataforma tem como objetivo reunir os melhores desafios de programação, lógica e criatividade para você testar suas habilidades, competir com outros participantes e alcançar o topo do ranking!</p>
        </div>
      </section>

      <section className="testemunhos">
        <h2>O que dizem nossos participantes</h2>
        <div className="carousel-testemunhos">
          <blockquote>
            <p>"Os desafios são muito divertidos e me ajudaram a melhorar minhas habilidades de programação!"</p>
            <footer>- João Silva</footer>
          </blockquote>
          <blockquote>
            <p>"Adorei a plataforma! As competições são emocionantes e motivadoras!"</p>
            <footer>- Maria Souza</footer>
          </blockquote>
          <blockquote>
            <p>"Amei os desafios de criatividade! Uma ótima maneira de sair da zona de conforto!"</p>
            <footer>- Pedro Almeida</footer>
          </blockquote>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="https://via.placeholder.com/80x80" alt="Logo" />
          </div>
          <div className="footer-links">
            <a href="#" className="social-link"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="#" className="social-link"><i className="fab fa-github"></i> GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;