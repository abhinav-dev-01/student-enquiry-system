# Origami Learning — Student Enquiry Platform

A modern, high-conversion institute website for **Origami Learning** focused on collecting student enquiries for **Civil Service** and **Tuition** programs.

---

## 🎨 Design & Brand Identity (Derived from Official Brand Logo)
- **Official Brand Logo Theme**:
  - **Top Coral/Red Arch**: `#FF383D` (Represents the "O" / rising sun of academic achievement)
  - **Bottom Sky/Cyan Blue Open Book**: `#25ABE2` (Represents foundational learning and open knowledge)
  - **Deep Navy Base**: `#0D1E32` (Represents academic authority and clarity)
- **Brand Tagline**: *"Shape Your Future, One Step at a Time"*
- **Design Theme**: Clean Modern Academic SaaS with origami paper grid textures, subtle glassmorphism, and editorial typography.
- **Typography**: 
  - Headings: `Plus Jakarta Sans`
  - Body: `Inter`
- **Color Tokens**:
  - Brand Coral Red: `#FF383D`
  - Brand Cyan Blue: `#25ABE2`
  - Primary Dark: `#0D1E32`
  - Surface Background: `#F8FAFD`
  - Card Surface: `#FFFFFF`
  - Success: `#16A34A`
  - Error: `#DC2626`

---

## 🚀 Features & Architecture

### 1. Multi-Page Experience (React Router)
- **Home (`/`)**:
  - Sticky glassmorphic **Navbar** with official vector logo and mobile drawer
  - **Hero Section** featuring the large official logo medallion, dual-tone coral/cyan gradient typography, trust metrics, and primary/secondary CTAs
  - **Programs Section** featuring *Civil Service* (Coral accent) and *Tuition* (Cyan accent) with highlight bullet points and direct enquiry triggers
  - **Why Students Choose Us** (Focused Learning, Personal Guidance, Future Oriented)
  - **About Origami Learning** institute narrative, student commitments & faculty highlights
  - **High-conversion CTA section** with student helpline and reassurance badges
  - **Footer** with official logo, navigation links, contact points, and campus location
- **Student Enquiry (`/enquiry`)**:
  - Centered card layout on academic gradient background
  - Controlled form inputs with real-time validation:
    - **Student Name**: required, min 2 characters
    - **Place**: required
    - **Class / Grade**: select dropdown (`Class 8`, `Class 9`, `Class 10`, `Class 11`, `Class 12`, `Degree`, `Other`)
    - **School / College**: required
    - **Mobile Number**: required 10-digit Indian mobile format (`^[6-9][0-9]{9}$`)
    - **Interested In**: select dropdown (`Civil Service`, `Tuition`)
  - Supports query pre-filling via `?program=Civil%20Service` or `?program=Tuition`
  - Loading button with animated spinner (`Submitting...`)
- **Success (`/enquiry-success`)**:
  - Multi-colored confetti celebration animation (Coral, Cyan, Gold, Green)
  - Detailed submission summary card with unique reference ID (`OL-XXXXXX`)
  - Clear timeline explaining next academic mentoring steps
  - *Back to Home* and *Submit Another Enquiry* actions
- **404 Handling (`*`)**:
  - Custom `NotFoundPage` with return home navigation

---

## 📊 Future Excel & Power Automate Integration Architecture

The architecture is pre-configured in [`src/services/enquiryService.js`](./src/services/enquiryService.js) to connect to **Microsoft Power Automate → OneDrive Excel** without requiring UI changes.

### Schema:
```json
{
  "Submission_ID": "OL-829103",
  "Timestamp_ISO": "2026-09-07T07:15:00.000Z",
  "Submission_Date": "07 Sep 2026, 12:45 pm",
  "Student_Name": "Ananya Sharma",
  "Place": "Kochi",
  "Class_Grade": "Class 11",
  "School_College": "St. Mary's Higher Secondary School",
  "Mobile_Number": "9876543210",
  "Interested_Program": "Civil Service",
  "Status": "New Enquiry",
  "Source": "Web Portal"
}
```

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
