import { Calendar, User } from "lucide-react";
import React from "react";
import "./slug.css";

const page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return (
    <div className="max-w-3xl mx-auto px-2">
      <div className="mt-20 mb-10">
        <h1 className="text-4xl font-semibold text-center">
          Precision in Analytics - Implementing an IP-Based User Counter with
          Node.js and MongoDB
        </h1>
        <div className="flex justify-center my-8 gap-4">
          <div className="flex gap-2 items-center">
            <User size={16} strokeWidth={2} />
            <span>Roshan Paudel</span>
          </div>
          <div className="flex gap-2  items-center">
            <Calendar size={16} strokeWidth={2} />
            <span>21 Dec 2024</span>
          </div>
        </div>
      </div>
      <img
        src="/ai.webp"
        alt="security image"
        className="w-full md:h-[400px] rounded-xl object-cover"
      />
      <div className="blog">
        <h1>This is title text</h1>
        <img src="blog-cover-image.jpg" alt="Blog Cover" className="image" />
        <div className="content">
          <p>
            JSX, short for JavaScript XML, is a syntax extension for JavaScript
            often used with React. It allows you to write HTML-like code in your
            JavaScript files, making it easier to work with React components.
          </p>

          <h2>Getting Started with JSX</h2>
          <h3>Getting Started with JSX</h3>
          <h4>Getting Started with JSX</h4>
          <p>
            In React development, JSX is commonly used to describe what the UI
            should look like. Here's a simple example:
          </p>

          <code>
            {`
            const element = <h1>Hello, JSX!</h1>;
            ReactDOM.render(element, document.getElementById('root'));
          `}
          </code>

          <p>
            In the example above, the JSX expression `` is assigned to the
            variable `element`. This JSX code will render an `` element with the
            text "Hello, JSX!" on the web page.
          </p>

          <h2>Embedding JavaScript Expressions</h2>
          <p>
            JSX allows you to embed JavaScript expressions within curly braces `
            {}`. This is useful for dynamically rendering content based on
            variables or other JavaScript logic:
          </p>

          <code>
            {`
            const name = 'John';
            const greeting = <p>Hello, {name}!</p>;
            ReactDOM.render(greeting, document.getElementById('root'));
          `}
          </code>

          <p>
            In this example, the value of the `name` variable is dynamically
            inserted into the JSX expression.
          </p>

          <h2>Conclusion</h2>
          <p>
            JSX is a powerful tool that simplifies the process of building user
            interfaces with React. While it might look similar to HTML, it's
            important to understand that JSX gets transpiled to JavaScript by
            tools like Babel before being executed in the browser.
          </p>
          <div>
            <h2>Ordered List</h2>
            <ol>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ol>

            <h2>Unordered List</h2>
            <ul>
              <li>Apple</li>
              <li>Banana</li>
              <li>Orange</li>
            </ul>
          </div>

          <pre>
            <code>
              {`
            const element = <h1>Hello, JSX!</h1>;
            ReactDOM.render(element, document.getElementById('root'));
          `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default page;
