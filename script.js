  // Place your CV file at assets/Rahul-Venkatesh-CV.pdf — the download buttons
  // in index.html link directly to it, no JS needed for that part.

  function safeRun(label, fn){
    try{ fn(); }
    catch(err){ console.error(`[portfolio] "${label}" failed:`, err); }
  }

  // Edit this array to add/remove/reorder social links — nothing else needs to change.
  // Supported icon keys: github, linkedin, twitter, website, blog, dev, medium
  const socialLinks = [
    { icon: "github", label: "GitHub", url: "https://github.com/autodevopsin" },
    { icon: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/rahul-venkateshan" },
  ];

  const socialIcons = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.35-3.87-1.35-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.52 10.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="#0A66C2"><path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.25h4V23h-4V8.25zM8.5 8.25h3.83v2.01h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.94c0-1.66-.03-3.79-2.31-3.79-2.32 0-2.68 1.81-2.68 3.67V23h-4V8.25z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.9h3.7l-8.1 9.2 9.5 12.6h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.9h7.6l5.3 7 6-7zm-1.3 19.5h2L6.5 4.4H4.3z"/></svg>`,
    website: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z"/></svg>`,
    blog: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
    dev: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.4 10.5c-.2-.2-.5-.3-.9-.3H5.2v4.4h1.3c.4 0 .7-.1.9-.3.2-.2.3-.6.3-1v-1.8c0-.4-.1-.8-.3-1zM24 12c0 6.6-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0s12 5.4 12 12zM8.6 9.3H3.6v9.4h1.6v-3.6h1.4c.9 0 1.6-.2 2.1-.7.5-.5.7-1.2.7-2.1V12c0-.9-.2-1.6-.7-2.1-.5-.5-1.2-.6-2.1-.6zm7.7 0h-4.9v9.4h4.9v-1.5h-3.3v-2.5h2.9V13h-2.9v-2.2h3.3zm5.6 0h-1.7l-1.5 6.3-1.5-6.3h-1.7l2.3 9.4h1.8z"/></svg>`,
    medium: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 12c0 3.6-2.9 6.5-6.5 6.5S.5 15.6.5 12 3.4 5.5 7 5.5s6.5 2.9 6.5 6.5zm7.3 0c0 3.4-1.5 6.1-3.2 6.1-1.8 0-3.2-2.7-3.2-6.1s1.5-6.1 3.2-6.1c1.8 0 3.2 2.7 3.2 6.1zm2.7 0c0 3-.5 5.5-1.2 5.5S21 15 21 12s.5-5.5 1.2-5.5S23.5 9 23.5 12z"/></svg>`
  };

  function renderSocialLinks(containerId, extraClass){
    const el = document.getElementById(containerId);
    if(!el) return;
    el.innerHTML = socialLinks.map(s => `
      <a class="${extraClass} tile-hover" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}" title="${s.label}">
        ${socialIcons[s.icon] || socialIcons.website}
      </a>
    `).join('');
  }

  safeRun('social links', () => {
    renderSocialLinks('sideSocialLinks', 'side-social-link');
    renderSocialLinks('socialLinks', 'social-link');
  });

  // Edit this array to change the Philosophy section — one card per principle.
  const principles = [
    { title: "A self-serve catalog beats a ticket queue", body: "I'd rather spend a week building a golden path in the catalog than answer the same provisioning request for the fifth time. Teams should get what they need without waiting on me." },
    { title: "Secure by default, not bolted on", body: "Bolting security on at the end always means someone's Friday deploy gets blocked. I'd rather bake the scanning in early and never have that conversation." },
    { title: "Paved roads, not roadblocks", body: "Defaults should be easy to follow and hard to mess up — but I always leave a door open for the team that has a genuinely good reason to go off-script." },
    { title: "If you can't see it, you can't run it", body: "I've been paged for things I couldn't diagnose because nobody wired up the dashboard. Never again — observability goes in on day one, not after the first incident." }
  ];

  safeRun('philosophy principles', () => {
    document.getElementById('principlesGrid').innerHTML = principles.map((p, i) => `
      <div class="principle-card tile tile-hover">
        <span class="principle-num">${String(i + 1).padStart(2, '0')}</span>
        <h3>${p.title}</h3>
        <p>${p.body}</p>
      </div>
    `).join('');
  });

  const expertise = [
    { pillar: "Platform Engineering Expertise", category: "Infrastructure & Cloud", title: "Infrastructure as Code & Azure Services", kind: "Component", lifecycle: "production", tags: [
      {label:"Terraform",primary:true},{label:"Terragrunt",primary:true},{label:"ARM Templates",primary:true},
      {label:"Azure Cloud",primary:false},{label:"AKS",primary:false},{label:"Ansible",primary:false}
    ]},
    { pillar: "Platform Engineering Expertise", category: "Containers & Orchestration", title: "Kubernetes & Container Workloads", kind: "Component", lifecycle: "production", tags: [
      {label:"Kubernetes (AKS)",primary:true},{label:"Helm Charts",primary:true},{label:"Docker",primary:true},
      {label:"Cluster Upgrades",primary:false},{label:"DR Setup",primary:false}
    ]},
    { pillar: "Platform Engineering Expertise", category: "Application Platforms", title: "Enterprise Integration & Deployment", kind: "Component", lifecycle: "production", tags: [
      {label:"Dynamics 365",primary:true},{label:"Azure Functions",primary:true},{label:"Logic Apps",primary:true},
      {label:"ASB",primary:false},{label:"Dell Boomi",primary:false},{label:"Oracle CPQ / EBS",primary:false},
      {label:"Node.js",primary:false},{label:"Java",primary:false},{label:"ASP.NET",primary:false}
    ]},
    { pillar: "DevSecOps Expertise", category: "CI/CD & Automation", title: "Pipeline Design & Reusable Frameworks", kind: "Component", lifecycle: "production", tags: [
      {label:"Azure DevOps",primary:true},{label:"GitHub Actions",primary:true},{label:"Harness",primary:true},
      {label:"YAML Pipelines",primary:false},{label:"Reusable Templates",primary:false},{label:"GitLab CI/CD",primary:false}
    ]},
    { pillar: "DevSecOps Expertise", category: "Security & Code Quality", title: "Security Integration & Code Quality", kind: "API", lifecycle: "production", tags: [
      {label:"Veracode",primary:true},{label:"SonarQube",primary:true},{label:"Codecov",primary:true},
      {label:"SAST Scanning",primary:false},{label:"New Relic",primary:false}
    ]},
    { pillar: "DevSecOps Expertise", category: "Scripting & Developer Tools", title: "Automation & Developer Enablement", kind: "Resource", lifecycle: "production", tags: [
      {label:"PowerShell",primary:true},{label:"Python",primary:true},{label:"GitHub Copilot",primary:true},
      {label:"Azure Repos",primary:false},{label:"VS Code",primary:false},{label:"Backstage",primary:false}
    ]}
  ];

  const experienceByPillar = [
    {
      pillar: "Platform Engineering",
      badgeClass: "platform",
      kind: "System",
      period: "Sep 2020 – Sep 2025",
      clients: ["State Street", "Metro Bank PLC", "F5 Network"],
      summary: "Provisioning and running the infrastructure layer — Kubernetes clusters, infrastructure as code, and enterprise application deployments across Azure.",
      highlights: [
        "Created and managed infrastructure for Project Nucleus using Terraform and Terragrunt in Azure DevOps.",
        "Onboarded infrastructure for project modules including Postgres, AKS, Cosmos DB, and Storage Account.",
        "Configured Dockerfiles and Helm Charts; deployed applications into AKS using Harness.",
        "Enabled and tested disaster recovery setup for applications at the infrastructure level.",
        "Performed AKS Cluster Upgrades and Postgres Version Upgrades.",
        "Analysed and designed new Azure DevOps architecture for Dynamics 365 CRM Solutions.",
        "Deployed CRM, Azure Functions, Azure Logic Apps, and Web Apps selectively at runtime.",
        "Provisioned Azure components via ARM Templates through Azure Pipelines."
      ]
    },
    {
      pillar: "DevSecOps",
      badgeClass: "devsecops",
      kind: "System",
      period: "Sep 2020 – Sep 2025",
      clients: ["State Street", "Wesco", "Manpower Group", "Metro Bank PLC", "F5 Network"],
      summary: "Building the CI/CD pipelines and security tooling that keep releases fast without cutting corners.",
      highlights: [
        "Created CI/CD templates and reusable YAML pipelines deployed across multiple applications and projects.",
        "Integrated Codecov and Veracode for code quality and SAST scanning.",
        "Conducted a DevSecOps Maturity Assessment and built a rollout plan for best-practice adoption.",
        "Managed and administered tools including Veracode, SonarQube, and New Relic.",
        "Set up CI/CD for the vendor application FlintFox Pricing, reducing manual deployment effort by 90%.",
        "Added automated PR creation and notification systems for pipeline status.",
        "Developed custom scripts to integrate Approval Gating in ServiceNow with Azure DevOps.",
        "Created custom dashboards to track application versions and deployment dates."
      ]
    }
  ];

  const skills = [
    { category:"Infrastructure as Code", items:[
      {label:"Terraform",primary:true},{label:"Terragrunt",primary:true},{label:"ARM Templates",primary:true},{label:"Ansible",primary:false}
    ]},
    { category:"Cloud Technologies", items:[
      {label:"Azure DevOps",primary:true},{label:"Microsoft Azure",primary:true},{label:"AKS",primary:false},
      {label:"Azure Functions",primary:false},{label:"Azure Logic Apps",primary:false},{label:"Event Grid",primary:false},
      {label:"Event Hub",primary:false},{label:"Cosmos DB",primary:false}
    ]},
    { category:"Containers & GitOps", items:[
      {label:"Kubernetes",primary:true},{label:"Helm",primary:true},{label:"Docker",primary:true},{label:"Harness",primary:false}
    ]},
    { category:"Security & Quality", items:[
      {label:"Veracode",primary:true},{label:"SonarQube",primary:true},{label:"Codecov",primary:true},{label:"New Relic",primary:false}
    ]},
    { category:"Version Control", items:[
      {label:"GitHub",primary:true},{label:"Azure Repos",primary:true},{label:"GitLab",primary:false}
    ]},
    { category:"Programming & Scripting", items:[
      {label:"PowerShell",primary:true},{label:"Python",primary:true},{label:"Django",primary:false}
    ]},
    { category:"Developer Tools", items:[
      {label:"VS Code",primary:true},{label:"Visual Studio",primary:true},{label:"GitHub Copilot",primary:false},{label:"Backstage",primary:false}
    ]}
  ];

  const chip = (t) => `<span class="chip${t.primary ? ' primary' : ''}">${t.label}</span>`;

  safeRun('expertise pillars', () => {
    const pillars = [...new Set(expertise.map(e => e.pillar))];
    document.getElementById('expertisePillars').innerHTML = pillars.map(pillarName => {
      const items = expertise.filter(e => e.pillar === pillarName);
      return `
        <div class="pillar-block">
          <h3 class="pillar-heading">
            <span class="pillar-dot"></span>
            ${pillarName}
            <span class="pillar-count">${items.length} entities</span>
          </h3>
          <div class="grid">
            ${items.map(e => `
              <div class="card tile tile-hover" data-search="${(e.category + ' ' + e.title + ' ' + e.tags.map(t=>t.label).join(' ')).toLowerCase()}">
                <div class="card-top">
                  <span class="cat">${e.category}</span>
                  <h3>${e.title}</h3>
                  <div class="entity-meta">kind: ${e.kind} · lifecycle: ${e.lifecycle} · owner: rahul-venkatesh</div>
                </div>
                <div class="stack-row">${e.tags.map(chip).join('')}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    const searchInput = document.getElementById('catalogSearch');
    if(searchInput){
      searchInput.addEventListener('input', () => {
        const q = searchInput.value.trim().toLowerCase();
        document.querySelectorAll('#expertisePillars .card').forEach(card => {
          card.style.display = card.dataset.search.includes(q) ? '' : 'none';
        });
        document.querySelectorAll('#expertisePillars .pillar-block').forEach(block => {
          const visible = [...block.querySelectorAll('.card')].some(c => c.style.display !== 'none');
          block.style.display = visible ? '' : 'none';
        });
      });
    }
  });

  safeRun('experience summary', () => {
    document.getElementById('timeline').innerHTML = experienceByPillar.map((group, i) => `
      <div class="tl-item tile">
        <div class="tl-head">
          <div>
            <span class="tl-pillar-badge ${group.badgeClass}" style="font-size:12.5px; padding:6px 12px;">${group.pillar}</span>
          </div>
          <span class="tl-period">${group.period}</span>
        </div>
        <div class="entity-meta">kind: ${group.kind} · lifecycle: production · owner: rahul-venkatesh</div>
        <p class="tl-summary">${group.summary}</p>
        <div class="tl-clients">${group.clients.map(c => `<span class="chip">${c}</span>`).join('')}</div>
        <ul class="tl-list collapsed" id="tl-list-${i}">
          ${group.highlights.map(r => `<li>${r}</li>`).join('')}
        </ul>
        ${group.highlights.length > 3 ? `<button class="tl-toggle" data-target="tl-list-${i}">show all ${group.highlights.length} →</button>` : ''}
      </div>
    `).join('');

    document.querySelectorAll('.tl-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const list = document.getElementById(btn.dataset.target);
        const isCollapsed = list.classList.toggle('collapsed');
        btn.textContent = isCollapsed ? `show all ${list.children.length} →` : 'show less ↑';
      });
    });
  });


  safeRun('skills panel', () => {
    document.getElementById('skillsPanel').innerHTML = skills.map(g => `
      <div class="skill-group">
        <h4>${g.category}</h4>
        <div class="skill-tags">${g.items.map(chip).join('')}</div>
      </div>
    `).join('');
  });

  safeRun('pipeline animation', () => {
    const stages = document.querySelectorAll('.stage');
    const fill = document.getElementById('pipelineFill');
    const fillVertical = document.getElementById('pipelineFillVertical');
    const widths = [0, 33, 66, 100];
    let current = 0;

    function advance(){
      stages.forEach((s, i) => s.classList.toggle('active', i <= current));
      if(fill) fill.style.width = widths[current] + '%';
      if(fillVertical) fillVertical.style.height = widths[current] + '%';
      current = (current + 1) % stages.length;
    }
    advance();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!reduceMotion){ setInterval(advance, 2200); } else { current = stages.length - 1; advance(); }
  });

  safeRun('uptime counter', () => {
    const start = Date.now();
    const counterEl = document.getElementById('uptimeCounter');
    function pad(n){ return n.toString().padStart(2,'0'); }
    function tick(){
      const diff = Math.floor((Date.now() - start) / 1000);
      const h = pad(Math.floor(diff/3600));
      const m = pad(Math.floor((diff%3600)/60));
      const s = pad(diff%60);
      if(counterEl) counterEl.textContent = `uptime ${h}:${m}:${s}`;
    }
    setInterval(tick, 1000);
    tick();
  });

  safeRun('render date', () => {
    document.getElementById('renderTime').textContent = new Date().toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric' });
  });
