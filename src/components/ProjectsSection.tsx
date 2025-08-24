import { 
  Clock, Cpu, Droplets, ExternalLink, 
  Github, Calendar, Tag, ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Automatic Timetable Announcement System',
      period: '2018 – 2019',
      category: 'Automation & IoT',
      description: 'Developed an intelligent system that automatically announces class schedules in schools and colleges, reducing manual effort and improving communication efficiency.',
      features: [
        'Voice announcement system integration',
        'Automated schedule management',
        'Real-time timetable updates',
        'Multi-language support capability',
        'User-friendly admin interface'
      ],
      technologies: ['Arduino', 'C++', 'Audio Processing', 'Database Management'],
      challenges: [
        'Creating clear, natural-sounding voice announcements',
        'Handling schedule conflicts and last-minute changes',
        'Ensuring system reliability during peak hours'
      ],
      impact: [
        'Reduced manual announcement errors by 95%',
        'Saved 2+ hours daily for administrative staff',
        'Improved student attendance and punctuality'
      ],
      status: 'Completed',
      icon: Clock
    },
    {
      title: 'Smart Plant Monitoring System',
      period: '2023 – 2024',
      category: 'IoT & AI',
      description: 'IoT-based automated plant care system with AI-powered health detection, providing intelligent watering schedules and plant health monitoring for optimal growth.',
      features: [
        'Soil moisture sensor integration',
        'AI-powered plant health analysis',
        'Automated watering system',
        'Mobile app notifications',
        'Environmental data logging',
        'Growth tracking and analytics'
      ],
      technologies: ['IoT Sensors', 'Machine Learning', 'Python', 'Mobile App', 'Cloud Analytics'],
      challenges: [
        'Developing accurate plant health detection algorithms',
        'Calibrating sensors for different plant species',
        'Creating efficient water management systems'
      ],
      impact: [
        'Increased plant survival rate by 85%',
        'Reduced water waste by 40%',
        'Enabled remote plant monitoring capabilities'
      ],
      status: 'Completed',
      icon: Droplets
    }
  ];

  const upcomingProjects = [
    {
      title: 'E-commerce Analytics Dashboard',
      description: 'Comprehensive analytics platform for tracking sales, customer behavior, and market trends',
      status: 'Planning'
    },
    {
      title: 'Predictive Maintenance System',
      description: 'AI-powered system for predicting equipment failures and optimizing maintenance schedules',
      status: 'In Development'
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Portfolio Showcase
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of innovative projects that demonstrate my ability to solve complex problems 
            through technology, data analysis, and creative engineering solutions.
          </p>
        </div>

        {/* Main Projects */}
        <div className="space-y-12 mb-20">
          {projects.map((project, index) => (
            <div key={index} className="card-portfolio">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Overview */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <project.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-serif font-bold">{project.title}</h3>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{project.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Challenges */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-destructive">Challenges Overcome</h4>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <Cpu className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-accent">Project Impact</h4>
                      <ul className="space-y-2">
                        {project.impact.map((impact, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span className="font-medium">{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="card-portfolio">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold mb-4">Upcoming Projects</h3>
            <p className="text-muted-foreground">
              Currently working on exciting new projects that push the boundaries of data analytics and automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, index) => (
              <div key={index} className="bg-secondary/50 border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, innovative ideas, and opportunities 
              to create impactful solutions together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={scrollToContact} className="btn-hero group">
                Discuss a Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;