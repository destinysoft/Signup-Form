import React, {useState} from 'react';


function Myform () {
        const [formData, setformData] = useState({
            fullname: '',
            Email:  '',
            number: '',
            password: '',
            state: '',
            file: '',
            Gender: ''
        });

        const Handlechange = (e) => {
            const {name, value} = e.target;
            setformData({
               ...formData,
               [name]: value,         
               });
                 
        };

        
        const Handlecheckboxchange = (e) => {
            const {checked, value} = e.target;
            setformData({
               ...formData,
               Gender: checked ? value : ''      
               });
        };


        const Handlesubmit = (e) => {
             e.preventDefault();
              
            setformData({
            fullname: '',
            Email:  '',
            number: '',
            password: '',
            state: '',
            file: '',
            Gender: ''
            })
            
             console.log(formData);
        };
 
             
  
        return  (

            <div className='signupform'>

            <h4>Sign Up</h4>
            <p className='ptext'>please enter your details below</p>

        <form onSubmit={Handlesubmit}>
             <div>
            <label for='Fullname'>Full name</label>
            <input type='text' id='Fullname' name='fullname' value= {formData.fullname}  onChange={Handlechange}></input> 
            </div>

            <div>
            <label for='Email'>Email</label>
            <input type='text'  id='Email'  name='Email'   value= {formData.Email}  onChange={Handlechange}  ></input>
            </div>

            <div>
            <label for='number'>Phone <br/> number</label>
            <input type='text'id='number'  name='number'   value= {formData.number}  onChange={Handlechange}></input> 
            </div>

          <div>
            <label for='password'>Password</label>
            <input type='password'  id='password'  name='password'  value= {formData.password}  onChange={Handlechange} ></input> 
          </div>    

          
           <label for='Gender'>Gender</label> 
           <div>
            <input type='checkbox' name='Gender'  id='Male'  value='male'   checked={formData.Gender === 'male'}   onChange={Handlecheckboxchange} ></input> 
            <label for='Male'  > Male </label> <br/>

           <input type='checkbox' name='Gender' id='Female'  value='female'   checked={formData.Gender === 'female'}   onChange={Handlecheckboxchange} ></input>
            <label for='Female'  > Female </label>
            </div>  <br/>


         <div>
            <label className='s'>State</label>
            <select  name=' State '   value= {formData.state}  onChange={Handlechange} >
            <option  value=''>Select a state</option>
            <option  value='Edo'>Edo</option>
            <option  value='Lagos'>Lagos</option>
            <option  value='Abuja'>Abuja</option>
            </select>
         </div>

         <div>
            <label className='please'  for='file'>Please add image </label>
            <input type='file'  name='file'  value= {formData.file}  onChange={Handlechange} ></input> 
         </div>

            <button  className="but" type="submit">Submit</button> 

        </form>

           </div>
        
        )
     
    };
       
export default Myform;

















