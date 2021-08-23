import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import Domaines from '../../../components/etiquettes/etiquette'
import Link from 'next/link'
import Image from 'next/image'
import cookie from 'cookie'
import jwt_decode from 'jwt-decode';
import axios from 'axios'
import DashboardIcon from '@material-ui/icons/Dashboard';
import {api} from '../../api/api'

export default function Consultant({data}) {

        var state = {

            consultant: {
                id:3,
                name:"Gherici DRISSI",
                email:"contact@gcdconseil.com"
            },
            
            company:{
                company_name:"GCD Conseil",
                img:"/images/partner/partner_audi.svg",
                rcs:"RCS de BESANCON",
                siret:"N° de SIRET 493 543 433 00061",
                ape:"Code APE 7022Z Conseil pour les Affaires",
                headquarter_adresse:"7 rue Albrecht DURER",
                headquarter_zip_code:"25000",
                headquarter_city:"Besançon",
                phone_number:"06 32 61 59 75",
                stats:{
                    lastCa:18250,
                    in_progress:2,
                    closed:24,
                    all:26,
                    prospect:14,
                    cvs:25987
                }
            }

        }
          
        const customImgLoader = ({ src }) => {
            return `${src}`
        }


        return (
            <>
                <Head>
                    <title>A recruit | Consultant</title>
                </Head>

                <div className="consultant ">
                <Header
                >
                    <li>
                        <Link href="/interface/consultant">
                            <a className="locate">
                                <div className="center"><DashboardIcon/>&#160;Dashboard  </div>
                            </a>
                        </Link>
                    </li>
                </Header>
                    <div className="consultantBody body contentF">
                        <div className="top consultanttop">
                            
                            <div className="previewXL2 orientationH infos">
                                <div className="orientationH ">

                                    {!data.company_logo ?
                                        <div className="defaultLogo"><div>{data.company_name && data.company_name.charAt(0)}</div></div>
                                        :
                                        <Image alt="logo" loader={customImgLoader} src={data.company_logo} width={200} height={200}/>
                                    }                                
                                    <div style={{marginLeft:'1em'}}>
                                        <div><span>{state.company.company_name}</span></div>
                                        <div><span>{state.consultant.name}</span></div>
                                        <div>{state.company.rcs}</div>
                                        <div>{state.company.siret}</div>
                                        <div>{state.company.ape}</div>
                                        <div>
                                            Siège social :
                                        </div>
                                        <div>{state.company.headquarter_adresse}</div>
                                        <div>{state.company.headquarter_zip_code}</div>
                                        <div>{state.company.headquarter_city}</div>
                                        <div>Tel :&#160; {state.company.phone_number}</div> 
                                        <div>Mail: &#160; {state.consultant.email}</div>

                                    </div>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>a </td>
                                            <td>b </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="light">
                                            <td>CA N-1</td>
                                            <td className="right">{state.company.stats.lastCa}€</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Dossier en cours</td>
                                            <td className="right">{state.company.stats.in_progress}</td>
                                            
                                        </tr>
                                        <tr className="light">
                                            <td>Dossiers clos</td>
                                            <td className="right">{state.company.stats.closed}</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Total dossier</td>
                                            <td className="right">{state.company.stats.all}</td>
                                            
                                        </tr>
                                        <tr className="light">
                                            <td>Prospect</td>
                                            <td className="right">{state.company.stats.prospect}</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>CV tèque</td>
                                            <td className="right">{state.company.stats.cvs}</td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                              
                            
                            </div>
                        </div>
                        <br></br>
                        <div className="title center orientationV consultant_bottom">
                            <span className="bold">{data.user.user_name+ " " + data.user.user_firstname}</span>
                            <div>Bienvenu sur votre compte collaborateur</div>
                        </div>

                        <div className="etiquettes">
                            <Link href="/interface/consultant/boiteaoutils">
                                <a>
                                    <Domaines
                                        src="/images/tools.png"
                                        title1="Boite à outils"
                                        style={{
                                            color:'#5AAAE7'
                                        }}
                                    />
                                </a>
                            </Link>
                            <Link href="/interface/consultant/formations">
                                <a>
                                    <Domaines
                                        src="/images/formation.png"
                                        title1="Formations"
                                        style={{
                                            color:'#F948B4'
                                        }}
                                    />
                                </a>
                            </Link>
                            <Link href="/interface/consultant/blog">
                                <a>
                                    <Domaines
                                        src="/images/blog.png"
                                        title1="Blog A recruit"
                                        style={{
                                            color:'#615DF9'
                                        }}
                                    />
                                </a>
                            </Link>
                            <Link href="/interface/consultant/offrespartenaires">
                                <a>
                                    <Domaines
                                        src="/images/partenaires.png"
                                        title1="Offres partenaires"
                                        style={{
                                            color:'#615DF9'
                                        }}
                                    />
                                </a>
                            </Link>
                            <Link href="/interface/consultant/infoconsultant">
                                <a>
                                    <Domaines
                                        src="/images/web_app.svg"
                                        title1="Infos consultant"
                                        style={{
                                            color:'#615DF9'
                                        }}
                                    />
                                </a>
                            </Link>
                        </div>
                     <Footer/>
                    </div>
                </div>
            </>
        )    
}

export async function getServerSideProps({ req }) {
    
    const user_cookie = cookie.parse(req ? req.headers.cookie || "" : document.cookie)
    
    if(user_cookie.me){

        const user = jwt_decode(JSON.stringify(user_cookie))
        let data=[]
        await axios.post(`${api}/getCompanyInfo`,{
            user_id:user.user_id,
        }).then((reponse)=>{
            data= reponse.data
        })  
        data={...data,user}
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
            destination: "/auth/login?dest=consultant",
        },
        props:{message:"redirect"},
    }
}