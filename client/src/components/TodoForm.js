import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './Navbar.css';

export const TodoForm = ({ todo, onSubmit }) => {
    const {register, handleSubmit} = useForm({
        defaultValues: {name: todo? todo.name: "",age: todo? todo.age: "",city: todo? todo.city: "",phone: todo? todo.phone: ""},
    });
    const history = useHistory();


    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
    })
    return (
        <div className='content'>
            <div className='mt-3'>
                <h3 className='Edit-h'>Edit Users</h3>
                <form onSubmit={submitHandler}> 
                    <div className='form-group'>
                        <label htmlFor='name'>
                            Name:
                        </label>
                        <input {...register("name")} className='form-control input-edit' type='text' name='name' id='name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='age'>
                            age:
                        </label>
                        <input {...register("age")} className='form-control input-edit' type='Number' name='age' id='age' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>
                            age:
                        </label>
                        <input {...register("city")} className='form-control input-edit' type='text' name='city' id='city' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>
                            age:
                        </label>
                        <input {...register("phone")} className='form-control input-edit' type='Number' name='phone' id='phone' />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary bot-but-app'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}   