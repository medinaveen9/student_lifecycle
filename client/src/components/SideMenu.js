import React, {  useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Divider, Box, Typography } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/SideMenu.css";

const Sidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
   const menuItems = [
 
    {
      id: 'ApplicationFormBPT',
      label: 'Bachelor of Physiotherapy Application',
      hasSubMenu: true,
      subItems: [
       
        {id:'AdministrativeDetails' ,label:'Administrative Information', path:'/ap1' },
        {id:'ApplicationFeeDetails' ,label:'Fee Payment Details', path:'/appfee' },
        {id:'PersonalDetails' ,label:'Personal Information', path:'/personaldetails' },
        {id:'IdentityDetails' ,label:'Identity Verification', path:'/identitydetails' },
        {id:'ContactInformation' ,label:'Contact Details', path:'/contact' },
        {id:'IntermediateDetails' ,label:'Educational Background-Intermediate Level', path:'/inter' },
        {id:'CourseDetails' ,label:'Course selection', path:'/coursedetails' },
        {id:'AcademicRecord' ,label:'Academic Record', path:'/academicrecord' }, 
        {id:'DocumentsUpload' ,label:'Documents Upload', path:'/upload' },
     
   
      ]
    },
    {
      id: 'Application Report BPT',
      label: 'BPT Application Report ',
      hasSubMenu: true,
      subItems: [
     
        { id: 'Report1', label: 'Personal & Academic Info', path: '/report1' },
        { id: 'Report2', label: 'Course & Details', path: '/report2' },
        { id: 'Report3', label: 'Uploaded Documents', path: '/report3' },   

      ]
    },

    {
      id: 'PG Medical Students',
      label: 'PG Medical Students Application',
      hasSubMenu: true,
      subItems: [
     
        { id: 'PreAdmission', label: 'Pre Admission', path: '/preadmission' },
        { id: 'OnBoardingPhase', label: 'OnBoarding Phase', path: '/onboard' },
        { id: 'ExaminationAssessment', label:'Examination Assessment', path:'/exam'},
        

      ]
    },

    {
      id: 'Certificates',
      label: 'Certificates',
      hasSubMenu: true,
      subItems: [
     
        { id: 'TransferCertificate', label: 'Transfer Certificate', path: '/' },
        {id:'Bonafide', label:'Bonafide', path:'/bonafide'},
        {id:'Internship', label:'Internship',path:'/int'},
        {id:'Attendance_Certificate', label:'Attendance Certificate', path:'/attendancecertificate'},

        {id:'Custodian', label:'Custodian', path:'/custodian'},
        {id:'CustodianCertificate', label:'Custodian Certificate', path:'/custocerificate'},
        {id:'LossOfPay', label:'Loss Of Pay', path:'/lop'},
        {id:'Maternity', label:'Maternity', path:'/maternity'},
        {id:'MaternityLeave', label:'Maternity Leave', path:'/maternityleave'},
        {id:'MedicalFeeNote', label:'Medical Fee Note', path:'/medicalfee'},
        {id:'ObserversAttendance', label:'Observers Attendance', path:'/observerattendance'},
        {id:'ObserverPermission', label:'Observer Permission', path:'/observpermisson'},
        {id:'ProvisionalAdmission', label:'Provisional Admission', path:'/proadmission'},
        {id:'StipendForm', label:'Stipend Form', path:'/stipendform'},
        {id:'StipendTable', label:'Stipend Table', path:'/stipendtable'},
        
    
      
    
   
     
    
     
      ]
    },

    {
      id: 'Nursing(Bsc)-4YDC',
      label: 'Nursing (Bsc)-4YDC',
      hasSubMenu: true,
      subItems: [
  
        { id: 'NursingSemester1', label: 'Semester 1', path: '/nursingsem1' },
        { id:'NursingSemester2' , label: 'Semester 2', path: '/nursingsem2'},
        { id: 'NursingSemester3', label: 'Semester 3', path: '/nursingsem3' },
        { id: 'NursingSemester4', label: 'Semester 4', path: '/nursingsem4' },
      ]
    },
    { 
      id:'Nursing(Bsc)',
      label:'Nursing (Bsc)',
      hasSubMenu:true,
      subItems: [
        { id: 'NursingSecondYear', label: ' Nursing Secondyear', path: '/nurs2y' },
        { id: 'NursingThirdYear', label:  'Nursing Thirdyear'  , path: '/nurs3y' },
        { id: 'NursingFourthYear', label: 'Nursing Fourthyear' , path: '/nurs4y' },
      ]
    },
 
    {
      id: 'Physiotherapy(BPT)',
      label: 'Physiotherapy (BPT)',
      hasSubMenu: true,
      subItems: [
  
        { id: 'BPTemester1', label: 'Semester 1', path: '/bpt1' },
        { id: 'BPTSemester2', label: 'Semester 2', path: '/bpt2' },
        { id: 'BPTSemester3', label: 'Semester 3', path: '/bpt3' },
        { id: 'BPTSemester4', label: 'Semester 4', path: '/bpt4' },
        { id: 'BPTSemester5', label: 'Semester 5', path: '/bpt5' },
        { id: 'BPTSemester6', label: 'Semester 6', path: '/bpt6' },
        { id: 'BPTSemester7', label: 'Semester 7', path: '/bpt7' },
        { id: 'BPTSemester8', label: 'Semester 8', path: '/bpt8' },

      ]
    },
      
    { 
      id:'Anesthesia(Bsc)',
      label:'Anesthesia(Bsc)',
      hasSubMenu:true,
      subItems: [
        { id: 'AnesthesiaFirstYear', label: 'Anesthesia FirstYear', path: '/anesthesia1' },
        { id: 'AnesthesiaSecondYear', label: 'Anesthesia SecondYear', path: '/anesthesia2' },
        { id:'AnesthesiaThirdYear' , label:'Anesthesia ThirdYear', path:'/anesthesia3'},
    
      ]
    },
    { 
      id:'Medical Laboratory Technology(Bsc)',
      label:'Medical Laboratory Technology(MLT)',
      hasSubMenu:true,
      subItems: [
   
        { id: 'MLTSecondYear', label: 'MLT SecondYear', path: '/mlt2' },
        { id: 'MLTThirdYear', label: 'MLT hirdYear', path: '/mlt3' },
      ]
    },
  

    { 
      id:'HospitalManagementCourse',
      label:'Hospital Management Course (HMC)',
      hasSubMenu:true,
      subItems: [
        { id: 'HMCFirstYearSemester1', label: ' HMC FirstYear Semester1', path: '/hmc1' },
        { id: 'HMCFirstYearSemester2', label: ' HMC FirstYear Semester2', path: '/hmc2' },
        { id: 'HMCSecondYearSemester3', label: ' HMC SecondYear Semester3', path: '/hmc3' },
        { id: 'HMCSecondYearSemester4', label: ' HMC SecondYear Semester4', path: '/hmc4' },
      ]
    },

    { 
      id:'Master of Physiotherapy ',
      label:'Master of Physiotherapy (MPT)',
      hasSubMenu:true,
      subItems: [
        { id: 'MPTFirstYear', label: ' MPT FirstYear', path: '/mpt1' },
        { id: 'MPTSecondYear', label: ' MPT SecondYear', path: '/mpt2' },
   
      ]
    },
    { 
      id:'Nuclear Medicine Technology(PG)',
      label:'Nuclear Medicine Technology (PG)',
      hasSubMenu:true,
      subItems: [
        { id: 'NMTTFirstYear', label: ' NMT FirstYear', path: '/nmt1' },
        { id: 'NMTSecondYear', label: ' NMT SecondYear', path: '/nmt2' },
   
      ]
    },

    { 
      id:'Genetic Counselling Course',
      label:'Genetic Counselling Course',
      hasSubMenu:true,
      subItems: [
        { id: 'GeneticCounsellingCourse', label: ' Genetic Counselling Course', path: '/genetic' },
      ]
    },
  ];

  const handleMenuClick = (item) => {
    if(item.hasSubMenu) {
      setExpandedMenu(expandedMenu === item.id ? null : item.id);
    }
    else{
      handleNavigation(item.path);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Drawer variant="permanent" className = "custom-drawer">
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem button onClick={() => handleMenuClick(item)} selected={!item.hasSubMenu && isActive(item.path) || 
                  (item.hasSubMenu && item.subItems.some(sub => isActive(sub.path)))} className = "listitem_hover"
              >
                <ListItemText primary={item.label} className = "listitem_label" />
                  {item.hasSubMenu && ( expandedMenu === item.id ? <ExpandLess /> : <ExpandMore /> )}
                </ListItem>
                {item.hasSubMenu && (
                  <Collapse in={expandedMenu === item.id} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx = {{backgroundColor : "#ede0fe"}}>
                      {item.subItems.map((subItem) => (
                        <ListItem key={subItem.id} button sx={{ pl: 4 }} onClick={() => handleNavigation(subItem.path)}
                          selected={isActive(subItem.path)} className = "listitem_hover">
                          <ListItemText primary={subItem.label} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default React.memo(Sidebar);
