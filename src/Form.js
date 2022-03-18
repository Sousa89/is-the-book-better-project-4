import {useState} from 'react'
const Form=(props)=>{

    const[form, setForm]=useState (null)
    const handleChange= (e) =>{
        console.log (e.target.value)
        setForm(e.target.value)


    }

    return(

        <form onSubmit={(e)=>props.handleSubmit(e,form)} className="search-form" >
            <label htmlFor="userSearch" className="sr-only">
                enter movie/book title

                
            </label>

            <input type="text" name="userSearch" id="userSearch" placeholder="searchTitle" onChange={handleChange} value={form}>
            

            </input>

            <button>

                Submit

            </button>


        </form>

    );
}


export default Form;