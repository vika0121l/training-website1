import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Population() {
  return (
    <main className="container px-4 py-4">
      <div className="row">
        <aside className="col-md-3">
          <nav className="sticky-top pt-3" aria-label="Зміст сторінки">
            <h2 className="h4">Зміст</h2>
            <ul className="nav flex-column">
              <a href="#continentsList" className="nav-link" data-bs-toggle="collapse">Континенти</a>
              <a href="#subcontinentsList" className="nav-link" data-bs-toggle="collapse">Субконтиненти</a>
              <a href="#countriesList" className="nav-link" data-bs-toggle="collapse">Країни</a>
              <a href="#regionsList" className="nav-link" data-bs-toggle="collapse">Регіони</a>
              <a href="#biogeographicList" className="nav-link" data-bs-toggle="collapse">Біогеографічні зони</a>
              <a href="#biomesList" className="nav-link" data-bs-toggle="collapse">WWF Біоми</a>
            </ul>
          </nav>
        </aside>

        <article className="col-md-9">
          <h2 className="h2 text-primary mb-4">Ареал поширення Снігових барсів</h2>
          
          <section id="continents" className="mt-4">
            <h3>
              <button className="btn btn-primary w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#continentsList" 
                      aria-expanded="false" 
                      aria-controls="continentsList">
                Континенти
              </button>
            </h3>
            <div className="collapse" id="continentsList">
              <ul className="list-group mb-3">
                <li className="list-group-item">Азія</li>
              </ul>
            </div>
          </section>

          <section id="subcontinents" className="mt-4">
            <h3>
              <button className="btn btn-primary w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#subcontinentsList" 
                      aria-expanded="false" 
                      aria-controls="subcontinentsList">
                Субконтиненти
              </button>
            </h3>
            <div className="collapse" id="subcontinentsList">
              <ul className="list-group mb-3">
                <li className="list-group-item">Південна Азія</li>
                <li className="list-group-item">Центральна Азія</li>
              </ul>
            </div>
          </section>

          <section id="countries" className="mt-4">
            <h3>
              <button className="btn btn-primary w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#countriesList" 
                      aria-expanded="false" 
                      aria-controls="countriesList">
                Країни
              </button>
            </h3>
            <div className="collapse" id="countriesList">
              <ul className="list-group mb-3 list-columns">
                <li className="list-group-item">Бутан</li>
                <li className="list-group-item">Китайська Народна Республіка</li>
                <li className="list-group-item">Індія</li>
                <li className="list-group-item">Казахстан</li>
                <li className="list-group-item">Киргизстан</li>
                <li className="list-group-item">Монголія</li>
                <li className="list-group-item">Непал</li>
                <li className="list-group-item">Пакистан</li>
                <li className="list-group-item">Узбекистан</li>
                <li className="list-group-item">Афганістан</li>
              </ul>
            </div>
          </section>

          <section id="regions" className="mt-4">
            <h3>
              <button className="btn btn-primary w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#regionsList" 
                      aria-expanded="false" 
                      aria-controls="regionsList">
                Регіони
              </button>
            </h3>
            <div className="collapse" id="regionsList">
              <ul className="list-group mb-3">
                <li className="list-group-item">Тибетський автономний район</li>
                <li className="list-group-item">Юньнань</li>
              </ul>
            </div>
          </section>

          <section id="biogeographic" className="mt-4">
            <h3>
              <button className="btn btn-primary w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#biogeographicList" 
                      aria-expanded="false" 
                      aria-controls="biogeographicList">
                Біогеографічні зони
              </button>
            </h3>
            <div className="collapse" id="biogeographicList">
              <ul className="list-group mb-3">
                <li className="list-group-item">Палеарктика</li>
                <li className="list-group-item">Індомалайя</li>
              </ul>
            </div>
          </section>

          <section id="biomes" className="mt-4">
            <h3>
              <button className="btn btn-primary w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#biomesList" 
                      aria-expanded="false" 
                      aria-controls="biomesList">
                Біоми WWF
              </button>
            </h3>
            <div className="collapse" id="biomesList">
              <ul className="list-group">
                <li className="list-group-item">Помірні широколистяні та мішані ліси</li>
                <li className="list-group-item">Гірські луки та чагарники</li>
                <li className="list-group-item">Хвойні ліси помірної зони</li>
              </ul>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

export default Population;