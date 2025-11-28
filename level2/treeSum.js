/**
 * Напишите рекурсивную функцию для вычисления суммы всех значений в дереве
 */
function treeSum(tree) {
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

console.log(treeSum(tree)); // 21 (1+2+3+4+5+6)