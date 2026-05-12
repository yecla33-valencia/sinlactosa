import { X, Info } from "lucide-react";
import { useState } from "react";

const valores = [
  {
    nombre: "Burrito Proteico Burger",
    calorias: "~1050 kcal",
    proteinas: "~69 g",
    carbohidratos: "~47 g",
    grasas: "~65 g",
  },
  {
    nombre: "Burrito Proteico California",
    calorias: "~820 kcal",
    proteinas: "~73 g",
    carbohidratos: "~45 g",
    grasas: "~38 g",
  },
  {
    nombre: "Burrito Proteico Carnitas",
    calorias: "~950 kcal",
    proteinas: "~65 g",
    carbohidratos: "~50 g",
    grasas: "~55 g",
  },
  {
    nombre: "Burrito Proteico San Francisco",
    calorias: "~880 kcal",
    proteinas: "~60 g",
    carbohidratos: "~55 g",
    grasas: "~45 g",
  },
  {
    nombre: "Protein Trufado",
    calorias: "~1050 kcal",
    proteinas: "~60 g",
    carbohidratos: "~50 g",
    grasas: "~70 g",
  },
];

const ValoresNutricionalesLactosa = () => {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <section id="valores-nutricionales" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-[0.2em] uppercase">
            Información nutricional
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground mt-4">
            Valores nutricionales
          </h2>
          <p className="text-muted-foreground mt-3">
            Valores aproximados por unidad. Pueden variar ligeramente según el montaje.
          </p>
          <button
            onClick={() => setModalAbierto(true)}
            className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-glow hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 rounded-full h-11 px-6 py-2 text-sm font-medium tracking-tight"
          >
            <Info className="w-4 h-4" />
            Ver valores detallados
          </button>
        </div>
      </div>

      {modalAbierto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-3"
          onClick={() => setModalAbierto(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="valores-titulo"
        >
          <div
            className="relative bg-background rounded-2xl border border-border/50 shadow-soft w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-1.5 text-center sm:text-left">
              <span className="inline-block w-fit px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-[0.2em] uppercase">
                Información nutricional
              </span>
              <h2
                id="valores-titulo"
                className="font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground"
              >
                Valores nutricionales de nuestros burritos
              </h2>
              <p className="text-sm text-muted-foreground">
                Valores aproximados por unidad. Pueden variar ligeramente según el montaje.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {valores.map((item) => (
                <article
                  key={item.nombre}
                  className="bg-card rounded-2xl border border-border/50 shadow-soft p-5 flex flex-col gap-3"
                >
                  <h3 className="font-display font-semibold text-foreground text-lg leading-tight tracking-tight">
                    {item.nombre}
                  </h3>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-1">
                    <li>
                      <span className="font-medium text-foreground">Calorías:</span>{" "}
                      {item.calorias}
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Proteínas:</span>{" "}
                      {item.proteinas}
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Carbohidratos:</span>{" "}
                      {item.carbohidratos}
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Grasas:</span>{" "}
                      {item.grasas}
                    </li>
                  </ul>
                </article>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setModalAbierto(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 p-1"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5 text-foreground" />
              <span className="sr-only">Cerrar</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ValoresNutricionalesLactosa;