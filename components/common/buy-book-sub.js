import { useSession } from 'next-auth/client'
import { route } from 'next/dist/next-server/server/router';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect,useState } from 'react';

export default function BuyBookSub({...props}){
    const [ session, loading ] = useSession();
    const [ location, setLocation ] = useState('/');

    useEffect(()=>{
        if(session && session.user.Subscribe !== true){
            setLocation('/paynow')
        }else if(session && session.user.Subscribe == true){
            setLocation('/user/my-subs')
        }else{
            setLocation('/api/auth/signin?callbackUrl='+`${process.env.NEXTAUTH_URL}`+'/paynow')
        }   
    },[])

    return(
        <div className="btn1">
            <Link href={`${location}`}><a className={props.classname}>{props.text}</a></Link>
        </div>
    )
}