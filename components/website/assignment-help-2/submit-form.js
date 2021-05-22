import DatePicker from "react-datepicker";
import { useState } from 'react'
import { useRouter } from "next/router";
import {saveAssignment2} from '../../../libs/assignment'
import { useSession } from 'next-auth/client'

export default function SubmitForm(){
   const router = useRouter();
   const [session, loading ] = useSession()
   const [loader, setLoader] = useState(false)
   // console.log(router.query.online_assignment_help_2)

   const [startDate, setStartDate] = useState(new Date());
   const [value, setValue] = useState(0);
   const [words, setWords] = useState(0);
   const [formData, setFormData] = useState({});

   const handleTimeSelect = (e) => {
      setFormData({...formData, [e.target.name]:e.target.value, user_Id : session.user._id ,id:router.query.online_assignment_help_2})
   }

   const handleReference = (e) => {
      setFormData({...formData, [e.target.name]:e.target.value, 'deadline_date': startDate,user_Id : session.user._id,id:router.query.online_assignment_help_2})
   }

   const handleForm2 = async (e) => {
      e.preventDefault();
      setLoader(true)
      const res =await saveAssignment2(formData)
      if(res && !res.error){
         router.push(`/user/my-order-details/${res.assignment._id}`)
      }
      setLoader(false)
   }

   const increment = () => {
      if(value<20){
         setValue(value => value + 1)
         setWords(words => words + 250)
         setFormData({...formData, 'pages': value+1,'deadline_date': startDate,user_Id : session.user._id ,id:router.query.online_assignment_help_2})
      }
   }

   const decrement = () => {
      if(value>1){
         setValue(value - 1)
         setWords(words - 250)
         setFormData({...formData, 'pages': value-1,'deadline_date': startDate,user_Id : session.user._id ,id:router.query.online_assignment_help_2 })
      }
   }

   return(
      <section className="banner_assignment_form bg_yellow">
         <div className="container">
            <div className="row">
               <div className="col-md-9 m-auto">
                  <form className="row form_banner" onSubmit={handleForm2}>
                     <div className="col-md-12">
                        <h2><span>Submit Your Assignment</span></h2>
                     </div>
                     <div className="form-group col-md-6">
                        <select className="form-control" required name="deadline_time" onChange={handleTimeSelect}>
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
                              <DatePicker className="form-control" required selected={startDate} name="deadline_date" onChange={date => setStartDate(date)} />
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div id='myform' method='POST' action='#' className="form-group row">
                           <div className="col-md-6">
                              <input type='text' className="form-control" required defaultValue={value} name='pages' placeholder="No. of Pages*" readOnly/>
                           </div>
                           <div className="col-md-6">
                              <input type='button' value='-' className='qtyminus' field='quantity' onClick={()=>{decrement()}}/>
                              <input type='button' value='+' className='qtyplus' field='quantity' onClick={()=>{increment()}}/>
                              <span>{words} words</span>
                           </div>
                        </div>
                     </div>
                     <div className="form-group col-md-12">
                        <select className="form-control"  required name='reference' onChange={handleReference}>
                           <option>Select</option>
                           <option value="1">Vancouver</option>
                           <option value="2">AGLC</option>
                           <option value="3">APA</option>
                           <option value="4">BMJ</option>
                           <option value="5">Chicago</option>
                           <option value="6">Footnotes</option>
                           <option value="7">Footnotes and bibliography</option>
                           <option value="8">Harvard</option>
                           <option value="9">MHRA</option>
                           <option value="10">MLA</option>
                           <option value="11">Not Selected</option>
                           <option value="12">Open</option>
                           <option value="13">OSCOLA</option>
                           <option value="14">Oxford</option>
                           <option value="15">Turabian</option>
                           <option value="11">Not Selected</option>
                        </select>
                     </div>
                  
                     <div className="form-group m-auto sbmit_btn"> 
                        <button type="submit" className="btn form-control mt-4">{loader ? "Submitting" : "submit"}</button> 
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   )
}