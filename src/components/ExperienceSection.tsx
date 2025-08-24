import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Dexter Head',
      company: 'Ekart Logistics',
      location: 'Bengaluru, India',
      period: 'Jul 2023 – Jul 2025',
      type: 'Full-time',
      responsibilities: [
        'Managed end-to-end logistics operations for efficient package delivery',
        'Implemented task monitoring systems to track operational performance',
        'Conducted quality checks to maintain service standards',
        'Coordinated returns processing and delivery optimization',
        'Collaborated with cross-functional teams to improve operational efficiency'
      ],
      achievements: [
        'Improved delivery efficiency by 15% through process optimization',
        'Reduced return processing time by 30%',
        'Maintained 98% customer satisfaction rating'
      ]
    },
    {
      title: 'Senior Analyst',
      company: 'Stellar Innovation Pvt Ltd',
      location: 'Bengaluru, India',
      period: 'Aug 2020 – Jul 2023',
      type: 'Full-time',
      responsibilities: [
        'Managed legal and vesting processes for property transactions',
        'Conducted comprehensive property searches using advanced databases',
        'Executed AVR (Automated Valuation Reports) processes',
        'Utilized online tools including Data Trace, Data Tree, and Title Point',
        'Maintained strong proficiency in MS Office suite and PDF editing'
      ],
      achievements: [
        'Processed 500+ property documents with 99.5% accuracy',
        'Reduced document processing time by 40%',
        'Trained 5+ junior analysts on data management tools',
        'Implemented quality control processes that improved team efficiency'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Professional Journey
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Over 5+ years of experience in data analysis, logistics management, and process optimization 
            across different industries.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card-experience group">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="lg:col-span-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold">{exp.title}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {exp.type}
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="lg:col-span-3 space-y-6">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                          <p className="text-sm font-medium">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills gained summary */}
        <div className="mt-16 text-center">
          <div className="card-portfolio max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-6">Skills Developed</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Data Analysis', 'Process Optimization', 'Quality Control', 
                'Team Leadership', 'Client Relations', 'Document Management',
                'Database Management', 'Logistics Coordination', 'Problem Solving'
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;