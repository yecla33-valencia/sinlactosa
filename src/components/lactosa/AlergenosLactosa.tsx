const alergenos = [
  "Gluten",
  "Huevos",
  "Crustáceos",
  "Pescado",
  "Soja",
  "Moluscos",
  "Lácteos",
  "Cacahuetes",
  "Frutos cáscara",
  "Sulfitos",
  "Apio",
  "Mostaza",
  "Sésamo",
];

const productos = [
  { nombre: "Básica", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Clásica", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Cheese", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Pollo", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Cheese & Bacon", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Pollo Suprema", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Sweet Chili", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Completísima", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Crispy Onion", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Grandiosa", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Gourmet", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Queso de Cabra", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Chef", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Cremosa", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "4 Quesos", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Foie", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Thai", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Apple", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Beef and Ribs", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "The Special", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Ribs", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
  { nombre: "Menphis", valores: ["✓", "✓", "·", "·", "✓", "·", "✓", "·", "✓", "✓", "·", "✓", "✓"] },
];

const AlergenosLactosa = () => {
  return (
    <section id="alergenos" className="py-24 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-5 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-[0.2em] uppercase">
            Información alimentaria
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] text-balance">
            Carta de alérgenos
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base md:text-lg leading-relaxed">
            Información sobre alérgenos presentes en nuestros productos.
          </p>
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-foreground/10">
                <th className="text-left py-4 px-3 font-display font-semibold text-foreground sticky left-0 bg-secondary/40 z-10">
                  Producto
                </th>
                {alergenos.map((a) => (
                  <th
                    key={a}
                    className="text-center py-4 px-2 font-display font-semibold text-foreground whitespace-nowrap"
                  >
                    {a}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, idx) => (
                <tr
                  key={producto.nombre}
                  className={`border-b border-foreground/5 transition-colors hover:bg-foreground/5 ${
                    idx % 2 === 0 ? "bg-background/50" : ""
                  }`}
                >
                  <td className="py-3.5 px-3 font-medium text-foreground sticky left-0 bg-inherit z-10 whitespace-nowrap">
                    {producto.nombre}
                  </td>
                  {producto.valores.map((v, i) => (
                    <td key={i} className="text-center py-3.5 px-2 text-foreground/80">
                      {v === "✓" ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs">
                          ✓
                        </span>
                      ) : (
                        <span className="text-muted-foreground text-sm">·</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary font-bold text-xs">
              ✓
            </span>
            <span>Contiene alérgeno</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-muted-foreground text-sm">·</span>
            <span>No contiene</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlergenosLactosa;
