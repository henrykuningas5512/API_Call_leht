function About() {
  return (
    <main className="container py-4">
      <section className="details-box shadow-lg">
        <h1 className="fw-bold">Projektist</h1>
        <p>
          See on API-call-põhine mitmeleheküljeline rakendus. Rakendus on loodud Reacti,
          TypeScripti, React Routeri, Axiosi ja Bootstrapiga.
        </p>

        <h2 className="mt-4">Täidetud nõuded</h2>
        <ul>
          <li>Kasutab välist API-t: Free-to-Play Games API</li>
          <li>Rakenduses on mitu vaadet: avaleht, mängud, detailid, lemmikud ja projektist</li>
          <li>Andmeid saab kuvada listina</li>
          <li>Olemas on otsing, filtreerimine ja sorteerimine</li>
          <li>Olemas on detailvaade ühe mängu kohta</li>
          <li>Olemas on kasutajasõbralik navigeerimine React Routeriga</li>
          <li>API päringutel on loading state ja error handling</li>
          <li>Lemmikud salvestatakse localStorage abil</li>
          <li>UI kasutab Bootstrap raamistikku ja on responsive</li>
        </ul>
      </section>
    </main>
  );
}

export default About;
