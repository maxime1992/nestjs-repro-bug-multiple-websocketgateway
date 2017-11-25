import { Get, Controller } from '@nestjs/common';
import { WebSocketGateway, OnGatewayConnection } from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'orders' })
export class OrdersComponent implements OnGatewayConnection {
  handleConnection(client: any) {
    let cpt = 0;

    setInterval(() => {
      const msg = `ORDERS: message n°${cpt}`;

      client.emit('ORDER_MSG', msg);

      cpt++;
    }, 1000);
  }
}
