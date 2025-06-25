import React, { useState, useEffect } from 'react';
import {
    Github, Linkedin, Mail, Download, ExternalLink, Menu, X, ArrowRight,
    Code, Database, Shield, MapPin, Calendar, Coffee, Zap, Globe, Server
} from 'lucide-react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions'; // optional
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: Globe,
            color: 'bg-blue-500',
            skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
            description: 'Building responsive and interactive user interfaces'
        },
        {
            title: 'Backend Development',
            icon: Server,
            color: 'bg-green-500',
            skills: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs'],
            description: 'Creating robust server-side applications'
        },
        {
            title: 'Database & Tools',
            icon: Database,
            color: 'bg-purple-500',
            skills: ['MySQL', 'Git', 'GitHub', 'Maven'],
            description: 'Data management and development workflows'
        },
        {
            title: 'Concepts & Practices',
            icon: Code,
            color: 'bg-orange-500',
            skills: ['OOP', 'MVC Architecture', 'Agile', 'Testing'],
            description: 'Software engineering principles and methodologies'
        }
    ];

    const projects = [
        {
            title: 'Online Bookstore',
            description: 'A comprehensive e-commerce platform with advanced features for book lovers and sellers.',
            tech: ['React', 'Spring Boot', 'MySQL', 'Spring Security'],
            features: ['User Authentication', 'Shopping Cart', 'Payment Integration', 'Admin Panel'],
            github: {
                frontend: 'https://github.com/saurabh6301/BOOKSTORE-WEBSITE',
                backend: ' https://github.com/saurabh6301/WEB-SERVER'
            },
            live: 'https://bookstore-growpath.vercel.app',
            image: '/1734017758192.jpeg'
        },
        {
            title: 'Blog Management System',
            description: 'Modern blogging platform with advanced content management and user roles.',
            tech: ['React', 'Spring Boot', 'Spring Security', 'MySQL'],
            features: ['Role-based Access', 'Rich Text Editor', 'Comment System', 'Admin Dashboard'],
            github: {
                frontend: 'https://github.com/saurabh6301/blogui',
                backend: 'https://github.com/saurabh6301/aibllog'
            },
            live: 'https://your-blog-app.live',
            image: '/1734017752254.jpeg'
        }
    ];
    const services = [
        {
            title: 'Full Stack Development',
            description: 'End-to-end web application development using modern technologies.',
            icon: Code,
            features: ['React.js Frontend', 'Spring Boot Backend', 'Responsive Design', 'API Integration']
        },
        {
            title: 'Database Design',
            description: 'Efficient database architecture and optimization for scalable applications.',
            icon: Database,
            features: ['MySQL Design', 'Query Optimization', 'Data Modeling', 'Performance Tuning']
        },
        {
            title: 'Security Implementation',
            description: 'Robust security solutions with authentication and authorization systems.',
            icon: Shield,
            features: ['Spring Security', 'JWT Authentication', 'Role-based Access', 'Data Protection']
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
            const scrollY = window.scrollY;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMenuOpen(false);
    };
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center h-20">
                        <div className="text-2xl font-bold text-gray-900">
                            Saurabh Pandey
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'skills', 'projects', 'services', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize text-sm font-medium transition-colors ${ activeSection === item
                                        ? 'text-blue-600'
                                        : 'text-gray-600 hover:text-blue-600'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-600 hover:text-blue-600"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t">
                            {['home', 'about', 'skills', 'projects', 'services', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 capitalize"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="text-blue-600 font-medium text-lg">Hello, I'm</div>
                                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">Saurabh Pandey</h1>
                                <h2 className="text-2xl md:text-3xl text-gray-600 font-light">Java Full Stack Developer</h2>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    Passionate about building responsive, scalable, and secure web applications
                                    with modern UI and efficient APIs. Currently pursuing BCA with hands-on
                                    experience in full-stack development.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href="/Saurabh.pdf" download>
                                    <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
                                        <Download size={20} className="mr-2" />
                                        Download Resume
                                    </Button>
                                </a>
                                <a href="#projects">
                                    <Button variant="outline" className="px-8 py-4 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                                        View Projects
                                        <ArrowRight size={20} className="ml-2" />
                                    </Button>
                                </a>
                            </div>

                            <div className="flex space-x-6">
                                <a href="mailto:pandeysaurabh15464@gmail.com" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <Mail size={28} />
                                </a>
                                <a href="https://www.linkedin.com/in/saurabh-pandey-149499281/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <FaLinkedinIn size={28} />
                                </a>
                                <a href="https://github.com/saurabh6301" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <FaGithub size={28} />
                                </a>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:space-x-4 pt-6 items-center sm:items-stretch">
                                <a
                                    href="https://leetcode.com/u/pandeysaurabh15464/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center w-32 mb-4 sm:mb-0"
                                    title="LeetCode Profile"
                                >
                                    <div className="w-8 h-8 bg-orange-500 rounded-xl mx-auto flex items-center justify-center">
                                        <Code className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="text-xs font-medium text-gray-600 mt-1">LeetCode</div>
                                </a>

                                <a
                                    href="https://www.hackerrank.com/profile/pandeysaurabh151"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center w-32"
                                    title="HackerRank Profile"
                                >
                                    <div className="w-8 h-8 bg-green-500 rounded-xl mx-auto flex items-center justify-center">
                                        <Database className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="text-xs font-medium text-gray-600 mt-1">HackerRank</div>
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="relative inline-block">
                                <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mx-auto relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl transform rotate-6"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl transform -rotate-6"></div>
                                    <img src="/saurabh.jpg" alt="Saurabh Pandey" className="relative w-full h-full object-cover rounded-2xl shadow-2xl z-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About Me</h2>
                        <p className="text-xl md:text-2xl text-gray-600">Get to know me better</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                I'm a Java Full Stack Developer passionate about creating scalable, secure, and user-friendly web applications.
                                I specialize in building modern solutions using React, Spring Boot, MySQL, and REST APIs. With strong hands-on experience as a fresher, I'm constantly improving my skills by working on real-world projects and problem-solving platforms like LeetCode and HackerRank.
                            </p>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                I'm currently pursuing my Bachelor of Computer Applications (BCA) at Dr. RML Avadh University, Ayodhya. I began my journey with Java and gradually moved into full-stack development, combining backend logic with frontend design to deliver complete solutions.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm">
                                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1+</div>
                                    <div className="text-gray-600 text-lg">Years Experience</div>
                                </div>
                                <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm">
                                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">2+</div>
                                    <div className="text-gray-600 text-lg">Projects Built</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <Typography variant="h6" className="text-blue-600 flex items-center text-xl md:text-2xl">
                                        <Calendar className="mr-2" size={24} />
                                        Education
                                    </Typography>

                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <h4 className="font-semibold text-gray-900 text-lg">BCA - Bachelor of Computer Applications</h4>
                                        <p className="text-gray-600">Dr. RML Avadh University, Ayodhya</p>
                                        <p className="text-blue-600 font-medium">Ongoing</p>
                                    </div>
                                    <div className="border-l-4 border-gray-300 pl-4">
                                        <h4 className="font-semibold text-gray-900 text-lg">Intermediate</h4>
                                        <p className="text-green-600 font-medium">79.20%</p>
                                    </div>
                                    <div className="border-l-4 border-gray-300 pl-4">
                                        <h4 className="font-semibold text-gray-900 text-lg">High School</h4>
                                        <p className="text-green-600 font-medium">84.33%</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="shadow-lg">
                                <CardHeader>
                                    <Typography className="text-xl md:text-2xl text-blue-600 flex items-center">
                                        <MapPin className="mr-2" size={24} />
                                        Location
                                    </Typography>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 text-lg">Ayodhya, Uttar Pradesh, India</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Technical Skills</h2>
                        <p className="text-xl md:text-2xl text-gray-600">Technologies and expertise I bring to every project</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {skillCategories.map((category) => (
                            <Card key={category.title} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                                <div className="pb-4 px-6 pt-6">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className={`w-12 h-12 ${ category.color } rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <category.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl text-gray-900 group-hover:text-blue-600 transition-colors font-semibold">
                                                {category.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 mt-1">Color: {category.color}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-base md:text-lg">
                                        {category.description}
                                    </p>
                                </div>

                                <CardContent className="pt-0">
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <Chip
                                                key={skill}
                                                label={skill}
                                                variant="outlined"
                                                className="px-3 py-2 text-sm md:text-base bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 font-medium"
                                            />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full">
                            <Zap className="w-5 h-5 text-blue-600" />
                            <span className="text-blue-600 font-medium">Always learning and exploring new technologies</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Featured Projects</h2>
                        <p className="text-xl md:text-2xl text-gray-600">Some of my recent work</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <Card key={project.title} className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                                <div className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>

                                {/* Updated CardHeader to use title/subheader props so the title shows correctly */}
                                <CardHeader
                                    title={
                                        <Typography className="text-xl md:text-2xl text-gray-900 font-semibold">
                                            {project.title}
                                        </Typography>
                                    }
                                    subheader={
                                        <Typography className="text-gray-600 text-lg">
                                            {project.description}
                                        </Typography>
                                    }
                                />

                                <CardContent className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-gray-900 text-lg">Tech Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    variant="outlined"
                                                    className="bg-gray-100 text-gray-700 text-base"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2 text-gray-900 text-lg">Key Features:</h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {project.features.map((feature) => (
                                                <div key={feature} className="flex items-center text-sm md:text-base text-gray-600">
                                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col space-y-2 pt-4">
                                        <div className="flex space-x-4">
                                            <a href={project.github.frontend} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outlined" size="small" className="flex items-center space-x-2">
                                                    <Github size={16} />
                                                    <span>Frontend Code</span>
                                                </Button>
                                            </a>
                                            <a href={project.github.backend} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outlined" size="small" className="flex items-center space-x-2">
                                                    <Github size={16} />
                                                    <span>Backend Code</span>
                                                </Button>
                                            </a>
                                        </div>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                                            <Button size="small" className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
                                                <ExternalLink size={16} />
                                                <span>Live Demo</span>
                                            </Button>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">What I Offer</h2>
                        <p className="text-xl md:text-2xl text-gray-600">Comprehensive development solutions</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card key={service.title} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <service.icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <Typography className="text-xl md:text-2xl text-gray-900">
                                        {service.title}
                                    </Typography>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-gray-600 text-lg">{service.description}</p>
                                    <div className="space-y-2">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center justify-center space-x-2 text-sm md:text-base text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
                        <p className="text-xl md:text-2xl text-gray-600">Ready to start your next project?</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card className="shadow-xl">
                            <CardContent className="p-12">
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                        <Mail className="text-blue-600" size={20} />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-900 text-lg">Email</div>
                                                        <div className="text-gray-600">pandeysaurabh15464@gmail.com</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                        <MapPin className="text-blue-600" size={20} />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-900 text-lg">Phone</div>
                                                        <div className="text-gray-600">+91 6394374932</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                        <MapPin className="text-blue-600" size={20} />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-900 text-lg">Location</div>
                                                        <div className="text-gray-600">Ayodhya, Uttar Pradesh, India</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Find Me Online</h3>
                                            <div className="flex space-x-4">
                                                <a href="https://www.linkedin.com/in/saurabh-pandey-149499281/" target="_blank" rel="noopener noreferrer">
                                                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                                                        <Linkedin size={16} />
                                                        <span>LinkedIn</span>
                                                    </Button>
                                                </a>
                                                <a href="https://github.com/saurabh6301" target="_blank" rel="noopener noreferrer">
                                                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                                                        <Github size={16} />
                                                        <span>GitHub</span>
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-600 p-8 rounded-lg text-white">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start?</h3>
                                        <p className="text-blue-100 mb-6 text-lg">
                                            I'm always excited to work on new projects and collaborate with fellow developers.
                                            Whether you need a full-stack web application or just want to discuss technology,
                                            feel free to reach out!
                                        </p>
                                        <a href="https://www.linkedin.com/in/saurabh-pandey-149499281/">
                                            <Button className="bg-white text-blue-600 hover:bg-gray-100 w-full text-lg py-3">
                                                Start a Conversation
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center space-y-4">
                        <div className="text-2xl md:text-3xl font-bold">Saurabh Pandey</div>
                        <p className="text-gray-400 text-lg">
                            © 2025 Saurabh Pandey. Built with React & Tailwind CSS.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a href="https://www.linkedin.com/in/saurabh-pandey-149499281/" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/saurabh6301" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="mailto:pandeysaurabh15464@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
