import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavMeal = () => {
  return (
    <Navbar expand="lg" style={{ margin: '-1000 0 0 0' }}>
      <Nav.Link as={NavLink} to="/meal-tracker">
        Home
      </Nav.Link>
      <Nav.Link as={NavLink} to="/meal-tracker/add-ingredient">
        Add Ingredient
      </Nav.Link>
      <Nav.Link as={NavLink} to="/meal-tracker/recipes">
        Recipes List
      </Nav.Link>
      <Nav.Link as={NavLink} to="/meal-tracker/shopping-list">
        Shopping List
      </Nav.Link>
    </Navbar>
  );
};

// export const NavMeal = () => {
//   return (
//     <nav class="nav flex-column" style={{float: 'left', margin: '0 0 0 -1000px'}}>
//       <Link to="/meal-tracker/home">Home</Link>
//       <Link to="/meal-tracker/add-ingredient">Add Ingredient</Link>
//       <Link to="/meal-tracker/recipes">Recipes List</Link>
//       <Link to="/meal-tracker/shopping-list">Shopping List</Link>
//     </nav>
//   );
// };

// export const NavMeal = () => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link as={NavLink} to="/meal-tracker/home">
//             Home
//           </Nav.Link>
//           <Nav.Link as={NavLink} to="/meal-tracker/add-ingredient">
//             Add Ingredient
//           </Nav.Link>
//           <Nav.Link as={NavLink} to="/meal-tracker/recipes">
//             Recipes List
//           </Nav.Link>
//           <Nav.Link as={NavLink} to="/meal-tracker/shopping-list">
//             Shopping List
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };
