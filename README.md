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

2. **POST Request Example**:

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
     "phone":"+(57) 3187600429",
     "phone_type": "Profesional",
     "email":"ingdieg@gmail.com",
     "email_type":"Profesional",
     "specialty_id": 1,
     "class_id": 1,
     "roll_id": 1 
   }
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
     "phone": "+57 56660544",
     "phone_type": "Personal",
     "email": "sandra1991@gmail.com",
     "email_type": "Personal",
     "class_id": 4,
     "roll_id": 2
   }
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
     "phone": "+57 60008000",
     "phone_type": "Personal",
     "email": "santigoch@gmail.com",
     "email_type": "Personal",
     "roll_id": 2
   }
   ```

   Route: `/extraPoints`

   ```
   Method: POST
   URL:  http://localhost:5005/extraPoints/1/extra-points
   Headers:
   - Content-Type: application/json
   Body:
   {
     "teacherId": 1,
     "typeId": 7,
     "comments": 'You have shown significant progress in your performance.'
   }

3. **PUT Request Example**:

   Route: `/teachers`

   ```
   Method: POST
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

   Route: `/students`

   ```
   Method: POST
   URL:  http://localhost:5005/students/11
   Headers:
   - Content-Type: application/json
   Body:
   {
     "name": "Sandra Pamela Zuñiga",
     "gender":2,
     "age": 21,
     "address": "Bellavista Cll 45-20,
     "phone": "+57 5000000",
     "phone_type": "Personal",
     "email": "sandraPamela@gmail.com",
     "email_type": "Personal",
     "class_id": 3,
     "roll_id": 2
   }
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
     "phone": "+57 600085555",
     "phone_type": "Personal",
     "email": "daniroamoli@gmail.com",
     "email_type": "Personal",
     "roll_id": 2
   }
   ```

   Route: `/extraPoints`

   ```
   Method: POST
   URL:  http://localhost:5005/extraPoints/1/extra-points
   Headers:
   - Content-Type: application/json
   Body:
   {
     "teacherId": 3,
     "typeId": 9,
     "comments": 'Demonstrated creativity in an art project'
   }
   ```

4. **DELETE Request Example**:
   Route: `/teachers`

   ```
   Method: DELETE
   URL: http://localhost:5005/teachers/11
   ```
   Route: `/students`

   ```
   Method: DELETE
   URL: http://localhost:5005/students/11
   ```

   Route: `/users`

   ```
   Method: DELETE
   URL: http://localhost:5005/users/11
   ```

   Route: `/extraPoints`

   ```
   Method: DELETE
   URL: http://localhost:5005/extraPoints/11/extra-points/:extraPointsId
   ```



#### Project status: Incomplete:balloon:

The project has some bugs related to adding and subtracting extra points, specifically in the `POST` and `DELETE` functions. Additionally, the JSON Web Tokens (JWT) and cookies configurations need to be implemented.



#### Autor:sparkles:

Vicky Vanessa Montañez Molina ---

- vmontanez707@gmail.com
- https://github.com/VickyMontanezCampus
