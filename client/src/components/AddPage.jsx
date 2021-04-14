import React, { useState } from 'react';
import './Navbar.css';
import {BrowserRouter, Switch} from 'react-router-dom';
import axios from 'axios';

const AddPage = () => {
    const [form, setForm] = useState({
        name: '',
        age: '', 
        city: '', 
        phone: ''      
    });

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        console.log(form);
    }

    const addHandler = async () =>{
        try{
            await axios.post('/api/addler/add', {...form}, {
                headers:{
                    'Content-Type': 'application/json' 
                }
            })
            .then(response => console.log(response));
        }catch (error){
            console.log(error);
        }
    }

    return (
        <BrowserRouter>
            <Switch>
                <React.Fragment>
                    <div className='content'>
                        <div className='add_user_content'>
                            <h3>Add user</h3>
                            <div className='add-user-block'>
                                <div className='add-area-text'>Name</div>
                                <input type='text' placeholder='add name' name='name' id='name-inp' className='inpt' onChange={changeHandler}></input>
                            </div>
                            <div className='add-user-block'>
                                <div className='add-area-text'>age</div>
                                <input type='text' placeholder='age name' name='age' id='age-inp' className='inpt' onChange={changeHandler}></input>
                            </div>
                            <div className='add-user-block'>
                                <div className='add-area-text'>city</div>
                                <input type='text' placeholder='add city' name='city' id='city-inp' className='inpt' onChange={changeHandler}></input>
                            </div>
                            <div className='add-user-block'>
                                <div className='add-area-text'>phone</div>
                                <input type='text' placeholder='add phone' name='phone' id='phone-inp' className='inpt' onChange={changeHandler}></input>
                            </div>
                            <button className='user-btn' id='user-btn' onClick={addHandler}>Add</button>
                        </div>
                    </div>
                </React.Fragment>
            </Switch>
        </BrowserRouter>
    );
}

export default AddPage;