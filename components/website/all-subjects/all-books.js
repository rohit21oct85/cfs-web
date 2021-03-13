import SingleBook from '../all-subjects/single-book'
import Pagination from '../../common/pagination'
import InputSearch from '../../common/input-search'

export default function AllBooks() {
    return(
        <section className="section">
            <div className="container">
                <div className="row">
                    
                    <InputSearch/>

                    <SingleBook image={"../images/our-popular/img1.jpg"} bookname={"Organic Chemistry Solutions Manual , Books a la Carte Edition"} isbn={"97801762666322"}/>
                    <SingleBook image={"../images/our-popular/img2.jpg"} bookname={"Organic Chemistry Solutions Manual , Books a la Carte Edition"} isbn={"97801762666322"}/>
                    <SingleBook image={"../images/our-popular/img3.jpg"} bookname={"Organic Chemistry Solutions Manual , Books a la Carte Edition"} isbn={"97801762666322"}/>
                    <SingleBook image={"../images/our-popular/img4.jpg"} bookname={"Organic Chemistry Solutions Manual , Books a la Carte Edition"} isbn={"97801762666322"}/>
                    <SingleBook image={"../images/our-popular/img5.jpg"} bookname={"Organic Chemistry Solutions Manual , Books a la Carte Edition"} isbn={"97801762666322"}/>
                    <SingleBook image={"../images/our-popular/img6.jpg"} bookname={"Organic Chemistry Solutions Manual , Books a la Carte Edition"} isbn={"97801762666322"}/>
                    <SingleBook image={"../images/our-popular/img7.jpg"} bookname={"Organic Chemistry Solutions Manual , Books a la Carte Edition"} isbn={"97801762666322"}/>
                    <SingleBook image={"../images/our-popular/img6.jpg"} bookname={"Organic Chemistry Solutions Manual , Books a la Carte Edition"} isbn={"97801762666322"}/>
                    <SingleBook image={"../images/our-popular/img7.jpg"} bookname={"Organic Chemistry Solutions Manual , Books a la Carte Edition"} isbn={"97801762666322"}/>
                    <SingleBook image={"../images/our-popular/img1.jpg"} bookname={"Organic Chemistry Solutions Manual , Books a la Carte Edition"} isbn={"97801762666322"}/>

                    <Pagination/>
                </div>
            </div>
        </section>
    )
}