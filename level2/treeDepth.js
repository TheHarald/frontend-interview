/**
 * Напишите рекурсивную функцию для вычисления максимальной глубины дерева
 */
function treeDepth(tree) {
    // Ваш код здесь
}

const tree = {
    value: 1,
    children: [
        { value: 2, children: [] },
        {
            value: 3,
            children: [
                { value: 4, children: [] },
                {
                    value: 5,
                    children: [
                        { value: 6, children: [] }
                    ]
                }
            ]
        }
    ]
};

console.log(treeDepth(tree)); // 4