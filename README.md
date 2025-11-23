# 💼 WorkSphere - Employee Management System

## 🔗 Live Demo
Check out [WorkSphere in action here](https://ziiippoo.github.io/Virtual-Workspace/)!

## 📖 About
WorkSphere is a comprehensive employee management application that helps organize and assign staff to different workspace zones. This project demonstrates real-world business logic with role-based access control, capacity management, and persistent data storage - bringing together functionality and user experience!

## 🚀 Motivation
Building WorkSphere taught me how to manage complex state, implement business rules, and create an intuitive interface for managing people and spaces. Every feature - from zone restrictions to experience tracking - was an opportunity to think like a developer solving real problems!

## ✨ Features
* **Worker Management**: Add, edit, and view complete employee profiles
* **Smart Zone Assignment**: Assign workers based on role requirements and capacity limits
* **Experience Tracking**: Record and display work history for each employee
* **Role-Based Access**: 6 different zones with specific role requirements
* **Capacity Control**: Automatic enforcement of zone capacity limits
* **Photo Support**: Add profile pictures via URL
* **Persistent Storage**: All data automatically saved to browser storage
* **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
* **Real-time Validation**: Email, phone, and data format validation

## 🏢 Zones & Capacity

| Zone | Capacity | Allowed Roles |
|------|----------|---------------|
| Conference Room | 20 | All roles |
| Servers Room | 3 | IT Technician, Manager |
| Security Room | 2 | Security Agent, Manager |
| Reception | 2 | Receptionist, Manager |
| Staff Room | 15 | All roles |
| Vault | 1 | Manager, Security Agent, Other, IT Technician, Receptionist |

## 🛠️ Technologies
* HTML5
* CSS3 (Grid Layout, Flexbox, Responsive Design)
* Vanilla JavaScript
* LocalStorage API
* Custom form validation with Regex

## 🎯 What I Learned
* Managing complex application state
* Implementing business logic and rules
* Working with LocalStorage for data persistence
* Form validation and user input handling
* Responsive grid-based layouts
* Modal management and overlays
* Array manipulation and filtering
* Dynamic DOM manipulation
* Debugging complex interactions

## 🔄 Project Structure
```
worksphere/
├── index.html
├── style.css
├── script.js
└── images/
    ├── background.jpg
    ├── worksphere_logo-removebg-preview.png
    └── img_placeholder.png
```

## 📋 How It Works
1. **Add Workers**: Create employee profiles with comprehensive information
2. **Assign to Zones**: Click '+' on any zone to assign eligible workers
3. **Manage Assignments**: Remove workers from zones to reassign them
4. **View Details**: Check complete worker profiles including experience
5. **Edit Anytime**: Update worker information as needed

