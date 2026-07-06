// Place your CV file at assets/Rahul-Venkatesh-CV.pdf — the download buttons
  // in index.html link directly to it, no JS needed for that part.

  function safeRun(label, fn){
    try{ fn(); }
    catch(err){ console.error(`[portfolio] "${label}" failed:`, err); }
  }

  const expertise = [
    { category: "CI/CD & Automation", title: "Pipeline Design & Reusable Frameworks", tags: [
      {label:"Azure DevOps",primary:true},{label:"GitHub Actions",primary:true},{label:"Harness",primary:true},
      {label:"YAML Pipelines",primary:false},{label:"Reusable Templates",primary:false},{label:"GitLab CI/CD",primary:false}
    ]},
    { category: "Infrastructure & Cloud", title: "Infrastructure as Code & Azure Services", tags: [
      {label:"Terraform",primary:true},{label:"Terragrunt",primary:true},{label:"ARM Templates",primary:true},
      {label:"Azure Cloud",primary:false},{label:"AKS",primary:false},{label:"Ansible",primary:false}
    ]},
    { category: "Containers & Orchestration", title: "Kubernetes & Container Workloads", tags: [
      {label:"Kubernetes (AKS)",primary:true},{label:"Helm Charts",primary:true},{label:"Docker",primary:true},
      {label:"Cluster Upgrades",primary:false},{label:"DR Setup",primary:false}
    ]},
    { category: "DevSecOps", title: "Security Integration & Code Quality", tags: [
      {label:"Veracode",primary:true},{label:"SonarQube",primary:true},{label:"Codecov",primary:true},
      {label:"SAST Scanning",primary:false},{label:"New Relic",primary:false}
    ]},
    { category: "Application Platforms", title: "Enterprise Integration & Deployment", tags: [
      {label:"Dynamics 365",primary:true},{label:"Azure Functions",primary:true},{label:"Logic Apps",primary:true},
      {label:"ASB",primary:false},{label:"Dell Boomi",primary:false},{label:"Oracle CPQ / EBS",primary:false},
      {label:"Node.js",primary:false},{label:"Java",primary:false},{label:"ASP.NET",primary:false}
    ]},
    { category: "Scripting & Developer Tools", title: "Automation & Developer Enablement", tags: [
      {label:"PowerShell",primary:true},{label:"Python",primary:true},{label:"GitHub Copilot",primary:true},
      {label:"Azure Repos",primary:false},{label:"VS Code",primary:false},{label:"Backstage",primary:false}
    ]}
  ];

  const experience = [
    { period:"Jun 2023 – Sep 2025", company:"Infosys Limited", client:"Client: State Street", current:true,
      role:"Senior Associate Consultant — DevSecOps & Infra Engineer", environment:"GitHub · Azure DevOps · Harness · Azure",
      responsibilities:[
        "Created and managed infrastructure for Project Nucleus using Terraform and Terragrunt in Azure DevOps.",
        "Onboarded infrastructure for project modules including Postgres, AKS, Cosmos DB, and Storage Account.",
        "Set up infrastructure for PoCs including Azure Form Recognizer, Event Grid, and Event Hub.",
        "Configured CI/CD pipelines, Dockerfiles, and Helm Charts; deployed into AKS using Harness.",
        "Enabled and tested disaster recovery setup for applications at the infrastructure level.",
        "Created common code structure for rapid team onboarding.",
        "Conducted PoC on self-service portal for application onboarding via web portal.",
        "Performed AKS Cluster Upgrades and Postgres Version Upgrades."
      ]},
    { period:"Jul 2023 – Jun 2024", company:"Wipro Technologies", client:"Client: Wesco", current:false,
      role:"Project Engineer — DevSecOps Engineer", environment:"GitHub · Azure DevOps",
      responsibilities:[
        "Created CI/CD templates and configured them for multiple applications.",
        "Integrated Codecov and Veracode for code quality and SAST scanning.",
        "Analysed and created self-onboarding GitHub templates for Mule Soft components.",
        "Set up CI/CD for the vendor application FlintFox Pricing and handled production deployment, reducing manual effort by 90%."
      ]},
    { period:"Nov 2022 – Jul 2023", company:"Wipro Technologies", client:"Client: Manpower Group", current:false,
      role:"Project Engineer — Azure DevOps Engineer", environment:"Azure DevOps Service",
      responsibilities:[
        "Conducted DevSecOps Maturity Assessment and created a plan for implementing best DevSecOps practices.",
        "Created CI/CD pipelines and reusable templates deployable across multiple projects.",
        "Performed production deployments for onboarded applications.",
        "Created and managed ADO Organisations, Licences, services and users with monthly reporting.",
        "Managed and administered tools including Veracode, SonarQube, and New Relic.",
        "Created automation for user report management and de-provisioning of inactive users."
      ]},
    { period:"Mar 2021 – Oct 2022", company:"Wipro Technologies", client:"Client: Metro Bank PLC", current:false,
      role:"Project Engineer — Azure DevOps Engineer", environment:"Azure DevOps Service (VSTS)",
      responsibilities:[
        "Analysed and created new Azure DevOps architecture for Dynamics 365 CRM Solutions.",
        "Synced Hotfix Dev and Dev environments automatically after successful deployment to QA environments.",
        "Created reusable pipelines using YAML.",
        "Deployed applications in QA and Prod environments (automated deployment).",
        "Created Package Deployer setup in Azure DevOps Pipeline for Pre and Post Deployment steps.",
        "Deployed CRM, Azure Functions, Azure Logic Apps, and Web Apps selectively at runtime.",
        "Added automated PR creation and notification system for pipeline status.",
        "Provisioned Azure components via ARM Templates through Azure Pipelines."
      ]},
    { period:"Sep 2020 – Feb 2021", company:"Wipro Technologies", client:"Client: F5 Network", current:false,
      role:"Project Engineer — Azure DevOps Engineer", environment:"Azure DevOps Service (VSTS)",
      responsibilities:[
        "Analysed existing architecture and created new Azure DevOps architecture for applications.",
        "Created pipelines in Azure DevOps for applications including ASB, TEEMS, Dell Boomi, Oracle CPQ, SQL, Oracle EBS, and BI.",
        "Created reusable YAML pipelines.",
        "Deployed applications in QA and Prod servers.",
        "Developed custom scripts to integrate Approval Gating in ServiceNow with Azure DevOps via ServiceNow API.",
        "Created custom dashboards to track application versions and deployment dates.",
        "Integrated Release Note Report Generation for applications."
      ]}
  ];

  const skills = [
    { category:"Cloud Technologies", items:[
      {label:"Azure DevOps",primary:true},{label:"Microsoft Azure",primary:true},{label:"AKS",primary:false},
      {label:"Azure Functions",primary:false},{label:"Azure Logic Apps",primary:false},{label:"Event Grid",primary:false},
      {label:"Event Hub",primary:false},{label:"Cosmos DB",primary:false}
    ]},
    { category:"Infrastructure as Code", items:[
      {label:"Terraform",primary:true},{label:"Terragrunt",primary:true},{label:"ARM Templates",primary:true},{label:"Ansible",primary:false}
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

  safeRun('expertise grid', () => {
    document.getElementById('expertiseGrid').innerHTML = expertise.map(e => `
      <div class="card neu">
        <div class="card-top">
          <span class="cat">${e.category}</span>
          <h3>${e.title}</h3>
        </div>
        <div class="stack-row">${e.tags.map(chip).join('')}</div>
      </div>
    `).join('');
  });

  safeRun('experience timeline', () => {
    document.getElementById('timeline').innerHTML = experience.map((job, i) => `
      <div class="tl-item neu">
        <div class="tl-head">
          <div>
            <span class="tl-role">${job.role}</span>
            ${job.current ? '<span class="tl-current">CURRENT</span>' : ''}
          </div>
          <span class="tl-period">${job.period}</span>
        </div>
        <div class="tl-meta"><span class="company">${job.company}</span> · ${job.client}</div>
        <div class="tl-env">${job.environment}</div>
        <ul class="tl-list collapsed" id="tl-list-${i}">
          ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
        ${job.responsibilities.length > 3 ? `<button class="tl-toggle" data-target="tl-list-${i}">show all ${job.responsibilities.length} →</button>` : ''}
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
