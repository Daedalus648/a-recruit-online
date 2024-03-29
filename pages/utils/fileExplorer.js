import React from 'react'
import cookie from 'cookie'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import Head from 'next/head'
import {api} from '../api/api'
import Header from '../../components/header/header'
import Link from 'next/link'
import Footer from '../../components/footer/footer'

export default function fileExplorer({data}) {
    return (
        <div className="fileExplorer">
            <Head>
                <title>A recruit | Recruteur</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*---------------*/}
            <Header
            />
            {/*---------------*/}
            
            <main className="body">
                <br></br>
                <div className="title center orientationV consultant_bottom">
                    <div>MES DOCUMENTS</div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>  </td>
                            <td> ID </td>
                            <td> NOM </td>
                            <td> DATE </td>
                            <td> Action </td>

                        </tr>
                    </thead>
                    <tbody>

                    {data.files.length!==0 ? data.files.map((file, index) => {
                        return (

                            <tr key={index} className={index%2===0 ?"impaire" :""}>
                                <td className="pdf_view_icon"></td>
                                <td>{file.document_id}</td>
                                <td>{file.document_name}</td>
                                <td>{file.document_date}</td>
                                <td>
                                    <Link href={{pathname:"/utils/pdf",query:{url:file.document_url,tobesigned:true,by: data.company_id}}}>
                                        <a>
                                            Gérer
                                        </a>
                                    </Link>
                                </td>

                            </tr>
                        );
                    })
                    : <div>AUCUNE DOCUMENT DISPONIBLE</div>}
                       
                    </tbody>
                </table>
                                           
            </main>
            <Footer/>
        </div>
    )
}

export async function getServerSideProps({ req }) {
    
    
    const user_cookie = cookie.parse(req ? req.headers.cookie || "" : document.cookie)
    
    if(user_cookie.me){
        
        const user = jwt_decode(JSON.stringify(user_cookie))
        let data=[]
        let files=[]

        await axios.post(`${api}/getDocumentByOwnerId`,{
            owner_id:user.user_id,
        }).then((reponse)=>{
            files= reponse.data
        })    

     

        data = await {...user,files:files}
    
       console.log(data)
        return {
            props: {
                data
            }
        }
    }
    return {
        redirect: {
            permanent: false,
            destination: "/auth/login?dest=recruteur",
        },
        props:{message:"redirect"},
    }
   
   
}


