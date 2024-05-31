import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    let user = {
      id: 101,
      firstName: 'Alan',
      lastName: 'Turing',
      email: 'alan@email.com',
      roles: ['admin'],
    };

    return data ? user && user[data] : user;
  },
);
