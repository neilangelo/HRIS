import { Link } from 'react-router-dom';

export function ButtonLink (props) {
  return <Link to={props.url}> { props.name } </Link>
}