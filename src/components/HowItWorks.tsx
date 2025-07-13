import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Avaliação Inicial",
      description: "Questionário personalizado para entender seu perfil, histórico e motivações específicas.",
      duration: "5 minutos",
      features: ["Análise de gatilhos", "Perfil de fumante", "Metas personalizadas"]
    },
    {
      step: "02", 
      title: "Jornada TCC",
      description: "Módulos semanais baseados em Terapia Cognitivo-Comportamental para reestruturar pensamentos.",
      duration: "8-12 semanas",
      features: ["Exercícios práticos", "Técnicas de respiração", "Mindfulness guiado"]
    },
    {
      step: "03",
      title: "Suporte Contínuo",
      description: "Anjo da Guarda disponível 24/7 para momentos de crise e comunidade de apoio ativa.",
      duration: "Sempre disponível",
      features: ["Chatbot inteligente", "Comunidade ativa", "Mentores experientes"]
    },
    {
      step: "04",
      title: "Manutenção",
      description: "Ferramentas para manter-se livre do cigarro e prevenir recaídas a longo prazo.",
      duration: "Vida toda",
      features: ["Prevenção de recaídas", "Acompanhamento médico", "Suporte psicológico"]
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            📋 Metodologia Comprovada
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Como Funciona Nossa <span className="text-healing">Abordagem</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Nossa metodologia foi desenvolvida por psicólogos especializados e testada com milhares de usuários. 
            Cada etapa é fundamental para seu sucesso duradouro.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-l-4 border-l-primary shadow-soft hover:shadow-success transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{step.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {step.duration}
                      </Badge>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {step.description}
                    </CardDescription>
                  </div>
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Iniciar Minha Jornada Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;