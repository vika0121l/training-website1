function Morphology() {
  return (
    <main className="container px-4 py-4">
      <article>
        <section>
          <h3 className="h3 text-primary">Зовнішній вигляд</h3>
          <p>Сніговий барс має сіро-біле товсте хутро з численними плямами на голові і шиї.</p>
        </section>
        <section>
          <h3 className="h3 text-primary">Особливості будови</h3>
          <ul>
            <li>Вагою зазвичай від 35 кг до 55 кг, сніговий барс трохи менший в середньому, ніж леопард.</li>
            <li>Довжина голови і тіла становить 99-130 см, висота плеча становить близько 60 см.</li>
            <li>Хвіст має довжину 81-99 см — найдовший серед усіх котячих, якщо порівнювати з розмірами тіла.</li>
          </ul>
        </section>
        <figure className="text-center">
          <img src="../images/comfortable-snow-leopard-cub.webp" alt="Зайці на лузі" className="img-fluid rounded my-4"/>
          <figcaption className="text-muted">Молодий Сніговий барс</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Morphology;