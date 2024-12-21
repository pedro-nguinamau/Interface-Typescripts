interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }
  
  const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com", isActive: true },
    { id: 2, name: "Bernardo", email: "bernardo@example.com", isActive: false },
  ];

  function addUser(users: User[], newUser: User): User[] {
    users.push(newUser);
    return users;
  }
  

  function listActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive);
  }
  
const activeUsers = listActiveUsers(users);
console.log("Usuários ativos:", activeUsers);