import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {ACTIONS} from "../../utils/constants";
import './Header.css';
import {useAppSelector} from "../../store/hooks";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.users.user.role);

  const logOut = () => {
    dispatch({
      type: ACTIONS.USER.LOG_OUT
    });
    navigate('/');
  };

  return (
    <Navbar>
      <Container>
        {(user.role > 0) ?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <button onClick={() => navigate('/blog')}
                    className="btn btn-xl"
            >
              Blog
            </button>
            <button
              onClick={() => navigate('/admin')}
              className="btn btn-xl"
            >
              Admin
            </button>
            <button
              onClick={() => logOut()}
              className="btn btn-xl"
            >
              Log out
            </button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: 'white'}}>
            <button className="btn btn-xl"
                    onClick={() => navigate('/blog')}
            >
              Блог
            </button>
            <button className="btn btn-xl"
                    onClick={() => navigate('/login')}
            >
              Авторизация
            </button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
};

export default Header;