import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';

test('TodoList handleInputChange', () => {
    const element = shallow(<TodoList />);
    console.log(element.instance().handleInputChange);

    console.log(element.state('newTodoItem'));

    element.instance().handleInputChange({
        target: { value: 'new text' }
    });

    console.log(element.state('newTodoItem'));
})