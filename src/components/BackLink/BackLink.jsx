import { useLocation } from 'react-router-dom';
import {Arrow, GoBackLink} from './BackLink.styled'

const BackLink = () => {
    const location = useLocation();

    return (
        <GoBackLink to={location?.state?.from ?? '/'}><Arrow />Go back</GoBackLink>
    )
}

export default BackLink;