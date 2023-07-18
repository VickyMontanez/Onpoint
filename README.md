# Onpoint:sparkles:

##### Automated Points System



#### Description:sparkles:

**"Onpoint"** is an application designed to simplify the assignment and tracking of points to students by teachers. The main goal of this system is to automate the process of awarding additional points to students based on their performance and academic achievements

The system is based on the management of four main tables: **teachers, students, classes, and bonus_points**. These tables store relevant information about teachers, students, classes, and the points assigned to each student.



#### Principal Functions:sparkles:

- <u>**Teacher registration and management:**</u> The system allows teachers to sign up and handle their personal details using the ***teachers*** table.

- **<u>Student registration and management:</u>** Students can be enrolled in the system along with their basic information and the data it is stored in the ***students*** table.

- <u>**Class allocation:**</u> Teachers have the ability to assign students to different classes using the ***classes*** table. Each class is uniquely identified, has a name, and is linked to the corresponding teacher..

- <u>**Point allocation:**</u> Teachers can assign extra points to students using the  ***bonus_points*** table. These points are associated with a specific student and include information such as the amount of points awarded and any accompanying remarks.

  

#### Installation:sparkles:

To run the Automated Points System in your local environment, follow these steps:

1. Clone the repository or download the source code.

    `git clone https://github.com/tu-usuario/nombre-del-proyecto.git`

2. Install dependencies by running the command 

   `npm install`.

3. Configure the database and perform any necessary migrations.

    `npm i -E -D node nodemon express dotenv mysql`

4. Start the application using the command

    `npm run dev`.

5. Access the application through your browser at 

   `http://localhost:5005`.

   

#### Setting:sparkles:

The project utilizes environment variables for configuring the database connection.



##### MY_CONFIG

The  ***MY_CONFIG***  environment variable defines the database server configuration. You need to provide the hostname and connection port.

`MY_CONFIG={"hostname": "localhost", "port": 5005}`



##### MY_CONNECT

The  ***MY_CONNECT***  environment variable defines the database connection parameters, such as host, user, password, database, and port.

`MY_CONNECT={"host": "localhost", "user": "root", "database": "onpoint", "password": "45678", "port": 3306}`



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



#### Autor:sparkles:

Vicky Vanessa Montañez Molina ---

- vmontanez707@gmail.com
- https://github.com/VickyMontanezCampus
