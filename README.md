# Onpoint:sparkles:

##### Automated Points System



#### Description:sparkles:

**"Onpoint"** is an application designed to simplify the assignment and tracking of points to students by teachers. The main goal of this system is to automate the process of awarding additional points to students based on their performance and academic achievements

The system is based on the management of four main tables: **teachers, students, extra_points, and users**. These tables store relevant information about teachers, students, users, and the extra points assigned to each student.



#### Principal Functions:sparkles:

- <u>**Teacher registration and management:**</u> The system allows teachers to sign up and handle their personal details using the ***teachers*** table.

- **<u>Student registration and management:</u>** Students can be enrolled in the system along with their basic information and the data it is stored in the ***students*** table.

- <u>**Users allocation:**</u> Admins have the ability to add, update, get and delete users using the ***users*** table. Each one is uniquely identified, has a name, and corresponding personal information that relates to different roles such as ***teacher, student, and administrator***.

- <u>**Point allocation:**</u> Teachers can assign extra points to students using the  ***extra_points*** table. These points are associated with a specific student and include information such as the amount of points awarded and any accompanying remarks.

#### Installation:sparkles:

To run the Automated Points System in your local environment, follow these steps:

1. Clone the repository or download the source code.

    `git clone https://github.com/your-user/proyect-name.git`

    `git clone https://github.com/VickyMontanezCampus/Onpoint.git`

2. Install dependencies by running the command 

   `npm install`.

3. Configure the database and perform any necessary migrations.

    `npm i -E -D node nodemon express dotenv mysql2 typescript class-transformer class-validator reflect-metadata`

4. Start the application using the command

    `npm run dev` and `npm run tsc`

5. Access the application through your browser at 

   `http://localhost:5005`.

   

#### Dependencies:sparkles:

The project uses the following dependencies:

- `node 	--v 18.16.1`

- `nodemon  --v 3.0.1`

- `express  --v 4.18.2`

- `mysql2  --v 3.5.2`

- `dotenv  --v 16.3.1`

- `class-transformer  --v 0.5.1`

- `class-validator --v 0.5.1`

- `typescript   --v ^5.1.6`

- `reflect-metadata   --v 0.1.13`

  

#### Setting:sparkles:

The project utilizes environment variables for configuring the database connection.



##### *DATABASE*

**¡IMPORTANT!**   **(The default information that is in the database was modified to fix certain bugs)**



To set up the database, you should go to the file where the database is created 

`scripts/db.sql` 

and execute all the queries in order. You can even insert information to test the API as well by running the pre-defined queries.



When configuring the API server, you can go and modify the global variables `MY_CONFIG` and `MY_CONNECT` stored in the `./.env` file:



##### *MY_CONFIG*

The  ***MY_CONFIG***  environment variable defines the database server configuration. You need to provide the hostname and connection port.

`*DEFAULT*: MY_CONFIG={"hostname": "localhost", "port": 5005}`



##### *MY_CONNECT*

The  ***MY_CONNECT***  environment variable defines the database connection parameters, such as host, user, password, database, and port.

`MY_CONNECT={"host": "localhost", "user": "root", "database": "onpoint", "password": "1234", "port": 3306}`

`*DEFAULT*: MY_CONNECT={"host":"localhost", "user":"campus", "database":"onpoint", "password":"campus2023","port":3306}`



#### Testing:sparkles:

To test the API, you can use the following routes stored in the `./app.js` file: 



- `'/teachers'`
-  `'/students'`
- `'/extraPoints'`
- `'/users'`



These routes can be tested using the ThunderClient extension. In this extension, you can test the following functions: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD`, `OPTIONS`, `PROPFIND`, and `CUSTOM` in the following manner: 



1. Open the ThunderClient extension in your browser.

2. Select the method you want to test (e.g., GET).

3. Enter the URL of the API route you want to test (e.g., `http://http://localhost:5005/teachers`).

4. Add any required headers or parameters if necessary.

5. Click on the "Send" button to make the request to the specified route.

6. The extension will display the response received from the API, including status code, headers, and the response body.

   

You can follow a similar process for other methods like `POST`, `PUT`, `DELETE`, etc., by selecting the respective method from the dropdown and providing the necessary data for testing.

Remember to have your API server running and accessible while testing with ThunderClient.



#### Test Examples:sparkles:

Here some examples of how to test different methods using ThunderClient with the given API routes:

1. **GET Request Example**:
   Route: `/teachers`

   ```
   Method: GET
   URL: http://localhost:5005/teachers
   Headers:
   - Content-Type: application/json
   
   Method: GET (by Id)
   URL: http://localhost:5005/teachers/:teacherId
   Headers:
   - Content-Type: application/json
   ```
   Response: `/teachers`

   ``` 
   [
     {
       "teacher_id": 1,
       "teacher_name": "John Doe"
     },
     {
       "teacher_id": 2,
       "teacher_name": "Maria Lopez"
     },
     {
       "teacher_id": 3,
       "teacher_name": "Lisa Wilson"
     },
     {
       "teacher_id": 4,
       "teacher_name": "Michael Johnson"
     },
     {
       "teacher_id": 5,
       "teacher_name": "James Anderson"
     }
   ]
   ```

   

   Route: `/students`

   ````
   Method: GET
   URL: http://localhost:5005/students
   Headers:
   - Content-Type: application/json
   
   Method: GET (by Id)
   URL: http://localhost:5005/students/:studentId
   Headers:
   - Content-Type: application/json
   ````

   Response: `/students`

   ```
   [
     {
       "student_id": 1,
       "student_name": "Sophia Williams"
     },
     {
       "student_id": 2,
       "student_name": "Jane Smith"
     },
     {
       "student_id": 3,
       "student_name": "Alex Johnson"
     },
     {
       "student_id": 4,
       "student_name": "David Brown"
     },
     {
       "student_id": 5,
       "student_name": "Chris Lee"
     },
     {
       "student_id": 6,
       "student_name": "Emma Martinez"
     },
     {
       "student_id": 7,
       "student_name": "Ryan Thompson"
     },
     {
       "student_id": 8,
       "student_name": "Olivia Davis"
     },
     {
       "student_id": 9,
       "student_name": "Matthew Hernandez"
     },
     {
       "student_id": 10,
       "student_name": "Daniel Miller"
     }
   ]
   ```

   Route: `/users`

   ```
   Method: GET
   URL: http://localhost:5005/users
   Headers:
   - Content-Type: application/json
   
   Method: GET (by Id)
   URL: http://localhost:5005/users/:userId
   Headers:
   - Content-Type: application/json
   ```

   Response: `/users`

   ```
   [
     {
       "user_id": 1,
       "user_name": "John Doe"
     },
     {
       "user_id": 2,
       "user_name": "Maria Lopez"
     },
     {
       "user_id": 3,
       "user_name": "Lisa Wilson"
     },
     {
       "user_id": 4,
       "user_name": "Michael Johnson"
     },
     {
       "user_id": 5,
       "user_name": "James Anderson"
     },
     {
       "user_id": 6,
       "user_name": "Sophia Williams"
     },
     {
       "user_id": 7,
       "user_name": "Jane Smith"
     },
     {
       "user_id": 8,
       "user_name": "Alex Johnson"
     },
     {
       "user_id": 9,
       "user_name": "David Brown"
     },
     {
       "user_id": 10,
       "user_name": "Chris Lee"
     },
     {
       "user_id": 11,
       "user_name": "Emma Martinez"
     },
     {
       "user_id": 12,
       "user_name": "Ryan Thompson"
     },
     {
       "user_id": 13,
       "user_name": "Olivia Davis"
     },
     {
       "user_id": 14,
       "user_name": "Matthew Hernandez"
     },
     {
       "user_id": 15,
       "user_name": "Daniel Miller"
     },
     {
       "user_id": 16,
       "user_name": "Emily White"
     },
     {
       "user_id": 17,
       "user_name": "Eric Garcia"
     },
     {
       "user_id": 18,
       "user_name": "Sarah Taylor"
     },
     {
       "user_id": 19,
       "user_name": "Ava Wilson"
     },
     {
       "user_id": 20,
       "user_name": "Isabella Thompson"
     }
   ]
   ```

   Route: `/extraPoints`

   ```
   Method: GET
   URL: http://localhost:5005/extraPoints
   Headers:
   - Content-Type: application/json
   
   Method: GET (by Id)
   URL: http://localhost:5005/extraPoints/:studentId
   Headers:
   - Content-Type: application/json
   ```

   Response: `/extraPoints`

   ```
   [
     {
       "Id": 1,
       "Student": "Sophia Williams",
       "Total_ExtPoints": 5
     },
     {
       "Id": 2,
       "Student": "Jane Smith",
       "Total_ExtPoints": 10
     },
     {
       "Id": 3,
       "Student": "Alex Johnson",
       "Total_ExtPoints": 10
     },
     {
       "Id": 4,
       "Student": "David Brown",
       "Total_ExtPoints": 20
     },
     {
       "Id": 5,
       "Student": "Chris Lee",
       "Total_ExtPoints": 15
     },
     {
       "Id": 6,
       "Student": "Emma Martinez",
       "Total_ExtPoints": 15
     },
     {
       "Id": 7,
       "Student": "Ryan Thompson",
       "Total_ExtPoints": 12
     },
     {
       "Id": 8,
       "Student": "Olivia Davis",
       "Total_ExtPoints": 18
     },
     {
       "Id": 9,
       "Student": "Matthew Hernandez",
       "Total_ExtPoints": 8
     },
     {
       "Id": 10,
       "Student": "Daniel Miller",
       "Total_ExtPoints": 10
     }
   ]

2. **GET BY IDRequest Example**:
   Route: `/teachers/:teacherId`

   ```
   Method: GET
   URL: http://localhost:5005/teachers
   Headers:
   - Content-Type: application/json
   
   Method: GET (by Id)
   URL: http://localhost:5005/teachers/:teacherId
   Headers:
   - Content-Type: application/json
   ```

   Response: `/teachers/1`

   ``` 
   {
     "teacher_id": 1,
     "teacher_name": "John Doe",
     "user_gender": 1,
     "user_age": 30,
     "user_address": "123 Main St",
     "teacher_phone": "+1 123-456-7890",
     "teacher_email": "john.doe@example.com",
     "specialty": "Mathematics",
     "class_name": "Math 101",
     "roll": "Professor"
   }
   ```

   

   Route: `/students/:studentId`

   ````
   Method: GET
   URL: http://localhost:5005/students
   Headers:
   - Content-Type: application/json
   
   Method: GET (by Id)
   URL: http://localhost:5005/students/:studentId
   Headers:
   - Content-Type: application/json
   ````

   Response: `/students/1`

   ```
   {
     "student_id": 1,
     "student_name": "Sophia Williams",
     "user_gender": 2,
     "user_age": 29,
     "user_address": "888 Oak St",
     "student_phone": "+33 987654321",
     "student_email": "sophia.williams@example.com",
     "roll": "Student",
     "class_name": "Math 101"
   }
   ```

   Route: `/users/::userId`

   ```
   Method: GET
   URL: http://localhost:5005/users
   Headers:
   - Content-Type: application/json
   
   Method: GET (by Id)
   URL: http://localhost:5005/users/:userId
   Headers:
   - Content-Type: application/json
   ```

   Response: `/users/1`

   ```
   {
     "user_id": 1,
     "user_name": "John Doe",
     "gender": "Male",
     "user_age": 30,
     "user_address": "123 Main St",
     "user_role": "Professor",
     "email": "john.doe@example.com",
     "phone_number": "+1 123-456-7890"
   }
   ```

   Route: `/extraPoints/:studentId`

   ```
   Method: GET
   URL: http://localhost:5005/extraPoints
   Headers:
   - Content-Type: application/json
   
   Method: GET (by Id)
   URL: http://localhost:5005/extraPoints/:studentId
   Headers:
   - Content-Type: application/json
   ```

   Response: `/extraPoints/1`

   ```
   {
     "Id": 1,
     "Student": "Sophia Williams",
     "TeacherId": 1,
     "Teacher": "John Doe",
     "Total_ExtPoints": 5
   }
   ```

3. **POST Request Example**:

   **IMPORTANT **

   **(WHEN ENTERING A TABLE TO ANOTHER TABLE THAT IS NOT USER, THE DATA IS AUTOMATICALLY ADDED AS TO THE TABLE, SO THE ID ONLY GOES ACCORDING TO THE USER TABLE)**

   

   Route: `/teachers`

   ```
   Method: POST
   URL:  http://localhost:5005/teachers
   Headers:
   - Content-Type: application/json
   Body:
   { 
     "id":11,
     "name":"Diego Salcedo",
     "gender": 1,
     "age":25,
     "address":"Cll 56 #13-36",
     "phone":"3187600429",
     "phone_type": "Profesional",
     "email":"ingdieg@gmail.com",
     "email_type":"Profesional",
     "specialty_id": 1,
     "class_id": 1,
     "roll_id": 1 
   }
   ```

   Response: `/teachers`

   ```
   The Data Was Successfully Inserted Into The DataBase :) (teachers)
   ```

   Route: `/students`

   ```
   Method: POST
   URL:  http://localhost:5005/students
   Headers:
   - Content-Type: application/json
   Body:
   {
     "id":11,
     "name": "Sandra Zuñiga",
     "gender":2,
     "age": 19,
     "address": "Bellavista Trans.15",
     "phone": "56660544",
     "phone_type": "Personal",
     "email": "sandra1991@gmail.com",
     "email_type": "Personal",
     "class_id": 4,
     "roll_id": 2
   }
   ```
   Response:`/students`

   ```
   The Data Was Successfully Inserted Into The DataBase :) (students)
   ```

   Route: `/users`

   ```
   Method: POST
   URL:  http://localhost:5005/users
   Headers:
   - Content-Type: application/json
   Body:
   {
     "id":11,
     "name": "Daniel Roa",
     "gender":1,
     "age": 13,
     "address": "Cll 56 #13-36",
     "phone": "60008000",
     "phone_type": "Personal",
     "email": "santigoch@gmail.com",
     "email_type": "Personal",
     "roll_id": 2
   }
   ```

   Response: `/users`

   ```
   The Data Was Successfully Inserted Into The DataBase :) (users)
   ```

   Route: `/extraPoints`

   ```
   Method: POST
   URL:  http://localhost:5005/extraPoints/1/extra-points
   Headers:
   - Content-Type: application/json
   Body:
   {
     "studentId":7,
     "teacherId": 1,
     "typeId": 7,
     "comments": "You have shown significant progress in your performance."
   }
   ```

   Response: `/extraPoints`

   ```
   **If a student was just added**:
   {
     "message": "Extra points inserted successfully :) :)"
   }
   
   **If you test the data by default**:
   {
     "message": "Extra points updated successfully :)"
   }

4. **PUT Request Example**:

   Route: `/teachers`

   ```
   Method: PUT
   URL:  http://localhost:5005/teachers/11
   Headers:
   - Content-Type: application/json
   Body:
   {
     "name":"Ernestina Salcedo",
     "gender": 2,
     "age":90,
     "address":"Cll 46 #13-36",
     "phone":"+(57) 310000000",
     "phone_type": "Personal",
     "email":"enerxitna@gmail.com",
     "email_type":"Personal",
     "specialty_id": 3,
     "class_id":3,
     "roll_id":1 
   }
   ```

   Response: `/teachers`

   ```
   The data was successfully updated in the database :) (teachers)
   ```

   Route: `/students`

   ```
   Method: PUT
   URL:  http://localhost:5005/students/11
   Headers:
   - Content-Type: application/json
   Body:
   {
     "name": "Sandra Pamela Zuñiga",
     "gender":2,
     "age": 21,
     "address": "Bellavista Cll 45-20,
     "phone": "5000000",
     "phone_type": "Personal",
     "email": "sandraPamela@gmail.com",
     "email_type": "Personal",
     "class_id": 3,
     "roll_id": 2
   }
   ```

   Response: `/students`

   ```
   The data was successfully updated in the database :) (students)
   ```

   Route: `/users`

   ```
   Method: POST
   URL:  http://localhost:5005/users/11
   Headers:
   - Content-Type: application/json
   Body:
   {
     "name": "Daniela Roa Molina",
     "gender":2,
     "age": 15,
     "address": "Cll 56 #13-36",
     "phone": "600085555",
     "phone_type": "Personal",
     "email": "daniroamoli@gmail.com",
     "email_type": "Personal",
     "roll_id": 2
   }
   ```

   Response: `/users`

   ```
   The data was successfully updated in the database :) (users)
   ```

   Route: `/extraPoints`

   **IMPORTANT **

   **THE PUT FUNCTION RELATED TO THE EXTRA POINTS TABLE IS ALREADY IMPLEMENTED WITH THE POST FUNCTION**

   

5. **DELETE Request Example**:
   Route: `/teachers`

   ```
   Method: DELETE
   URL: http://localhost:5005/teachers/11
   ```
   Response: `/teachers`

   ```
   The data was successfully deleted in the database :) (teachers)
   ```

   Route: `/students`

   ```
   Method: DELETE
   URL: http://localhost:5005/students/11
   ```

   Response: `/students`

   ```
   The data was successfully deleted in the database :) (students)
   ```

   Route: `/users`

   ```
   Method: DELETE
   URL: http://localhost:5005/users/11
   ```

   Response: `/users`

   ```
   The data was successfully deleted in the database :) (users)
   ```

   Route: `/extraPoints`

   ```
   Method: DELETE
   URL: http://localhost:5005/extraPoints/11/extra-points/:extraPointsId
   ```

   Response: `/extraPoints`

   ```
   Extra points deleted successfully :) (ExtraPoints)
   ```



#### Project status: Incomplete:balloon:

The project has some bugs related to JSON Web Tokens (JWT) and cookie configurations need to be implemented.



#### Autor:sparkles:

Vicky Vanessa Montañez Molina ---

- vmontanez707@gmail.com
- https://github.com/VickyMontanezCampus
