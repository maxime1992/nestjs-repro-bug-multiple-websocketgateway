import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersComponent } from '../services/users.component';
import { OrdersComponent } from './../services/orders.component';

@Module({
  controllers: [AppController],
  components: [
    UsersComponent,
    // here, if you uncomment the following line
    // and take a look to the frontend page, you'll
    // see an error of type:
    // WebSocket connection to 'ws://localhost:4100/socket.io/?EIO=3&transport=websocket&sid=some-sid' failed: Error during WebSocket handshake: Unexpected response code: 400
    // OrdersComponent
  ],
})
export class ApplicationModule {}
