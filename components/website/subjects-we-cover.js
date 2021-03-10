export default function SubjectsWeCover(){
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
                            <li className="active"><a data-toggle="tab" href="#finance" className="ml-0"><span><img src="../images/wecover-icons/finance.png" className="img-fluid" alt=""/></span>Finance</a></li>
                            <li><a data-toggle="tab" href="#marketing"><span><img src="../images/wecover-icons/marketing.png" className="img-fluid" alt=""/></span>Marketing</a></li>
                            <li><a data-toggle="tab" href="#biology"><span><img src="../images/wecover-icons/biology.png" className="img-fluid" alt=""/></span>Biology</a></li>
                            <li><a data-toggle="tab" href="#accounts"><span><img src="../images/wecover-icons/biology.png" className="img-fluid" alt=""/></span>Accounts</a></li>
                            <li><a data-toggle="tab" href="#socialscience"><span><img src="../images/wecover-icons/biology.png" className="img-fluid" alt=""/></span>Social Science</a></li>
                            <li><a data-toggle="tab" href="#chemistry"><span><img src="../images/wecover-icons/biology.png" className="img-fluid" alt=""/></span>Chemistry</a></li>
                            <li><a data-toggle="tab" href="#economics"><span><img src="../images/wecover-icons/biology.png" className="img-fluid" alt=""/></span>Economics</a></li>
                            <li><a data-toggle="tab" href="#physics" className="mr-0"><span><img src="../images/wecover-icons/biology.png" className="img-fluid" alt=""/></span>Physics</a></li>
                        </ul>

                        <div className="tab-content">
                            <div id="finance" className="tab-pane bg_shdow fade in active show">
                            <div className="row">
                                <div className="col-md-5 text-center finance_img">
                                    <span><img src="../images/we-cover-img/finance.png" className="img-fluid" alt=""/></span>
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
                            </div> 
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    )
}