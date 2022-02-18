import { useState, createContext, useContext } from 'react';

const myTodos = [
    'Cut grass',
    'Drink milk',
    'Eat cheese',
    'Eat more cheese',
    'Eat another cheese',
    'Throw up'
];

const TodoContext = createContext([]);

/**
 * 
 * Use useContext to manage Todo list app, where
 * 
 * - on clicking one item (<Todo/> component), it moves to the top of the list
 * 
 * Use useRefs to have text box add item to the list
 * 
*/

function Todo({ todo }) {
    const [todos, setTodos] = useContext(TodoContext);

    const handleClick = (e) => {
        e.preventDefault();

        const index = todos.indexOf(todo);

        if (todos.length > 0 && index !== -1) {
            let out = todos.splice(index, 1);
            setTodos([out, ...todos]);
        }
    }

    return (
        <li onClick={handleClick}>{ todo }</li>
    );
}

function TodoForm() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useContext(TodoContext);

    const onSubmit = (e) => { 
        e.preventDefault();
        setTodos(() => [text.toLocaleUpperCase(), ...todos]);
        setText('');
    }

    return (
        <form className="form-inline" onSubmit={onSubmit}>
            <input
                type="text"
                className="form-control"
                value={text}
                onChange={(e) => setText(e.target.value)} />

            <button className="btn btn-success">+ Add</button>
        </form>
    )
}

export default function Todos() {
    const [todos, setTodos] = useState(()=> myTodos);

    const todoList = todoItems => {
        if (todoItems === undefined && todoItems.length === 0) {
            return <div style={{ color: 'red' }}>No items</div>;
        }

        return (
            todoItems.map((t, i) => {
                return <Todo key={ i } todo={ t } />;
            })
        );
    }

    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            <h4>Todoist</h4>
            <TodoForm />
            <ul>{ todoList(todos) }</ul>
        </TodoContext.Provider>
    )
}