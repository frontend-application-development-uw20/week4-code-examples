import React from 'react';
import { shallow, mount, render } from 'enzyme';
import TodoItems from './TodoItems';

test('addition', () => {
    expect(2 + 2).toEqual(4);
});

test('TodoItems renders with no todos', () => {
    const markComplete = jest.fn();
    const element = render(<TodoItems todos={[]} markComplete={markComplete} />);

    expect(element).toMatchSnapshot();
});

test('TodoItems renders with a todo', () => {
    const markComplete = jest.fn();
    const todos = [{ name: 'Walk the dog', isComplete: false }];
    const element = render(<TodoItems todos={todos} markComplete={markComplete} />);

    expect(element).toMatchSnapshot();
});

test('TodoItems correctly marks a completed item with a line-through', () => {
    const markComplete = jest.fn();
    const todos = [{ name: 'Walk the dog', isComplete: true }];
    const element = shallow(<TodoItems todos={todos} markComplete={markComplete} />);

    const listItems = element.find('li');
    const style = listItems.get(0).props.style;

    expect(element).toMatchSnapshot();
    expect(style.textDecoration).toEqual('line-through');
});

test('Clicking on a todo item calls markComplete', () => {
    const markCompleteEventHandler = jest.fn();
    const markComplete = jest.fn(() => markCompleteEventHandler);

    const todos = [{ name: 'Walk the dog', isComplete: true }];
    const element = shallow(<TodoItems todos={todos} markComplete={markComplete} />);

    expect(markComplete).toHaveBeenCalledTimes(1);
    expect(markComplete).toHaveBeenCalledWith(0); // index 0
    expect(markCompleteEventHandler).not.toHaveBeenCalled();

    const listItem = element.find('li').first();
    listItem.simulate('click');

    expect(markCompleteEventHandler).toHaveBeenCalledTimes(1);
});