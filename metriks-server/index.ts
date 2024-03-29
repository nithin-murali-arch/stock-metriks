import * as express from 'express';
import chromeExtension from './routes/chrome-extension';
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json()); 
app.use('/chrome-extension', chromeExtension);
app.use(express.static("public"));

app.listen(process.env.port || 2000);