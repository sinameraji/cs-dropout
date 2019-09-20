import React from 'react';
import './App.css';
import Card from './Card/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Card h1="The real reason you wanna drop out of Computer Science" p="I wanna show you there are good reasons to believe it may be the system, more than it's you, or the field, and how to adapt and grow despite the systematic mess."></Card>
        <div className="imposter">
          <div id="subscribe">
            <h5>Interested? Join the waitlist:</h5>
            <input type="text" align="left"></input>
          </div>
        </div>
        
      </header>
      <div className="one App-header">
      <Card h1="Imposter Syndrome" def=".noun"p="anxiety or self-doubt that results from persistently undervaluing one’s competence and active role in achieving success, while falsely attributing one's accomplishments to luck or other external forces."></Card>

      </div>
      <div className="two App-header">
      <Card h1="The Geek Gene Hypothesis as a Social Defense" p='"It is easier for computer science educators to blame innate qualities of their students for a lack of learning than it is for the educators to come to terms with the ineffectiveness of their teaching"' reference="Patitsas et al" link="http://doi.acm.org/10.1145/2960310.2960312"></Card>
      </div>
      <div className="three App-header">
      <Card h1="The middle 60%" p='"Sahami and Piech have observed that CS educators are more aware of their top and bottom students than they are of their average students, giving ed- ucators a biased perception of their students’ abilities"' reference="M. Sahami and C. Piech." link="https://dl.acm.org/citation.cfm?id=2844621"></Card>
      <div className="imposter">
          <div id="subscribe">
            <h5>Join the waitlist:</h5>
            <input type="text" align="left"></input>
          </div>
        </div>
      {/* <div className='outer'>
          <div className='inner'>&nbsp;</div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
