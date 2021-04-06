import DashboardNavbar from '../../components/website/dashboard/dashobard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import {useState} from 'react'
export default function MyTbs(){

    const [fields, setFields] = useState([{ value: null }])

    function handleChange(i, event) {
        const values = [...fields];
        values[i].value = event.target.value;
        setFields(values);
    }

    function handleAdd() {
        console.log("Dasd")
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    }
    
    function handleRemove(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }

    return(
        <>
        <DashboardNavbar/>
        <SideBar/>
        <section className="content user profile-page">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 Referral_Points">
                                <h2>Hi, Ashton Cox <small>Student, ipex College</small></h2>
                            </div>
                            <div className="col-lg-9 col-md-6 col-sm-12 ml-auto text-right">
                                <ul className="breadcrumb breadcrumb2 float-md-right pt-0 pb-0">
                                    <li className="breadcrumb-item breadcrumb_cuspom"><a href="myaccount.php">Dashboard  </a></li>
                                    <li className="breadcrumb-item active breadcrumb_cuspom"> My Textbook</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row clearfix mt-4">
                            <div className="col-md-12">
                                <div className="card student-list">
                                    <div className="header">
                                        <h2><strong>My</strong> textbooks</h2>
                                    </div>
                                    <div className="col-md-12  bg_color_textbooks">
                                        <p>Quick access to your college textbook manuals, add more textbooks from current or next semester	 </p>
                                    </div>
                                    <div className="col-md-12 text-center textbooks_title">
                                        <h2>Add my college textbooks</h2>
                                    </div>
                                    <div className="body">
                                        <div className="table-responsive">
                                            <table className="table table-hover m-b-0 my-order-new">
                                                <thead>
                                                <tr className="table_title order">
                                                    <th>S.No</th>
                                                    <th>ISBN Detail	</th>
                                                    <th>Availability</th>
                                                    <th>Action</th>
                                                    <th>Delete</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td><span className="">1</span></td>
                                                    <td><span className="textbook-t">9780134686516</span></td>
                                                    <td>Available</td>
                                                    <td><a href="#" className="btn btn-info btn-sm btn-rounded view-reciept-btn">View Now</a></td>
                                                    <td>
                                                        <span className="trash_textbooks"><a href=""><i className="fa fa-trash"></i></a></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="">2</span></td>
                                                    <td><span className="textbook-t">9780134686516</span></td>
                                                    <td>Available</td>
                                                    <td><a href="#" className="btn btn-info btn-sm btn-rounded view-reciept-btn">View Now</a></td>
                                                    <td>
                                                        <span className="trash_textbooks"><a href=""><i className="fa fa-trash"></i></a></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="">3</span></td>
                                                    <td><span className="textbook-t">9780134686516</span></td>
                                                    <td>Available</td>
                                                    <td><a href="#" className="btn btn-info btn-sm btn-rounded view-reciept-btn">View Now</a></td>
                                                    <td>
                                                        <span className="trash_textbooks"><a href=""><i className="fa fa-trash"></i></a></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="">4</span></td>
                                                    <td><span className="textbook-t">9780134686516</span></td>
                                                    <td>Available</td>
                                                    <td><a href="#" className="btn btn-info btn-sm btn-rounded view-reciept-btn">View Now</a></td>
                                                    <td>
                                                        <span className="trash_textbooks"><a href=""><i className="fa fa-trash"></i></a></span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="card student-list">
                                    <div className="col-md-12 my-subscriptions subscri_text_book">
                                        <div id="accordion" className="main-header py-4">
                                            <div className="col-md-12  bg_color_textbooks">
                                                <p>"You have not added any textbooks, students use this section to get the quick access to the 
                                                solution manual of their course textbooks. Add all of your coursebook for which you will be requiring the 
                                                Textbook solution manual."	 
                                                </p>
                                            </div>
                                            <div className="col-md-12 text-center textbooks_title">
                                                <h2>Add my college textbooks</h2>
                                            </div>
                                            <div className="col-md-12 mt-5 fill_isbn">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <label className="col-sm-12 control-label" htmlFor="field1">Fill ISBN (13)</label>
                                                    </div>
                                                    <div className="col-md-8 form-group">
                                                        <form name="textbookfrm" id="textbookfrm" action="" method="POST" role="form" autoComplete="off">
                                                            <div className="col-sm-10">
                                                                <div className="dynamic-wrap">
                                                                    <div className="form">
                                                                        
                                                                            
                                                                                {/* <input className="form-control isbncls" name="fields[]" type="text" minLength="13" maxLength="13" pattern="[0-9]+" title="ISBN (13)" placeholder="ISBN Number" required="required"/> */}
                                                                                {fields.map((field, idx) => {
                                                                                    return (
                                                                                        <div className="entry input-group" key={idx}>
                                                                                            <label className="barcode1234"><i className="fa fa-barcode"></i></label>
                                                                                            <input className="form-control isbncls" name="fields[]" type="text" minLength="13" maxLength="13" pattern="[0-9]+" title="ISBN (13)" placeholder="ISBN Number" required="required"/>
                                                                                            <span className="input-group-btn">
                                                                                                {idx == 0 ? 
                                                                                                <button className="btn btn-add btn-add_more" type="button" onClick={handleAdd}>
                                                                                                    <i className="fa fa-plus"></i>
                                                                                                </button> : 
                                                                                                <button className="btn btn-add_more btn-remove trash_iconadd" type="button" onClick={(idx)=>{handleRemove(idx)}}>
                                                                                                    <i className="fa fa-trash "></i>
                                                                                                </button>}
                                                                                            </span>
                                                                                        </div>
                                                                                    );
                                                                                })}
                                                                                
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-left Cancesbmit_btn mt-4">
                                                                <button type="submit" className="submit_btn submit_btnfirst">Submit</button>
                                                                <button type="reset" className="cancel_btn">Cancel</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}