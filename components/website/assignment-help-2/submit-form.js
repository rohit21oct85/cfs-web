import DatePicker from "react-datepicker";
import { useState } from 'react'

export default function SubmitForm(){
    const [startDate, setStartDate] = useState(new Date());
    const [value,setValue]= useState(1);
    const handleDateSelect = () => {

    }
    const handleDateChange = () => {
    
    }

    const increment = () => {
        if(value<20){
            setValue(value+1)
        }
    }

    const decrement = () => {
        if(value>1){
            setValue(value-1)
        }
    }

    return(
        <section className="banner_assignment_form bg_yellow">
         <div className="container">
            <div className="row">
               <div className="col-md-9 m-auto">
                  <form className="row form_banner">
                     <div className="col-md-12">
                        <h2><span>Submit Your Assignment</span></h2>
                     </div>
                     <div className="form-group col-md-6">
                        <select className="form-control">
                           <option value="">Deadline Time*</option>
                           <option value="00:00">00:00</option>
                           <option value="01:00">01:00</option>
                           <option value="02:00">02:00</option>
                           <option value="03:00">03:00</option>
                           <option value="04:00">04:00</option>
                           <option value="05:00">05:00</option>
                           <option value="06:00">06:00</option>
                           <option value="07:00">07:00</option>
                           <option value="08:00">08:00</option>
                           <option value="09:00">09:00</option>
                           <option value="10:00">10:00</option>
                           <option value="11:00">11:00</option>
                           <option value="12:00">12:00</option>
                           <option value="13:00">13:00</option>
                           <option value="14:00">14:00</option>
                           <option value="15:00">15:00</option>
                           <option value="16:00">16:00</option>
                           <option value="17:00">17:00</option>
                           <option value="18:00">18:00</option>
                           <option value="19:00">19:00</option>
                           <option value="20:00">20:00</option>
                           <option value="21:00">21:00</option>
                           <option value="22:00">22:00</option>
                           <option value="23:00">23:00</option>
                        </select>
                     </div>
                     <div className="form-group col-md-6"> 
                        {/* <input required="" className="form-control datepicker" name="deadlineDate" type="text"  placeholder="Deadline Date*"   autoComplete="off"/>  */}
                        <div className="customDatePickerWidth">
                            <DatePicker className="form-control" selected={startDate} onSelect={handleDateSelect} onChange={date => setStartDate(date)} />
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div id='myform' method='POST' action='#' className="form-group row">
                           <div className="col-md-6">
                              <input type='text' className="form-control" defaultValue={value} name='quantity' placeholder="No. of Pages*" />
                           </div>
                           <div className="col-md-6">
                              <input type='button' value='-' className='qtyminus' field='quantity' onClick={()=>{decrement()}}/>
                              <input type='button' value='+' className='qtyplus' field='quantity' onClick={()=>{increment()}}/>
                              <span>250 words</span>
                           </div>
                        </div>
                     </div>
                     <div className="form-group col-md-12">
                        <select className="form-control">
                           <option>Reference</option>
                        </select>
                     </div>
                  
                    <div className="form-group m-auto sbmit_btn"> 
                        <button type="submit" className="btn form-control mt-4">Submit</button> 
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
    )
}