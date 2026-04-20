import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Principios Básicos e Impacto Social de las Telecomunicaciones</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section className="hero">
          <div className="hero-inner">
            <h1 className="title">📡🌐📶 Principios Básicos e Impacto Social de las Telecomunicaciones 📶🌐📡</h1>
          </div>
        </section>

        <section className="definition">
          <h2 className="definition-title">📚 Definición y conceptos fundamentales</h2>
          <div className="definition-inner">
            <p>📖 El autor <strong>Roger L. Freeman</strong> define este concepto como la transmisión de información a distancia, la cual abarca no solo la voz, sino también datos e imágenes mediante señales eléctricas.</p>
          </div>
        </section>

        <section className="infographic">
        
          <div className="info-grid" role="list">
            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card1.png')`}}></div>
              <h3>📡 Señal</h3>
              <p>Variación de energía o corriente que transporta información de un punto a otro.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card2.png')`}}></div>
              <h3>🎛️ Señal Analógica</h3>
              <p>Representa datos mediante valores continuos que varían suavemente en el tiempo.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card3.png')`}}></div>
              <h3>💻 Señal Digital</h3>
              <p>Representa datos mediante saltos de valores discretos (generalmente ceros y unos).</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card4.png')`}}></div>
              <h3>🎲 Señal Aleatoria</h3>
              <p>Variación impredecible en el tiempo que no obedece a un patrón matemático exacto.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card5.png')`}}></div>
              <h3>🧪 Muestreo (Sampling)</h3>
              <p>Proceso de capturar valores de una señal analógica a intervalos regulares para digitalizarla.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card6.png')`}}></div>
              <h3>📶 Ancho de Banda (Bandwidth)</h3>
              <p>Rango de frecuencias de un canal; determina la cantidad máxima de datos por segundo.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card7.png')`}}></div>
              <h3>🌈 Espectro (Spectrum)</h3>
              <p>Conjunto continuo de todas las frecuencias electromagnéticas posibles utilizadas para la transmisión.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card8.png')`}}></div>
              <h3>🔊 Ruido (Noise)</h3>
              <p>Alteraciones aleatorias e indeseadas en el medio físico que distorsionan la señal original.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card9.png')`}}></div>
              <h3>⚠️ Interferencia (Interference)</h3>
              <p>Perturbación en la comunicación causada por la intromisión de otras señales o emisiones externas.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card10.png')`}}></div>
              <h3>📈 Capacidad del Canal (Channel Capacity)</h3>
              <p>Tasa máxima teórica a la que se puede transmitir información sin errores por una vía de comunicación.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card11.png')`}}></div>
              <h3>📉 BER (Tasa de Error de Bits)</h3>
              <p>Porcentaje de bits que se reciben alterados respecto al total de bits enviados.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card12.png')`}}></div>
              <h3>🔁 Modulación (Modulation)</h3>
              <p>Técnica de alterar una onda portadora para transportar información a largas distancias.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card13.png')`}}></div>
              <h3>🔀 Multiplexación (Multiplexing)</h3>
              <p>Combinar múltiples señales para transmitirlas simultáneamente por un único canal.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden style={{backgroundImage: `url('images/panels/card14.png')`}}></div>
              <h3>🔂 Duplexación (Duplexing)</h3>
              <p>Método que permite que un canal transmita y reciba datos (comunicación bidireccional).</p>
            </div>
          </div>
        </section>

        <input className="slide-input" type="radio" id="slideCheckbox1" name="slides" defaultChecked />
        <input className="slide-input" type="radio" id="slideCheckbox2" name="slides" />
        <input className="slide-input" type="radio" id="slideCheckbox3" name="slides" />
        <input className="slide-input" type="radio" id="slideCheckbox4" name="slides" />
        <input className="slide-input" type="radio" id="slideCheckbox5" name="slides" />
        <input className="slide-input" type="radio" id="slideCheckbox6" name="slides" />

        <section className="slide">
          <div className="slide-inner">
            <h2 className="timeline-title">🕰️ Línea de tiempo histórica</h2>
            <div className="slides">
            <div className="slide-panel panel1">
              <div className="panel-image" aria-hidden style={{backgroundImage: `url('images/panels/panel1.jpg')`}}></div>
                <div className="panel-text">
                  <h3>🔥 Antes de la electricidad</h3>
                  <p>
                    <span className="year">1200 a. C.:</span> Se utilizan señales de fuego en el asedio de Troya.<br/>
                    <span className="year">776 a. C.:</span> Primer uso documentado de palomas mensajeras para anunciar al ganador olímpico a Atenas.<br/>
                    <span className="year">200 a. C.:</span> Egipto y China utilizan mensajeros a pie y a caballo mediante estaciones de relevo.<br/>
                    <span className="year">150 a. C.:</span> El historiador griego Polibo convierte el alfabeto griego a numérico, lo que permite la transmisión de textos codificados.<br/>
                    <span className="year">37 d. C.:</span> Heliógrafos: El emperador romano Tiberio utiliza espejos para comunicarse con su imperio.<br/>
                    <span className="year">1608:</span> Se inventa el telescopio, lo que permite a los barcos en alta mar utilizar banderas de señales.<br/>
                    <span className="year">1793:</span> Claude Chappe utiliza semáforos mecánicos en torres en lo alto de las colinas en Francia.
                  </p>
                </div>
            </div>

              <div className="slide-panel panel2">
              <div className="panel-image" aria-hidden style={{backgroundImage: `url('images/panels/panel2.jpg')`}}></div>
              <div className="panel-text">
                <h3>🕰️ 1800–1900</h3>
                <p>
                  <span className="year">1835:</span> Joseph Henry inventa el primer telégrafo eléctrico.<br/>
                  <span className="year">1844:</span> Utilizando su nuevo código, Samuel Morse envía el primer mensaje telegráfico, "¿Qué ha hecho Dios?", entre Washington D.C. y Baltimore.<br/>
                  <span className="year">1858:</span> Se completa la construcción del primer cable telegráfico transatlántico.<br/>
                  <span className="year">1876:</span> Alexander Graham Bell patenta el teléfono.<br/>
                  <span className="year">1881:</span> Se publican las primeras Páginas Amarillas.<br/>
                  <span className="year">1887:</span> El inventor del teléfono público, William Gray, instala el primer teléfono de monedas en el Banco de Hartford.<br/>
                  <span className="year">1889:</span> Almon Strowger inventa la primera marcación directa, eliminando la necesidad de conmutación manual.<br/>
                  <span className="year">1895:</span> El inventor italiano Guglielmo Marconi desarrolla el primer telégrafo inalámbrico de larga distancia, utilizando ondas de radio.
                </p>
                </div>
            </div>

            <div className="slide-panel panel3">
              <div className="panel-image" aria-hidden style={{backgroundImage: `url('images/panels/panel3.jpg')`}}></div>
              <div className="panel-text">
                <h3>⚙️ 1900–1950</h3>
                <p>
                  <span className="year">1915:</span> Se realiza la primera llamada oficial de costa a costa entre A.G. Bell en Nueva York y Thomas Watson en San Francisco.<br/>
                  <span className="year">1927:</span> Se inaugura el servicio telefónico transatlántico para uso comercial (EE. UU. a Gran Bretaña), utilizando radiotelefonía.<br/>
                  <span className="year">1929:</span> Herbert Hoover se convierte en el primer presidente de los Estados Unidos con un teléfono en su escritorio.<br/>
                  <span className="year">1946:</span> 250 000 mujeres son contratadas como operadoras de centralita para el sector público y las empresas.
                </p>
              </div>
            </div>

            <div className="slide-panel panel4">
              <div className="panel-image" aria-hidden style={{backgroundImage: `url('images/panels/panel4.jpg')`}}></div>
              <div className="panel-text">
                <h3>📻 1950–1970</h3>
                <p>
                  <span className="year">1955:</span> Se instala el primer cable telefónico transatlántico.<br/>
                  <span className="year">1957:</span> Comienzan las pruebas de campo de los primeros buscapersonas en Allentown y Bethlehem, Pensilvania.<br/>
                  <span className="year">1958:</span> Se presentan los Princess Phones, los primeros teléfonos con dial iluminado, que se convirtieron en parte de la cultura popular estadounidense.<br/>
                  <span className="year">1960:</span> Se lanzan al mercado los primeros teléfonos de marcación por tonos, que tenían 10 botones, en lugar de los 12 actuales.<br/>
                  <span className="year">1963:</span> Se establece una línea directa entre la Casa Blanca y el Kremlin tras la crisis de los misiles cubanos.<br/>
                  <span className="year">1968:</span> Se elige el 911 como número de emergencia nacional. Las compañías telefónicas del país acuerdan que esta secuencia de tres dígitos no esté disponible como número de centralita.
                </p>
              </div>
            </div>

            <div className="slide-panel panel5">
              <div className="panel-image" aria-hidden style={{backgroundImage: `url('images/panels/panel5.jpg')`}}></div>
              <div className="panel-text">
                <h3>💾 1970–2000</h3>
                <p>
                  <span className="year">1971:</span> Ray Tomlinson se envía el primer correo electrónico a sí mismo a través de ARPANET.<br/>
                  <span className="year">1973:</span> Se presenta al público el DynaTAC, el primer teléfono móvil que no era para automóviles.<br/>
                  <span className="year">1989:</span> Se lanza el primer teléfono plegable, dirigido a consumidores adinerados a un precio de 3000 dólares estadounidenses.<br/>
                  <span className="year">1989:</span> Nace la World Wide Web, marcando el comienzo de Internet tal como la conocemos hoy. La mayoría de los estadounidenses se conectan a Internet a través de sus líneas telefónicas.<br/>
                  <span className="year">1991:</span> Se introduce la identificación de llamadas. Polémica en su momento, la identificación de llamadas se ha convertido en la función adicional más popular en Estados Unidos.
                </p>
              </div>
            </div>

            <div className="slide-panel panel6">
              <div className="panel-image" aria-hidden style={{backgroundImage: `url('images/panels/panel6.jpg')`}}></div>
              <div className="panel-text">
                <h3>🚀 Más allá</h3>
                <p>
                  <span className="year">2000:</span> El “Web Phone” combina un teléfono tradicional con una pantalla táctil LCD y un teclado retráctil para permitir a los usuarios navegar por internet, consultar el correo electrónico, realizar llamadas y revisar el buzón de voz desde un solo dispositivo.<br/>
                  <span className="year">2000:</span> El “Thin Phone” integra el acceso inalámbrico a internet con el servicio de telefonía móvil local, permitiendo a los usuarios de internet mantenerse conectados a todo, desde páginas web hasta llamadas y correo electrónico, incluso en movimiento.<br/>
                  <span className="year">2001:</span> NTT DoCoMo lanza comercialmente en Japón la tecnología celular de tercera generación (3G) con el estándar WCDMA (Acceso Múltiple por División de Código de Banda Ancha).<br/>
                  <span className="year">2004:</span> Mark Zuckerberg lanza Facebook, una red social que surgió entre estudiantes de Harvard.<br/>
                  <span className="year">2005:</span> Ex empleados de PayPal presentan YouTube, una plataforma para compartir videos que desde entonces ha alcanzado más de 14 mil millones de videos.<br/>
                  <span className="year">2006:</span> Twitter, la plataforma de redes sociales creada por Jack Dorsey, Noah Glass, Biz Stone y Evan Williams, permite a los usuarios compartir mensajes cortos o imágenes en forma de «tweets» y «retuitear» los mensajes de otros.<br/>
                  <span className="year">2007:</span> Se lanza el primer modelo de iPhone con un precio de 499 dólares para la versión de 4 GB y de 599 dólares para la de 8 GB. Fue el primer teléfono en adoptar completamente la interfaz táctil y ofrecer tres funciones en un solo dispositivo.<br/>
                  <span className="year">2009:</span> La primera tecnología celular comercial de cuarta generación (4G) se implementa en Estocolmo y Oslo por el operador de red sueco-finlandés TeliaSonera y su marca noruega NetCom.<br/>
                  <span className="year">2009:</span> WhatsApp, el servicio de mensajería instantánea y voz sobre IP, es fundado por los exempleados de Yahoo! Brian Acton y Jan Koum.<br/>
                  <span className="year">2010:</span> Se funda Instagram, el servicio de redes sociales para compartir fotos y videos, con un fuerte enfoque en los hashtags y el etiquetado de ubicación.<br/>
                  <span className="year">2011:</span> Snapchat, una aplicación de mensajería instantánea, es desarrollada por Reggie Brown, Bobby Murphy y Evan Spiegel.<br/>
                  <span className="year">2011:</span> Apple presenta Siri, un asistente de inteligencia artificial (IA), con el iPhone 4S.<br/>
                  <span className="year">2012:</span> Tras lanzar una versión beta, Zoom firma un contrato con la Universidad de Stanford como su primer cliente.<br/>
                  <span className="year">2015:</span> Se lanza Discord, una plataforma de llamadas, mensajería instantánea y redes sociales basada en Voz sobre Protocolo de Internet (VoIP).<br/>
                  <span className="year">2016:</span> El número de conexiones móviles supera la población mundial. A pesar de esto, el porcentaje de usuarios de internet a nivel mundial alcanza solo el 43%.<br/>
                  <span className="year">2019:</span> T-Mobile es la primera empresa en lanzar una red 5G comercialmente disponible.<br/>
                  <span className="year">2020:</span> Las aplicaciones de videoconferencia como Zoom se convierten en herramientas esenciales para el trabajo y la educación, debido al aislamiento social provocado por la pandemia de COVID-19.<br/>
                  <span className="year">2022:</span> Herramientas como DALL-E y ChatGPT generan debates sobre la creatividad y la ética en la inteligencia artificial (IA).<br/>
                  <span className="year">2024:</span> La IA se vuelve omnipresente, impactando en todo, desde las búsquedas hasta las comunicaciones.<br/>
                  <span className="year">2025 y más allá:</span> La inteligencia artificial (IA), los satélites de órbita terrestre baja (LEO), las redes de fibra hasta el hogar (FTTH) y los sistemas nativos de la nube continuarán impulsando el entorno de las telecomunicaciones.
                </p>
              </div>
            </div>
          </div></div>
        </section>

        <section className="tabs-section">
          <nav className="tabs">
            <label className="slide-button" htmlFor="slideCheckbox1" style={{fontSize: '1.5vw'}}>Antes de la electricidad</label>
            <label className="slide-button" htmlFor="slideCheckbox2" style={{fontSize: '1.5vw'}}>1800–1900</label>
            <label className="slide-button" htmlFor="slideCheckbox3" style={{fontSize: '1.5vw'}}>1900–1950</label>
            <label className="slide-button" htmlFor="slideCheckbox4" style={{fontSize: '1.5vw'}}>1950–1970</label>
            <label className="slide-button" htmlFor="slideCheckbox5" style={{fontSize: '1.5vw'}}>1970–2000</label>
            <label className="slide-button" htmlFor="slideCheckbox6" style={{fontSize: '1.5vw'}}>Más allá</label>
          </nav>
        </section>

        <section className="privacy">
          <div className="privacy-inner">
            <h2 className="privacy-title">🔐 Caso Snowden (2013) - Las telecomunicaciones y la privacidad</h2>
            <p>🔎 El caso Snowden (2013) fue la mayor filtración de inteligencia en la historia de EE.UU., protagonizada por el excontratista de la NSA Edward Snowden. Reveló programas de vigilancia masiva global como PRISM y Tempora, demostrando que la NSA y agencias aliadas espiaban comunicaciones privadas de ciudadanos y líderes mundiales, provocando un debate internacional sobre privacidad.</p>
            <div className="privacy-list">
              <div className="privacy-item">
                <div className="privacy-media" aria-hidden style={{backgroundImage: `url('images/panels/privacy1.jpg')`}}></div>
                <div className="privacy-text">
                  <h3>🕵️‍♂️ La Filtración</h3>
                  <p>En mayo/junio de 2013, Snowden entregó a The Guardian y The Washington Post documentos de alto secreto de la Agencia de Seguridad Nacional (NSA).</p>
                </div>
              </div>

              <div className="privacy-item">
                <div className="privacy-media" aria-hidden style={{backgroundImage: `url('images/panels/privacy2.jpg')`}}></div>
                <div className="privacy-text">
                  <h3>🌐 Alcance</h3>
                  <p>Se reveló que empresas tecnológicas (Google, Facebook, Apple, Microsoft) cooperaban en la recopilación de datos, y que se espiaban correos electrónicos, chats y registros telefónicos a nivel mundial.</p>
                </div>
              </div>

              <div className="privacy-item">
                <div className="privacy-media" aria-hidden style={{backgroundImage: `url('images/panels/privacy3.jpg')`}}></div>
                <div className="privacy-text">
                  <h3>🛫 Huida</h3>
                  <p>Snowden huyó de EE.UU. a Hong Kong y luego a Moscú, donde obtuvo asilo tras la anulación de su pasaporte.</p>
                </div>
              </div>

              <div className="privacy-item">
                <div className="privacy-media" aria-hidden style={{backgroundImage: `url('images/panels/privacy4.jpg')`}}></div>
                <div className="privacy-text">
                  <h3>🗣️ Debate</h3>
                  <p>Se generó un intenso debate global sobre la vigilancia gubernamental, la seguridad nacional y la esfera privada.</p>
                </div>
              </div>

              <div className="privacy-item">
                <div className="privacy-media" aria-hidden style={{backgroundImage: `url('images/panels/privacy5.jpg')`}}></div>
                <div className="privacy-text">
                  <h3>⚖️ Repercusiones</h3>
                  <p>Legislaciones como la Freedom Act en EE.UU. intentaron limitar la vigilancia tras las revelaciones.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="insights">
          <h2 className="insights-title">💭 Reflexiones</h2>
          <div className="bubbles">
            <article className="bubble">
              <h4>🔬 1. ¿Los avances científicos ayudan al ser humano?</h4>
              <p>Sí, actúan como catalizadores del desarrollo. Reducen la latencia en la resolución de problemas críticos (medicina, ingeniería, infraestructura). Son una herramienta de doble filo: el marco ético humano determina si el impacto es constructivo o destructivo.</p>
            </article>

            <article className="bubble">
              <h4>🧭 2. ¿Evolucionamos o involucionamos?</h4>
              <p>Vivimos una evolución asimétrica: la capacidad técnica crece exponencialmente, pero la hiperdependencia de pantallas puede erosionar la atención profunda, la memoria y la calidad de la interacción social.</p>
            </article>

            <article className="bubble">
              <h4>🏭 3. ¿La Revolución Industrial benefició al ser humano?</h4>
              <p>A largo plazo sí, con estandarización y mejoras en salud y producción. Inicialmente los mayores beneficiarios fueron los dueños del capital; la clase trabajadora sufrió explotación antes de consolidar derechos laborales.</p>
            </article>

            <article className="bubble">
              <h4>📰 4. ¿Los medios digitales informan o desinforman?</h4>
              <p>Ambos, pero el modelo de negocio favorece la desinformación: algoritmos de engagement producen cámaras de eco y amplifican fake news, sepultando a veces la verdad objetiva.</p>
            </article>

            <article className="bubble">
              <h4>🌍 5. Globalización y Capitalismo: ¿quién se beneficia?</h4>
              <p>Principalmente grandes corporaciones tecnológicas y propietarios de infraestructura y datos. Aun así, las herramientas digitales también democratizan oportunidades para startups e individuos, aunque con desventajas estructurales.</p>
            </article>
          </div>
        </section>
        <section className="bibliography">
          <div className="bibliography-inner">
            <h2 className="bibliography-title">📚 Bibliografía</h2>
            <ul className="bibliography-list">
              <li><a href="https://www.pce-fet.com/common/library/books/51/9134_FundamentalsofTelecommunications_R.Freeman.pdf" target="_blank" rel="noopener noreferrer">Fundamentals of Telecommunications — R. Freeman (PDF)</a></li>
              <li><a href="https://www.internetsociety.org/wp-content/uploads/2017/10/Fundamentals-of-telecommunications-1.pdf" target="_blank" rel="noopener noreferrer">Fundamentals of Telecommunications — Internet Society (PDF)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Edward_Snowden" target="_blank" rel="noopener noreferrer">Edward Snowden — Wikipedia</a></li>
              <li><a href="https://github.com/iamcryptoki/snowden-archive/tree/master/documents" target="_blank" rel="noopener noreferrer">Snowden Archive — GitHub</a></li>
            </ul>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-inner">
            <p className="footer-author">Autor: <strong>Germán Guevara</strong> 🧑🏻‍💻 — <a href="mailto:germanguevara2496@example.com">germanguevara2496@gmail.com</a> 📧</p>
            <p className="footer-copy">© {new Date().getFullYear()} Principios Básicos e Impacto Social de las Telecomunicaciones</p>
          </div>
        </footer>

      </main>
    </>
  )
}
