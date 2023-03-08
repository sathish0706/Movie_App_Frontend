import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  return <>
    <h1>404 Error</h1>
    
    <Button variant="contained" onClick={()=>navigate("/home")}>Back</Button>

  </>;
}
