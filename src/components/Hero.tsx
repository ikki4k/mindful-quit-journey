import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-background via-accent/20 to-healing/10 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              🎯 Método Científico Comprovado
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Pare de Fumar com
                <span className="bg-gradient-hero bg-clip-text text-transparent"> TCC Digital</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Transforme sua vida com nossa plataforma baseada em Terapia Cognitivo-Comportamental. 
                Tenha seu <strong>Anjo da Guarda digital</strong> disponível 24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Começar Jornada Grátis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Play className="mr-2" />
                Ver Demonstração
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-success text-success" />
                  ))}
                </div>
                <span className="ml-2">4.9/5 estrelas</span>
              </div>
              <span>•</span>
              <span>+10.000 pessoas livres do cigarro</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Pessoa respirando ar puro, simbolizando liberdade do cigarro"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-6 shadow-success max-w-xs">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-success">127 dias</div>
                <div className="text-sm text-muted-foreground">sem cigarro</div>
                <div className="text-sm font-medium">R$ 2.540 economizados</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-healing text-healing-foreground rounded-2xl p-4 shadow-soft">
              <div className="text-center">
                <div className="text-xl font-bold">98%</div>
                <div className="text-xs">Taxa de sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;