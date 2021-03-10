import {useState, useEffect} from 'react';

export default function SubjectsWeCover(){

    const [html, setHtml] = useState();
    const finance = <div id="finance" className="tab-pane bg_shdow fade in active show">
                        <div className="row">
                            <div className="col-md-5 text-center finance_img">
                                <span>
                                    <img src="../images/we-cover-img/finance.png" className="img-fluid" alt=""/>
                                </span>
                            </div>
                            <div className="col-md-7"> 
                                <div className="Text_title text_tb_center3 pb-3">
                                    <h5 className="pb-2">Finance</h5>
                                    <h2> We have a team of experts in Finance</h2>
                                    <p>We have a team of experts in Finance who work incessantly <span>24/7 to solve all your queries</span> related to Finance, provide textbook solutions manual and create your assignments. </p>
                                    <p>Crazy For Study team of experts consists of professors, researchers and finance experts with a prolonged experience in the academic field. </p> 
                                    <div className="btn1">
                                        <ul>
                                            <li>  <a href="#">Assignment Help</a></li>
                                            <li>  <a href="#">Textbook Solution</a></li>
                                            <li>  <a href="#">Q & A Solution</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>;

    const marketing = <div id="marketing" className="tab-pane bg_shdow fade in active show">
                        <h3>2</h3>
                    </div>;
    const biology = <div id="biology" className="tab-pane bg_shdow fade in active show">
                        <h3>3</h3>
                    </div>;
    const accounts = <div id="accounts" className="tab-pane bg_shdow fade in active show">
                        <h3>4</h3>
                    </div>;
    const socialscience = <div id="socialscience" className="tab-pane bg_shdow fade in active show">
                            <h3>5</h3>
                        </div>;
    const chemistry =  <div id="chemistry" className="tab-pane bg_shdow fade in active show">
                            <h3>6</h3>
                        </div>;
    const economics =  <div id="economics" className="tab-pane bg_shdow fade in active show">
                            <h3>7</h3>
                        </div>;
    const physics = <div id="physics" className="tab-pane bg_shdow fade in active show">
                        <h3>8</h3> 
                    </div>;

    useEffect(() => {
        setHtml(finance)
    },[]);

    const showSubjectData = (chosenSubject) => {
        switch (chosenSubject) {
            case "finance":
                setHtml(finance);
                break;
            case "marketing":
                setHtml(marketing);
                break;
            case "biology":
                setHtml(biology);
                break;
            case "accounts":
                setHtml(accounts);
                break;
            case "socialscience":
                setHtml(socialscience);
                break;
            case "chemistry":
                setHtml(chemistry);
                break;
            case "economics":
                setHtml(economics);
                break;
            case "physics":
                setHtml(physics);
                break;
            default:
                null;
        }
    }

    return(
        <section className="section Content_Covered mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="Content_Covered_title pb-3">
                            <h2>Subjects We Cover</h2>
                            <h3>We cover various subjects from different fields. Explore each subject Explore each subject to learn more.</h3>
                        </div>
                    </div>
            
                    <div className="col-md-12 pt-5">
                        <ul className="nav nav-tabs nav_tab_wecover">
                            <li className="active" onClick={()=>{showSubjectData('finance')}}><a data-toggle="tab" className="ml-0"><span><img src="../images/wecover-icons/finance.png" className="img-fluid" alt=""/></span>Finance</a></li>
                            <li onClick={()=>{showSubjectData('marketing')}}><a data-toggle="tab"><span><img src="../images/wecover-icons/marketing.png" className="img-fluid" alt=""/></span>Marketing</a></li>
                            <li onClick={()=>{showSubjectData('biology')}}><a data-toggle="tab" ><span><img src="../images/wecover-icons/biology.png" className="img-fluid" alt=""/></span>Biology</a></li>
                            <li onClick={()=>{showSubjectData('accounts')}}><a data-toggle="tab"><span><img src="../images/wecover-icons/biology.png" className="img-fluid" alt=""/></span>Accounts</a></li>
                            <li onClick={()=>{showSubjectData('socialscience')}}><a data-toggle="tab"><span><img src="../images/wecover-icons/biology.png" className="img-fluid" alt=""/></span>Social Science</a></li>
                            <li onClick={()=>{showSubjectData('chemistry')}}><a data-toggle="tab"><span><img src="../images/wecover-icons/biology.png" className="img-fluid" alt=""/></span>Chemistry</a></li>
                            <li onClick={()=>{showSubjectData('economics')}}><a data-toggle="tab"><span><img src="../images/wecover-icons/biology.png" className="img-fluid" alt=""/></span>Economics</a></li>
                            <li onClick={()=>{showSubjectData('physics')}}><a data-toggle="tab"className="mr-0"><span><img src="../images/wecover-icons/biology.png" className="img-fluid" alt=""/></span>Physics</a></li>
                        </ul>

                        <div className="tab-content">
                            {html}
                            {/* <div id="finance" className="tab-pane bg_shdow fade in active show">
                                <div className="row">
                                    <div className="col-md-5 text-center finance_img">
                                        <span>
                                            <img src="../images/we-cover-img/finance.png" className="img-fluid" alt=""/>
                                        </span>
                                    </div>
                                    <div className="col-md-7"> 
                                        <div className="Text_title text_tb_center3 pb-3">
                                            <h5 className="pb-2">Finance</h5>
                                            <h2> We have a team of experts in Finance</h2>
                                            <p>We have a team of experts in Finance who work incessantly <span>24/7 to solve all your queries</span> related to Finance, provide textbook solutions manual and create your assignments. </p>
                                            <p>Crazy For Study team of experts consists of professors, researchers and finance experts with a prolonged experience in the academic field. </p> 
                                            <div className="btn1">
                                                <ul>
                                                    <li>  <a href="#">Assignment Help</a></li>
                                                    <li>  <a href="#">Textbook Solution</a></li>
                                                    <li>  <a href="#">Q & A Solution</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="marketing" className="tab-pane bg_shdow fade">
                                <h3>2</h3>
                            </div>

                            <div id="biology" className="tab-pane bg_shdow fade">
                                <h3>3</h3>
                            </div>

                            <div id="accounts" className="tab-pane bg_shdow fade">
                                <h3>4</h3>
                            </div>

                            <div id="socialscience" className="tab-pane bg_shdow fade">
                                <h3>5</h3>
                            </div>

                            <div id="chemistry" className="tab-pane bg_shdow fade">
                                <h3>6</h3>
                            </div>

                            <div id="economics" className="tab-pane bg_shdow fade">
                                <h3>7</h3>
                            </div>

                            <div id="physics" className="tab-pane bg_shdow fade">
                                <h3>8</h3> 
                            </div>  */}

                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    )
}