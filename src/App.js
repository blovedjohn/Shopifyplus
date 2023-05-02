import './App.css'; 
import AllCards from './DataCard/AllCards';
import NavBar from './Bars/NavBar';
import Footer from './Bars/Footer';
import Page from './Bars/Page';
import FixedFooter from './Bars/FixedFooter';
import Paper  from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
    <Container max-width="xs">
    <Grid Container spacing={2} justify="center">
       <Grid item xs={3} sm={6}>
       <Paper style={{height:75, width:100}}/>
       </Grid>
    </Grid>
    <Grid Container>
    <Grid item xs={3} sm={6}>
    <Paper style={{height:75, width:100}}/>
    </Grid>
 </Grid>
 <Grid Container>
 <Grid item xs={3} sm={6}>
 <Paper style={{height:75, width:100}}/>
 </Grid>
</Grid>
    <NavBar/>
    <Page/>
    <AllCards/>
    <Footer/>
    <FixedFooter />
    </Container>
    </div>
  );
}

export default App;
