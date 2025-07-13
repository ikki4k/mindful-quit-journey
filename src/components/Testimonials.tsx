import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: 34,
      smokingTime: "15 anos",
      freeTime: "8 meses",
      text: "Tentei parar de fumar várias vezes, mas só consegui com o QuitGenius. O Anjo da Guarda me salvou em momentos de recaída. Hoje me sinto livre e saudável!",
      rating: 5,
      savings: "R$ 3.200"
    },
    {
      name: "João Santos",
      age: 42,
      smokingTime: "20 anos",
      freeTime: "1 ano",
      text: "A abordagem da TCC fez toda diferença. Aprendi a identificar meus gatilhos e desenvolvi estratégias reais para lidar com eles. Vida nova!",
      rating: 5,
      savings: "R$ 7.300"
    },
    {
      name: "Ana Carolina",
      age: 28,
      smokingTime: "10 anos",
      freeTime: "6 meses",
      text: "A comunidade é incrível! Ter pessoas passando pela mesma luta e mentores que já venceram me deu força para continuar. Método realmente eficaz.",
      rating: 5,
      savings: "R$ 2.800"
    },
    {
      name: "Ricardo Oliveira",
      age: 38,
      smokingTime: "18 anos",
      freeTime: "10 meses",
      text: "O dashboard me motivava todos os dias. Ver o dinheiro economizado e a melhoria na minha saúde em números reais foi fundamental para minha vitória.",
      rating: 5,
      savings: "R$ 5.400"
    },
    {
      name: "Camila Rocha",
      age: 31,
      smokingTime: "12 anos",
      freeTime: "7 meses",
      text: "Fumava 2 maços por dia. Achei que seria impossível parar, mas o QuitGenius me provou o contrário. Hoje sou uma pessoa completamente diferente!",
      rating: 5,
      savings: "R$ 4.900"
    },
    {
      name: "Felipe Costa",
      age: 45,
      smokingTime: "25 anos",
      freeTime: "2 anos",
      text: "Depois de 25 anos fumando, consegui parar definitivamente. O suporte psicológico integrado fez toda a diferença. Recomendo para todos!",
      rating: 5,
      savings: "R$ 12.000"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            💬 Histórias Reais
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vidas <span className="text-success">Transformadas</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Conheça pessoas reais que conquistaram sua liberdade e mudaram suas vidas para sempre com nossa plataforma.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-success transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-success text-success" />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                  "{testimonial.text}"
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.age} anos</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Fumou por:</div>
                      <div className="font-medium">{testimonial.smokingTime}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Livre há:</div>
                      <div className="font-medium text-success">{testimonial.freeTime}</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <div className="text-sm text-muted-foreground">Economizou:</div>
                    <div className="text-lg font-bold text-success">{testimonial.savings}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Sua história de sucesso pode ser a próxima!</p>
          <div className="flex justify-center items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>+10.000 pessoas livres</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-healing rounded-full"></div>
              <span>98% taxa de sucesso</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>R$ 50M+ economizados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;