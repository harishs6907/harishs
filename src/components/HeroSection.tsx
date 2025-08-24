import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import harishProfile from '@/assets/harish-profile.jpg';

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen hero-bg flex items-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 floating-element opacity-20">
        <div className="w-16 h-16 border-2 border-primary rounded-lg rotate-45"></div>
      </div>
      <div className="absolute bottom-32 left-16 floating-element opacity-10" style={{ animationDelay: '2s' }}>
        <div className="w-8 h-8 bg-primary rounded-full"></div>
      </div>
      <div className="absolute top-1/2 right-32 floating-element opacity-15" style={{ animationDelay: '4s' }}>
        <div className="w-12 h-12 border border-primary rounded-full"></div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Welcome to my Portfolio
              </p>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
                Harish <span className="text-gradient">S</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Data Analyst & Problem Solver
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Transforming Data into Insights. Passionate about turning complex data into actionable business intelligence through advanced analytics, visualization, and strategic thinking.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToWork} className="btn-hero group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={scrollToContact} variant="outline" className="btn-outline">
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary glow-effect">
                <img 
                  src={harishProfile} 
                  alt="Harish S - Data Analyst" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-primary rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary rounded-lg opacity-10 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;