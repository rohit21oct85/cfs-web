import Link from 'next/link'

export default function NewNavbar(){
    return(
        <section className="top_logo_login">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Link href="/"><a><img src="/images/logo_w.jpg" className="img-fluid" alt="logo"/></a></Link>
                    </div>
                </div>
            </div> 
        </section>
    )
}
