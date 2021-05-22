import Header from '../../../components/tutor/header'
import ProfileSection from '../../../components/tutor/profile-section'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function ProfileDetails(){
    const history = useHistory();

    useEffect(() => { 
		// if(history.location.pathname.includes('profile-details')) 
        // {
        //     document.querySelector("body").classList.add("theme-blush","ls-toggle-menu")
        // }
	});

    return(
        <>
            <Header />
            <ProfileSection />
        </>
    )
}