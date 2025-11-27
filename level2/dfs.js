/**
 * Напишите функцию для поиска значения в дереве с помощью DFS
 */
function dfs(tree, target) {
    // Ваш код здесь
}

const tree = {
    value: 1,
    children: [
        { value: 2, children: [] },
        {
            value: 3, children: [
                { value: 4, children: [] }
            ]
        }
    ]
};

console.log(dfs(tree, 4)); // true
console.log(dfs(tree, 5)); // false