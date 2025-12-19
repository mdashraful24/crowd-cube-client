# Crowdcube

![Crowdcube Banner](https://i.ibb.co.com/S4dPxQrw/Screenshot-28.png)

**Crowdcube** is a modern crowdfunding platform that empowers individuals and organizations to raise funds for diverse projects, ideas, or causes. Whether it's personal needs (such as medical expenses), creative endeavors (like filmmaking or app development), or entrepreneurial ventures (such as launching a startup), Crowdcube connects backers with fundraisers through a seamless and engaging experience.

🚀 **Live Demo:**  
• [Crowdcube](https://crowdcube-c99dd.web.app/) 

## 📖 Table of Contents

- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Configuration (.env)](#configuration-env)
- [Usage](#usage)

---

## ✨ Key Features

- **Running Campaigns** – View and track ongoing fundraising campaigns.
- **All Campaigns** – Browse all active and completed campaigns.
- **Add New Campaign** – Start a fundraising campaign easily.
- **My Campaigns** – Manage and edit personal campaigns.
- **My Donations** – Track donations made to different campaigns.
- **Delete Campaign** – Remove campaigns when necessary.
- **Update Campaign** – Modify campaign details as needed.

---

## 🛠️ Technology Stack

| Category           | Technologies Used                                         |
| ------------------ | --------------------------------------------------------- |
| **Frontend**       | React, React Router, Tailwind CSS, DaisyUI               |
| **Backend**        | Node.js, Express.js, JWT-token, Dotenv                                  |
| **Database**       | MongoDB (Atlas)                                       |
| **Authentication**        | Firebase Authentication                                  |
| **Hosting**        | Firebase (Frontend), Vercel (Backend)                                         |

---

# File Tree: crowd-cube-client-polishing

```
│   ├── components
│   │   ├── AddNewCampaign.jsx
│   │   ├── AllCampaigns.jsx
│   │   ├── Banner.jsx
│   │   ├── DarkLightTheme.jsx
│   │   ├── DonationCard.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── MyCampaigns.jsx
│   │   ├── MyDonations.jsx
│   │   ├── Navbar.jsx
│   │   ├── RunningCampaigns.jsx
│   │   ├── SuccessStories.jsx
│   │   └── UpdateCampaign.jsx
│   ├── layouts
│   │   └── HomeLayout.jsx
│   ├── pages
│   │   ├── DetailsPage.jsx
│   │   ├── Loading.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── providers
│   │   └── AuthProvider.jsx
│   ├── routes
│   │   ├── PrivateRoute.jsx
│   │   └── router.jsx
```

## 🛠 Installation

### Prerequisites

- **Node.js** (>= 18)
- **Firebase Account**

### Steps

1. **Clone the repository**
   ```sh
   git clone https://github.com/mdashraful24/crowd-cube-client.git
   cd crowd-cube-client
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables** (see `.env` below)
4. **Run the development server**
   ```sh
   npm run dev
   ```

---

## ⚙️ Configuration (.env)

Create a `.env` file in the root directory and configure the following:

```env
# Firebase Configuration
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
```

🚨 **Important:** Never expose your `.env` file in public repositories. Use `.gitignore` to keep it secure.

---

## 🚀 Usage

1. **Create a Campaign** – Set a goal, add a description, and launch your fundraiser.
2. **Support Campaigns** – Browse, donate, and share campaigns with others.
3. **Track Funding Progress** – Monitor donations and interact with backers.

---

## 🌍 Live Demo & Repository

- **Live Site:**  
  • [Crowdcube](https://crowdcube-c99dd.web.app/)  
  • [Crowdcube](https://crowdcube-c99dd.firebaseapp.com/)

---

🚀 **Start funding your ideas with Crowdcube!** 💡💰
