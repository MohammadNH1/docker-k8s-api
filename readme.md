# Docker-K8s-API

This project demonstrates how to containerize a Node.js application using Docker, deploy it on a Kubernetes cluster, and manage it locally with **Docker Desktop Kubernetes** or **kind (Kubernetes in Docker)**. It also includes guidance for CI/CD automation.

---

## Table of Contents

- [Project Setup](#project-setup)  
- [Docker Setup](#docker-setup)  
- [Kubernetes Setup](#kubernetes-setup)  
- [Running Locally](#running-locally)  
- [Managing Pods and Deployments](#managing-pods-and-deployments)  
- [CI/CD with GitHub Actions](#cicd-with-github-actions)  
- [References](#references)  

---

## Project Setup

1. Clone the repository:

```bash
git clone https://github.com/MohammadNH1/docker-k8s-api.git
cd docker-k8s-api
```
Install dependencies:
```bash
npm install
```

## Docker setup locally
1. Build Docker image locally:
```bash
docker build -t docker-k8s-api:latest .
```

2. (Optional) Push image to Docker Hub:

```bash
docker tag docker-k8s-api:latest <dockerhub-username>/docker-k8s-api:latest
docker push <dockerhub-username>/docker-k8s-api:latest
```


# Kubernetes Setup

## All Kubernetes manifests are in the k8s/ folder:

1. deployment.yaml – defines the Deployment for the app.

2. service.yaml – defines the Service to expose the app.

3. Tip: You can apply all YAMLs in the folder at once with kubectl apply -f k8s/.


# Running Locally
## Using Docker Desktop Kubernetes
1. Ensure Kubernetes is enabled in Docker Desktop.
2. Apply manifests:

```bash
kubectl apply -f k8s/
```


3. Check pods and services:

```bash
kubectl get pods
kubectl get svc
```

4. Describe a pod (detailed info)

```bash
kubectl describe pod <pod-name>
```

5. View pod logs

```bash
kubectl logs <pod-name>
```

6. Stop pods temporarily (scale deployment to 0)

```bash
kubectl scale deployment docker-k8s-api-deployment --replicas=0
```

7. Restart pods (scale back to desired replicas)

```bash
kubectl scale deployment docker-k8s-api-deployment --replicas=2
```

8. Delete pods (and associated resources)

```bash
kubectl delete -f k8s/
```

9. Redeploy

```bash
kubectl apply -f k8s/
```