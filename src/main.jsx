import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Database,
  BarChart3, Code2, Workflow, Zap, ExternalLink, FileText, ChevronRight
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    type: 'BUSINESS INTELLIGENCE',
    title: 'Dashboard de Ordens de Serviço',
    description: 'Painel para acompanhar ordens de serviço e indicadores de manutenção da frota, transformando dados operacionais em uma visão mais clara para apoiar decisões.',
    stack: ['Power BI', 'DAX', 'Modelagem de dados'],
    icon: BarChart3,
    result: 'Visibilidade do andamento das manutenções',
    link: 'https://github.com/luis-kmd/DashboardFinanceiroManutencao',
    linkLabel: 'Ver projeto no GitHub'
  },
  {
    number: '02',
    type: 'AUTOMAÇÃO · PYTHON',
    title: 'Automação de cadastro de fornecedores',
    description: 'Automação integrada a uma API para reduzir etapas manuais no processo de cadastro de fornecedores.',
    stack: ['Python', 'API', 'Automação'],
    icon: Workflow,
    result: 'De aproximadamente 5 minutos para 10 segundos por cadastro',
    link: 'https://github.com/luis-kmd/cadastro-automatico-fornecedor',
    linkLabel: 'Ver projeto no GitHub'
  },
  {
    number: '03',
    type: 'AUTOMAÇÃO · PYTHON',
    title: 'Lançamento de notas fiscais via XML',
    description: 'Automação do lançamento de notas fiscais no sistema Rodopar a partir de arquivos XML, reduzindo o trabalho repetitivo.',
    stack: ['Python', 'XML', 'Automação de processos'],
    icon: Zap,
    result: 'De aproximadamente 7 minutos para 10 segundos por lançamento',
    link: 'https://github.com/luis-kmd/lancador-automatico-xml',
    linkLabel: 'Ver projeto no GitHub'
  },
  {
    number: '04',
    type: 'DADOS · SQL',
    title: 'Consultas e relatórios operacionais',
    description: 'Consultas e manipulação de dados em SQL Server para apoiar relatórios e análises relacionadas à operação e manutenção de frota.',
    stack: ['SQL Server', 'SQL', 'Crystal Reports'],
    icon: Database,
    result: 'Extração e organização de informações operacionais',
    link: '',
    linkLabel: 'Adicionar exemplo'
  }
];

const skills = [
  { name: 'SQL / SQL Server', level: 'Consultas, procedures, functions, DML e DDL', icon: Database },
  { name: 'Power BI', level: 'Dashboards, indicadores e DAX', icon: BarChart3 },
  { name: 'Python', level: 'Automação de processos e integração com APIs', icon: Code2 },
  { name: 'Análise de dados', level: 'Tratamento, interpretação e comunicação de informações', icon: Workflow },
  { name: 'Excel', level: 'Organização e análise de dados', icon: BarChart3 },
  { name: 'HTML, CSS e JavaScript', level: 'Fundamentos de desenvolvimento web', icon: Code2 }
];



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="header">
        <a className="brand" href="#inicio" onClick={closeMenu}>LG<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#habilidades" onClick={closeMenu}>Habilidades</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="nav-cta" href="https://github.com/luis-kmd" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> PORTFÓLIO · 2026</div>
            <h1>Transformando<br />dados em <span className="gradient-text">decisões.</span></h1>
            <p className="hero-lead">Olá, sou <strong>Luis Gabriel</strong>. Estudante de Sistemas de Informação, com experiência em SQL, Power BI e automação de processos com Python.</p>
            <p className="hero-sub">Gosto de entender problemas reais, organizar informações e construir soluções que tornam processos mais simples e eficientes.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">Explorar projetos <ArrowDown size={16} /></a>
              <a className="button button-ghost" href="#contato">Vamos conversar <ArrowUpRight size={16} /></a>
            </div>
            <div className="social-row">
              <a href="https://github.com/luis-kmd" target="_blank" rel="noreferrer"><Github size={17} /> github.com/luis-kmd</a>
              <a href="https://www.linkedin.com/in/luiskmd7/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Resumo de competências">
            <div className="visual-top"><span>FOCO DE ATUAÇÃO</span><span className="visual-live">● EM EVOLUÇÃO</span></div>
            <div className="visual-orbit orbit-a"></div>
            <div className="visual-orbit orbit-b"></div>
            <div className="visual-core"><Database size={35} /><span>DATA<br />MINDSET</span></div>
            <div className="float-card float-sql"><Database size={16} /><span>SQL</span><small>Consultas & dados</small></div>
            <div className="float-card float-bi"><BarChart3 size={16} /><span>Power BI</span><small>Dashboards</small></div>
            <div className="float-card float-python"><Code2 size={16} /><span>Python</span><small>Automação</small></div>
            <div className="visual-bottom"><span>ANÁLISE</span><i></i><span>INTELIGÊNCIA</span><i></i><span>AUTOMAÇÃO</span></div>
          </div>
          <a className="scroll-hint" href="#sobre"><span></span> ROLE PARA EXPLORAR</a>
        </section>

        <section className="section-wrap about-section" id="sobre">
          <div className="section-heading">
            <span className="section-index">01 / SOBRE</span>
            <h2>Tecnologia com<br /><span className="muted-heading">propósito prático.</span></h2>
          </div>
          <div className="about-content">
            <p className="about-big">Minha experiência une tecnologia, dados e melhoria de processos.</p>
            <p>Atuo na área de Tecnologia da Informação e curso Sistemas de Informação no IFBA. Ao longo da minha experiência profissional, desenvolvi soluções para apoiar rotinas operacionais, criar relatórios e automatizar tarefas repetitivas.</p>
            <p>Tenho interesse em Análise de Dados e em usar ferramentas como SQL, Power BI e Python para transformar dados em informações úteis para o negócio.</p>
            <div className="about-facts">
              <div><strong>SQL</strong><span>Consultas e manipulação de dados</span></div>
              <div><strong>BI</strong><span>Indicadores e visualização</span></div>
              <div><strong>Python</strong><span>Automação de tarefas</span></div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="habilidades">
          <div className="section-heading compact-heading">
            <span className="section-index">02 / HABILIDADES</span>
            <h2>Ferramentas que<br /><span className="muted-heading">uso para construir.</span></h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return <article className="skill-card" key={skill.name}>
                <div className="skill-card-top"><span>0{index + 1}</span><Icon size={20} /></div>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </article>;
            })}
          </div>
          <p className="skills-note">As habilidades refletem minha experiência prática e meus estudos atuais. Estou em constante aprendizado.</p>
        </section>

        <section className="section-wrap projects-section" id="projetos">
          <div className="projects-heading">
            <div className="section-heading compact-heading">
              <span className="section-index">03 / PROJETOS</span>
              <h2>Problemas reais.<br /><span className="muted-heading">Soluções aplicadas.</span></h2>
            </div>
            <p>Alguns trabalhos que representam minha experiência com dados, inteligência de negócios e automação.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <div className="project-result"><span>RESULTADO / CONTRIBUIÇÃO</span><strong>{project.result}</strong></div>
                </div>
                <div className="project-aside">
                  <div className="project-icon">
                    <Icon size={28} />
                  </div>

                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.linkLabel}
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </article>;
            })}
          </div>
          <div className="project-disclaimer">Alguns projetos foram desenvolvidos em contexto profissional. Os detalhes e dados internos foram omitidos para preservar informações da empresa.</div>
        </section>

        <section className="section-wrap journey-section">
          <div className="section-heading compact-heading">
            <span className="section-index">04 / TRAJETÓRIA</span>
            <h2>Aprendizado contínuo,<br /><span className="muted-heading">experiência na prática.</span></h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot"></span><div className="timeline-date">FORMAÇÃO · EM ANDAMENTO</div>
              <h3>Sistemas de Informação — IFBA</h3><p>Formação acadêmica com estudos em tecnologia, desenvolvimento de sistemas, banco de dados e infraestrutura.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"></span><div className="timeline-date">EXPERIÊNCIA PROFISSIONAL</div>
              <h3>Auxiliar de TI · Transvicon</h3><p>Atuação com suporte às rotinas de TI, consultas SQL, relatórios operacionais, dashboards e automações de processos.</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="section-wrap contact-inner">
            <span className="section-index">05 / CONTATO</span>
            <h2>Vamos transformar<br /><span className="gradient-text">dados em resultados?</span></h2>
            <p>Estou aberto a oportunidades e conexões nas áreas de Análise de Dados, Business Intelligence e Automação.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:gabrielkmd@gmail.com"><Mail size={17} /> Entrar em contato <ArrowUpRight size={16} /></a>
              <a className="button button-ghost" href="https://www.linkedin.com/in/luiskmd7/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            </div>
            <div className="contact-socials">
              <a href="https://github.com/luis-kmd" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={13} /></a>
              <a href="https://www.linkedin.com/in/luiskmd7/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={13} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#inicio">LG<span>.</span></a>
        <span>© {new Date().getFullYear()} Luis Gabriel. Desenvolvido com React.</span>
        <a href="#inicio">Voltar ao topo <ChevronRight size={14} /></a>
      </footer>
    </div>
  );
}


createRoot(document.getElementById('root')).render(<App />);
