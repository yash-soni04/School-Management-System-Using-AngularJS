# School Management System - Angular & Django

This project is a School Management System designed to facilitate CRUD (Create, Read, Update, Delete) operations for student records. It utilizes Angular for the frontend and Django with Django Rest Framework for the backend.

## Project Requirements

- **Frontend Framework:** TypeScript & Angular
- **Backend Framework:** Django & Django Rest Framework
- **Database:** MySQL database with XAMPP
- **IDE:** Visual Studio Code
- **API Tool:** Postman

## Features

- **CRUD Operations:** Allows administrators to Create, Read, Update, and Delete student records.
- **User Authentication:** Secure login system for administrators.
- **Database Management:** Integration with MySQL database for storing student information.
- **Responsive Design:** User-friendly interface accessible on both desktop and mobile devices.
- **Data Validation:** Ensures that only valid student information is accepted during record creation and updates.
- **Error Handling:** Provides informative error messages for any encountered issues during CRUD operations.
- **API Documentation:** Documentation available for the backend API endpoints.

## Backend Setup

1. Install Django 3.2.
2. Create a Django project named `SchoolManagementSystem`.
3. Install XAMPP and pymysql.
4. Create and activate a virtual environment.
5. Install Django inside the virtual environment.
6. Create a new Django application named `StudentApp`.
7. Add `StudentApp` to `INSTALLED_APPS` in `settings.py`.
8. Install django-cors-headers and djangorestframework.
9. Configure CORS and REST framework settings in `settings.py`.
10. Create a `Student` model in `StudentApp/models.py`.
11. Create serializers for the `Student` model in `StudentApp/serializers.py`.
12. Configure MySQL database connection in `settings.py`.
13. Create views to handle CRUD operations in `StudentApp/views.py`.
14. Define URLs for API endpoints in `urls.py`.

## Frontend Setup (Angular)

1. Install Angular CLI 16 or greater than 16 and create a new Angular application named `FrontEnd`.
2. Enable Routing in the app
3. Generate a custom component for CRUD operations using Angular CLI.
4. Implement HTML template and component logic for CRUD operations in `crud.component.html` and `crud.component.ts`.
5. Use Bootstrap for styling by adding Bootstrap styles to `index.html`.

## Usage

1. Start the Django development server using `python manage.py runserver`.
2. Start the Angular development server using `ng serve`.
3. Access the application frontend in the browser.
4. Perform CRUD operations on student records using the provided interface.

## Folder Structure
school-management-system/
│
├── backend/

│ ├── SchoolManagementSystem/

│ │ ├── settings.py

│ │ ├── urls.py

│ │ └── ...

│ ├── StudentApp/

│ │ ├── models.py

│ │ ├── serializers.py

│ │ ├── views.py

│ │ └── ...

│ └── ...

│
└── front-end/

├── src/

│ ├── app/

│ │ ├── crud/

│ │ │ ├── crud.component.html

│ │ │ ├── crud.component.scss

│ │ │ └── crud.component.ts

│ │ └── ...

│ ├── app.module.ts

│ └── ...

├── angular.json

├── package.json

└── ...

##Clone the repository:

    `
    git clone https://github.com/yash-soni04/School-Management-System-Using-AngularJS.git
    `
    
## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.
