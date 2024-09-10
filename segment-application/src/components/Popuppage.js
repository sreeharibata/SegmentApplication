import React from 'react'
import './Popuppage.css'
import { useState } from 'react'
import SchemaList from './SchemaList'

const Popuppage = () => {
    const [schemas,setSchemas] =useState([
        { 
            id:'1',
            label:"FirstName",
            value:"first_name"
        },
        {
            id:'2',
            label:"LastName",
            value:"last_name"
        },
        {
            id:'3',
            label:"Gender",
            value:"gender"
        },
        {
            id:'4',
            label:"Age",
            value:"age"
        },
        {
            id:'5',
            label:"Account Number",
            value:"account_number"
        },
        {
            id:'6',
            label:"City",
            value:"city"
        },
        {
            id:'7',
            label:"State",
            value:"state"
        }
    ])

    const [data,setData] = useState('') 
    const  [schema,setSchema] = useState('Add schema to segment')
    const [addschema,setAddSchema] = useState([])

    const inputsegmenthandler=(e)=>{
        setData(e.target.value);
       
    }

    const dropdownSchemaHandler =(e)=>{
        setSchema(e.target.value) 
    }
    const addSchemaHandler =()=>{
        const newSchema =[...addschema,schema]
        setAddSchema(newSchema);
        const fliterSchemas =schemas.filter((item)=> item.value!==schema)
        setSchemas(fliterSchemas);
        setSchema('Add schema to segment')
    }

    
    const deleteSchema = (indexvalue) => {
        const newSchema= addschema.filter((each, index) => each.value!== indexvalue)
        setAddSchema(newSchema);
        
      }


  return (
    <div className='popup-container'>
      <p className='segment-head'>Saving Segment</p>
      <div>
        <label>Enter the name of the segment</label> <br />
        <input type='text' placeholder='Name of the segment' onChange={inputsegmenthandler} name='data' value={data}/>
      </div>
      <p>To save your segment,you need to add the scheemas to build the query</p>
      <div>
        <SchemaList addschema={addschema} deleteSchema={deleteSchema}/>
      </div>
      <div>
         <select onChange={dropdownSchemaHandler} value={schema} name='schema'>
                <option value='add_schema_segment'>Add schema to segment</option>
                {
                    schemas.map((data)=>{
                        return(
                            <option value={data.value}>{data.label}</option>
                        )
                    })
                }
         </select>
      </div>
      <p onClick={addSchemaHandler}>add new schema</p>

    </div>
  
  )
}

export default Popuppage
