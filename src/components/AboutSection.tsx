import { BookOpen, MapPin, Heart, Code, Car, Camera } from 'lucide-react';

const AboutSection = () => {
  const interests = [
    { icon: Code, label: 'Gaming' },
    { icon: Car, label: 'Long Drives' },
    { icon: Camera, label: 'Content Creation' },
    { icon: BookOpen, label: 'Learning New Tech' },
  ];

  const education = [
    {
      year: '2024',
      title: 'Bachelor of Computer Applications (BCA)',
      description: 'Graduated with comprehensive knowledge in computer science fundamentals',
      status: 'Graduated'
    },
    {
      year: '2019',
      title: 'Diploma in Computer Science & Engineering',
      description: 'Technical foundation in programming and software development',
      score: '64%'
    },
    {
      year: '2016',
      title: '10th Standard',
      description: 'Secondary education with focus on mathematics and sciences',
      score: '65%'
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Get To Know Me
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born and raised in Bengaluru, I'm a passionate Data Analyst who believes in the power of data 
            to drive meaningful change and business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <div className="space-y-8">
            <div className="card-portfolio">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-serif font-semibold">My Journey</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Harish S, born and raised in the vibrant city of Bengaluru, is a passionate Data Analyst 
                  with a deep love for transforming complex datasets into actionable business insights.
                </p>
                <p>
                  When I'm not diving deep into data analysis, you'll find me exploring the latest gaming trends, 
                  taking long drives around the city to unwind, creating engaging content, or learning about 
                  emerging technologies that can enhance my analytical capabilities.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving, ensuring that every 
                  data story I tell not only informs but also inspires action.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="card-portfolio">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-serif font-semibold">Interests & Hobbies</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="skill-item text-center">
                    <interest.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <span className="text-sm font-medium">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="card-portfolio">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-serif font-semibold">Educational Journey</h3>
            </div>
            
            <div className="space-y-1">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold text-lg">{edu.year}</span>
                      {edu.score && (
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {edu.score}
                        </span>
                      )}
                      {edu.status && (
                        <span className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">
                          {edu.status}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold">{edu.title}</h4>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;