import { 
  Database, BarChart3, FileText, TrendingUp, 
  Target, Lightbulb, ArrowRight, CheckCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Cleaning & Preparation',
      description: 'Transform raw, messy data into clean, structured datasets ready for analysis.',
      features: [
        'Data validation and error correction',
        'Duplicate removal and standardization',
        'Data type conversion and formatting',
        'Missing value handling strategies'
      ],
      deliverables: 'Clean datasets, data quality reports, documentation'
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description: 'Create compelling visual stories from your data using Excel, Power BI, and modern tools.',
      features: [
        'Interactive dashboards creation',
        'Custom chart and graph design',
        'KPI tracking and monitoring',
        'Real-time data visualization'
      ],
      deliverables: 'Power BI dashboards, Excel reports, visual presentations'
    },
    {
      icon: FileText,
      title: 'Report Creation',
      description: 'Comprehensive business reports that translate data insights into actionable recommendations.',
      features: [
        'Executive summary reports',
        'Detailed analytical findings',
        'Trend analysis and forecasting',
        'Automated reporting systems'
      ],
      deliverables: 'PDF reports, Excel dashboards, presentation slides'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Leverage historical data to forecast trends and predict future business outcomes.',
      features: [
        'Sales forecasting models',
        'Customer behavior analysis',
        'Market trend prediction',
        'Risk assessment analytics'
      ],
      deliverables: 'Forecasting models, predictive reports, trend analysis'
    },
    {
      icon: Target,
      title: 'Business Intelligence',
      description: 'Transform your business operations with data-driven insights and strategic recommendations.',
      features: [
        'Performance metric analysis',
        'Operational efficiency optimization',
        'Customer segmentation analysis',
        'Competitive market analysis'
      ],
      deliverables: 'BI dashboards, strategic reports, actionable insights'
    },
    {
      icon: Lightbulb,
      title: 'Actionable Business Insights',
      description: 'Convert complex data patterns into clear, actionable business recommendations.',
      features: [
        'Data-driven decision support',
        'Strategic planning assistance',
        'Process improvement recommendations',
        'ROI optimization strategies'
      ],
      deliverables: 'Insight reports, recommendation documents, strategy plans'
    }
  ];

  const caseStudy = {
    title: 'E-commerce Analytics Success Story',
    description: 'Comprehensive data analysis for an e-commerce platform to optimize sales performance and marketing strategies.',
    challenges: [
      'Tracking sales performance across multiple channels',
      'Understanding customer behavior patterns',
      'Optimizing marketing spend allocation',
      'Forecasting revenue and inventory needs'
    ],
    solutions: [
      'Built integrated Power BI dashboard for real-time sales tracking',
      'Developed customer segmentation model using SQL and Excel',
      'Created marketing ROI analysis with automated reporting',
      'Implemented sales forecasting model with 85% accuracy'
    ],
    results: [
      '25% increase in conversion rates',
      '30% improvement in marketing ROI',
      '40% reduction in inventory waste',
      '90% faster decision-making process'
    ]
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            What I Offer
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Services & <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive data analytics services designed to transform your business data into 
            strategic advantages and measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="card-portfolio group h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-primary">Deliverables:</span> {service.deliverables}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="card-portfolio">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold mb-4">{caseStudy.title}</h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {caseStudy.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Challenges */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-destructive">Challenges</h4>
              <ul className="space-y-3">
                {caseStudy.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Solutions</h4>
              <ul className="space-y-3">
                {caseStudy.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-accent">Results</h4>
              <ul className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Ready to Transform Your Data?
            </h3>
            <p className="text-muted-foreground mb-8">
              Let's discuss how these services can help solve your specific business challenges 
              and drive measurable results.
            </p>
            <Button onClick={scrollToContact} className="btn-hero group">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;