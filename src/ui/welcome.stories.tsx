export default {
  title: "Welcome",
  parameters: {
    info: { disable: true },
  },
};

export const Welcome = () => (
  <>
    <h1 className="text-2xl">Welcome to my UI component library</h1>
    <p>
      This is my UI component library, you can use it to build your own UI
      components
    </p>
    <h3>How to use</h3>
    <p>
      <code>npm install @highcold-ui</code>
    </p>
  </>
);
