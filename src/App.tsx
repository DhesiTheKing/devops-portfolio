import React, { useState, useEffect } from 'react';
import { 
  User, 
  Settings, 
  Wrench, 
  TestTube, 
  Rocket, 
  Monitor,
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Code,
  Server,
  Shield,
  Cloud,
  Container,
  Terminal,
  Award,
  Coffee,
  ArrowRight
} from 'lucide-react';
import PipelineStage from './components/PipelineStage';
import TechBadge from './components/TechBadge';
import TerminalLog from './components/TerminalLog';
import ProjectCard from './components/ProjectCard';

function App() {
  const [activeStage, setActiveStage] = useState(0);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const stages = [
    { id: 0, title: 'Init', icon: User, description: 'Initialize Profile' },
    { id: 1, title: 'Skills Scan', icon: Settings, description: 'Analyze Skills & Tools' },
    { id: 2, title: 'Build', icon: Wrench, description: 'Compile Experience' },
    { id: 3, title: 'Test', icon: TestTube, description: 'Validate Projects' },
    { id: 4, title: 'Deploy', icon: Rocket, description: 'Release Certifications' },
    { id: 5, title: 'Monitor', icon: Monitor, description: 'Track Connections' }
  ];

  const terminalLogs = {
    0: [
      'Initializing DevOps Engineer profile...',
      'Loading personal information...',
      'Profile initialized successfully ✓'
    ],
    1: [
      'Scanning for technical skills...',
      'Analyzing programming languages...',
      'Evaluating cloud platforms...',
      'Skills scan completed ✓'
    ],
    2: [
      'Building experience timeline...',
      'Compiling professional achievements...',
      'Experience build successful ✓'
    ],
    3: [
      'Running project tests...',
      'Validating GitHub repositories...',
      'All tests passed ✓'
    ],
    4: [
      'Deploying certifications...',
      'Packaging achievements...',
      'Deployment successful ✓'
    ],
    5: [
      'Monitoring contact channels...',
      'Social links are active...',
      'Monitoring setup complete ✓'
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!completedStages.includes(activeStage)) {
        setCompletedStages(prev => [...prev, activeStage]);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [activeStage, completedStages]);

  const getStageStatus = (stageId: number) => {
    if (completedStages.includes(stageId)) return 'success';
    if (stageId === activeStage) return 'running';
    return 'pending';
  };

  const scrollToStage = (stageId: number) => {
    setActiveStage(stageId);
    const element = document.getElementById(`stage-${stageId}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold">DevOps Pipeline</h1>
            </div>
            
            <nav className="hidden lg:flex space-x-2">
              {stages.map((stage) => (
                <PipelineStage
                  key={stage.id}
                  stage={stage.id + 1}
                  title={stage.title}
                  status={getStageStatus(stage.id)}
                  isActive={activeStage === stage.id}
                  onClick={() => scrollToStage(stage.id)}
                />
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400">
                Build #{Math.floor(Math.random() * 1000) + 100}
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Stage 0: Init - Introduction */}
        <section id="stage-0" className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-red-400 font-mono text-sm">
                    <Terminal className="w-4 h-4" />
                    <span>$ whoami</span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Dhesigan L
                  </h1>
                  <p className="text-xl text-gray-300">
                    He/Him • DevOps Engineer & Cybersecurity Enthusiast
                  </p>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Skilled in <span className="text-blue-400 font-semibold">Python</span> and <span className="text-orange-400 font-semibold">Java</span>, 
                    with hands-on experience in Linux, CI/CD, containerization, and cloud platforms including OCI & AWS.
                  </p>
                  <p className="text-lg">
                    Passionate about automation, security, reliability, and continuous learning in the DevOps ecosystem.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <TechBadge name="Python" color="blue" icon={<Code />} />
                  <TechBadge name="Java" color="orange" icon={<Code />} />
                  <TechBadge name="Linux" color="gray" icon={<Terminal />} />
                  <TechBadge name="DevOps" color="green" icon={<Server />} />
                  <TechBadge name="Security" color="red" icon={<Shield />} />
                </div>

                <div className="flex items-center space-x-4">
                  <ArrowRight className="w-5 h-5 text-red-400" />
                  <span className="text-sm text-gray-400">Scroll to explore the pipeline</span>
                </div>
              </div>

              <div className="space-y-6">
                <TerminalLog logs={terminalLogs[0]} isVisible={activeStage === 0} />
                
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-red-400" />
                    Current Status
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Role:</span>
                      <span className="text-green-400">DevOps Engineer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Focus:</span>
                      <span className="text-blue-400">Automation & Security</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Currently Learning:</span>
                      <span className="text-yellow-400">Terraform, Azure, GCP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stage 1: Skills Scan */}
        <section id="stage-1" className="min-h-screen flex items-center justify-center px-4 bg-gray-800/20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 mr-3 text-red-400" />
                Skills & Tools Analysis
              </h2>
              <p className="text-gray-300 text-lg">Technical arsenal and proficiency levels</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <TerminalLog logs={terminalLogs[1]} isVisible={activeStage === 1} />
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Code className="w-5 h-5 mr-2 text-blue-400" />
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <TechBadge name="Python" color="blue" />
                    <TechBadge name="Java" color="orange" />
                    <TechBadge name="Shell Scripting" color="green" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Server className="w-5 h-5 mr-2 text-green-400" />
                    CI/CD & Automation
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <TechBadge name="Jenkins" color="red" />
                    <TechBadge name="GitHub Actions" color="gray" />
                    <TechBadge name="Git" color="orange" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Cloud className="w-5 h-5 mr-2 text-purple-400" />
                    Cloud Platforms
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <TechBadge name="AWS" color="yellow" />
                    <TechBadge name="Oracle Cloud (OCI)" color="red" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Container className="w-5 h-5 mr-2 text-blue-400" />
                    Containerization
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <TechBadge name="Docker" color="blue" />
                    <TechBadge name="Kubernetes" color="purple" />
                    <TechBadge name="Helm" color="green" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Terminal className="w-5 h-5 mr-2 text-gray-400" />
                    Operating Systems & Tools
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <TechBadge name="Linux (Ubuntu, RHEL)" color="gray" />
                    <TechBadge name="Windows" color="blue" />
                    <TechBadge name="NGINX" color="green" />
                    <TechBadge name="Postman" color="orange" />
                    <TechBadge name="Terraform" color="purple" />
                    <TechBadge name="Mendix" color="blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stage 2: Build - Experience */}
        <section id="stage-2" className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
                <Wrench className="w-8 h-8 mr-3 text-red-400" />
                Professional Experience
              </h2>
              <p className="text-gray-300 text-lg">Building robust systems and optimizing workflows</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <TerminalLog logs={terminalLogs[2]} isVisible={activeStage === 2} />
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">DevOps Engineer</h3>
                      <p className="text-red-400 font-medium">Current Role</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div>Present</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Automated build and deployment processes, reducing deployment time by implementing efficient CI/CD pipelines</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Created and maintained Helm charts for Kubernetes deployments, ensuring consistent and scalable application delivery</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Configured and optimized Jenkins jobs for continuous integration and deployment workflows</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Collaborated with development teams to improve delivery pipelines and implement DevOps best practices</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Key Achievements</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">95%</div>
                      <div className="text-sm text-gray-400">Deployment Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">60%</div>
                      <div className="text-sm text-gray-400">Faster Deployments</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">24/7</div>
                      <div className="text-sm text-gray-400">System Monitoring</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                      <div className="text-sm text-gray-400">Uptime Achieved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stage 3: Test - Projects */}
        <section id="stage-3" className="min-h-screen flex items-center justify-center px-4 bg-gray-800/20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
                <TestTube className="w-8 h-8 mr-3 text-red-400" />
                Projects & Contributions
              </h2>
              <p className="text-gray-300 text-lg">Validated solutions and innovative implementations</p>
            </div>

            <div className="space-y-8">
              <div className="lg:w-1/2">
                <TerminalLog logs={terminalLogs[3]} isVisible={activeStage === 3} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <ProjectCard
                  title="Kubernetes Mendix App Deployment"
                  description="Deployed Mendix applications on Amazon EKS using Kubernetes orchestration. Implemented auto-scaling, load balancing, and monitoring solutions for production-ready deployment."
                  technologies={['Kubernetes', 'AWS EKS', 'Mendix', 'Helm', 'Docker']}
                  githubUrl="https://github.com/DhesiTheKing"
                />

                <ProjectCard
                  title="CI/CD Python Web Application"
                  description="Built comprehensive CI/CD pipeline for Python web application using Jenkins and Docker. Automated testing, security scanning, and deployment processes."
                  technologies={['Jenkins', 'Docker', 'Python', 'GitHub Actions', 'AWS']}
                  githubUrl="https://github.com/DhesiTheKing"
                />

                <ProjectCard
                  title="Network Packet Sniffer & Tracker"
                  description="Developed a Python GUI application for network packet analysis and tracking, similar to Wireshark. Features real-time packet capture and protocol analysis."
                  technologies={['Python', 'Tkinter', 'Wireshark', 'Network Analysis', 'GUI']}
                  githubUrl="https://github.com/DhesiTheKing"
                />

                <ProjectCard
                  title="Cybersecurity Toolkit"
                  description="Created security tools including Bluetooth scanner and intrusion detection system. Focused on network security monitoring and vulnerability assessment."
                  technologies={['Python', 'Network Security', 'Bluetooth', 'IDS', 'Cybersecurity']}
                  githubUrl="https://github.com/DhesiTheKing"
                />
              </div>

              <div className="text-center">
                <a
                  href="https://github.com/DhesiTheKing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 px-6 py-3 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View All Projects on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stage 4: Deploy - Certifications & Interests */}
        <section id="stage-4" className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
                <Rocket className="w-8 h-8 mr-3 text-red-400" />
                Certifications & Interests
              </h2>
              <p className="text-gray-300 text-lg">Continuous learning and professional development</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <TerminalLog logs={terminalLogs[4]} isVisible={activeStage === 4} />
              </div>

              <div className="space-y-8">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-400" />
                    Certifications
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-yellow-600/10 border border-yellow-600/30 rounded">
                      <span className="text-yellow-300 font-medium">AWS Cloud Practitioner</span>
                      <span className="text-sm text-gray-400">Certified</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Coffee className="w-5 h-5 mr-2 text-green-400" />
                    Current Interests
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-red-400" />
                      <span className="text-gray-300">Cloud Security & DevSecOps</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Terminal className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Ethical Hacking & Penetration Testing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Server className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Infrastructure as Code (IaC)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Currently Learning</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-purple-300">Terraform</span>
                        <span className="text-sm text-gray-400">75%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-blue-300">Microsoft Azure</span>
                        <span className="text-sm text-gray-400">60%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-green-300">Google Cloud Platform</span>
                        <span className="text-sm text-gray-400">45%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stage 5: Monitor - Contact & Social */}
        <section id="stage-5" className="min-h-screen flex items-center justify-center px-4 bg-gray-800/20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
                <Monitor className="w-8 h-8 mr-3 text-red-400" />
                Connect & Monitor
              </h2>
              <p className="text-gray-300 text-lg">Stay connected and track my latest updates</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <TerminalLog logs={terminalLogs[5]} isVisible={activeStage === 5} />
              </div>

              <div className="space-y-8">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Let's Connect</h3>
                  <div className="space-y-4">
                    <a
                      href="https://www.linkedin.com/in/dhesigan02"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-blue-600/10 border border-blue-600/30 rounded-lg hover:bg-blue-600/20 transition-colors"
                    >
                      <Linkedin className="w-6 h-6 text-blue-400" />
                      <div>
                        <div className="font-medium text-white">LinkedIn</div>
                        <div className="text-sm text-gray-400">Professional Network</div>
                      </div>
                    </a>

                    <a
                      href="https://github.com/DhesiTheKing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-gray-600/10 border border-gray-600/30 rounded-lg hover:bg-gray-600/20 transition-colors"
                    >
                      <Github className="w-6 h-6 text-gray-400" />
                      <div>
                        <div className="font-medium text-white">GitHub</div>
                        <div className="text-sm text-gray-400">Code Repositories</div>
                      </div>
                    </a>

                    <a
                      href="mailto:your_email@example.com"
                      className="flex items-center space-x-3 p-3 bg-red-600/10 border border-red-600/30 rounded-lg hover:bg-red-600/20 transition-colors"
                    >
                      <Mail className="w-6 h-6 text-red-400" />
                      <div>
                        <div className="font-medium text-white">Email</div>
                        <div className="text-sm text-gray-400">Direct Contact</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Download Resume</h3>
                  <button className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg transition-colors">
                    <Download className="w-5 h-5" />
                    <span>Download PDF Resume</span>
                  </button>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Pipeline Status</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Build Status:</span>
                      <span className="text-green-400">✓ Successful</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Last Updated:</span>
                      <span className="text-white">{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-green-400">&lt; 24h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg p-2">
          <div className="flex justify-between">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <button
                  key={stage.id}
                  onClick={() => scrollToStage(stage.id)}
                  className={`flex flex-col items-center space-y-1 p-2 rounded transition-colors ${
                    activeStage === stage.id ? 'bg-red-600/20 text-red-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{stage.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;