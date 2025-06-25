// Define the Teacher interface
interface Teacher {
  readonly firstName: string;  // Only modifiable during initialization
  readonly lastName: string;   // Only modifiable during initialization
  fullTimeEmployee: boolean;   // Always defined
  yearsOfExperience?: number;  // Optional attribute
  location: string;           // Always defined
  [propName: string]: any;    // Allow additional attributes
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Log to console
console.log(teacher3);

// Also display on the webpage
document.body.innerHTML = `
  <div style="font-family: Arial, sans-serif; padding: 20px;">
    <h1>TypeScript Task 1 - Teacher Interface</h1>
    <h2>Teacher Object:</h2>
    <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
${JSON.stringify(teacher3, null, 2)}
    </pre>
    <p><strong>Note:</strong> Check the browser console (F12) to see the console.log output as well.</p>
  </div>
`;