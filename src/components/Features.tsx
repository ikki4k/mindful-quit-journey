import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageCircle, Trophy, Users, BarChart3, Calendar, Shield, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "TCC Personalizada",
      description: "Jornada baseada em Terapia Cognitivo-Comportamental, adaptada ao seu perfil e gatilhos específicos.",
      badge: "Científico"
    },
    {
      icon: MessageCircle,
      title: "Anjo da Guarda 24/7",
      description: "Chatbot inteligente que te apoia nos momentos de fissura com técnicas de respiração e motivação.",
      badge: "IA Avançada"
    },
    {
      icon: Trophy,
      title: "Gamificação Motivadora",
      description: "Conquiste medalhas, cultive seu jardim virtual e celebre cada marco da sua jornada.",
      badge: "Engajamento"
    },
    {
      icon: Users,
      title: "Comunidade de Apoio",
      description: "Conecte-se com pessoas na mesma jornada e tenha mentores que já venceram o vício.",
      badge: "Suporte"
    },
    {
      icon: BarChart3,
      title: "Dashboard Inteligente",
      description: "Acompanhe seu progresso, economia financeira e melhorias na saúde em tempo real.",
      badge: "Analytics"
    },
    {
      icon: Calendar,
      title: "Terapia Profissional",
      description: "Acesso facilitado a psicólogos especializados quando você precisar de apoio extra.",
      badge: "Premium"
    },
    {
      icon: Shield,
      title: "Dados Seguros",
      description: "Privacidade total com criptografia avançada e conformidade com LGPD.",
      badge: "Segurança"
    },
    {
      icon: Smartphone,
      title: "App Nativo",
      description: "Interface otimizada para mobile com notificações inteligentes e modo offline.",
      badge: "Mobile"
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            🚀 Tecnologia de Ponta
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Funcionalidades que <span className="text-primary">Transformam Vidas</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Cada recurso foi desenvolvido com base em evidências científicas e feedback de milhares de usuários que conquistaram sua liberdade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-success transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;