import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Clock, Code, Database, Brain, Zap, Briefcase, Award, Users, Star } from 'lucide-react';

const CoursesPage: React.FC = () => {
  const courses = [
    {
      id: 'full-stack',
      icon: <Code className="w-10 h-10" />,
      title: 'Full Stack Development',
      subtitle: 'Become a complete developer',
      duration: '6 Months',
      projects: '15+ Projects',
      placement: '95% Placement Rate',
      description: 'Master end-to-end web development with modern technologies. Build scalable applications from scratch and deploy them to the cloud.',
      highlights: ['React & Modern Frontend', 'Node.js & Express', 'Database Design', 'Cloud Deployment', 'DevOps Basics'],
      skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'],
      career: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Web Developer'],
      color: 'blue'
    },
    {
      id: 'data-analytics',
      icon: <Database className="w-10 h-10" />,
      title: 'Data Analytics',
      subtitle: 'Turn data into decisions',
      duration: '4 Months',
      projects: '10+ Projects',
      placement: '92% Placement Rate',
      description: 'Learn to analyze data, create visualizations, and derive actionable business insights using industry-standard tools and techniques.',
      highlights: ['Data Analysis with Python', 'SQL Mastery', 'Data Visualization', 'Business Intelligence', 'Statistical Analysis'],
      skills: ['Python', 'SQL', 'Tableau', 'PowerBI', 'Excel', 'Pandas', 'Statistics', 'ML Basics'],
      career: ['Data Analyst', 'Business Analyst', 'BI Developer', 'Data Visualization Specialist'],
      color: 'green'
    },
    {
      id: 'ai-automation',
      icon: <Brain className="w-10 h-10" />,
      title: 'AI & Automation',
      subtitle: 'Master the future of work',
      duration: '3 Months',
      projects: '8+ Projects',
      placement: '88% Placement Rate',
      description: 'Understand how to leverage AI tools and automation to boost productivity. Learn prompt engineering and build AI-powered applications.',
      highlights: ['AI Tools Mastery', 'Prompt Engineering', 'Automation Scripts', 'Workflow Optimization', 'AI Integration'],
      skills: ['ChatGPT', 'Python', 'Automation', 'APIs', 'Notion', 'Zapier', 'LLMs', 'LangChain'],
      career: ['AI Tool Specialist', 'Automation Engineer', 'Productivity Analyst', 'AI Integration Developer'],
      color: 'purple'
    },
    {
      id: 'backend',
      icon: <Zap className="w-10 h-10" />,
      title: 'Backend Engineering',
      subtitle: 'Build robust server systems',
      duration: '5 Months',
      projects: '12+ Projects',
      placement: '90% Placement Rate',
      description: 'Deep dive into backend development with focus on scalability, security, and performance. Master APIs, databases, and server architecture.',
      highlights: ['API Development', 'Database Architecture', 'Authentication', 'Performance Optimization', 'Microservices'],
      skills: ['Python', 'Java', 'Go', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes'],
      career: ['Backend Developer', 'API Developer', 'Systems Engineer', 'DevOps Engineer'],
      color: 'orange'
    },
    {
      id: 'qa',
      icon: <Check className="w-10 h-10" />,
      title: 'Quality Assurance',
      subtitle: 'Ensure software excellence',
      duration: '3 Months',
      projects: '8+ Projects',
      placement: '85% Placement Rate',
      description: 'Learn both manual and automated testing. Master test frameworks and ensure software quality across the development lifecycle.',
      highlights: ['Manual Testing', 'Test Automation', 'Selenium', 'API Testing', 'Performance Testing'],
      skills: ['Selenium', 'Cypress', 'Postman', 'Jest', 'Jira', 'SQL', 'Python', 'CI/CD'],
      career: ['QA Engineer', 'Test Automation Engineer', 'SDET', 'Quality Analyst'],
      color: 'teal'
    },
    {
      id: 'cloud',
      icon: <Briefcase className="w-10 h-10" />,
      title: 'Cloud Computing',
      subtitle: 'Deploy at scale',
      duration: '4 Months',
      projects: '10+ Projects',
      placement: '87% Placement Rate',
      description: 'Master cloud platforms and deployment strategies. Learn infrastructure as code, containers, and cloud-native development.',
      highlights: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'Infrastructure as Code', 'CI/CD Pipelines', 'Serverless'],
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab', 'Linux', 'Python'],
      career: ['Cloud Engineer', 'DevOps Engineer', 'Site Reliability Engineer', 'Cloud Architect'],
      color: 'indigo'
    }
  ];

  return (
    <div className="pt-20 pb-16 bg-white">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Career Programs
            </h1>
            <p className="text-slate-500 text-sm md:text-base mb-6 max-w-xl">
              Choose from our industry-focused programs designed to make you job-ready in 3-6 months. Every program includes hands-on projects, expert mentoring, and placement support.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="w-4 h-4 text-green-600" />
                <span>Industry-Ready Skills</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="w-4 h-4 text-green-600" />
                <span>Placement Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="w-4 h-4 text-green-600" />
                <span>Expert Mentors</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: '6', label: 'Career Programs' },
              { value: '5000+', label: 'Students Placed' },
              { value: '85%', label: 'Placement Rate' },
              { value: '100+', label: 'Hiring Partners' }
            ].map((stat, idx) => (
              <div key={idx} className="p-3 border border-slate-200 bg-slate-50 text-center">
                <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-[10px] text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <div key={course.id} className="border border-slate-200 bg-white hover:border-slate-400 transition-all flex flex-col">
                <div className="p-5 border-b border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-500">{course.duration}</span>
                  <span className="text-xs text-green-600 font-medium">{course.placement}</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 flex items-center justify-center ${
                    course.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    course.color === 'green' ? 'bg-green-50 text-green-600' :
                    course.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                    course.color === 'orange' ? 'bg-orange-50 text-orange-600' :
                    course.color === 'teal' ? 'bg-teal-50 text-teal-600' :
                    'bg-indigo-50 text-indigo-600'
                  }`}>
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{course.title}</h3>
                    <p className="text-xs text-slate-500">{course.subtitle}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm">{course.description}</p>
              </div>
              
              <div className="p-5 flex-grow">
                <div className="mb-3">
                  <span className="text-xs text-slate-500 mb-2 block">What you will learn</span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.highlights.slice(0, 4).map((highlight, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-slate-500 mb-2 block">Career options</span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.career.map((career, i) => (
                      <span key={i} className="px-2 py-0.5 bg-green-50 text-green-700 text-xs">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Code className="w-3 h-3" />
                    <span>{course.projects}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Users className="w-3 h-3" />
                    <span>{Math.floor(Math.random() * 500 + 500)} enrolled</span>
                  </div>
                </div>
                <Link to="/courses" className="block w-full py-2.5 bg-slate-900 text-white text-center text-sm font-medium hover:bg-slate-800 transition-colors">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 max-w-7xl mx-auto mb-12 bg-slate-50 py-12 border-y border-slate-200">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Why Choose Growthbricks?</h2>
          <p className="text-slate-500 text-sm max-w-xl">
            Our programs are designed to make you succeed in the real world.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Award, title: 'Industry Recognized', desc: 'Certificates valued by 100+ hiring partners across India.' },
            { icon: Users, title: 'Expert Mentors', desc: 'Learn from industry veterans with 10+ years of experience.' },
            { icon: Briefcase, title: 'Placement Support', desc: 'Dedicated career support until you land your dream job.' }
          ].map((reason, idx) => (
            <div key={idx} className="p-4 bg-white border border-slate-200">
              <reason.icon className="w-6 h-6 text-slate-900 mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1 text-sm">{reason.title}</h3>
              <p className="text-xs text-slate-500">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-3xl mx-auto mb-12">
        <div className="bg-slate-900 p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Not Sure Which Program to Choose?</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Our career counselors will help you choose the right path. Book a free consultation today.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-white text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors">
            Book Free Consultation
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
