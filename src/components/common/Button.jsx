import { Link } from 'react-router-dom';

export default function Button({ to, href, onClick, variant = 'primary', icon, children, className = '', ...rest }) {
  const cls = `btn btn-${variant} ${className}`;
  const inner = (<><span>{children}</span>{icon}</>);
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cls} {...rest}>{inner}</a>;
  return <button onClick={onClick} className={cls} {...rest}>{inner}</button>;
}
