# 🔑 PassMan — Password Manager

PassMan is a modern, high-performance, and secure password management web application built using **React-Vite 8**, **Tailwind CSS v4**,**Express** and **MongoDB**. It offers a responsive interface to make tracking, generating, and managing your credentials seamless across both desktop and mobile viewports.

---

## ✨ Features

* **Secure Credential Tracking:** Effortlessly add, view, and safely remove account credentials.
* **Modern UI Component Architecture:** Made Responsive for both Desktop and Mobile users.
* **Instant Action Feeds:** Non-blocking, user feedback notifications triggers using modern toast alerting engines.
* **Backend Use:** Used Mongodb and Express for the backend to save and edit the data through API.

---

## 🛠️ Tech Stack & Package Requirements

PassMan leverages a bleeding-edge frontend ecosystem. All package requirements and exact versions are securely mapped inside `package.json`—eliminating the need for external `.txt` requirement files.

### Core Ecosystem
* **Framework:** React 19 and Vite 8(Functional architecture leveraging concurrent rendering optimization )
* **Styling Engine:** Tailwind CSS v4 (Integrated via the native `@tailwindcss/vite` plugin architecture)
* **Backend:** Used Express and MongoDb In Backend using API.

### Production Dependencies
* `uuid` (^14.0.0) — Generates cryptographically isolated unique identifier keys for password data.
* `react-hot-toast` (^2.6.0) & `react-toastify` (^11.1.0) — Lightweight toast messaging frameworks for elegant visual confirmations.

### Development & Code Quality Tools
* `eslint` (^10.3.0) — Static code analysis engine running modern **ESLint v10 Flat Configurations** (`eslint.config.js`) to guarantee clean, standardized code architecture.

---

## 📥 Cloning the Repository

To get a local copy of PassMan up and running, copy the link below and paste it into your terminal:

```bash
git clone https://github.com/OmMishra15/PassMan---Your-Password-Manager-.git

cd PassMan---Your-Password-Manager-
```


# ⚙️ Getting Started & Setup

## Prerequisites
Ensure you have Node.js (v20.19.0 or higher recommended) and npm installed on your system.

## Install Dependencies
Run the installation command from the root directory to automatically pull down all verified package requirements listed in the tech stack:

```
Bash

npm install 
```
## Environment Variables Setup
Create a .env.local file in your root folder. This file is automatically ignored by Git (.gitignore) to keep your configuration credentials safe. Add your target connection endpoint:

## Launch the Development Server
Spin up the local environment with Hot Module Replacement (HMR) active:

```
Bash

npm run dev
```

## Launch Backend Server

```
Bash

node --watch server.js 

# Automatic Restart

nodemon server.js 

```

