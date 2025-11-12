import type { FC } from "react";

import styles from "./Products.module.css";

// Ein einfaches Produkt-Interface
interface IProduct {
  id: string;
  name: string;
  price: number;
}

// Funktion, die einen 10%-Rabatt auf ein bestimmtes Produkt anwendet
// und eine NEUE Liste von Produkten zurückgibt (ohne das Original zu verändern)
const applyDiscount = (products: IProduct[], productId: string): IProduct[] => {
  // Array.map erzeugt immer ein NEUES Array
  return products.map((product) => {
    // Wenn dieses Produkt die gesuchte ID hat, Rabatt anwenden
    if (product.id === productId) {
      // neuen Preis berechnen (10 % Rabatt => 90 % des ursprünglichen Preises)
      const discountedPrice = product.price * 0.9;

      // mit dem Spread-Operator ein NEUES Objekt erzeugen
      // Original-Objekt wird nicht verändert
      return {
        ...product,
        price: discountedPrice,
      };
    }

    // alle anderen Produkte unverändert zurückgeben
    return product;
  });
};

// Beispiel-Daten - könnten in einer echten Anwendung z.B. aus Props oder aus einem API-Call kommen
const originalProducts: IProduct[] = [
  { id: "1", name: "Laptop", price: 1000 },
  { id: "2", name: "Mouse", price: 50 },
  { id: "3", name: "Keyboard", price: 80 },
  { id: "4", name: "Laptop", price: 1200 },
  { id: "5", name: "Mouse", price: 55 },
  { id: "6", name: "Keyboard", price: 78 },
];

// Anwenden des Rabatts auf Produkt mit id "2"
// applyDiscount liefert eine NEUE Liste zurück, originalProducts bleibt unverändert
const discountedProducts = applyDiscount(originalProducts, "2");

const Products: FC = () => {
    // Liste der ursprünglichen Produkte als JSX-Elemente
  const elementsOriginal = originalProducts.map((product) => (
    <li key={product.id} className={styles.card}>
      {product.name}: {product.price} €
    </li>
  ));

  // Liste der rabattierten Produkte als JSX-Elemente
  const elementsDiscounted = discountedProducts.map((product) => (
    <li key={product.id} className={styles.card}>
      {product.name}: {product.price} €
    </li>
  ));

  return (
    <div>
      <div>
        <h3 className={styles.title}>Original-Liste:</h3>
        {/* Anzeige der ursprünglichen Produktliste */}
        <ul className={styles.cardsContainer}>{elementsOriginal}</ul>
      </div>
      <div>
        <h3 className={styles.title}>Neue Liste mit Rabatt:</h3>
        {/* Anzeige der neuen Produktliste mit rabattiertem Preis für ein Produkt */}
        <ul className={styles.cardsContainer}>{elementsDiscounted}</ul>
      </div>
    </div>
  );
};

export default Products;
