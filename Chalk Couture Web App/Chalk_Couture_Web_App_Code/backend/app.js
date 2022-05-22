//Main Backend file of app

const express = require("express");
const mongoose = require("mongoose");  // Require mongoose library
const cors = require('cors');
//Adding better logging functionality
const morgan = require("morgan");
//In the production systems, we should not hardcode the sensitive data like API Keys, 
//Secret Tokens, etc directly within the codebase (based on the Twelve factor App method). 
// We will pass them as environment variables. This module helps us to load environment variables from a .env file into process.env
require("dotenv").config();   // Require the dotenv

const app = express();  //Create new instance

//import the general_information model schema from another file
let ItemModel = require('./models/item');

//import the subcontractor model schema from another file
let CustomerModel = require('./models/customer');

//import the subcontractor model schema from another file 
let EventModel = require('./models/event');

//import the subcontractor model schema from another file
let Order_LineModel = require('./models/customer_invoice');

//import the subcontractor model schema from another filef
let Event_Invoice_LineModel = require('./models/event_invoice');






// setting up mongoose DB connection
mongoose
  .connect(process.env.MONGO_URL)   // read environment varibale from .env
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

const PORT = process.env.PORT || 27017; //Declare the port number //change back to 27017

app.use(cors());
app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev"));  //enable incoming request logging in dev mode



//***************Start of item form***********\\

// endpoint that will create a general information document - Create Operation
app.post('/item', (req, res, next) => {

    ItemModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          // res.json(data)
          res.send('Item Form Information is added to the database :)');
        }
    });
});

//create an endpoint to get all general information from the API  -Read Operation
app.get('/items', (req, res, next) => {
    //very plain way to get all the data from the collection through the mongoose schema
    ItemModel.find((error, data) => {
        if (error) {
          //here we are using a call to next() to send an error message back
          return next(error)
        } else {
          res.json(data)
        }
      })
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/item/:id', (req, res, next) => {
    //find data based on the client id for the collection client form information
    ItemModel.findOne({ item_ID: req.params.id}, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            // Sending 404 when not found something is a good practice
          res.status(404).send('Investor Form Information not found :(');
        }
        else {
          res.json(data)
        }
    });
});



// Report for "Item Sales"
app.get('/item_name/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  ItemModel.findOne({ item_name: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('Project Form Information not found');
      }
      else {
        res.json(data)
      }
  });
});



// Updating - editing client form information - using PUT by clientID  - Update Operation
app.put('/item/:id', (req, res, next) => {
  //Update data in the client form information table based on client id 
  ItemModel.findOneAndUpdate({ item_ID: req.params.id }, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.send('Item Form Information has been successfully updated :)');
          console.log('Item Form Information successfully updated :)', data)
        }
      })
});

//delete a client form information by clientID  -Delete Operation 
app.delete('/item/:id', (req, res, next) => {
    
    //mongoose will use clientID of document to delete 
    ItemModel.findOneAndRemove({ item_ID: req.params.id}, (error, data) => {
        if (error) {
          return next(error);
        } else {
            res.send('Item Form Information has been successfully deleted !');
            console.log('Item Form Information successfully deleted !')
           //});
           //res.send('Item has been deleted!');
        }
      });
});
//*****************End of Investor Form************



//--------------------------------------------------------------------------------------------------------------------\\



//***************Start of customer form***********\\

// endpoint that will create a general information document - Create Operation
app.post('/customer', (req, res, next) => {

    CustomerModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          // res.json(data)
          res.send('Customer Form Information is added to the database :)');
        }
    });
});

//create an endpoint to get all general information from the API  -Read Operation
app.get('/customers', (req, res, next) => {
    //very plain way to get all the data from the collection through the mongoose schema
    CustomerModel.find((error, data) => {
        if (error) {
          //here we are using a call to next() to send an error message back
          return next(error)
        } else {
          res.json(data)
        }
      })
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/customer/:id', (req, res, next) => {
    //find data based on the client id for the collection client form information
    CustomerModel.findOne({ customer_number: req.params.id}, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            // Sending 404 when not found something is a good practice
          res.status(404).send('Customer Form Information not found :(');
        }
        else {
          res.json(data)
        }
    });
});


// Report for "Customer Purchases"
app.get('/customer_email/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  CustomerModel.findOne({ customer_email: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('Customer Email not found');
      }
      else {
        res.json(data)
      }
  });
});


// Updating - editing client form information - using PUT by clientID  - Update Operation
app.put('/customer/:id', (req, res, next) => {
  //Update data in the client form information table based on client id 
  CustomerModel.findOneAndUpdate({ customer_number: req.params.id }, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.send('Customer Form Information has been successfully updated :)');
          console.log('Customer Form Information successfully updated :)', data)
        }
      })
});

//delete a client form information by clientID  -Delete Operation 
app.delete('/customer/:id', (req, res, next) => {
    
    //mongoose will use clientID of document to delete 
    CustomerModel.findOneAndRemove({ customer_number: req.params.id}, (error, data) => {
        if (error) {
          return next(error);
        } else {
            res.send('Customer Form Information has been successfully deleted !');
            console.log('Customer Form Information successfully deleted !')
        }
      });
});
//*****************End of Investor Form************


//--------------------------------------------------------------------------------------------------------------------\\



//***************Start of event form***********\\

// endpoint that will create a general information document - Create Operation
app.post('/event', (req, res, next) => {

  EventModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        // res.json(data)
        res.send('Event Form Information is added to the database :)');
      }
  });
});

//create an endpoint to get all general information from the API  -Read Operation
app.get('/events', (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  EventModel.find((error, data) => {
      if (error) {
        //here we are using a call to next() to send an error message back
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/event/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  EventModel.findOne({ event_ID: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('Event Form Information not found :(');
      }
      else {
        res.json(data)
      }
  });
});



// Report for "Item Sales"
app.get('/event_name/:id', (req, res, next) => {
//find data based on the client id for the collection client form information
EventModel.findOne({ event_name: req.params.id}, (error, data) => {
    if (error) {
        return next(error)
    } else if (data === null) {
        // Sending 404 when not found something is a good practice
      res.status(404).send('Event Form Information not found');
    }
    else {
      res.json(data)
    }
});
});



// Updating - editing client form information - using PUT by clientID  - Update Operation
app.put('/event/:id', (req, res, next) => {
//Update data in the client form information table based on client id 
EventModel.findOneAndUpdate({ event_ID: req.params.id }, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('Event Form Information has been successfully updated :)');
        console.log('Event Form Information successfully updated :)', data)
      }
    })
});

//delete a client form information by clientID  -Delete Operation 
app.delete('/event/:id', (req, res, next) => {
  
  //mongoose will use clientID of document to delete 
  EventModel.findOneAndRemove({ event_ID: req.params.id}, (error, data) => {
      if (error) {
        return next(error);
      } else {
          res.send('Event Form Information has been successfully deleted !');
          console.log('Event Form Information successfully deleted !')
         //});
         //res.send('Item has been deleted!');
      }
    });
});



//*****************End of Event Form************



//--------------------------------------------------------------------------------------------------------------------\\



//***************Start of order_line form***********\\

// endpoint that will create a general information document - Create Operation
app.post('/customer_invoice', (req, res, next) => {

    Order_LineModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          // res.json(data)
          res.send('customer_invoice Form Information is added to the database :)');
        }
    });
});

//create an endpoint to get all general information from the API  -Read Operation
app.get('/customer_invoices', (req, res, next) => {
    //very plain way to get all the data from the collection through the mongoose schema
    Order_LineModel.find((error, data) => {
        if (error) {
          //here we are using a call to next() to send an error message back
          return next(error)
        } else {
          res.json(data)
        }
      })
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/customer_invoice/:id', (req, res, next) => {
    //find data based on the client id for the collection client form information
    Order_LineModel.findOne({ order_line_number: req.params.id}, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            // Sending 404 when not found something is a good practice
          res.status(404).send('Order_Line Form Information not found :(');
        }
        else {
          res.json(data)
        }
    });
});





// Updating - editing client form information - using PUT by clientID  - Update Operation
app.put('/customer_invoice/:id', (req, res, next) => {
  //Update data in the client form information table based on client id 
  Order_LineModel.findOneAndUpdate({ order_line_number: req.params.id }, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.send('customer_invoice Form Information has been successfully updated :)');
          console.log('customer_invoice Form Information successfully updated :)', data)
        }
      })
});

//delete a client form information by clientID  -Delete Operation 
app.delete('/customer_invoice/:id', (req, res, next) => {
    
    //mongoose will use clientID of document to delete 
    Order_LineModel.findOneAndRemove({ order_line_number: req.params.id}, (error, data) => {
        if (error) {
          return next(error);
        } else {
            res.send('customer_invoice Form Information has been successfully deleted !');
            console.log('customer_invoice Form Information successfully deleted !')
        }
      });
});
//*****************End of order_line Form************


//--------------------------------------------------------------------------------------------------------------------\\







//***************Start of event_invoice form***********\\

// endpoint that will create a general information document - Create Operation
app.post('/event_invoice', (req, res, next) => {

  Event_Invoice_LineModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        // res.json(data)
        res.send('Event Invoice Form Information is added to the database :)');
      }
  });
});

//create an endpoint to get all general information from the API  -Read Operation
app.get('/event_invoices', (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  Event_Invoice_LineModel.find((error, data) => {
      if (error) {
        //here we are using a call to next() to send an error message back
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/event_invoice/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  Event_Invoice_LineModel.findOne({ event_invoice_number: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('Invoice Form Information not found :(');
      }
      else {
        res.json(data)
      }
  });
});





// Updating - editing client form information - using PUT by clientID  - Update Operation
app.put('/event_invoice/:id', (req, res, next) => {
//Update data in the client form information table based on client id 
Event_Invoice_LineModel.findOneAndUpdate({ event_invoice_number: req.params.id }, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('Event_Invoice Form Information has been successfully updated :)');
        console.log('Event_Invoice Form Information successfully updated :)', data)
      }
    })
});

//delete a client form information by clientID  -Delete Operation 
app.delete('/event_invoice/:id', (req, res, next) => {
  
  //mongoose will use clientID of document to delete 
  Event_Invoice_LineModel.findOneAndRemove({ event_invoice_number: req.params.id}, (error, data) => {
      if (error) {
        return next(error);
      } else {
          res.send('Event_Invoice Form Information has been successfully deleted !');
          console.log('Event_Invoice Form Information successfully deleted !')
      }
    });
});
//*****************End of order_line Form************


//--------------------------------------------------------------------------------------------------------------------\\


//*****************Start of Item Order Line Report************

//Report to get item linked to order_line
app.get('/item_order_line_report/:id', (req, res, next) => {

  // customer invoice
    Order_LineModel.aggregate([
        //match item name in both tables
      { $match : { item_name: (req.params.id) } },  

        // what i choose to display from order_line table
      { $project : {_id:0, order_line_number:1, /*item_ID:1,*/ item_name:1, item_quantity:1, order_cost:1, customer_firstname:1, customer_lastname:1, customer_email:1, purchase_date:1 } }, 

        // 1. telling my report (aggregate) the table i want to get info from, 2. the field connecting them both, 3. The new table (report) it will create
      { $lookup : {         
          from : 'item',
          localField : 'item_name',
          foreignField : 'item_name',
          as : 'item',
         
      } },
    ],
     (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data);
        }
    });
  });
  //End of aggregate 



  //*****************End of Item Order Line Report************


//--------------------------------------------------------------------------------------------------------------------\\



//*****************Start of Customer Order Line Report************

//Report to get customer linked to order_line
app.get('/customer_order_line_report/:id', (req, res, next) => {

    // customer invoice
    Order_LineModel.aggregate([

        //match customer email in both tables
      { $match : { customer_email: (req.params.id) } },  

         // what i choose to display from order_line table
      { $project : {_id:0, order_line_number:1, item_ID:1, item_name:1, item_quantity:1, order_cost:1, customer_firstname:1, customer_lastname:1, customer_email:1, purchase_date:1 } },  

        // 1. telling my report (aggregate) the table i want to get info from, 2. the field connecting them both, 3. The new table (report) it will create
      { $lookup : {         
          from : 'customer',
          localField : 'customer_email',
          foreignField : 'customer_email',
          as : 'customer',
         
      } },
    ],
     (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data);
        }
    });
  });
  //End of aggregate 



  //*****************End of Customer Order Line Report************


//--------------------------------------------------------------------------------------------------------------------\\
//--------------------------------------------------------------------------------------------------------------------\\



//*****************Start of Event Invoice Report************

//Report to get customer linked to order_line
app.get('/event_invoice_report/:id', (req, res, next) => {


  Event_Invoice_LineModel.aggregate([

      //match customer email in both tables
    { $match : { event_name: (req.params.id) } },  

       // what i choose to display from order_line table
    { $project : {_id:0, event_invoice_number:1, item_ID:1, item_name:1, item_quantity:1, order_cost:1, /*event_ID:1, event_name:1,*/ customer_name:1, purchase_date:1 } },  

      // 1. telling my report (aggregate) the table i want to get info from, 2. the field connecting them both, 3. The new table (report) it will create
    { $lookup : {         
        from : 'event',
        localField : 'event_name',
        foreignField : 'event_name',
        as : 'event',
       
    } },
  ],
   (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data);
      }
  });
});
//End of aggregate 



//*****************End of Event Invoice Report************


//--------------------------------------------------------------------------------------------------------------------\\


//*****************Start of Item Even Sale Report************

//Report to get item linked to order_line
app.get('/item_event_sale_report/:id', (req, res, next) => {


  Event_Invoice_LineModel.aggregate([
      //match item name in both tables
    { $match : { item_name: (req.params.id) } },  

      // what i choose to display from order_line table
    { $project : {_id:0, event_invoice_number:1, /*item_ID:1,*/ item_name:1, item_quantity:1, order_cost:1, event_ID:1, event_name:1, customer_name:1, purchase_date:1 } }, 

      // 1. telling my report (aggregate) the table i want to get info from, 2. the field connecting them both, 3. The new table (report) it will create
    { $lookup : {         
        from : 'item',
        localField : 'item_name',
        foreignField : 'item_name',
        as : 'item',
       
    } },
  ],
   (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data);
      }
  });
});
//End of aggregate 



//*****************End of Item Event Sale Report************





// Server PORT

app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) 
        err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});