import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router, Route, Switch } from 'wouter';
import { LazyMotion, domAnimation } from 'motion/react';
import './index.css';
import App from './App.tsx';
import Obrigado from './components/Obrigado.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LazyMotion features={domAnimation} strict>
      <Router>
        <Switch>
          <Route path="/obrigado" component={Obrigado} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </LazyMotion>
  </StrictMode>,
);
