import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Call to Action Section */}
        <div className="text-center bg-gradient-hero rounded-3xl p-12 mb-16 text-white">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            ✨ Sua Nova Vida Começa Hoje
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Ser Livre do Cigarro?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas. 
            Comece gratuitamente agora mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Começar Jornada Grátis
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Falar com Especialista
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-success rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="text-xl font-bold text-foreground">QuitGenius</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tecnologia e ciência trabalhando juntas para ajudar você a conquistar sua liberdade do cigarro de forma definitiva.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Produto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Funcionalidades</a></li>
              <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#planos" className="hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Download App</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Atualizações</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Suporte</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Comunidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status do Sistema</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contato</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@quitgenius.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 3000-1234</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 QuitGenius. Todos os direitos reservados.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">LGPD</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>🔒 Site Seguro</span>
            <span>🏥 Aprovado por Médicos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;