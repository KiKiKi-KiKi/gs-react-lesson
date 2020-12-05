import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const PORTAL_CLASS_NAME = 'portal-wrapper';
const el = document.createElement('div');

export const Portal = ({ className, children }) => {
  useEffect(() => {
    el.className = [PORTAL_CLASS_NAME, className].join(' ');
    const body = document.querySelector('body');
    body.appendChild(el);

    return () => {
      document.removeChild(el);
    };
  }, [className]);

  return ReactDOM.createPortal(children, el);
};
