# Deploying to Coolify with Nixpacks

This guide covers how to deploy the Design System SaaS Landing Page to Coolify using **Nixpacks**.

## Prerequisites

1.  **Coolify Instance**: You should have Coolify installed on your VPS.
2.  **Git Repository**: Your code must be pushed to a Git repository (GitHub, GitLab, etc.).

## Step 1: Push Changes to Git

We have added a `nixpacks.toml` configuration file to ensuring a stable build. You must push this to your repository.

```bash
git add .
git commit -m "Configure Nixpacks for Coolify deployment"
git push origin main
```

## Step 2: Deploying in Coolify

1.  **Create/Open Project**:
    - In your Coolify dashboard, go to your project.
2.  **Add Resource**:
    - Select **"Public Repository"** (or Private if you have connected your account).
    - Enter your repository URL.
3.  **Configuration**:
    - Coolify might auto-detect "Docker Compose" or "Nixpacks".
    - **Crucial**: Ensure the **Build Pack** is set to **Nixpacks**.
    - Since we added `nixpacks.toml`, it will automatically use our defined configuration (Node 20, correct build commands).
    - **Port**: Set `3000`.
4.  **Environment Variables**:
    - Go to the **Environment Variables** tab.
    - Add your n8n webhook URL:
      ```
      NEXT_PUBLIC_N8N_WEBHOOK_URL=https://<your-n8n-instance>/webhook/...
      ```
5.  **Deploy**:
    - Click **"Deploy"**.
    - Monitor the "Build Logs" to ensure everything runs smoothly.

## Troubleshooting

-   **Build Fails**: Check the build logs. If you see memory errors, you might need to increase the swap size on your VPS.
-   **N8n Integration**: Ensure your `NEXT_PUBLIC_N8N_WEBHOOK_URL` is correct and accessible from the public internet.
