import React, { ReactElement, ReactNode } from "react";
import "./App.css";

// conventional props - 5:30
function Heading({ title }: { title?: string }) {
  return <h1>{title}</h1>;
}

// ReactNode take any types of input(not only string), and returing ReactElement
// prettier-ignore
function HeadingWithContent({children}: {children: ReactNode;}): ReactElement {
  return <h1>{children}</h1>;
}

// defaultProps - 10:30
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};
type ContainerProps = {};

// prettier-ignore
function Container({heading, children}: {children: ReactNode} & typeof defaultContainerProps): ReactElement {
  return <div>
    <h1>{heading}</h1>
    {children}
    </div>;
}

Container.defaultProps = defaultContainerProps;

function App() {
  return (
    <div>
      <Heading title="Hello there" />
      <HeadingWithContent>
        <em>Helo boy</em>
      </HeadingWithContent>
      <Container>Foo</Container>
    </div>
  );
}

export default App;
