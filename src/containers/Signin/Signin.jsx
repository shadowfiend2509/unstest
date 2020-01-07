import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Text from '../../component/Text'

export default () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const history = useHistory();

  const signin = () => {
    if( email === 'test@unsircle.com' && password === 'test@unsircle.com' ) { localStorage.setItem('email', email); localStorage.setItem('password', password); history.push('/home'); }
    else { setError('email / password salah!'); setTimeout(() => setError(''), 2000) };
  }

  return (
    <div className="App-header">
      <Text />
      <div style={{ padding: 1}}>
        <Row class='border' style={{ width: '100%', display: 'flex', margin: 10 }}>
            <Col lg={4} sm={12} style={{ marginTop: 5 }}>
              <input type='text' placeholder='username@example.com' style={{ width: '100%'}} value={ email } onChange={({ target }) => setEmail(target.value) } />
            </Col>
            <Col lg={4} sm={12} style={{ marginTop: 5 }}>
              <input type='password' placeholder='password' style={{ width: '100%' }} value={ password } onChange={({ target }) => setPassword(target.value) } />
            </Col>
            <Col lg={4} sm={12} style={{ marginTop: 9 }}>
              <Button style={{ width: '80%' }} onClick={ signin }> Sign In </Button>
            </Col>
            {
              error
                && 
                  <Col lg={4} sm={12} style={{ marginTop: 5 }}>
                    <span style={{ fontSize: 15, color: 'red' }}>
                      { error }
                    </span>
                  </Col>
            }
        </Row>
      </div>
    </div>
  )
}