import React from 'react';

function TodoTable(props) {
    return(
    <div>
        <table>
            <tbody >
                <tr><th>Date</th><th>Description</th></tr>
                {
                    props.todos.map((todo, index) =>
                    <tr key = {index} name = {index}>
                        <td >{todo.date}</td>
                        <td >{todo.desc}</td>
                        <td><button id = {index} onClick={props.deleteTodo}>Delete</button></td>
                    </tr>
                    )
                }
                
            </tbody>
        </table>
    </div>
    );

    
}
export default TodoTable;