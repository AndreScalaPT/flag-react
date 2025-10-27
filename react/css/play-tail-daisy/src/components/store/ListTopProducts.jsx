import Product from "./Product";

export default function ListTopProducts({ ListTopProductsInStore }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {(() => {
        if (ListTopProductsInStore && ListTopProductsInStore.length > 0) {
          const products = [];

          for (let i = 0; i < ListTopProductsInStore.length; i++) {
            const { id, img, cardTitle, cardDescription } = ListTopProductsInStore[i];

            const product = (
              <Product
                key={id}
                id={id}
                img={img}
                cardTitle={cardTitle}
                cardDescription={cardDescription}
              />
            );

            products.push(product);
          }

          return products;
        } else {
          return (
            <p>
              Lamentamos mas de momento não existem produtos na loja.
            </p>
          );
        }
      })()}
    </ul>
  );
}