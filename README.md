# REST-API
This will be the basis for all of my personal Web Applications. I will adapt it to all the new functionalities and features of express.js and all the key dependencies so that it stays up to date. 

# DOCUMENTATION

- SETTING UP

* Change general routes to match your Application Front-End
  * Chnage the names in the "routes.js" file o that they match the requests from Front-End
  * Change each individual endpoint in both the custom collection controller and the user one
   
* Change DB_Connection_String ending to match the one of your collection

* Change DB_Models to match your Application Front-End
  * Chnage collection and exports names
  * Apply all validations with their error msgs - the MongooseErrorMapper will take care of the rest
 
* Change ervices to have every request you need
