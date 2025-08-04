import { AuroraText } from "./magicui/aurora-text";
import { NumberTicker } from "./magicui/number-ticker";

export default function StatsSection() {
  return (
    <section id="sobre">
      <div className="bg-muted/50 py-24 dark:bg-[#0a0a0a]">
        <div className="mx-auto max-w-5xl px-6">
          <div>
            <h2 className="text-4xl font-semibold lg:text-5xl">
              <div className="flex items-center gap-2">
                {" "}
                <h1 className="font-bold">AutoManager em números</h1>{" "}
              </div>{" "}
              
            </h2>
            <p className="text-muted-foreground mt-4 text-balance text-lg">
              Em breve, AutoManager vai transformar a forma como oficinas
              gerenciam seus serviços, aumentando a eficiência e facilitando o
              dia a dia de mecânicos e gestores.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-12 md:mt-16 md:grid-cols-4">
            <div>
              <div className="text-foreground text-3xl font-bold"><NumberTicker value={20} />+</div>
              <p className="text-muted-foreground">
                Funcionalidades pensadas para otimizar a gestão da sua oficina
              </p>
            </div>
            <div>
              <div className="text-foreground text-3xl font-bold"><NumberTicker value={76} />%</div>
              <p className="text-muted-foreground">
                Estimativa de aumento na produtividade das oficinas que adotarem
                AutoManager
              </p>
            </div>
            <div>
              <div className="text-foreground text-3xl font-bold"><NumberTicker value={24}/>/<NumberTicker value={7}/></div>
              <p className="text-muted-foreground">
                Atendimento dedicado para garantir que você nunca fique na mão
              </p>
            </div>
            <div>
              <div className="text-foreground text-3xl font-bold"><AuroraText><NumberTicker value={1000} />+</AuroraText></div>
              <p className="text-muted-foreground">
                Oficinas que esperamos impactar com AutoManager em todo o país
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
