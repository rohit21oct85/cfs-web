import { useSession } from 'next-auth/client'
import { route } from 'next/dist/next-server/server/router';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect,useState } from 'react';

export default function BuyBookSub(){
    const [ session, loading ] = useSession();
    const [ location, setLocation ] = useState('/');

    useEffect(()=>{
        if(session && session !== null){
            setLocation('/paynow')
        }else{
            setLocation('/api/auth/signin?callbackUrl='+`${process.env.NEXTAUTH_URL}`+'/paynow')
            // setLocation('/auth/signin?callbackUrl='+`${process.env.NEXTAUTH_URL}`+'/paynow')
        }   
    },[])

    return(
        <div className="btn1">
            <Link href={`${location}`}><a>Buy Subscription</a></Link>
        </div>
    )
}