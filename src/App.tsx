import { getUsers, type TUser } from "./api/userApi";
import { UsersList } from "./components/UsersList";

// Задание

// 0. Добавить типизацию
// 1. Получить список пользователей и отобразить их список
// 2. Реализовать функцию удаления пользователя
// 3. Избавиться от лишних ререндеров
// 4. Любые улучшения на свой вкус

function App() {
  // TODO
  const deleteUserHandler = () => {};

  // TODO
  const averageAge = 0;
  const users = [];

  return (
    <div className="app">
      <h1>Test App</h1>
      <div className="header">
        <div>Средний возраст: {averageAge}</div>
      </div>
      <UsersList users={users} deleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
