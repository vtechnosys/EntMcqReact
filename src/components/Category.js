import React,{useEffect,useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
function Category(){
    const [category,setCategory] = useState([])
    function fetchCategory()
    {
        axios.get('https://entmcq.vertextechnosys.com/api/category')
              .then((res)=>{
                const data = res.data;
                setCategory(data);
              })
    }
    useEffect(()=>{
        fetchCategory()
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
                                    <li class="breadcrumb-item active" aria-current="page">specialist</li>
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
            {/* <div class="col-sm-6">
                <h3 class="mb-4">Specialist:</h3>
                <p>Welcome – This website is especially created and designed to enable you to prepare for the FRCS(ORL-HNS) Part One Examination.</p>
                <p>It is made and updated by trainees who have recently successfully part the FRCS(ORL-HNS) examination on their first sitting and is the ONLY website for this niche examination that exists.</p>
                <p>As an adjunct to your learning, it will enable you to apply theory into examination practice, consolidate your learning and practice prior to the big day.</p>
                <p class="fw-bold">Our unique features:</p>
                <ul>
                    <li>The only website that exists specifically for this particular examination, unlike other generic multiple choice websites</li>
                    <li>Designed and maintained by UK doctors who have passed this examination</li>
                    <li>Option for practicing by sub-specialty or random generated options</li>
                    <li>Option to time yourself and perform &lsquo;mock exams&rsquo; in timed modes</li>
                    <li>Has answers to questions as well as more information/detail or links to resources</li>
                    <li>Option to be paid by us if you submit questions for our SBA question bank</li>
                </ul>
            </div>
            <div class="col-sm-6">
                <img src="/assets/images/aboutus.svg" class="img-fluid"/>
            </div>
            <div class="col-sm-12">
                <p>This website is by no means a recommendation as your only preparation method for your upcoming examination. We highly recommend you undertake prior theoretical learning, use multiple learning resources and use this website as an adjunct to apply theory into examination practice and consolidate your learning, prior to sitting the examination. An important pearl is to remember that this examination is ‘Single Best Answer’, regardless whether you think that none of the options are realistic, viable or appropriate – you HAVE to select an answer.</p>
                <p>These questions have been designed and created based on the past experience of our highly successful team members, who all passed this examination recently on their first attempt/sitting. They have constructed these questions from scratch, based on the new ISCP Otolaryngology curriculum (August 2022) and align with the themes and learning objectives outlined and approve by HEE and the JCST.</p>
                <p>It is prudent to note that any resemblance to questions available in other learning resources either published, printed or online, are purely coincidental. Our team regularly review and update questions to match real clinical practice and are all initially made based on the higher surgical training curriculum, we always appreciate feedback and suggestions for change so please do reach out to us if you feel something can be improved.</p>
                <p>Being the only practice question bank platform available, we feel we should give back as people contribute. We have therefore made a submission section where you are invited to submit relevant and appropriate questions with answers, and if approved to add to our question bank, will be paid £10 per question.</p>
            </div> */}

            <div className="container" id="categories">
                <div className="section-heading text-center">
                    <h3>Categories</h3>
                </div>
                <div className="row gy-3">
                    {
                        category.map((obj)=>{
                            return(
                    <div className="col-sm-3 col-6">
                        <a href={"specialist/"+obj.id}><div className="card card-body h-100 shadow-lg">
                            <img src={"https://entmcq.vertextechnosys.com/image/"+obj.image} style={{width:140+'px',}}/>
                            <div className="card card-body h-100 shadow-lg" style={{padding:10+'px',backgroundColor:'#2d79ae'}}>
                            <p style={{color:'#fff',textDecoration:'none'}}>{obj.name}</p></div>
                        </div></a>
                    </div>
                            )
                        })
                    }
                    
                    {/* <div className="col-sm-3 col-6">
                        <div className="card card-body h-100 shadow-lg">
                            <img src="assets/images/headneck.png"/>
                            <p>Head and Neck</p>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6">
                        <div className="card card-body h-100 shadow-lg">
                            <img src="assets/images/face.png"/>
                            <p>Rhinology and
                                Facial Plastics</p>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6">
                        <div className="card card-body h-100 shadow-lg">
                            <img src="assets/images/ent.png"/>
                            <p>Paediatric ENT</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    
</React.Fragment>
    )
}

export default Category;