// Express to run server and routes
import express from 'express';
import routes from './routes/index';
import mylogger from './middleware/mylogger';

// Define server port
const port = 4000;

// Start up an instance of app
const app = express();
app.locals.title = 'Motaz Server';
app.locals.appname = 'Udacity - Image Processing API project';

// Dependencies
// Middleware configuration section
// Config express to use mylogger as middleware
app.use(mylogger);

// Define endpoints by using the routes as middleware
app.use('/', routes);

// Run the Server
app.listen(port, () => {
	console.log(app.locals.title);
	console.log(app.locals.appname);
	console.log(`Server listening on http://localhost:${port}`);
});

export default app;
