import { service } from './service';

// set .env in process
import { config } from 'dotenv';
config();

service.listen(process.env.PORT);

console.log(`Server started on ${process.env.PORT} port`);
