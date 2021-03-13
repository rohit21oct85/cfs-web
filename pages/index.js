import Header from '../components/website/home/header'
import Navbar from '../components/website/home/navbar'
import Footer from '../components/website/home/footer'
import Banner from '../components/website/home/banner'
import ContentCovered from '../components/website/home/content-covered'
import FindTbs from '../components/website/home/find-tbs'
import AssignmentHelp from '../components/website/home/get-assignment-help'
import AskExpert from '../components/website/home/ask-an-expert'
import BuySubscription from '../components/website/home/buy-subscription'
import SubjectsWeCover from '../components/website/home/subjects-we-cover'
import PopularTbs from '../components/website/home/popular-tbs'
import SubscribeHere from '../components/website/home/subscribe-here'
import TutorCollege from '../components/website/home/tutor-college'
import Follow from '../components/website/home/follow'

// export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  // return {
  //   props: {
  //     posts,
  //   },
  // }
// }

export default function Home() {
  
  return (
    <>
      <Header/>
      <Navbar/>
      <Banner/>
      <ContentCovered/>
      <FindTbs/>
      <AssignmentHelp/>
      <AskExpert/>
      <BuySubscription/>
      <SubjectsWeCover/>
      <PopularTbs/>
      <SubscribeHere/>
      <TutorCollege/>
      <Follow/>
      <Footer/>
    </>
  )
}
