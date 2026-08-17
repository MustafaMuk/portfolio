# Mustafa Mukhtar — Junior DevOps & Cloud Engineer Portfolio

A responsive portfolio website presenting my practical work across AWS, Terraform,
Linux, Docker, networking, CI/CD, monitoring, security and incident response.

[![Deploy Portfolio to GitHub Pages](https://github.com/MustafaMuk/portfolio/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/MustafaMuk/portfolio/actions/workflows/deploy-pages.yml)
[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-View%20Website-45c8ff?style=flat-square)](https://mustafamuk.github.io/portfolio/)

## Live Portfolio

https://mustafamuk.github.io/portfolio/

## Flagship Project — CareFlow

CareFlow is a synthetic healthcare appointment platform used as a realistic
workload for a complete AWS and DevOps implementation.

The application runs through:

```text
Internet
   ↓
CloudFront
   ↓
Application Load Balancer
   ↓
ECS Fargate
   ↓
RDS PostgreSQL
```

The platform is managed with Terraform and includes:

- Segmented public, private application and isolated database subnets
- ECS Fargate tasks without public IP addresses
- Private RDS PostgreSQL
- CloudFront and Application Load Balancer ingress
- Amazon ECR with immutable container tags
- AWS Secrets Manager
- VPC endpoints for private AWS service access
- CloudWatch logs, dashboards and alarms
- ECS CPU and memory autoscaling
- GitHub Actions CI/CD
- AWS OIDC authentication without stored long-lived AWS keys
- Trivy container vulnerability scanning
- Non-root production containers
- Dependency-aware readiness checks
- A documented database-connectivity incident and recovery exercise

Repository:

https://github.com/MustafaMuk/secure-healthcare-ecs-platform

Architecture:

https://github.com/MustafaMuk/secure-healthcare-ecs-platform/blob/main/docs/architecture.md

Live health check:

https://d1qcsm37fkn8r1.cloudfront.net/health/ready

## Supporting Projects

### Linux Server Operations & Monitoring Lab

Automated Linux monitoring using Bash, Nginx, systemd and cron, including
health classification, dashboard generation and outage/recovery testing.

https://github.com/MustafaMuk/linux-server-ops-monitoring-lab

### DevOps Network Reliability & Incident Response Lab

A segmented Docker architecture using Nginx, Node.js and Redis with separate
networks, service health checks and controlled failure testing.

https://github.com/MustafaMuk/devops-network-reliability-lab

### Linux Foundations Lab

Structured Linux administration practice covering files, permissions, users,
processes, packages, services, Bash and Git.

https://github.com/MustafaMuk/linux-foundations-lab

## Earlier Hands-On Labs

The portfolio also includes focused labs covering:

- Terraform EC2 provisioning
- Kubernetes with Minikube
- Linux hardening
- Virtual networking
- Docker and Git collaboration
- Threat modelling

These projects document the progression from Linux and networking fundamentals
into cloud infrastructure and automated application delivery.

## Technical Areas

- AWS: ECS Fargate, RDS, CloudFront, ALB, ECR, IAM, Secrets Manager, CloudWatch
- Infrastructure as Code: Terraform and reusable modules
- Containers: Docker, Docker Compose, multi-stage images and non-root runtimes
- CI/CD: GitHub Actions, AWS OIDC, ECR and automated ECS deployment
- Security: Trivy, least privilege, private networking and managed secrets
- Operations: health checks, logging, alarms, incident investigation and recovery
- Linux: Bash, systemd, permissions, processes, packages and scheduled tasks
- Networking: VPC concepts, security groups, DNS, reverse proxies and segmentation

## Portfolio Deployment

The portfolio itself is built with Parcel and deployed automatically through
GitHub Actions.

```text
Push to main
   ↓
npm ci
   ↓
Parcel production build
   ↓
Verify dist output
   ↓
Upload GitHub Pages artifact
   ↓
Deploy to GitHub Pages
```

Workflow:

```text
.github/workflows/deploy-pages.yml
```

## Technology Stack

- HTML
- CSS
- JavaScript
- Node.js
- npm
- Parcel
- Git
- GitHub Actions
- GitHub Pages

## Running Locally

```bash
git clone https://github.com/MustafaMuk/portfolio.git
cd portfolio
npm ci
npm run dev
```

Production build:

```bash
npm run build
```

## Contact

- Portfolio: https://mustafamuk.github.io/portfolio/
- GitHub: https://github.com/MustafaMuk
- LinkedIn: https://www.linkedin.com/in/mustafa-mukhtar-728414234/
- Email: mustafa.9mukhtar@gmail.com

---

Built and maintained by Mustafa Mukhtar as a practical DevOps and cloud
engineering portfolio.
