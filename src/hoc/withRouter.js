import { useLocation, useNavigate, useParams } from "react-router-dom";

export const withRouter = (Component) => {
    const RouterComponent = (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        
        return <Component {...props} router={{location, navigate, params}} />;
    }
    return RouterComponent
}