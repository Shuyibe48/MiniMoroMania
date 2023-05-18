const Blog = () => {

    return (
        <div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 blogs">
                <h2 className="text-4xl font-bold mb-8 text-center">Blog</h2>
                <div className="mb-6 md:mb-8 lg:mb-10">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">Tell us the differences between uncontrolled and controlled components.</h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-500">In React, there are two types of form components: controlled and uncontrolled.
                        <br />
                        <span className='font-bold'>1. Uncontrolled components: </span>
                        Uncontrolled components are traditional HTML form elements like input, textarea, and select. These components store their own state internally and the state can only be accessed using a DOM API such as getElementById or querySelector. When an uncontrolled component is mounted, its state is initialized to the default value specified in the value or defaultValue attribute.
                        <br />
                        <span className='font-bold'>2. Controlled components: </span>
                        Controlled components are React components that store their state in the parent component's state. This means that the state is passed to the child component via props, and any changes to the state are made through callbacks passed from the parent component. When a controlled component is mounted, its state is initialized to the value passed in the parent component's state.
                    </p>
                </div>
                <div className="mb-6 md:mb-8 lg:mb-10">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">How to validate React props using PropTypes?</h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-500">React's built-in feature, PropTypes, validates the type and shape of props that a component expects to receive. It's imported from the 'prop-types' package and used to define the PropTypes for each prop. PropTypes API specifies the expected type and shape of each prop to catch errors early in the development process.</p>
                </div>
                <div className="mb-6 md:mb-8 lg:mb-10">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">Tell us the difference between node js and express js.</h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-500">Node.js is a runtime environment that allows JavaScript to run outside the browser, while Express.js is a web framework built on top of Node.js. Node.js provides the core functionality for building server-side applications, while Express.js simplifies the process of building web applications by providing a range of features and utilities.</p>
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">What is a custom hook, and why will you create a custom hook?</h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-500">In React, a custom hook is a reusable function that encapsulates and shares stateful logic between multiple components. Custom hooks can be created to extract and reuse common logic such as data fetching, managing form state, or performing complex calculations. By creating a custom hook, you can simplify the code in your components, make your code more modular and reusable, and reduce code duplication. Custom hooks can be used to abstract away complex or repetitive tasks, making your code more readable and maintainable. Overall, custom hooks provide a powerful tool for creating scalable and reusable React applications.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;

