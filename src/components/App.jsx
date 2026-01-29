import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import CreatePost from "../pages/CreatePost";
import Login from "../pages/Login";
import Blogs from "../pages/BlogsHome";
import Layout from "./Layout";
import Home from "../pages/Home";
import Articles from "../pages/Articles";
import Anxiety from "../pages/Anxiety";
import Depression from "../pages/Depression";
import Ocd from "../pages/Ocd";
import PanicDisorder from "../pages/PanicDisorder";
import BipolarArticle from "../pages/BipolarArticle";
import Schizophrenia from "../pages/Schizophrenia";
import Ptsd from "../pages/Ptsd";
import Psychosis from "../pages/Psychosis";
import Initiatives from "../pages/Initiatives";
import Quiz from "../pages/Quiz";
import Relax from "../pages/Relax";
import Resources from '../pages/Resources';
import DepressionResources from "../pages/DepressionResources"; 
import OcdResources from "../pages/OcdResources";  
import AdhdResources from "../pages/AdhdResources";  

import PTSDQuiz from "../pages/PTSDQuiz";
import SocialAnxietyQuiz from "../pages/SocialAnxietyQuiz";
import PtsdResources from "../pages/PtsdResources";
import SocialAnxietyResources from "../pages/SocialAnxietyResources";

import FeelingsAndMemesPage from './FeelingsAndMemesPage';
import Volunteer from "../pages/Volunteer";
import ContactUs from "../pages/ContactUs";
import SignUp from "../pages/SignUp";
import AnxietyQuiz from "../pages/AnxietyQuiz";
import DepressionQuiz from "../pages/DepressionQuiz";
import OCDQuiz from "../pages/OCDQuiz";
import ADHDQuiz from "../pages/ADHDQuiz";
import SupportGroupsMain from "../pages/SupportGroupsMain";
import Jokes from "../pages/Jokes";

// NAYE PAGES KO IMPORT KAREIN (YE ADD KIYA GAYA HAI)
import TherapistListPage from "../features/psychotherapy/pages/TherapistListPage";
import TherapistProfilePage from "../features/psychotherapy/pages/TherapistProfilePage";
import PsychotherapyMeetPage from "../features/psychotherapy/pages/PsychotherapyMeetPage";

// GET STARTED PAGE KO IMPORT KAREIN (YE ADD KIYA GAYA HAI)
import GetStartedPage from "../pages/GetStartedPage";

// QUICK HELP PAGES KO IMPORT KAREIN (YE ADD KIYA GAYA HAI)
import ChatPage from "../pages/ChatPage";
import SelfAssessmentPage from "../pages/SelfAssessmentPage";
import EmergencyContactsPage from "../pages/EmergencyContactsPage";

// SUPPORT GROUPS COMPONENTS KO IMPORT KAREIN (YE ADD KIYA GAYA HAI)
import SupportGroups from "../pages/SupportGroups";
import SupportGroupDetails from "../pages/SupportGroupDetails";

// EXPLORE GROUPS और START GROUP को IMPORT करें (YE ADD KIYA GAYA HAI)
import ExploreGroups from "../pages/ExploreGroups";
import StartGroup from "../pages/StartGroup";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="anxiety" element={<Anxiety />} />
          <Route path="depression" element={<Depression />} />
          <Route path="ocd" element={<Ocd />} />
          <Route path="panicdisorder" element={<PanicDisorder />} />
          <Route path="bipolar-article" element={<BipolarArticle />} />
          <Route path="schizophrenia" element={<Schizophrenia />} />
          <Route path="ptsd" element={<Ptsd />} />
          <Route path="psychosis" element={<Psychosis />} />
          <Route path="initiatives" element={<Initiatives />} />
          <Route path="support-groups" element={<SupportGroups />} />
          <Route path="support-group/:id" element={<SupportGroupDetails />} />
          
          {/* EXPLORE GROUPS और START GROUP के लिए नएे रूट जोड़ें (YE ADD KIYE GAYE HAIN) */}
          <Route path="explore-groups" element={<ExploreGroups />} />
          <Route path="start-group" element={<StartGroup />} />
          
          <Route path="blogs" element={<Blogs isAuth={isAuth} />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="anxiety-quiz" element={<AnxietyQuiz />} />
          <Route path="depression-quiz" element={<DepressionQuiz />} />
          <Route path="ocd-quiz" element={<OCDQuiz />} />
          <Route path="adhd-quiz" element={<ADHDQuiz />} />
          <Route path="relax" element={<Relax />} />
           <Route path="jokes" element={<Jokes/>} />
          <Route path="/depression-resources" element={<DepressionResources />} />
          <Route path="ocd-resources" element={<OcdResources />} /> 
          <Route path="adhd-resources" element={<AdhdResources />} />  
          <Route path="ptsd-quiz" element={<PTSDQuiz />} />
          <Route path="social-anxiety-quiz" element={<SocialAnxietyQuiz />} />
          <Route path="ptsd-resources" element={<PtsdResources />} />
          <Route path="social-anxiety-resources" element={<SocialAnxietyResources />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/memes" element={<FeelingsAndMemesPage />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="createpost" element={<CreatePost isAuth={isAuth} />} />
          <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
          
          {/* NAYE ROUTES ADD KAREIN (YE ADD KIYE GAYE HAIN) */}
          <Route path="therapists" element={<TherapistListPage />} />
          <Route path="therapist/:id" element={<TherapistProfilePage />} />
          <Route path="meet/:sessionId" element={<PsychotherapyMeetPage />} />
          
          {/* GET STARTED PAGE ROUTE (YE ADD KIYA GAYA HAI) */}
          <Route path="get-started" element={<GetStartedPage />} />
          
          {/* QUICK HELP PAGES ROUTES (YE ADD KIYE GAYE HAIN) */}
          <Route path="chat" element={<ChatPage />} />
          <Route path="self-assessment" element={<SelfAssessmentPage />} />
          <Route path="emergency" element={<EmergencyContactsPage />} />

        </Route>
      </Routes>
    </>
  );
};

export default App;