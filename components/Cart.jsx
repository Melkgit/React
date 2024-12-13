import React from "react";

const Cart = ({ cart, handleRemove }) => {
  // Calcula o total do carrinho
  const total = cart.reduce((sum, game) => sum + game.price, 0);

  return (
    <div className="container">
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
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
              {cart.map((game, index) => (
                <tr key={game.id}>
                  <td>
                    <img
                      src={game.img}
                      alt={game.name}
                      width="50"
                      style={{ borderRadius: "5px" }}
                    />
                  </td>
                  <td>{game.name}</td>
                  <td>R$ {game.price.toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => handleRemove(index)}
                      style={{
                        backgroundColor: "#d9534f",
                        color: "#fff",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.backgroundColor = "#c9302c")}
                      onMouseLeave={(e) => (e.target.style.backgroundColor = "#d9534f")}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: R$ {total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
