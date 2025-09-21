export type TUser = {
  name: string;
  age: number;
  id: number;
};

// Этот файл менять не надо!
export function getUsers(shouldFail?: boolean): Promise<TUser[]> {
  const delay = Math.random() * 2500 + 500;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Failed to fetch users: Simulated network error"));
        return;
      }

      resolve(mockUsers);
    }, delay);
  });
}

const mockUsers: TUser[] = [
  {
    id: 1,
    name: "Alex Jake",
    age: 18,
  },
  {
    id: 2,
    name: "John Doe",
    age: 30,
  },
  {
    id: 3,
    name: "Jane Smith",
    age: 45,
  },
  {
    id: 4,
    name: "Bob Johnson",
    age: 27,
  },
  {
    id: 5,
    name: "Alice Brown",
    age: 31,
  },
  {
    id: 6,
    name: "Tom Davis",
    age: 40,
  },
  {
    id: 7,
    name: "Sarah Lee",
    age: 29,
  },
  {
    id: 8,
    name: "Mike Wilson",

    age: 35,
  },
  {
    id: 9,
    name: "Emily Taylor",
    age: 26,
  },
  {
    id: 10,
    name: "David Lee",
    age: 48,
  },
];
