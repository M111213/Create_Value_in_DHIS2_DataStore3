import React from 'react'
import { useDataMutation } from '@dhis2/app-runtime'
import {Button} from '@dhis2/ui'
import {CircularLoader} from  '@dhis2/ui'
import classes from './App.module.css'

const mutation = {
        resource: 'dataStore/database/key_6',
        type: 'create', 
        data:({name}) => ({
            name 
        })
}

const  CreateValueDataStore= ({onCreate}) => {
    const [mutate, {loading}]= useDataMutation(mutation, 
        {
        onComplete:onCreate,
        variables:{
        name: 'EER'
            }
        });

    const onClick = async() => {
        await mutate()
        refetch()
    }
    
    return(
    <div className={classes.container}>
         <>
             <h3>Add Value in DataStore</h3>
                    <Button primary  onClick={onClick}>
                        +Add 
                    </Button> 
                    {loading && <CircularLoader />}          
         </>     
    </div>   
    )    
}

export default CreateValueDataStore
