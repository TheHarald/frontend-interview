/**
 * Напишите функцию для поиска значения в дереве с помощью DFS
 */
function dfs(tree, target) {

}

const tree = {
    value: 1,
    children: [
        { value: 2, children: [] },
        {
            value: 3, children: [
                { value: 4, children: [] }
            ]
        },
        {
            value: 15, children: [
                { value: 6, children: [] },
                {
                    value: 7, children: [
                        { value: 8, children: [] },
                    ]
                },
            ]
        },
    ]
};

console.log(dfs(tree, 4)); // true
console.log(dfs(tree, 5)); // false
console.log(dfs(tree, 8)); // true
console.log(dfs(tree, 1));  // true (корень)
console.log(dfs(tree, 2));  // true (первый ребенок)
console.log(dfs(tree, 15)); // true (узел с детьми)
console.log(dfs(tree, 9));  // false (не существует)