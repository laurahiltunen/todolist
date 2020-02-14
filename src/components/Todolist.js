import React from 'react';
import TodoTable from './TodoTable';

export default function Todolist(props) {

    return(
        <div>
            <TodoTable todos = {props.todos} />
        </div>
    );
    
    

}

