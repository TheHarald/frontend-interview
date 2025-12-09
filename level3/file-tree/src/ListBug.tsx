import { useState } from "react";

const generateRandomString = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomStr = Math.random().toString(36).substring(7);
      resolve(randomStr);
    }, 300);
  });
};

export function ListBug() {
  const [list, setList] = useState<string[]>([]);

  const addItemAsync = async () => {
    const newItem = await generateRandomString();
    setList([...list, newItem]);
  };

  return (
    <div>
      <button onClick={addItemAsync}>Добавить 1</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>Элементов: {list.length}</div>
    </div>
  );
}
