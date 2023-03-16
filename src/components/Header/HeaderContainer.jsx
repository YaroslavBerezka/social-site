import React from "react";
import Header from "./Header";
import { compose } from "redux";
import { connect } from "react-redux";
import { logout } from "../../redux/reducers/auth-reducer";
import { getIsAuth, getLogin } from "../../redux/selectors/header-selectors";

const HeaderContainer =(props) =>{
  return <Header {...props} />          
};

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
});

export default compose(
  connect(mapStateToProps, {logout}),
)(HeaderContainer);