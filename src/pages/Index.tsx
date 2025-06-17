import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginForm from '../components/LoginPage/LoginForm';

/**
 * IndexPage serves as the primary page for the application, currently functioning as the Login Page.
 * It utilizes the MainAppLayout component to provide a consistent, centered layout structure,
 * ensuring the LoginForm is displayed appropriately within the viewport.
 *
 * As per the project requirements, this page is straightforward:
 * - It imports and uses the MainAppLayout for overall page structure.
 * - It imports and renders the LoginForm organism as its main content.
 * - No page-specific state or complex logic is handled here; that responsibility lies within LoginForm.
 * - Styling is primarily managed by MainAppLayout and LoginForm, adhering to Tailwind CSS practices.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        The LoginForm component is rendered here. It is expected to contain all necessary elements
        for user login, such as input fields for username and password, a submission button,
        and any relevant links (e.g., for sign-up or password recovery), as defined in its
        own component file. This IndexPage acts as a container, delegating the form's
        functionality and internal structure to the LoginForm component itself.
      */}
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
