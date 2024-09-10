import React from 'react'

const SchemaList = ( {addschema,deleteSchema}) => {
    


    return (
        <div>

            {
                addschema.map((item, index) => 
                {
                    return(
                        <div>
                        <select key={index}>
                            <option>{item}</option>
                        </select>
                        <button onClick={()=>deleteSchema(index)}>-</button>
                        </div>
                      
                    )
                }
                )
            }


        </div>
    )
}

export default SchemaList
