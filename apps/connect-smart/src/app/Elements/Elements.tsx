import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Alert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';

const TextFieldBox = withStyles({
  root: {
    '& .MuiInput-underline:before': {
      border: 'none !important',
    },
    '& .MuiInput-underline:after': {
      border: 'none',
    },
  },
})(TextField);

const steps = ['Quote Created', 'Quote Accepted', 'Delivery'];

export default function Elements() {
  return (
    <>
      <Grid item xs={12} className="elements">
        <Grid container spacing={2}>
          <Grid item xs={4} className="left">
            <Box
              borderTop={4}
              borderColor="primary.main"
              bgcolor="primary.contrastText"
              my={2}
              p={2}
              width="100%"
            >
              <Typography variant="h6">From</Typography>
              <div className="input-wrap">
                <TextFieldBox
                  label="Country or origin"
                  value="Darwin"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <Typography variant="h6">To</Typography>
              <div className="input-wrap">
                <TextFieldBox
                  label="Country or origin"
                  value=""
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <Divider />
              <Typography variant="h3">
                Tell us a little more about your cargo
              </Typography>
              <div className="input-wrap">
                <TextFieldBox
                  label="Number of Units"
                  value="150"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="input-wrap">
                <TextFieldBox
                  label="Weight per piece (kg)"
                  value="150"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />{' '}
              </div>
              <div className="input-wrap">
                <TextFieldBox
                  label="Length (cm)"
                  value="150"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />{' '}
              </div>
              <div className="input-wrap">
                <TextFieldBox
                  label="Width (cm)"
                  value="120"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />{' '}
              </div>
              <div className="input-wrap">
                <TextFieldBox
                  label="Height (cm)"
                  value="100"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />{' '}
              </div>
              <Button color="primary" variant="contained" fullWidth>
                Get a Quote
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6} className="right">
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="h2">Heading 2</Typography>
                <Typography variant="h3">Heading 3</Typography>
                <Typography variant="h4">Heading 4</Typography>
                <Typography variant="h5">Heading 5</Typography>
                <Typography variant="h6">Heading 6</Typography>
                <br />
                <br />
              </Grid>

              <Grid item xs={6}>
                <Button color="primary" variant="contained">
                  Primary
                </Button>
                <br /> <br />
                <Button color="secondary" variant="contained" disableElevation>
                  Secondary
                </Button>
                <br /> <br />
                <Button color="secondary" variant="outlined" disableElevation>
                  Tertiary
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Stepper activeStep={1} orientation="vertical">
                  <Step>
                    <StepLabel>
                      Quote Created
                      <br />
                      Mon 2 Nov, 2020 11:45am
                    </StepLabel>
                    <StepContent></StepContent>
                  </Step>
                  <Step>
                    <StepLabel>
                      Quote Accepted <br />
                      Mon 2 Nov, 2020 11:45am
                    </StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>
                      Receive goods Estimated <br />
                      Mon 9 Nov, 2020 1:00pm
                    </StepLabel>
                  </Step>
                </Stepper>
                <br /> <br />
                <br /> <br />
              </Grid>

              <Grid item xs={6}>
                <Alert severity="info">
                  Your order no: #1234567 has been scheduled. Please review the
                  timeline and accept this quote before 5:00pm to proceed with
                  the shipment.
                </Alert>
                <br />
                <Alert severity="success">
                  Thank you for confirming order no: #1234567. A Primary Connect
                  planner will confirm scheduling with Linfox Logistics shortly.
                </Alert>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" align="center">
                      recommended
                    </Typography>
                    <Typography variant="h3" align="center" gutterBottom>
                      $5000
                    </Typography>
                    <Table size="small">
                      <TableBody>
                        <TableRow>
                          <TableCell>Carrier:</TableCell>
                          <TableCell
                            align="right"
                            style={{ fontWeight: 'bold' }}
                          >
                            Fedex
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Quote ID:</TableCell>
                          <TableCell
                            align="right"
                            style={{ fontWeight: 'bold' }}
                          >
                            123232
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Est Transit Time:</TableCell>
                          <TableCell
                            align="right"
                            style={{ fontWeight: 'bold' }}
                          >
                            1-2days
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardActions>
                    <Button color="primary" variant="contained" fullWidth>
                      choose
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" align="center">
                      cheapest
                    </Typography>
                    <Typography variant="h3" align="center" gutterBottom>
                      $3000
                    </Typography>
                    <Table size="small">
                      <TableBody>
                        <TableRow>
                          <TableCell>Carrier:</TableCell>
                          <TableCell
                            align="right"
                            style={{ fontWeight: 'bold' }}
                          >
                            Aus Post
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Quote ID:</TableCell>
                          <TableCell
                            align="right"
                            style={{ fontWeight: 'bold' }}
                          >
                            123232
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Est Transit Time:</TableCell>
                          <TableCell
                            align="right"
                            style={{ fontWeight: 'bold' }}
                          >
                            1-2days
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardActions>
                    <Button color="primary" variant="contained" fullWidth>
                      choose
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
