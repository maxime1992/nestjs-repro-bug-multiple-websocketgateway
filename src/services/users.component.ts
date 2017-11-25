import { Get, Controller } from '@nestjs/common';
import { WebSocketGateway, OnGatewayConnection } from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'users' })
export class UsersComponent implements OnGatewayConnection {
  handleConnection(client: any) {
    let cpt = 0;

    setInterval(() => {
      const msg = `USERS: message n°${cpt}`;

      client.emit('USER_MSG', msg);

      cpt++;
    }, 1000);
  }
}
