import { Character } from "../models/all.characters";

export function CardCharacter() {
  return (
    <>
      <li className="character col" />
      <div className="card character__card" />
      <img
        src="img/no-one.jpg"
        alt="Nombre y familia del personaje"
        className="character__picture card-img-top"
      />
      <div className="card-body" />
      <h2 className="character__name card-title h4">Nombre y familia</h2>
      <div className="character__info" />
      <ul className="list-unstyled" />
      <li>Edad: X años</li>
      <li>
        Estado:
        <i className="fas fa-thumbs-down"></i>
        <i className="fas fa-thumbs-up"></i>
      </li>
    </>
  );
}
