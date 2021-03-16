export default function InputSearch(){
    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                    <div className="all_banner_text">
                        <form className="mt-2">
                            <input type="text" placeholder="Search Here..... ISBN / Textbook Name" className="form-control pl-5"/>
                            <button type="submit" className="search_btn"><i className="fa fa-search"></i> Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}