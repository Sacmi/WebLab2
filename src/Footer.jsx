const Footer = () => (
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <span className="text-muted">
        © 2022 Лабораторная работа №2 «Банк АВТ-913»
      </span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3">
        <ul className="nav flex-column">
          <h5>Разработали</h5>
          <li className="nav-item mb-2">
            <span className="nav-link p-0 text-muted">Ануфриев Игорь</span>
          </li>
          <li className="nav-item mb-2">
            <span className="nav-link p-0 text-muted">Гребенкин Алексей</span>
          </li>
        </ul>
      </li>
      <li className="ms-5">
        <ul className="nav flex-column">
          <h5>Группа</h5>
          <li className="nav-item mb-2">
            <span className="nav-link p-0 text-muted">АВТ-913</span>
          </li>
        </ul>
      </li>
    </ul>
  </footer>
);

export default Footer;
