# Doggy DB

An Api to upload,retrieve,update,delete information about dogs.

> Deployed at  https://apna-cartv1.herokuapp.com/

## Tech Stack :-
-  Express
-  Nodejs
-  MongoDB

> ## Run Locally

***To run it locally on you machine you need to have a mongodb url.If you have that , then clone/fork this repo and place mongo url in a .env file with respective key id as mentioned in the code***

### **.env file :** 
``` javascript
DB_URL=<Your MongoDb URI>
```
After that:-

- Open Terminal and write  >
``` bash
npm  install
```

- After installation completes  > 
``` bash
npm start
```

## **Swagger Docs**
- The live url will redirect to the documentation page, which has all the instruction and information about the api routes.
### **File Upload**
- The api enables you to upload a csv file as multipart/form data which contains all the dog information.
- The csv file should contain data with columns :
    - name : Name of dog
    - type : Type (mixed or pure)
    - breed : Name of breed
    - age : Age of dog
- Example of the csv file: https://docs.google.com/spreadsheets/d/1_VgU4jcyfIT4w_egAOh285wSEQUTa0CHTTqE8H9tu0A/edit?usp=sharing
