import SalesforceChat from './SalesforceChat';
import 'bootstrap/dist/css/bootstrap.min.css'; // If using npm-installed Bootstrap

function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light text-dark">
      <header className="text-center mb-4">
        <h1 className="display-4 fw-bold">Welcome to Our Website</h1>
        <p className="lead mt-2">Connect with us using the chat widget below!</p>
      </header>
      <main className="container text-center">
        <p className="mb-4">
          This is a simple one-page React application with a Salesforce Embedded Messaging chat widget.
          Click the chat button (usually in the bottom-right corner) to start a conversation with our support team.
        </p>
      </main>
      <footer className="mt-4">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
      <SalesforceChat />
    </div>
  );
}

export default App;