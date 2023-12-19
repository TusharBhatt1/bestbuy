"use client"
import React, { useEffect, useState } from 'react';
import PWAModal from '../modal/PWAModal';
import usePWAModal from '@/app/Others/hooks/usePWAModal';

export default function PWA() {
  const [prompt , setPrompt]=useState<any>(null)
//   useEffect(() => {
//     const handleBeforeInstallPrompt = (event:any) => {
   
//       event.preventDefault();
//       setPrompt(event)
    
//     };

//     window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
   
//     return () => {
//       window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
     
//     };
//   }, []); 
  
 const handleInstall=()=>{
  if(prompt){
    prompt.prompt()
  }
  
 }
 const  modal=usePWAModal()

  return (
    <div>
    <PWAModal onClose={modal.onClose}  isOpen={modal.isOpen} onInstall={handleInstall}/>
    </div>
  );
}
