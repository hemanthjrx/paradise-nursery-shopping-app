import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plantCategories = [
  {
    category: "Tropical Plants",
    plants: [
      {
        id: "monstera",
        name: "Monstera Deliciosa",
        price: 24.99,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "fiddle-leaf-fig",
        name: "Fiddle Leaf Fig",
        price: 29.99,
        image:
          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "bird-of-paradise",
        name: "Bird of Paradise",
        price: 34.99,
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "rubber-plant",
        name: "Rubber Plant",
        price: 22.99,
        image:
          "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "areca-palm",
        name: "Areca Palm",
        price: 27.99,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f2360af9e4?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "calathea",
        name: "Calathea Orbifolia",
        price: 19.99,
        image:
          "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    category: "Low-Maintenance Plants",
    plants: [
      {
        id: "snake-plant",
        name: "Snake Plant",
        price: 18.99,
        image:
          "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "zz-plant",
        name: "ZZ Plant",
        price: 21.99,
        image:
          "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "pothos",
        name: "Golden Pothos",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "jade-plant",
        name: "Jade Plant",
        price: 16.99,
        image:
          "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "aloe-vera",
        name: "Aloe Vera",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f2360af9e4?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "spider-plant",
        name: "Spider Plant",
        price: 13.99,
        image:
          "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    category: "Flowering Plants",
    plants: [
      {
        id: "peace-lily",
        name: "Peace Lily",
        price: 20.99,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "anthurium",
        name: "Anthurium",
        price: 25.99,
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "orchid",
        name: "Orchid",
        price: 28.99,
        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "african-violet",
        name: "African Violet",
        price: 15.99,
        image:
          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "bromeliad",
        name: "Bromeliad",
        price: 23.99,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "begonia",
        name: "Begonia",
        price: 17.99,
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isAdded = (plantId) =>
    cartItems.some((item) => item.id === plantId);

  return (
    <main className="products-page">
      <div className="page-heading">
        <p className="eyebrow">Grow something beautiful</p>
        <h1>Our Plant Collection</h1>
        <p>Choose happy, healthy plants for every room in your home.</p>
      </div>

      {plantCategories.map(({ category, plants }) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants.map((plant) => {
              const added = isAdded(plant.id);

              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-card-content">
                    <h3>{plant.name}</h3>
                    <p className="plant-price">${plant.price.toFixed(2)}</p>
                    <button
                      className="add-button"
                      disabled={added}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {added ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}