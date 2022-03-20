import {useState} from 'react'
const Form=(props)=>{

    const[form, setForm]=useState ('')
    const handleChange= (e) =>{
        console.log (e.target.value)
        setForm(e.target.value)
       


    }

    const handleSubmit=(e) =>{
    
   
    props.handleSubmit(e, form)
    setForm('')

    }
    return(

        <form onSubmit={handleSubmit} className="search-form"  >
            <label htmlFor="userSearch" className="sr-only" >
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