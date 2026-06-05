import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="hero-section">
      <div className="container py-5">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-7">
            <h1 className="display-4 fw-bold">Tasuta mängude leht</h1>
            <p className="lead hero-text mt-3">
              Leia uusi tasuta mänge, otsi neid nime järgi, filtreeri žanri järgi ja lisa parimad mängud lemmikutesse.
            </p>
            <div className="d-flex gap-3 mt-4 flex-wrap">
              <Link to="/games" className="btn btn-primary btn-lg">
                Vaata mänge
              </Link>
              <Link to="/favorites" className="btn btn-outline-light btn-lg">
                Minu lemmikud
              </Link>
            </div>
          </div>

          <div className="col-lg-5 mt-5 mt-lg-0">
            <div className="home-card shadow-lg">
              <h2>Avasta tasuta mänge</h2>
              <p>
                Vali endale sobiv mäng, vaata detaile ja salvesta lemmikud hilisemaks vaatamiseks.
              </p>
              <Link to="/games" className="btn btn-outline-info">
                Alusta otsimist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
