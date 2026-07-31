# Mustafa Mukhtar — DevOps Portfolio

A responsive portfolio website presenting my practical work across Linux administration, Docker networking, monitoring, automation, incident response, cloud fundamentals and CI/CD.

[![Deploy Portfolio to GitHub Pages](https://github.com/MustafaMuk/portfolio/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/MustafaMuk/portfolio/actions/workflows/deploy-pages.yml)
[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-View%20Website-45c8ff?style=flat-square)](https://mustafamuk.github.io/portfolio/)

## Live Website

View the deployed portfolio:

**https://mustafamuk.github.io/portfolio/**

## About This Repository

This repository contains the source code and deployment workflow for my DevOps portfolio website.

The site brings together:

- Featured infrastructure and operations projects
- Additional hands-on technical labs
- Linux, Docker, networking and monitoring skills
- Cloud and Infrastructure as Code fundamentals
- Security and incident-response experience
- My technical learning progression
- A repeatable engineering and troubleshooting approach

The portfolio is built from source using Parcel and automatically deployed to GitHub Pages through GitHub Actions.

## Featured DevOps Projects

### 1. Linux Server Operations & Monitoring Lab

A practical Linux operations project combining Bash automation, Nginx administration, system monitoring, cron scheduling and incident recovery.

Key outcomes:

- Collected CPU, memory, disk, uptime and process metrics
- Monitored Nginx service and HTTP availability
- Classified system health as healthy, warning or critical
- Generated and published a responsive HTML dashboard
- Scheduled the complete monitoring cycle every 15 minutes
- Simulated an Nginx outage and verified recovery
- Preserved terminal, dashboard and incident evidence

Repository:

**https://github.com/MustafaMuk/linux-server-ops-monitoring-lab**

---

### 2. DevOps Network Reliability & Incident Response Lab

A three-container Docker architecture demonstrating reverse proxying, private service communication, network segmentation and controlled failure testing.

Architecture:

```text
User
  |
  | localhost:8088
  v
Nginx
  |
  | edge-network
  v
Node.js API
  |
  | data-network
  v
Redis
```

Key outcomes:

- Exposed only Nginx to the host
- Isolated Redis on a private internal network
- Used Docker DNS for service discovery
- Added health checks for Nginx, the API and Redis
- Automated network and service verification with Bash
- Simulated a Redis outage
- Disconnected the application from its private network
- Investigated HTTP failures and verified recovery

Repository:

**https://github.com/MustafaMuk/devops-network-reliability-lab**

---

### 3. Linux Foundations Lab

A structured Linux learning project covering essential administration, troubleshooting and command-line skills.

Key areas:

- Files and directories
- Users and groups
- Permissions and ownership
- Processes and services
- Package management
- Storage and system information
- Bash scripting
- Git version control
- Technical evidence and documentation

Repository:

**https://github.com/MustafaMuk/linux-foundations-lab**

## Additional Hands-On Labs

The portfolio also includes smaller focused projects covering:

| Area | Project |
|---|---|
| Infrastructure as Code | Terraform EC2 Setup |
| Container orchestration | Kubernetes Minikube Deployment |
| Linux security | Linux Hardening Lab |
| Networking | Virtual Network Lab |
| Docker collaboration | Dockerised Node.js pull-request contribution |
| Security analysis | Login System Threat Model |

These labs demonstrate foundational experience with AWS, Terraform, Kubernetes, Docker, Linux security, networking and threat modelling.

## Technical Skills

### Linux Operations

- Ubuntu and WSL2
- Bash scripting
- systemd and `systemctl`
- `journalctl`
- cron scheduling
- Users, groups and permissions
- Processes, packages and filesystems
- Service and log troubleshooting

### Containers and Networking

- Docker
- Docker Compose
- Container images and Dockerfiles
- Bridge and internal networks
- Docker DNS service discovery
- Port exposure and mapping
- Nginx reverse proxying
- Redis
- Container health checks

### Automation and CI/CD

- Git and GitHub
- Branch-based workflows
- Pull requests
- Release tags
- Bash automation
- GitHub Actions
- Parcel production builds
- GitHub Pages deployment

### Monitoring and Incident Response

- HTTP health checks
- Service monitoring
- Log investigation
- Controlled failure testing
- Root-cause investigation
- Recovery verification
- Incident evidence
- Troubleshooting runbooks

### Cloud and Infrastructure as Code

Foundational experience with:

- AWS
- EC2
- Terraform
- HCL
- Infrastructure provisioning concepts
- Cloud networking fundamentals

### Security Fundamentals

- Linux hardening
- UFW
- Fail2Ban
- SSH hardening
- Least privilege
- Network segmentation
- Threat modelling

## Engineering Approach

My projects follow a repeatable operational workflow:

```text
Plan
  ↓
Build
  ↓
Verify normal operation
  ↓
Introduce a controlled failure
  ↓
Investigate services, logs and networking
  ↓
Recover the system
  ↓
Verify every check passes
  ↓
Document and release the result
```

This approach helps demonstrate more than tool usage. It shows how I build, test, troubleshoot and document complete technical workflows.

## CI/CD Deployment

Changes to the portfolio are developed through Git branches and pull requests.

When changes are merged into `main`, GitHub Actions automatically:

```text
Checks out the repository
        ↓
Installs exact npm dependencies
        ↓
Builds the production website with Parcel
        ↓
Verifies the generated output
        ↓
Uploads the GitHub Pages artifact
        ↓
Deploys the live portfolio
```

Workflow:

```text
.github/workflows/deploy-pages.yml
```

The deployment uses GitHub Pages permissions and OpenID Connect rather than a personal access token stored in the workflow.

## Technology Stack

- HTML
- CSS
- JavaScript
- Node.js
- npm
- Parcel
- Git
- GitHub
- GitHub Actions
- GitHub Pages

## Repository Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── assets/
│   └── projects/
│       └── linux-monitoring-dashboard.png
├── .gitignore
├── index.html
├── style.css
├── script.js
├── package.json
├── package-lock.json
└── README.md
```

Generated directories such as `node_modules`, `.parcel-cache` and `dist` are excluded from Git.

## Running the Portfolio Locally

### Requirements

- Node.js
- npm

### Clone the repository

```bash
git clone https://github.com/MustafaMuk/portfolio.git
cd portfolio
```

### Install dependencies

```bash
npm ci
```

### Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:1234
```

### Create a production build

```bash
npm run build
```

The generated website is written to:

```text
dist/
```

## Current Development Focus

I am continuing to develop practical experience in:

- AWS infrastructure
- Terraform
- Automated application delivery
- Cloud monitoring
- CI/CD
- Linux and platform operations

## Contact

- **Portfolio:** https://mustafamuk.github.io/portfolio/
- **GitHub:** https://github.com/MustafaMuk
- **LinkedIn:** https://www.linkedin.com/in/mustafa-mukhtar-728414234/
- **Email:** mustafa.9mukhtar@gmail.com

---

Built and maintained by **Mustafa Mukhtar** as part of a practical DevOps and infrastructure engineering portfolio.
