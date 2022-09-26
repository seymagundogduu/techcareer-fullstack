import React, { useState } from 'react'
import { categories } from '../stateSample/categories'

function List() {

    const [categoryList, setcategoryList] = useState(categories);

    const [name, setname] = useState('');
    const [description, setdescription] = useState('');

    const [orderNameStatus, setorderNameStatus] = useState(false)


    const removeAll = () => {
        setcategoryList([]);
    }

    const deleteCategory = (id) => {

        let filteredCategories = categoryList.filter(q => q.id != id);
        setcategoryList([...filteredCategories])
    }

    const addNewCategory = () => {

       
        let categoryId =  Math.max(...categoryList.map(o => o.id)) + 1


        let newCategory = {
            id: categoryId,
            name: name,
            description: description
        }

        setcategoryList([...categoryList, newCategory]);

    }


    const orderByName = () => {

        if(orderNameStatus){
            setorderNameStatus(false);
            categoryList.sort((a, b) => b.name.localeCompare(a.name));
        }
        else{
            setorderNameStatus(true);
            categoryList.sort((a, b) => a.name.localeCompare(b.name));
        }
       

        setcategoryList([...categoryList])

    }

    return (<>
        <div>
            <div>
                <label>companyName:</label>
                <input type='text' onChange={(e) => setname(e.target.value)} />
            </div>
            <div>
                <label>contactName:</label>
                <input type='text' onChange={(e) => setdescription(e.target.value)} />
            </div>
            <div>
                <label>contactTitle:</label>
                <input type='text' onChange={(e) => setdescription(e.target.value)} />
            </div>
            <div>
                <label>address:</label>
                <input type='text' onChange={(e) => setdescription(e.target.value)} />
            </div>
            <div>
                <button onClick={() => addNewCategory()}>Add</button>
            </div>
        </div>
        <h1>Length: {categoryList.length}</h1>

        {
        
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th style={{cursor:'pointer'}} onClick={() => orderByName()}>companyName</th>
                        <th>contactName</th>
                        <th>contactTitle</th>
                        <th>address</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoryList.map((item, key) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.companyName}</td>
                                <td>{item.contactName}</td>
                                <td>{item.contactTitle}</td>
                                <td>{item.address}</td>
                                <td><button onClick={() => deleteCategory(item.id)}>Delete</button></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        }
        <button onClick={() => removeAll()}>Remove All</button>

    </>
    )
}

export default List