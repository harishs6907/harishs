import { 
  Database, BarChart3, FileSpreadsheet, Eye, 
  Zap, Search, FileText, Keyboard, 
  Gamepad2, TrendingUp, Brain, Users 
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Data Analytics',
      description: 'Core analytical tools and techniques',
      skills: [
        { name: 'Excel', icon: FileSpreadsheet, level: 95 },
        { name: 'Power BI', icon: BarChart3, level: 90 },
        { name: 'SQL', icon: Database, level: 85 },
        { name: 'Data Visualization', icon: Eye, level: 90 },
        { name: 'Advanced Excel', icon: Zap, level: 95 }
      ]
    },
    {
      title: 'Technical Skills',
      description: 'Software and technical proficiencies',
      skills: [
        { name: 'PDF Editing', icon: FileText, level: 90 },
        { name: 'Data Search Tools', icon: Search, level: 85 },
        { name: 'Data Management', icon: Database, level: 88 },
        { name: 'MS Office Suite', icon: FileSpreadsheet, level: 95 }
      ]
    },
    {
      title: 'Soft Skills',
      description: 'Personal and professional attributes',
      skills: [
        { name: 'Problem Solving', icon: Brain, level: 92 },
        { name: 'Fast Typing (35+ WPM)', icon: Keyboard, level: 85 },
        { name: 'Content Creation', icon: Gamepad2, level: 80 },
        { name: 'Team Collaboration', icon: Users, level: 90 }
      ]
    }
  ];

  const tools = [
    'Data Trace', 'Data Tree', 'Title Point', 'Excel Power Query',
    'Power BI Desktop', 'SQL Server', 'Google Analytics', 'Tableau'
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            My Expertise
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Skills & <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set developed through years of hands-on experience in data analysis, 
            business intelligence, and process optimization.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-portfolio">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold mb-3">{category.title}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <skill.icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="card-portfolio">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold mb-3">Tools & Technologies</h3>
            <p className="text-muted-foreground">Software and platforms I work with regularly</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="skill-item">
                <span className="text-sm font-medium text-center">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: TrendingUp, title: 'Data-Driven', desc: 'Decisions based on insights' },
            { icon: Brain, title: 'Analytical', desc: 'Deep problem analysis' },
            { icon: Zap, title: 'Efficient', desc: 'Optimized workflows' },
            { icon: Users, title: 'Collaborative', desc: 'Team-oriented approach' }
          ].map((strength, index) => (
            <div key={index} className="skill-item text-center">
              <strength.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{strength.title}</h4>
              <p className="text-sm text-muted-foreground">{strength.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;