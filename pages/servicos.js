import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox servicos/PageTitleBox";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
//import OurTeam from "";

const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

export default function servicos() {
  return (
    <>
      <PageTitleBox />
      <div classNameName="contato-box-main">
        <div classNameName="container">
          <div classNameName="row">
            <div classNameName="col-lg-12">
              <h2 classNameName="contato-title">
                Grupo <span> Easy Care</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div classNameName="contato-box-main">
        <div classNameName="container">
          <div classNameName="card-group">
            <div className="card text-center">
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <img
                  classNameName="card-img-top"
                  src="images/big-img-02.jpg"
                  alt="Card image cap"
                />
                <div classNameName="card-body">
                  <p>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#multiCollapseExample2"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample2"
                    >
                      Energia fotovoltaica
                    </button>
                  </p>
                  <div className="row">
                    <div className="col">
                      <div
                        className="collapse multi-collapse"
                        id="multiCollapseExample2"
                      >
                        <div className="card card-body">
                          <blockquote className="blockquote text-center">
                            <p className="mb-0">
                            Automação, energia fotovoltaica e manutenção predial
                            </p>
                            <footer className="blockquote-footer">
                            Realizamos todo o trabalho para garantir a estabilidade, segurança de sua edificação, economia energética e usamos a tecnologia para facilitar processos, gerar praticidade e conforto. {" "}
                              <cite title="Source Title">
                                atender exigências de segurança e garantir vida
                                longa às edificações.
                              </cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card text-center">
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <img
                  classNameName="card-img-top"
                  src="images/Móveis-planejados.jpg"
                  alt="Card image cap"
                />
                <div classNameName="card-body">
                  <p>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Móveis planejados
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      <blockquote className="blockquote text-center">
                        <p className="mb-0">móveis, pedras e reformas</p>
                        <footer className="blockquote-footer">
                          Somos especialistas no trabalho com MDF,{" "}
                          <cite title="Source Title"></cite>um material versátil
                          e maleável para a confecção de ambientes planejados e
                          com requinte.
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card text-center">
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <img
                  classNameName="card-img-top"
                  src="images/serviços-financeiros.jpg"
                  alt="Card image cap"
                />
                <div classNameName="card-body">
                  <p>
                    <a
                      className="btn btn-primary"
                      data-toggle="collapse"
                      href="#multiCollapseExample1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1"
                    >
                      Soluções financeiras
                    </a>
                  </p>
                  <div className="row">
                    <div className="col">
                      <div
                        className="collapse multi-collapse"
                        id="multiCollapseExample1"
                      >
                        <div className="card card-body">
                          <blockquote className="blockquote text-center">
                            <p className="mb-0">Soluções financeiras</p>
                            <footer className="blockquote-footer">
                              Os produtos financeiros têm grande relevância na
                              vida do investidor comum como também muita{" "}
                              <cite title="Source Title"></cite> influência no
                              desenvolvimento do mercado financeiro e na
                              economia em geral..
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Formulario">
      <div className="container">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <div className="service-block-inner">
              <h1 className="noo-sh-title">Dê início a casa dos seus sonhos</h1>
            </div>
          </div>
          
          
          
          <div className="contato-container">       
      <span className="big-circle"></span>
      <img src="images/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Fale conosco</h3>
          <p className="text">
          Fale conosco através de um dos nossos contato! ou se preferir preencha nosso formulário e nos envia seu contato.!
          </p>

          <div className="info">
            <div className="information">
              <img src="images/location.png" className="icon" alt="" />
              <p>SIA Trecho 1 Lote 230 Sala 208, 209 e 211 - Guará, Brasília - DF, 71200-010</p>
            </div>
            <div className="information">
              <img src="images/email.png" className="icon" alt="" />
              <p>comercial@grupoeasycare.com.br</p>
            </div>
            <div className="information">
              <img src="images/phone.png" className="icon" alt="" />
              <p>(61) 3975-1779</p>
            </div>
          </div>

          <div className="social-media">
            <p>Nossas Redes Sociais:</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/grupoeasycare/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://br.pinterest.com/easycareservicos">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="https://www.instagram.com/grupoeasycare/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://br.linkedin.com/in/grupo-easy-care-servi%C3%A7os-e-solu%C3%A7%C3%B5es-a3881b205">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 className="title">Formulario de contato</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label form="">Nome</label>
              <span>Seu nome</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label form="">E-mail</label>
              <span>Seu E-mail</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label form="">Telefone</label>
              <span>Seu telefone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label form="">Mensagem</label>
              <span>Mensagem</span>
            </div>
            <input type="submit" value="Enviar" className="btn" />
          </form>
        </div>
      </div>
    </div>
</div>
</div>
    </>
  );
}

<div classNameName="row special-list">{servicos}</div>;
