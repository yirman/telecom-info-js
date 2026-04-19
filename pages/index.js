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
          <div>
            <h1 className="title">Principios Básicos e Impacto Social de las Telecomunicaciones</h1>
            <p className="subtitle">Infografía básica — proporcione contenido para cada sección abajo</p>
          </div>
        </section>

        <section className="infographic">
          <div className="info-grid" role="list">
            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>Señal</h3>
              <p>Variación de energía o corriente que transporta información de un punto a otro.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>Señal Analógica</h3>
              <p>Representa datos mediante valores continuos que varían suavemente en el tiempo.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>Señal Digital</h3>
              <p>Representa datos mediante saltos de valores discretos (generalmente ceros y unos).</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>Señal Aleatoria</h3>
              <p>Variación impredecible en el tiempo que no obedece a un patrón matemático exacto.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>Muestreo (Sampling)</h3>
              <p>Proceso de capturar valores de una señal analógica a intervalos regulares para digitalizarla.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>Ancho de Banda (Bandwidth)</h3>
              <p>Rango de frecuencias de un canal; determina la cantidad máxima de datos por segundo.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>Espectro (Spectrum)</h3>
              <p>Conjunto continuo de todas las frecuencias electromagnéticas posibles utilizadas para la transmisión.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>Ruido (Noise)</h3>
              <p>Alteraciones aleatorias e indeseadas en el medio físico que distorsionan la señal original.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>Interferencia (Interference)</h3>
              <p>Perturbación en la comunicación causada por la intromisión de otras señales o emisiones externas.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>Capacidad del Canal (Channel Capacity)</h3>
              <p>Tasa máxima teórica a la que se puede transmitir información sin errores por una vía de comunicación.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>BER (Tasa de Error de Bits)</h3>
              <p>Porcentaje de bits que se reciben alterados respecto al total de bits enviados.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>Modulación (Modulation)</h3>
              <p>Técnica de alterar una onda portadora para transportar información a largas distancias.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>Multiplexación (Multiplexing)</h3>
              <p>Combinar múltiples señales para transmitirlas simultáneamente por un único canal.</p>
            </div>

            <div className="card" role="listitem">
              <div className="card-image" aria-hidden></div>
              <h3>Duplexación (Duplexing)</h3>
              <p>Método que permite que un canal transmita y reciba datos (comunicación bidireccional).</p>
            </div>
          </div>
        </section>

        <section className="slide">
          <nav>
            <input className="slide-input" type="radio" id="slideCheckbox1" name="slides" defaultChecked />
            <label className="slide-button" htmlFor="slideCheckbox1" style={{fontSize: '1.5vw'}}>Antes de la electricidad</label>

            <input className="slide-input" type="radio" id="slideCheckbox2" name="slides" />
            <label className="slide-button" htmlFor="slideCheckbox2" style={{fontSize: '1.5vw'}}>1800–1900</label>

            <input className="slide-input" type="radio" id="slideCheckbox3" name="slides" />
            <label className="slide-button" htmlFor="slideCheckbox3" style={{fontSize: '1.5vw'}}>1900–1950</label>

            <input className="slide-input" type="radio" id="slideCheckbox4" name="slides" />
            <label className="slide-button" htmlFor="slideCheckbox4" style={{fontSize: '1.5vw'}}>1950–1970</label>

            <input className="slide-input" type="radio" id="slideCheckbox5" name="slides" />
            <label className="slide-button" htmlFor="slideCheckbox5" style={{fontSize: '1.5vw'}}>1970–2000</label>

            <input className="slide-input" type="radio" id="slideCheckbox6" name="slides" />
            <label className="slide-button" htmlFor="slideCheckbox6" style={{fontSize: '1.5vw'}}>Más allá</label>
          </nav>
        </section>

        <section className="export-note">
          <p>Run <code>npm run export</code> to build static HTML in <code>out/</code>.</p>
        </section>
      </main>
    </>
  )
}
