import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

import AppBar from './components/AppBar';
import Sidebar from './components/SideMenu';
import TransferCertificate from './Forms/Certificates/TransferCertificate';
import Bonafide from './Forms/Certificates/Bonafide';
import BscNursing2Year from './Forms/BscNursingForms/BscNursing2Year';
import BscNursing3Year from './Forms/BscNursingForms/BscNursing3Year';
import BscNursing4Year from './Forms/BscNursingForms/BscNursing4Year';
import BPTSemester1 from './Forms/BachelorofPhysiotherapyForms/BPTSemester1';
import BPTSemester2 from './Forms/BachelorofPhysiotherapyForms/BPTSemester2';
import NursingSemester1 from './Forms/BscNursing4YDCForms/NursingSemester1';
import NursingSemester2 from './Forms/BscNursing4YDCForms/NursingSemester2';
import NursingSemester3 from './Forms/BscNursing4YDCForms/NursingSemester3';
import BPTSemester3 from './Forms/BachelorofPhysiotherapyForms/BPTSemester3';
import BPTSemester4 from './Forms/BachelorofPhysiotherapyForms/BPTSemester4';
import BPTSemester5 from './Forms/BachelorofPhysiotherapyForms/BPTSemester5';
import BPTSemester6 from './Forms/BachelorofPhysiotherapyForms/BPTSemester6';
import BPTSemester7 from './Forms/BachelorofPhysiotherapyForms/BPTSemester7';
import BPTSemester8 from './Forms/BachelorofPhysiotherapyForms/BPTSemester8';
import NursingSemester4 from './Forms/BscNursing4YDCForms/NursingSemester4';
import AnesthesiaFirstYear from './Forms/BscAnesthesiaForms/AnesthesiaFirstYear';
import MLTSecondYear from './Forms/BscMedicalLaboratorytechnologyForms/MLTSecondYear';
import MLTThirdYear from './Forms/BscMedicalLaboratorytechnologyForms/MLTThirdYear';
import AnesthesiaSecondYear from './Forms/BscAnesthesiaForms/AnesthesiaSecondYear';
import AnesthesiaThirdYear from './Forms/BscAnesthesiaForms/AnesthesiaThirdYear';
import HMCFirstYearSemester1 from './Forms/HospitalMangementCourseForms/HMCFirstYearSemester1';
import HMCFirstYearSemester2 from './Forms/HospitalMangementCourseForms/HMCFirstYearSemester2';
import HMCSecondYearSemester3 from './Forms/HospitalMangementCourseForms/HMCSecondYearSemester3';
import HMCSecondYearSemester4 from './Forms/HospitalMangementCourseForms/HMCSecondYearSemester4';
import HMCInternship from './Forms/HospitalMangementCourseForms/HMCInternship';
import MPTFirstYear from './Forms/MasterofPhysiotherapyForms/MPTFirstYear';
import MPTSecondYear from './Forms/MasterofPhysiotherapyForms/MPTSecondYear';
import NMTFirstYear from './Forms/NuclearMedicineTechnologyForms/NMTFirstYear';
import NMTSecondYear from './Forms/NuclearMedicineTechnologyForms/NMTSecondYear';
import GeneticCounsellingCourse from './Forms/GeneticCounsellingCourse Forms/GeneticCounsellingCourse';


import ApplicationFeeDetails from './Forms/ApplicationBPT/ApplicationFeeDetails';
import PersonalDetails from './Forms/ApplicationBPT/PersonalDetails';
import IdentityDetails from './Forms/ApplicationBPT/IdentityDetails'
import IntermediateDetails from './Forms/ApplicationBPT/IntermediateDetails';
import AcademicRecord from './Forms/ApplicationBPT/AcademicRecord';
import Application1 from './Forms/ApplicationBPT/AdministrativeDetails';
import CourseDetails from './Forms/ApplicationBPT/CourseDetails';
import OnBoardingPhase from './Forms/ApplicalPgMedicalStudents/OnBoardingPhase'
import ContactInformation from './Forms/ApplicationBPT/ContactInformation';
import DocumentsUpload from './Forms/ApplicationBPT/DocumentsUpload';

import PreAdmission from './Forms/ApplicalPgMedicalStudents/PreAdmission'
import ExaminationAssessment from './Forms/ApplicalPgMedicalStudents/ExaminationAssessment';
import Report1 from './Forms/ApplicationReport/Report1';
import Report2 from './Forms/ApplicationReport/Report2';
import Report3 from './Forms/ApplicationReport/Report3';

import Attendance_Certificate from './Forms/Certificates/Attendence_Certificate';
import Custodian from './Forms/Certificates/Custodian';
import CustodianCertificate from './Forms/Certificates/CustodianCertificate';
import LossOfPay from './Forms/Certificates/LossOfPay';
import Maternity from './Forms/Certificates/Maternity';
import MaternityLeave from './Forms/Certificates/MaternityLeave';
import MedicalFeeNote from './Forms/Certificates/MedicalFeeNote';
import ObserversAttendance from './Forms/Certificates/ObserverAttendance';
import ObserverPermission from './Forms/Certificates/ObserverPermission';
import ProvisionalAdmission from './Forms/Certificates/ProvisionalAdmission';
import StipendForm from './Forms/Certificates/StipendForm';
import StipendTable from './Forms/Certificates/StipendTable';


const App = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar/>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          height: '100vh',
          overflowY: 'auto',
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<TransferCertificate />} />
          <Route path="/nurs2y" element={<BscNursing2Year/>} />
          <Route path="/nurs3y" element={<BscNursing3Year/>} />
          <Route path="/nurs4y" element={<BscNursing4Year/>} />
          <Route path="/nursingsem1" element={<NursingSemester1/>} />
          <Route path="/bpt1" element={<BPTSemester1/>} />
          <Route path="/bpt2" element={<BPTSemester2/>} />
          <Route path="/bpt3" element={<BPTSemester3/>} />
          <Route path="/bpt4" element={<BPTSemester4/>} />
          <Route path="/bpt5" element={<BPTSemester5/>} />
          <Route path="/bpt6" element={<BPTSemester6/>} />
          <Route path="/bpt7" element={<BPTSemester7/>} />
          <Route path="/bpt8" element={<BPTSemester8/>} />
          <Route path="/nursingsem4" element={<NursingSemester4/>} />
          <Route path="/nursingsem3" element={<NursingSemester3/>} />
          <Route path="/nursingsem2" element={<NursingSemester2/>} />
          <Route path="/anesthesia1" element={<AnesthesiaFirstYear/>} />
          <Route path="/anesthesia2" element={<AnesthesiaSecondYear/>} />
          <Route path="/mlt2" element={<MLTSecondYear/>} />
          <Route path="/anesthesia3" element={<AnesthesiaThirdYear/>} />
          <Route path="/mlt3" element={<MLTThirdYear/>} />
          <Route path="/hmc1" element={<HMCFirstYearSemester1/>} />
          <Route path="/hmc2" element={<HMCFirstYearSemester2/>} />
          <Route path="/hmc3" element={<HMCSecondYearSemester3/>} />
          <Route path="/hmc4" element={<HMCSecondYearSemester4/>} />
          <Route path="/bonafide" element={<Bonafide/>}/>
          <Route path="/int" element={<HMCInternship/>}/>
          <Route path="/mpt1" element={<MPTFirstYear/>} />
          <Route path="/mpt2" element={<MPTSecondYear/>} />
          <Route path="/nmt1" element={<NMTFirstYear/>} />
          <Route path="/nmt2" element={<NMTSecondYear/>} />
          <Route path="/genetic" element={<GeneticCounsellingCourse/>} />
       
          <Route path ="/preadmission" element={<PreAdmission/>} />
          <Route path="/onboard" element={<OnBoardingPhase/>} />
          <Route path='/exam' element={<ExaminationAssessment/>} />
      
          <Route path="/ap1" element={<Application1/>}/>
          <Route path="/inter" element={<IntermediateDetails/>}/>
          <Route path="/academicrecord" element={<AcademicRecord/>}/>
          <Route path="/contact" element={ <ContactInformation/>}/>
          <Route path="/upload" element={<DocumentsUpload/>}/>

          <Route path ="/appfee" element={<ApplicationFeeDetails/>} /> 
          <Route path ="/personaldetails" element={<PersonalDetails/>} /> 
          <Route path ="/identitydetails" element={<IdentityDetails/>} /> 
          <Route path ="/coursedetails" element={<CourseDetails/>} /> 
          <Route path="/report1" element={<Report1/> } />
          <Route path="/report2" element={<Report2/> } />
          <Route path="/report3" element={<Report3/> } />

          <Route path ="/attendancecertificate" element={<Attendance_Certificate/>} />
           <Route path ="/custodian" element={<Custodian/>} />
           <Route path ="/custocerificate" element={<CustodianCertificate/>} />
           <Route path ="/lop" element={<LossOfPay/>} />
           <Route path ="/maternity" element={<Maternity/>} />
           <Route path ="/maternityleave" element={<MaternityLeave/>} />
           <Route path ="/medicalfee" element={<MedicalFeeNote/>} />
           <Route path ="/observerattendance" element={<ObserversAttendance/>} />
           <Route path ="/observpermisson" element={<ObserverPermission/>} />
           <Route path ="/proadmission" element={<ProvisionalAdmission/>} />
           <Route path ="/stipendform" element={<StipendForm/>} />
           <Route path ="/stipendtable" element={<StipendTable/>} />
        
        </Routes>
      </Box>
    </Box>
  );
};

export default App;

