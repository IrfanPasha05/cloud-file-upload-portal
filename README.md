
<img width="571" height="343" alt="image" src="https://github.com/user-attachments/assets/91f1d2bf-c0cf-45d7-b6ea-16c68c3dc915" />












# ☁️ Cloud File Upload Portal

A modern cloud-based file upload portal built using HTML, CSS, JavaScript, AWS S3, GitHub, and Netlify CI/CD.

---

# 🚀 Live Demo

https://cloud-file-upload-portal.netlify.app

---

# 📌 Project Overview

This project allows users to upload files directly from a browser to an AWS S3 bucket using JavaScript AWS SDK.

The frontend is hosted on Netlify and automatically deployed using GitHub CI/CD.

---

# 🏗️ Architecture Diagram

```text
User Browser
     │
     ▼
Netlify Hosted Frontend
(HTML + CSS + JavaScript)
     │
     ▼
AWS SDK
     │
     ▼
AWS S3 Bucket
(File Storage)
     │
     ▼
GitHub Repository
     │
     ▼
Netlify CI/CD Deployment
```

---

# ⚙️ Technologies Used

- HTML
- CSS
- JavaScript
- AWS S3
- AWS IAM
- GitHub
- Netlify
- AWS SDK

---

# 🔥 Features

✅ Modern UI Design  
✅ File Upload to AWS S3  
✅ Real-Time Upload Status  
✅ Responsive Design  
✅ GitHub Integration  
✅ Netlify CI/CD Deployment  
✅ Cloud Storage Integration  

---

# 📂 Project Structure

```text
cloud-file-upload-portal/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

---

# 📸 Project Screenshots

## 1️⃣ Upload Portal UI

<img width="100%" src="https://raw.githubusercontent.com/IrfanPasha05/cloud-file-upload-portal/main/screenshots/upload-ui.png">

<img width="860" height="418" alt="image" src="https://github.com/user-attachments/assets/f88ec835-ae9d-4e7d-9e3f-12f1c1de9eb9" />

---

## 2️⃣ File Uploaded Successfully

<img width="100%" src="https://raw.githubusercontent.com/IrfanPasha05/cloud-file-upload-portal/main/screenshots/upload-success.png">
<img width="860" height="418" alt="image" src="https://github.com/user-attachments/assets/b6a3bd7f-afdb-4a55-ad21-704d98dd9ea8" />

---

## 3️⃣ AWS S3 Bucket

<img width="100%" src="https://raw.githubusercontent.com/IrfanPasha05/cloud-file-upload-portal/main/screenshots/s3-bucket.png">
<img width="1261" height="583" alt="image" src="https://github.com/user-attachments/assets/438a8f52-9d8b-4712-a64c-9ae289aec63f" />

---

## 4️⃣ File Stored in AWS S3

<img width="100%" src="https://raw.githubusercontent.com/IrfanPasha05/cloud-file-upload-portal/main/screenshots/s3-upload.png">
<img width="1888" height="883" alt="image" src="https://github.com/user-attachments/assets/21786680-c91a-41ae-a397-9cc5398dfde5" />

---

## 5️⃣ Netlify Live Deployment

<img width="100%" src="https://raw.githubusercontent.com/IrfanPasha05/cloud-file-upload-portal/main/screenshots/netlify-live.png">

<img width="1897" height="936" alt="image" src="https://github.com/user-attachments/assets/4ab339e6-86a7-494e-a67c-e905ba4619ac" />

---

## 6️⃣ GitHub Repository

<img width="100%" src="https://raw.githubusercontent.com/IrfanPasha05/cloud-file-upload-portal/main/screenshots/github-repo.png">

<img width="1911" height="874" alt="image" src="https://github.com/user-attachments/assets/dea02bd9-158b-40fa-b0bb-8420c63fbcb9" />

---

# 🛠️ Complete Setup Guide

## Step 1 — Create Project Files

Create:

```text
index.html
style.css
app.js
```

---

# 📄 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloud File Upload Portal</title>

    <link rel="stylesheet" href="style.css">

    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1360.0.min.js"></script>
</head>
<body>

<div class="container">

    <h1>☁️ Cloud File Upload Portal</h1>

    <p>Drag and drop files below</p>

    <div class="upload-box">
        <input type="file" id="fileInput">
    </div>

    <button onclick="uploadFile()">Upload File</button>

    <p id="message"></p>

</div>

<script src="app.js"></script>

</body>
</html>
```

---

# 🎨 style.css

```css
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #102040, #3151a3);
}

.container {
    width: 600px;
    padding: 50px;
    border-radius: 30px;
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(10px);
    text-align: center;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.2);
}

h1 {
    font-size: 70px;
    font-weight: bold;
    background: linear-gradient(to right, #ffb300, #fff2b0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(255,255,255,0.3);
}

p {
    color: #e5e5e5;
    font-size: 20px;
}

.upload-box {
    border: 3px dashed rgba(255,255,255,0.4);
    border-radius: 20px;
    padding: 50px;
    margin: 30px 0;
}

button {
    background: linear-gradient(to right, #ff9800, #ffb74d);
    border: none;
    padding: 20px 50px;
    font-size: 18px;
    color: white;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s ease;
}

button:hover {
    transform: scale(1.05);
}

#message {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
}
```

---

# ⚡ app.js

```javascript
function uploadFile() {

    const file = document.getElementById("fileInput").files[0];
    const message = document.getElementById("message");

    if (!file) {
        message.innerHTML = "Please select a file";
        message.style.color = "#90ee90";
        return;
    }

    AWS.config.update({
        accessKeyId: "YOUR_ACCESS_KEY",
        secretAccessKey: "YOUR_SECRET_KEY",
        region: "ap-south-1"
    });

    const s3 = new AWS.S3();

    const params = {
        Bucket: "irfan-cloud-upload-portal",
        Key: file.name,
        Body: file
    };

    s3.upload(params, function(err, data) {

        if (err) {
            console.log(err);
            message.innerHTML = "❌ Upload failed";
            message.style.color = "#ff5c8a";
        } else {
            console.log(data);
            message.innerHTML = "✅ File uploaded successfully";
            message.style.color = "#90ee90";
        }

    });

}
```

---

# ☁️ AWS S3 Setup

## Create S3 Bucket

```text
irfan-cloud-upload-portal
```

Disable:

```text
Block Public Access
```

---

# 🔐 Configure CORS

Go to:

```text
S3 → Permissions → CORS
```

Add:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": []
  }
]
```

---

# 👤 IAM User Setup

Create IAM User:

```text
s3-upload-user
```

Attach policy:

```text
AmazonS3FullAccess
```

Generate:

- Access Key
- Secret Access Key

Add them in:

```javascript
app.js
```

---

# 🌐 Run Locally

Install Live Server extension in VS Code.

Right click:

```text
index.html → Open with Live Server
```

---

# 🐙 GitHub Setup

Create repository:

```text
cloud-file-upload-portal
```

Run commands:

```bash
git init
git add .
git commit -m "Modern cloud upload portal"
git branch -M main
git remote add origin https://github.com/IrfanPasha05/cloud-file-upload-portal.git
git push -u origin main
```

---

# 🚀 Netlify Deployment

1. Open Netlify
2. Add new project
3. Import from GitHub
4. Select repository
5. Deploy

---

# 🔄 CI/CD Workflow

```text
VS Code
   ↓
Git Commit
   ↓
GitHub Push
   ↓
Netlify Auto Deploy
   ↓
Live Website Updated
```

---

# 🧠 Problems Faced

## Git Error

Wrong:

```bash
get init
```

Correct:

```bash
git init
```

---

## S3 Upload Error

Error:

```text
AccessControlListNotSupported
```

Fix:

Removed:

```javascript
ACL: "public-read"
```

---

# 📈 Learning Outcomes

- AWS S3 bucket management
- IAM user creation
- Browser-based S3 uploads
- GitHub workflow
- Netlify deployment
- CI/CD concepts
- Frontend + Cloud integration

---

# 🔐 Security Note

⚠️ This project uses AWS Access Keys in frontend JavaScript for learning purposes only.

In production:
- Use pre-signed URLs
- Use backend authentication
- Never expose secret keys publicly

---

# 🌟 Future Improvements

- Upload Progress Bar
- Drag & Drop Upload
- Authentication
- Multiple File Upload
- File Preview
- CloudFront CDN
- Pre-Signed URLs

---

# 👨‍💻 Author

## Irfan Pasha

GitHub:
https://github.com/IrfanPasha05

Dev:
https://dev.to/irfanpasha/built-a-modern-cloud-file-upload-portal-using-aws-s3-netlify-github-cicd-1ld6
---
