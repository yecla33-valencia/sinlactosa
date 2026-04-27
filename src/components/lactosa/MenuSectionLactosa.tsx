const products = [
  {
    name: "Paleo Bacon Guacamole Burger",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2023/05/xPaleo-bacon-guacamole-p-400x300.jpg.pagespeed.ic.2jPEfY9VyW.webp",
  },
  {
    name: "Paleo Beef Ribs Burger",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2023/05/xPaleo-beef-ribs-p-400x300.jpg.pagespeed.ic.1mgQulqqgh.webp",
  },
  {
    name: "Paleo Cheese Burger",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2023/05/xPaleo-cheese-p-400x300.jpg.pagespeed.ic.MUomWUS4MS.webp",
  },
  {
    name: "Paleo Completa Burger",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2023/05/xPaleo-completa-p-400x300.jpg.pagespeed.ic.bTwuS38R2Z.webp",
  },
  {
    name: "Paleo Mex Burger",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2023/05/xPaleo-Mex-p-400x300.jpg.pagespeed.ic._V9ZYyUrjw.webp",
  },
  {
    name: "Paleo Trufada Burger",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2023/05/xPaleo-trufada-p-400x300.jpg.pagespeed.ic.uJw_VLmhD4.webp",
  },
];

const MenuSectionLactosa = () => {
  return (
    <section id="menu" className="py-24 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-5 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-[0.2em] uppercase">
            Nuestra Carta
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] text-balance">
            6 hamburguesas sin lactosa en el menú
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base md:text-lg leading-relaxed">
            Cada hamburguesa está pensada para sorprenderte, sin lácteos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card rounded-3xl overflow-hidden border border-border/50 shadow-soft hover-lift transition-smooth"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 flex items-center justify-between gap-3">
                <h3 className="font-display font-semibold text-foreground text-lg leading-tight tracking-tight">
                  {product.name}
                </h3>
                <p className="text-primary font-bold text-lg whitespace-nowrap font-sans">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSectionLactosa;
