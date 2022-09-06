interface IUserService {
  users: number;
  getUsers(): number;
}

type CreatedAt = {
  createdAt: Date;
};

@DecorateUser(15)
@CreatedAt
class UserService implements IUserService {
  users = 20;

  public getUsers(): number {
    return this.users;
  }
}

// decorator factory
function DecorateUser(users: number) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      users = users;
    };
  };
}

function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

console.log((new UserService() as IUserService & CreatedAt).createdAt);
