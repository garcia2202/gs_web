import {} from "react";
import "../css/Home/home.css";
import Pilula1 from "../imgs/pilula1.jpg";
import cerebro from "../imgs/cerebro-humano.png";
import alerta from "../imgs/alerta.png";
import monitor from "../imgs/monitoramento.png";
import coracao from "../imgs/cuidados-de-saude.png";

function Home() {
  return (
    <div className="container">
      <div className="img_aside">
        <div className="img_pilula1">
          <img className="pilula-1" src={Pilula1} alt="pilula" />
          <div className="vantagens">
        <h1>VANTAGENS:</h1>
        <div className="cards">
          <div>
            <img src={cerebro} alt="cerebro" />
            <p>
              Garante que os pacientes sigam corretamente
              o tratamento, reduzindo esquecimentos e doses perdidas.
            </p>
          </div>
          <div></div>
          <div>
            <img src={alerta} alt="alerta" />
            <p>
              Fornece notificações adaptadas, promovendo
              uma ingestão de medicamentos pontual e consistente.
            </p>
          </div>
          <div></div>
          <div>
            <img src={monitor} alt="monitoramento" />
            <p>
              Oferece dados instantâneos sobre a
              aderência, permitindo ajustes proativos no plano de cuidados.
            </p>
          </div>
          <div></div>
          <div>
            <img src={coracao} alt="monitoramento" />
            <p>
              Capacita os usuários a gerenciar sua saúde,
              transformando a experiência da medicação em um processo informado
              e eficiente.
            </p>
          </div>
        </div>
      </div>
        </div>
        <div className="wrap">
          <aside>
            <div className="topics">
              <div>
                <h1>Nosso problema</h1>
                <br />
                <p>
                  Muitos pacientes enfrentam desafios na gestão adequada de sua
                  medicação diária. Esquecimentos, doses duplicadas ou atrasos
                  podem comprometer a eficácia do tratamento, levando a
                  consequências adversas à saúde.
                </p>
                <br />
                <hr />
                <br />
              </div>
              <div>
                <h1>Nossa Solução</h1>
                <br />
                <p>
                  Desenvolvemos uma inovadora pílula digital que se integra ao
                  tratamento médico, oferecendo um sistema de monitoramento
                  inteligente da ingestão de medicamentos. Essa solução visa
                  melhorar a aderência do paciente ao tratamento, proporcionando
                  benefícios significativos para sua saúde a longo prazo.
                </p>
                <br />
                <hr />
                <br />
              </div>
              <div>
                <h1>Como funcionará</h1>
                <br />
                <p>
                  A pílula digital contém sensores que detectam quando é
                  ingerida, registrando automaticamente o horário e a dosagem.
                  Essas informações são transmitidas para um aplicativo móvel
                  conectado, permitindo que pacientes e profissionais de saúde
                  monitorem o histórico de medicação em tempo real. Esse sistema
                  oferece alertas personalizados, promovendo uma abordagem mais
                  proativa para o cuidado com a saúde e proporcionando
                  tranquilidade aos pacientes e seus cuidadores.
                </p>
                <br />
                <hr />
                <br />
              </div>
              <div>
                <h1>O que ela fará</h1>
                <br />
                <p>
                  A pílula digital não apenas registra a ingestão de
                  medicamentos, mas também fornece dados valiosos para pacientes
                  e profissionais de saúde. Além dos alertas de dosagem, o
                  sistema analisa padrões de conformidade ao longo do tempo,
                  oferecendo insights sobre a aderência do paciente ao
                  tratamento. Isso permite ajustes personalizados no plano de
                  cuidados, contribuindo para uma abordagem mais eficaz e
                  personalizada. A tecnologia visa capacitar os usuários a tomar
                  o controle de sua saúde, transformando a gestão da medicação
                  em uma experiência mais informada e eficiente.
                </p>
                <br />
                <hr />
              </div>
            </div>
          </aside>
        </div>
        {/* <div className="TechPill">
          <h1>Tech Pill</h1>
          <p>
            Nossa pílula digital revoluciona a gestão de medicamentos,
            garantindo precisão na ingestão, alertas personalizados e dados
            úteis para promover uma saúde otimizada.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
