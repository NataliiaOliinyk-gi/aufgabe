In dieser Aufgabe ist wichtig, keine Mutation vorzunehmen, also weder das ursprüngliche Array noch die ursprünglichen Objekte direkt zu verändern.

**Verwendete Methoden / Sprachelemente**

1. **Array.map**

- Ich verwende `products.map(...)`, um über alle Produkte zu iterieren.

- `map` erstellt immer ein neues Array, anstatt das vorhandene zu verändern.

- Für jedes Produkt entscheide ich:

    - wenn `product.id === productId` => neues Objekt mit reduziertem Preis zurückgeben,

    - sonst => das ursprüngliche Produkt zurückgeben.

2. **Vergleich `product.id === productId`**

- Damit identifiziere ich genau das Produkt, bei dem der Rabatt angewendet werden soll.

3. **Berechnung des Rabatts**

- `product.price * 0.9 bedeutet`:

    - 10 % Rabatt => der neue Preis sind 90 % des ursprünglichen Preises.

4. Spread-Operator `{ ...product, price: discountedPrice }`

- Mit dem Spread-Operator erstelle ich ein neues Objekt, das alle Eigenschaften des ursprünglichen Produkts übernimmt `(...product)`,

- überschreibe anschließend nur das Feld price mit dem rabattierten Wert.

- Dadurch bleibt das alte Objekt unverändert (keine Mutation), was für funktionale und vorhersagbare State-Updates wichtig ist

5. **Unveränderte Produkte zurückgeben**

- Für Produkte mit anderer ID gebe ich einfach product zurück.

- Auch sie werden in das neue Array übernommen, ohne dass das Original-Array selbst verändert wird.