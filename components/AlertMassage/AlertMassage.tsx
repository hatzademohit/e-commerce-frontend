import { Alert, Box, Button, Collapse, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface AlertMassageProps {
  showAlert?: boolean;
  setShowAlert?: (show: boolean) => void;
  severity?: "success" | "warning" | "info";
  massage?: string;
  autoHideDuration?: number;
}

const AlertMassage: React.FC<AlertMassageProps> = ({
  showAlert,
  severity,
  massage,
  setShowAlert,
  autoHideDuration = 30000
}) => {

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showAlert && autoHideDuration && setShowAlert) {
          timer = setTimeout(() => {
            setShowAlert(false);
          }, autoHideDuration);
        }
    
        return () => clearTimeout(timer);
      }, [showAlert, autoHideDuration, setShowAlert]);

  return (
    <Box sx={{ position: 'fixed', top: 10, zIndex: 9999999999, width: '350px', right: 10 }}>
      <Collapse in={showAlert}>
        <Alert severity={severity} 
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowAlert?.(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {massage}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default AlertMassage;
