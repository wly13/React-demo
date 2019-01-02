var React = require('react');
import { IndexLink } from 'react-router';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button} from 'react-bootstrap';//导航栏插件
class Header extends React.Component{
    render() {
        return (
            <div>
                <div className="Sidebar">
                    <Navbar inverse >
                        <Navbar.Header>
                            <Navbar.Brand>
                                <IndexLink to="/" activeClassName="active" className="link">首页</IndexLink>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            <NavItem eventKey={1} href="#/News">新闻</NavItem>
                            <NavItem eventKey={2} href="#/Product">产品</NavItem>
                            <NavItem eventKey={3} href="#/Techmology">技术团队</NavItem>
                            <NavItem eventKey={4} href="#/Hire">人才招聘</NavItem>
                            <NavItem eventKey={5} href="#/About">关于我们</NavItem>
                        </Nav>
                      {/*  <Navbar.Form pullRight>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>
                            {' '}
                            <Button type="submit">Submit</Button>
                        </Navbar.Form>*/}
                    </Navbar>
                </div>
                {this.props.children}
            </div>
        );
    }
}
module.exports = Header;
