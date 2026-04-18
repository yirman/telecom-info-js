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
          <div className="info-grid">
            <div className="card">
              <h3>Conectividad</h3>
              <p>Breve descripción sobre acceso y redes.</p>
            </div>
            <div className="card">
              <h3>Infraestructura</h3>
              <p>Breve descripción sobre torres, fibra y equipos.</p>
            </div>
            <div className="card">
              <h3>Regulación</h3>
              <p>Breve descripción sobre políticas y normativa.</p>
            </div>
            <div className="card">
              <h3>Impacto Social</h3>
              <p>Breve descripción sobre educación, salud y economía.</p>
            </div>
          </div>
        </section>

        <section className="export-note">
          <p>Run <code>npm run export</code> to build static HTML in <code>out/</code>.</p>
        </section>
      </main>
    </>
  )
}
