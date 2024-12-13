import React from "react";

// Importando as imgsss
import forzaImage from '../assets/img-xbox02.jpg';
import haloImage from '../assets/img-xbox01.jpg';
import codImage from '../assets/img-xbox03.jpg';
import flightImage from '../assets/img-xbox04.jpg';
import heartImage from '../assets/img-xbox05.jpg';
import goatImage from '../assets/img-xbox06.jpg';
import southImage from '../assets/img-xbox07.jpg';
import spiritImage from '../assets/img-xbox08.jpg';
import nineImage from '../assets/img-xbox09.jpg';
import clansImage from '../assets/img-xbox10.jpg';

// Lista de jogos com imagens dos joguinhos
const gamesList = [
  { id: 1, name: "Forza Horizon 5", price: 149.99, img: forzaImage },
  { id: 2, name: "Halo Infinite", price: 59.99, img: haloImage },
  { id: 3, name: "Call of Duty Black Ops 6", price: 29.99, img: codImage },
  { id: 4, name: "Microsoft Flight Simulator", price: 79.99, img: flightImage },
  { id: 5, name: "S.T.A.L.K.E.R. 2 Heart of Chornobyl", price: 259.99, img: heartImage },
  { id: 6, name: "Goat Simulator", price: 112.89, img: goatImage },
  { id: 7, name: "South Park™ A Fenda que Abunda Força", price: 39.99, img: southImage },
  { id: 8, name: "Spirit of the North", price: 9.99, img: spiritImage },
  { id: 9, name: "Nine Sols", price: 112.99, img: nineImage },
  { id: 10, name: "MechWarrior 5 Clans", price: 184.90, img: clansImage },
];

const Games = ({ handleAddToCart }) => (
  <div className="container2">
    <h2>Lista de Jogos</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {gamesList.map((game) => (
          <tr key={game.id}>
            <td><img src={game.img} alt={game.name} width="50" /></td>
            <td>{game.name}</td>
            <td>R$ {game.price.toFixed(2)}</td>
            <td>
              <button onClick={() => handleAddToCart(game)}>Adicionar ao Carrinho</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Games;
