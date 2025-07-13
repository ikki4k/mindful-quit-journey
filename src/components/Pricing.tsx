import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Building } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "para sempre",
      description: "Perfeito para começar sua jornada",
      icon: Star,
      popular: false,
      features: [
        "3 primeiros módulos de TCC",
        "Rastreador básico de progresso",
        "Anjo da Guarda (limitado)",
        "Comunidade básica",
        "Dashboard simples"
      ],
      cta: "Começar Grátis",
      variant: "outline"
    },
    {
      name: "Premium",
      price: "R$ 29,90",
      period: "por mês",
      description: "Solução completa para sua liberdade",
      icon: Crown,
      popular: true,
      features: [
        "Todos os módulos de TCC",
        "Anjo da Guarda 24/7 completo",
        "Gamificação avançada",
        "Comunidade + mentores",
        "Dashboard analítico completo",
        "Consultas com psicólogos",
        "Plano personalizado de recaída",
        "Suporte prioritário",
        "Modo offline"
      ],
      cta: "Assinar Premium",
      variant: "hero"
    },
    {
      name: "Corporativo",
      price: "R$ 15",
      period: "por funcionário/mês",
      description: "Para empresas que cuidam do bem-estar",
      icon: Building,
      popular: false,
      features: [
        "Todos os recursos Premium",
        "Dashboard administrativo",
        "Relatórios de progresso da equipe",
        "Workshops personalizados",
        "Suporte dedicado",
        "Integração com RH",
        "Campanhas internas",
        "ROI detalhado"
      ],
      cta: "Falar com Consultor",
      variant: "healing"
    }
  ];

  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            💰 Planos Flexíveis
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Escolha Seu <span className="text-primary">Plano de Liberdade</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comece gratuitamente e evolua conforme sua jornada. Todos os planos incluem nossa garantia de 30 dias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-2 shadow-soft hover:shadow-success transition-all duration-300 hover:-translate-y-1 ${
              plan.popular ? 'border-primary scale-105' : 'border-border'
            }`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  plan.popular ? 'bg-gradient-hero' : 'bg-muted'
                }`}>
                  <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-muted-foreground'}`} />
                </div>
                
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="space-y-1">
                  <div className="text-3xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">/{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.variant as any} 
                  className="w-full" 
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-6">
          <div className="text-sm text-muted-foreground">
            🔒 Pagamento seguro • 📱 Cancele quando quiser • 🎯 Garantia de 30 dias
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-success">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de sucesso</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-healing">R$ 5.000</div>
              <div className="text-sm text-muted-foreground">Economia média anual</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">6 meses</div>
              <div className="text-sm text-muted-foreground">Tempo médio para liberdade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;