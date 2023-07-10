const fetchData = require('./async');

it('Should return correct todo', () => {
    fetchData(1).then((todo) => {
        expect(todo.id).toBe(1);
    });
});

it('Should return correct todo', async () => {
    const todo = await fetchData(1);
    expect(todo.id).toBe(1);
});
