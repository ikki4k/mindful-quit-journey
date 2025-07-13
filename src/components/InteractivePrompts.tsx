import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic, Brain, Heart, Users, Gamepad2, Calendar, Shield, MessageSquare } from "lucide-react";

const InteractivePrompts = () => {
  const prompts = [
    {
      category: "Preparação",
      icon: Mic,
      title: "Motivação Profunda",
      description: "Grave um áudio de 1 minuto para o seu 'eu do futuro', explicando por que parar de fumar é a decisão mais importante da sua vida agora.",
      color: "from-purple-500 to-pink-500",
      action: "Gravar Áudio"
    },
    {
      category: "Preparação",
      icon: Brain,
      title: "Mapa de Gatilhos",
      description: "Durante os próximos 3 dias, sempre que acender um cigarro, toque aqui e nos diga o que você estava sentindo. Vamos criar seu mapa juntos.",
      color: "from-blue-500 to-cyan-500",
      action: "Iniciar Mapeamento"
    },
    {
      category: "Preparação",
      icon: Calendar,
      title: "Planejamento do Dia D",
      description: "Seu 'Dia da Liberdade' está chegando! Vamos criar um 'Plano de Batalha'? Descreva o que você fará no primeiro dia sem cigarro, hora a hora.",
      color: "from-orange-500 to-red-500",
      action: "Criar Plano"
    },
    {
      category: "Primeiros Dias",
      icon: Shield,
      title: "SOS Fissura",
      description: "Sentindo a fissura? Respire fundo. Inicie agora nosso exercício de respiração guiada de 3 minutos. A vontade vai passar.",
      color: "from-red-500 to-orange-500",
      action: "Respirar Agora"
    },
    {
      category: "Primeiros Dias",
      icon: Heart,
      title: "Recompensa Imediata",
      description: "Você venceu o primeiro dia! O dinheiro que economizou hoje já pode comprar um café especial. Que tal se presentear?",
      color: "from-green-500 to-emerald-500",
      action: "Ver Economia"
    },
    {
      category: "Primeiros Dias",
      icon: Brain,
      title: "Visualização da Saúde",
      description: "Já se passaram 48 horas! Seu olfato e paladar estão começando a melhorar. Veja uma animação de como suas terminações nervosas estão se regenerando.",
      color: "from-teal-500 to-blue-500",
      action: "Ver Progresso"
    },
    {
      category: "Manutenção",
      icon: Gamepad2,
      title: "Marcos e Conquistas",
      description: "UAU! Você completou sua primeira semana! Desbloqueamos a 'Medalha da Perseverança'. Veja todos os marcos incríveis que atingiu.",
      color: "from-yellow-500 to-amber-500",
      action: "Ver Medalhas"
    },
    {
      category: "TCC & IA",
      icon: Brain,
      title: "Reformulação Cognitiva",
      description: "Você pensou: 'Eu preciso de um cigarro para relaxar'. Vamos desafiar esse pensamento com 3 outras maneiras comprovadas de relaxar.",
      color: "from-indigo-500 to-purple-500",
      action: "Reformular"
    },
    {
      category: "TCC & IA",
      icon: MessageSquare,
      title: "Análise Preditiva do Anjo",
      description: "Percebi que você costuma sentir mais vontade às sextas-feiras à noite. Que tal planejarmos uma atividade diferente para hoje?",
      color: "from-cyan-500 to-blue-500",
      action: "Ver Sugestões"
    },
    {
      category: "Comunidade",
      icon: Users,
      title: "Quebra-Gelo",
      description: "Diga 'Oi' na comunidade! Compartilhe qual foi o motivo número 1 que te fez querer parar de fumar.",
      color: "from-teal-500 to-green-500",
      action: "Participar"
    },
    {
      category: "Comunidade",
      icon: Heart,
      title: "Convite para Mentoria",
      description: "Você está há 30 dias sem fumar e se tornou uma inspiração! Gostaria de se tornar um 'Guardião da Liberdade'?",
      color: "from-pink-500 to-rose-500",
      action: "Ser Mentor"
    },
    {
      category: "Gamificação",
      icon: Gamepad2,
      title: "Cuidado com o Jardim",
      description: "Seu 'Jardim da Liberdade' precisa de água! Complete uma tarefa hoje para regá-lo e ver uma nova flor desabrochar.",
      color: "from-lime-500 to-green-500",
      action: "Regar Jardim"
    }
  ];

  const categories = [
    { name: "Preparação", count: 3, color: "bg-purple-100 text-purple-800" },
    { name: "Primeiros Dias", count: 3, color: "bg-red-100 text-red-800" },
    { name: "Manutenção", count: 1, color: "bg-yellow-100 text-yellow-800" },
    { name: "TCC & IA", count: 2, color: "bg-indigo-100 text-indigo-800" },
    { name: "Comunidade", count: 2, color: "bg-teal-100 text-teal-800" },
    { name: "Gamificação", count: 1, color: "bg-lime-100 text-lime-800" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            🎯 Jornada Personalizada
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">37 Prompts Interativos</span> para Sua Transformação
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Cada momento da sua jornada tem um prompt específico para te guiar, motivar e apoiar. 
            Nossa IA sabe exatamente o que você precisa ouvir em cada fase.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Badge key={index} className={`${category.color} px-4 py-2`}>
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {prompts.map((prompt, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 bg-gradient-to-r ${prompt.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <prompt.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {prompt.category}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-lg mb-2">{prompt.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {prompt.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  className={`w-full bg-gradient-to-r ${prompt.color} hover:opacity-90 text-white border-0`}
                  size="sm"
                >
                  {prompt.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              E isso é só o começo...
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Temos mais de <strong>25 prompts adicionais</strong> que se adaptam ao seu progresso, 
              personalidade e necessidades específicas. Nossa IA aprende com você e evolui sua jornada.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">Técnicas de Aversão</Badge>
              <Badge variant="secondary">Autocompaixão</Badge>
              <Badge variant="secondary">Registro de Pensamentos</Badge>
              <Badge variant="secondary">Pedido de Ajuda</Badge>
              <Badge variant="secondary">Cálculo de Sonhos</Badge>
              <Badge variant="secondary">Enfrentando Recaídas</Badge>
              <Badge variant="secondary">Redescobrindo Prazeres</Badge>
              <Badge variant="secondary">Visão de Futuro</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePrompts;