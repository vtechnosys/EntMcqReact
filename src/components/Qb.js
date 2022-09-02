import React,{useEffect,useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
function Qb(){
    const id = useParams();
    const [Qbs,setQbs] = useState([])
    const [img,setImg] = useState('')
    const [desc,setDesc] = useState('')
    const[cname, setCname] = useState('')
    const [catdata,setCateData] = useState({
        image:'',
        desc:'',
        cname:''
    })
    function fetchQb()
    {
        axios.get('https://entmcq.vertextechnosys.com/api/fetchQb/'+id.id)
              .then((res)=>{
                const data = res.data;
                console.log(data);
                setQbs(data);
                const cdata = {
                    image:data[0].image,
                    desc:data[0].description,
                    cname:data[0].cname
                }
                setCateData(cdata);
              })
    }
    useEffect(()=>{
        fetchQb()
    },[])
    return(
        
<React.Fragment>
<div class="container-fluid">
        <div class="row">
            <Header/>

        </div>
    </div>

    <div class="container-fluid" id="aboutus">
        <div class="row">
            <div class="col-sm-12">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-sm-12 d-flex justify-content-between">
                            <h1>Specialist</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0" id="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">{catdata.cname}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container pb-5" id="main-content">
        <div class="row">
            <h3 class="mb-4 text-center" style={{color:'#2d79ae'}}>{catdata.cname}:</h3>
            <div class="col-sm-3">
                <img src={"https://entmcq.vertextechnosys.com/image/"+catdata.image} class="img-fluid" style={{height:150+"px"}}/>
            </div>
             <div class="col-sm-9">
                
                <p>{catdata.desc}It is made and updated by trainees who have recently successfully part the FRCS(ORL-HNS) examination on their first sitting and is the ONLY website for this niche examination that exists.
                It is made and updated by trainees who have recently successfully part the FRCS(ORL-HNS) examination on their first sitting and is the ONLY website for this niche examination that exists.
                It is made and updated by trainees who have recently successfully part the FRCS(ORL-HNS) examination on their first sitting and is the ONLY website for this niche examination that exists.</p>
                {/* <p>It is made and updated by trainees who have recently successfully part the FRCS(ORL-HNS) examination on their first sitting and is the ONLY website for this niche examination that exists.</p>
                <p>As an adjunct to your learning, it will enable you to apply theory into examination practice, consolidate your learning and practice prior to the big day.</p>
                <p class="fw-bold">Our unique features:</p>
                <ul>
                    <li>The only website that exists specifically for this particular examination, unlike other generic multiple choice websites</li>
                    <li>Designed and maintained by UK doctors who have passed this examination</li>
                    <li>Option for practicing by sub-specialty or random generated options</li>
                    <li>Option to time yourself and perform &lsquo;mock exams&rsquo; in timed modes</li>
                    <li>Has answers to questions as well as more information/detail or links to resources</li>
                    <li>Option to be paid by us if you submit questions for our SBA question bank</li>
                </ul> */}
            </div>
            
            {/*<div class="col-sm-12">
                <p>This website is by no means a recommendation as your only preparation method for your upcoming examination. We highly recommend you undertake prior theoretical learning, use multiple learning resources and use this website as an adjunct to apply theory into examination practice and consolidate your learning, prior to sitting the examination. An important pearl is to remember that this examination is ‘Single Best Answer’, regardless whether you think that none of the options are realistic, viable or appropriate – you HAVE to select an answer.</p>
                <p>These questions have been designed and created based on the past experience of our highly successful team members, who all passed this examination recently on their first attempt/sitting. They have constructed these questions from scratch, based on the new ISCP Otolaryngology curriculum (August 2022) and align with the themes and learning objectives outlined and approve by HEE and the JCST.</p>
                <p>It is prudent to note that any resemblance to questions available in other learning resources either published, printed or online, are purely coincidental. Our team regularly review and update questions to match real clinical practice and are all initially made based on the higher surgical training curriculum, we always appreciate feedback and suggestions for change so please do reach out to us if you feel something can be improved.</p>
                <p>Being the only practice question bank platform available, we feel we should give back as people contribute. We have therefore made a submission section where you are invited to submit relevant and appropriate questions with answers, and if approved to add to our question bank, will be paid £10 per question.</p>
            </div> */}

            <div className="container" id="categories" style={{marginTop:40}}>
                <div className="section-heading">
                    <h4 class="mb-4">Available Question Banks</h4>
                </div>
                <div className="row gy-3">
                    {
                        Qbs.map((obj)=>{
                            
                            return(
                    <div className="col-sm-2 col-6">
                        <a href={"/subscribe/"+obj.qid}><div className="card card-body h-100 shadow-lg" style={{padding:10+'px',backgroundColor:'#2d79ae'}}>
                            <p style={{color:'#fff',fontWeight:'bold'}}>{obj.qname}</p>
                        </div></a>
                    </div>
                            )
                        })
                    }
                    
                    
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    
</React.Fragment>
    )
}

export default Qb;