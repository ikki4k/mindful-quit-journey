import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-success rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">Q</span>
            </div>
            <span className="text-xl font-bold text-foreground">QuitGenius</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#funcionalidades" className="text-muted-foreground hover:text-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#planos" className="text-muted-foreground hover:text-primary transition-colors">
              Planos
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button variant="hero">Começar Grátis</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#funcionalidades" className="block text-muted-foreground hover:text-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#como-funciona" className="block text-muted-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#depoimentos" className="block text-muted-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#planos" className="block text-muted-foreground hover:text-primary transition-colors">
              Planos
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost">Login</Button>
              <Button variant="hero">Começar Grátis</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;