## This is a REST API for doing login and sign up using jwt token and storing http-only cookie in client's browser with proper status codes

# sign up
sign up using username,password,mobile number,email,usertype.
Post api: http://localhost:8000/user/signup
Password will store in database in encrypted format(have used bcrypt for that purpose)

# login
login using username and password and store the login jwt token in http-only cookie
Post api: http://localhost:8000/user/login

# inserting data
inserting some data in database(evaluate data using jwt)
post api: http://localhost:8000/add
(This will only work if user login to the api)

# reading data 
reading data after login
get api: http://localhost:8000/add

# logout
loging out and removing the cookie from client's browser
post api: http://localhost:8000/user/logout



