import {expect, jest, test} from '@jest/globals';
import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import Renderer from "react-test-renderer";
import { Done } from "../components/TODO";
import { Todo } from "../components/TODO";

test("create snapshoot",()=>{
    const done = ["value1","value2"]
    const component = Renderer.create(
        <Done done={done} />
    );
    const theComponent = component.toJSON();
    expect(theComponent).toMatchSnapshot();
})
test("create snapshoot",()=>{
    const state = []
    const setState = jest.fn()
    const done = []
    const setdone = jest.fn();
    const component =Renderer.create(
        <Todo state={state} setState={setState} done={done} setdone={setdone}/>
    );
    const theComponent = component.toJSON();
    expect(theComponent).toMatchSnapshot();
})
test("inputValue function updates the state", () => {  
    const setInput = jest.fn();
    const inputValue = (event) => {
      setInput(event.target.value);
    };
    Renderer.create(<input data-testId="custom-element" onChange={inputValue} />); 
    const element =getByTestId('custom-element');
    fireEvent.change(element, { target: { value: ' custom-element'} });
    expect(setInput).toBeInTheDocument();
});
test("should remove a todo item from the list", () => {
    const { getByPlaceholderText, getByText } = render(<Todo />);
    const input = getByPlaceholderText("Add a todo item");
    fireEvent.change(input, { target: { value: "item 1" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13 });
    const item = getByText("item 1");
    fireEvent.click(item.previousSibling);
    expect(item).not.toBeInTheDocument();
});

