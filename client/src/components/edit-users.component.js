import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getTodo, updateTodo } from './api';
import { useHistory } from 'react-router-dom';
import { TodoForm } from './TodoForm';

export const EditUsers = () => {
    const match = useRouteMatch()
    const [todo, setTodo] = useState();
    const history = useHistory(  )

    useEffect(() => {
        const fetchTodo = async () => {
            const todo = await getTodo(match.params.id)
            setTodo(todo)
        }
        fetchTodo()
    }, [])
    
    const onSubmit =  async (data) => {
        //alert(JSON.stringify(data))
        await updateTodo(data, match.params.id)
        history.push("/")

    }
    return todo ? <TodoForm todo={todo} onSubmit={onSubmit} />: <div>Loading</div>
}

