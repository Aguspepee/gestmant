import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import CardContent from '@mui/material/CardContent';
import Switch from '@mui/material/Switch';


const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
];

const steps = [
  {
    label: "Estructura de Hormigón",
    description: (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "600px" },
        }}
        noValidate
        autoComplete="off"
      >
        Base
        <Stack direction="row" spacing={2}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 130 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
<FormControlLabel control={<Switch  />} label="Reparado" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 130 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
<FormControlLabel control={<Switch  />} label="Reparado" />
        </Stack>
        Poste
        <Stack direction="row" spacing={2}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 130 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
<FormControlLabel control={<Switch />} label="Reparado" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 130 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
          <FormControlLabel control={<Switch />} label="Reparado" />
        </Stack>
        Mensula
        <Stack direction="row" spacing={2}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 130 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
          <FormControlLabel control={<Switch />} label="Reparado" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 130 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
           <FormControlLabel control={<Switch/>} label="Reparado" />
        </Stack>
      </Box>
    ),
  },
  {
    label: "Estructura Autoportante",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Conductor",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Morseteria Conductor",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Hilo de Guardia",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Morsetería Hilo de Guardia",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Acceso al piquete y línea",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Sistema de Seguridad Pública",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function FormularioMinuciosa() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div style={{ padding: "2em 2em 2em 2em" }}>
      <Card
        sx={{ minWidth: 300 }}
        style={{ width: "50%", padding: "2em 2em 2em 2em" }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            OT - 90002541
          </Typography>
          <Typography variant="h5" component="div">
            Novedades y Anomalías de LAT
          </Typography>
          <Typography variant="body2">
            Complete los campos y envíe el formulario al terminar.
          </Typography>
        </CardContent>
        <Box sx={{ maxWidth: 900 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </Card>
    </div>
  );
}
