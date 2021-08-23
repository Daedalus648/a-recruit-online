import React ,{useState,useEffect} from 'react'
import Head from 'next/head'
import Header from '../../../../../components/header/header'
import Footer from '../../../../../components/footer/footer'
import Link from 'next/link'

import CA_vs_CA from './can_vs_can-1'
import CA_vs_poste from './ca_vs_poste'
import CA_vs_activite from './ca_vs_activite'
import CA_vs_collaborateurs from './ca_vs_collaborateurs'
import CA_vs_masseSalarial from './ca_vs_masseSalarial'
import TauxReussite from './tauxReussite'
import DashboardIcon from '@material-ui/icons/Dashboard';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ReceiptIcon from '@material-ui/icons/Receipt';
import EuroIcon from '@material-ui/icons/Euro';
import BusinessIcon from '@material-ui/icons/Business';

export default function statistiques() {

    const [chart,setChart]=useState("ca_vs_ca")
    const [largeur,setLargeur]=useState(2000);
    useEffect(()=>{

        setLargeur(window.innerWidth);

        const changeWidth =()=>{

            setLargeur(window.innerWidth);
            
        }
        
        window.addEventListener('resize',changeWidth);
    
        //console.log(largeur)
        
        return()=>{
        
            window.removeEventListener('resize',changeWidth);
        
        }
    })
    
    return (
        <>
            <Head>
                <title>A recruit | Statistiques</title>
            </Head>

            <div className="statistiques consultant">
            <Header>
                {largeur<585 &&
                    <>
                        <li>
                            <Link href="/interface/consultant">
                                <a>
                                    <div className="center"><DashboardIcon/>&#160;Dashboard  </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/interface/consultant/boiteaoutils/gestionrecrutements">
                                <a className="locate">
                                    <div className="center"><HowToRegIcon/>&#160; Gestion recrutements  </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <div className="center"><FolderSharedIcon/>&#160; CVthèque </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/interface/consultant/boiteaoutils/statistiques">
                                <a>
                                    <div className="center"><EqualizerIcon/>&#160; Statistiques </div>
                                </a>
                            </Link>
                        </li>
                        <li className="menu-menu"><a><div className="center"><EuroIcon/>&#160;Gestion Comptable</div></a>
                            <ul>
                                <li><Link href="/interface/consultant/boiteaoutils/gestioncomptable/factures"><a > <div className="center"><ReceiptIcon/>&#160; Factures </div></a></Link> </li>
                                <li><Link href="/interface/consultant/boiteaoutils/gestioncomptable/compteresultat"><a > <div className="center"><EuroIcon/>&#160; Compte Résultat </div></a></Link> </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/interface/consultant/boiteaoutils/placeaffaire">
                                <a> <div className="center"><BusinessIcon/>&#160; Place affaire </div></a>
                            </Link>
                        </li>
                        </>
                    }
                </Header>
                <div className="consultantBody orientationH">
                    {largeur>585 &&
                        <div className="menu">

                            <ul>
                                <li>
                                    <Link href="/interface/consultant">
                                        <a>
                                            <div><DashboardIcon/>&#160;Dashboard  </div>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/interface/consultant/boiteaoutils">
                                        <a >
                                            <div><HowToRegIcon/>&#160; Gestion recrutements  </div>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <div><FolderSharedIcon/>&#160; CVthèque </div>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/interface/consultant/boiteaoutils/statistiques">
                                        <a className="locate">
                                            <div><EqualizerIcon/>&#160; Statistiques </div>
                                        </a>
                                    </Link>
                                </li>
                                <br></br>
                                <div>Gestion Comptable</div>
                                <div className="menu-menu">
                                    <li><Link href="/interface/consultant/boiteaoutils/gestioncomptable/factures"><a > <div><ReceiptIcon/>&#160; Factures </div></a></Link> </li>
                                    <li><Link href="/interface/consultant/boiteaoutils/gestioncomptable/compteresultat"><a > <div><EuroIcon/>&#160; Compte Résultat </div></a></Link> </li>
                                </div>
                                <br></br>
                                <li>
                                    <Link href="/interface/consultant/boiteaoutils/placeaffaire">
                                        <a> <div><BusinessIcon/>&#160; Place affaire </div></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }

                    <div className="content w100">


                        <p className="recutor_title">ESPACE STATISTIQUES</p>
                        
                        <div className="select">
                            <select onChange={(e)=>{setChart(e.target.value)}}>
                                <option value="ca_vs_ca">CA N VS CA N-1</option>
                                <option value="ca_vs_collaborateur">CA/Collaborateur</option>
                                <option value="taux_reussite">Taux de réussite</option>
                                <option value="ca_poste">CA/Poste</option>
                                <option value="ca_vs_activite">CA/Activité</option>
                                <option value="ca_vs_masse_salariale">CA/Masse salariale client</option>
                            </select>
                        </div>
                        <div className="chart">
                           { 
                            chart==="ca_vs_ca"?
                                <CA_vs_CA/>
                            :chart==="ca_vs_collaborateur"?
                                <CA_vs_collaborateurs/>
                            :chart==="taux_reussite"?
                                <TauxReussite/>
                            :chart==="ca_poste"?
                                <CA_vs_poste/>
                            :chart==="ca_vs_activite"?
                                <CA_vs_activite/>
                            :chart==="ca_vs_masse_salariale"?
                                <CA_vs_masseSalarial/>
                            :null
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            
        </>
    )
}
