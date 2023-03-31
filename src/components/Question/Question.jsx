import React from "react";

const Question = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-3xl text-center mt-5 text-blue-400">
          4 Questions Answers is here:
        </h1>
        <div className="mt-5 mb-5 bg-cyan-200 p-5 rounded-lg lg:w-2/4 mx-auto">
          <h1 className="text-2xl">Props vs state?</h1>
          <h2>Props and state they have different purpose </h2>
          <p>
            Props means properties is used to pass data from a parent component
            to a child component. They are read-only and cannot be modified by
            the child component. Props can be used to configure how a component
            behaves or to provide data that the component needs to render.
          </p>
          <p>
            State is used to manage data within a component that can change over
            time. State is an object that is initialized in the constructor of a
            class component, or using the useState hook in a functional
            component.
          </p>
        </div>
        <div className="mb-5 bg-cyan-200 p-5 rounded-lg lg:w-2/4 mx-auto">
          <h1 className="text-2xl">How does useState work?</h1>
          <p>
            useState is a hook in React that allows functional components to
            have stateful logic. When you call useState with an initial value,
            it returns an array with two elements: the current state value and a
            function to update the state value.
          </p>
        </div>
        <div className="mb-5 bg-cyan-200 p-5 rounded-lg lg:w-2/4 mx-auto">
          <h1 className="text-2xl">
            Purpose of useEffect other than fetching data.
          </h1>
          <p>
            While one of the most common use cases for useEffect is to fetch
            data from an API, useEffect has several other use cases as well.
          </p>
        </div>
        <div className="mb-5 bg-cyan-200 p-5 rounded-lg lg:w-2/4 mx-auto">
          <h1 className="text-2xl">How Does React work?</h1>
          <p>
            React is a JavaScript library for building user interfaces. It uses
            a component-based architecture to create reusable UI components.
            When you create a React component, you're creating a small piece of
            UI that can be combined with other components to create larger, more
            complex UIs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
